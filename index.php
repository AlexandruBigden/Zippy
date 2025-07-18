<?php ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Zippy – AI Environmental Robot</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="assets/css/style.css?v=<?php echo time(); ?>"
  />
</head>
<body>
  <header class="navbar">
    <div class="logo">Zippy</div>
    <nav id="nav-links">
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#learn">Learn</a>
      <a href="air-quality" class="btn-secondary">Air Quality Map</a>
      <a href="#contact">Contact</a>
    </nav>
    <button id="menu-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </header>

  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Meet Zippy</h1>
      <p>Your AI-driven environmental companion</p>
      <p class="hero-description">
        Zippy helps you explore sustainability, clean energy, and eco-friendly
        practices—one conversation at a time.
      </p>

      <p class="chat-instruction">
        Ask the AI Assistant anything about climate change, renewable energy, or sustainability:
      </p>

      <div id="main-chat-widget" class="main-chat-widget">
        <div class="chat-header">
          <span>Zippy AI Assistant</span>
        </div>
        <div id="main-chat-body" class="chat-body"></div>
        <form id="main-chat-form" class="chat-form" autocomplete="off">
          <input
            type="text"
            id="main-chat-input"
            placeholder="Ask anything..."
            aria-label="Chat input"
          />
          <button type="submit" class="send-button" aria-label="Send">
            ➤
          </button>
        </form>
      </div>
    </div>
  </section>

  <section id="features" class="features">
    <h2>Why Zippy?</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <h3>Interactive Learning</h3>
        <p>Ask Zippy about climate science, carbon footprints, and green tech.</p>
      </div>
      <div class="feature-card">
        <h3>Eco Tips & Tricks</h3>
        <p>Get personalized ideas to reduce waste and save energy at home.</p>
      </div>
      <div class="feature-card">
        <h3>Community Impact</h3>
        <p>Discover local initiatives and events to join your neighbors.</p>
      </div>
    </div>
  </section>

  <section id="learn" class="learn">
    <h2>Learn with Zippy</h2>
    <p>
      Use the chat box below to ask Zippy about environmental topics:
      climate change, renewable energy, recycling tips, and more.
    </p>
  </section>

  <section id="contact" class="contact">
    <h2>Get In Touch</h2>
    <p>
      Questions? Feedback? Let’s work together toward a greener future. Reach out
      to us!
    </p>
  </section>

  <footer class="footer">
    <p>&copy; <?php echo date('Y'); ?> Zippy Robotics. All rights reserved.</p>
  </footer>

  <script src="assets/js/script.js?v=<?php echo time(); ?>"></script>
</body>
</html>

