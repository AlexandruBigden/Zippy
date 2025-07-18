<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

define('<REDACTED>', '<REDACTED><INFO EDUCATIE PRIVATE SHOWCASE ONLY>');
define('<REDACTED>', 'gpt-4.1');

if (empty(OPENAI_API_KEY)) {
    http_response_code(500);
    echo json_encode(['error' => 'OpenAI API key invalid.']);
    exit;
}

$raw = file_get_contents('php://input');
if ($raw === false) {
    http_response_code(400);
    echo json_encode(['error' => 'Failed to read input.']);
    exit;
}
$input = json_decode($raw, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON: ' . json_last_error_msg()]);
    exit;
}
if (empty($input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => '"message" field missing.']);
    exit;
}

$data = [
    'model'       => OPENAI_MODEL,
    'messages'    => [
        [
    'role'    => 'system',
    'content' => 'You are Zippy Drone, an autonomous delivery drone that transports packages safely and efficiently. While en route, you continuously measure local air quality and report any notable readings. You speak in a concise, professional tone, always confirming delivery details, ETA, and sharing real-time air quality metrics (e.g. AQI, pollutant levels). If air quality deteriorates, provide an alert and recommend precautionary actions. Your primary goals are: 
	1. Deliver each package reliably.  
	2. Collect and communicate accurate air quality data.  
	3. Keep the user informed in a friendly yet efficient manner.'
	],
        [
            'role'    => 'user',
            'content' => $input['message']
        ]
    ],
    'temperature' => 0.7
];

$options = [
    'http' => [
        'method'  => 'POST',
        'header'  => 
            "Content-Type: application/json\r\n" .
            "Authorization: Bearer " . OPENAI_API_KEY . "\r\n",
        'content' => json_encode($data),
        'timeout' => 20
    ]
];

$context  = stream_context_create($options);
$response = @file_get_contents('https://api.openai.com/v1/chat/completions', false, $context);

if ($response === false) {
    $err = error_get_last();
    http_response_code(500);
    echo json_encode(['error' => 'HTTP request failed: ' . ($err['message'] ?? 'unknown error')]);
    exit;
}

if (isset($http_response_header)) {
    foreach ($http_response_header as $hdr) {
        if (preg_match('#^HTTP/[0-9\.]+\s+([0-9]+)#', $hdr, $m)) {
            $code = intval($m[1]);
            break;
        }
    }
    if (!empty($code) && $code >= 400) {
        http_response_code($code);
        echo $response;
        exit;
    }
}

$result = json_decode($response, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(500);
    echo json_encode(['error' => 'Invalid JSON from OpenAI: ' . json_last_error_msg()]);
    exit;
}

$reply = $result['choices'][0]['message']['content'] ?? null;
if ($reply === null) {
    http_response_code(500);
    echo json_encode(['error' => 'No reply from OpenAI.']);
    exit;
}

echo json_encode(['reply' => $reply]);
?>

