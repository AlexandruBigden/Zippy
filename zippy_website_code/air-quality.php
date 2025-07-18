<?php ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Air Quality Map – Zippy EcoBot</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="assets/css/style.css?v=<?php echo time(); ?>" />

  <style>
    #map {
      width: 100%;
      height: 80vh;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }
    .map-instruction {
      text-align: center;
      color: #444;
      margin-top: 2rem;
      font-size: 1rem;
    }
    .map-section {
      background: transparent;
      padding: 2rem;
    }
  </style>
</head>
<body>
  <header class="navbar">
    <div class="logo">Zippy</div>
    <nav id="nav-links">
      <a href="index.php">Home</a>
      <a href="index.php#features">Features</a>
      <a href="index.php#learn">Learn</a>
      <a href="air-quality.php" class="btn-secondary">Air Quality Map</a>
      <a href="index.php#contact">Contact</a>
    </nav>
    <button id="menu-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </header>

  <section class="map-section">
    <h2 style="text-align:center; margin-top:2rem;">
      Romania Air Quality (PM2.5 Overlay)
    </h2>
    <p class="map-instruction">
      Pan or zoom around the map to see real‐time PM2.5 levels from OpenAQ.
    </p>
    <div id="map"></div>
  </section>

  <footer class="footer">
    <p>&copy; <?php echo date('Y'); ?> Zippy Robotics. All rights reserved.</p>
  </footer>

  <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnUQPXoS4WJAVy-ukGh55iaZR2X_rQ2Xw&callback=initMap"
    async
    defer
  ></script>

  <script>
    function initMap() {
      const romania = { lat: 46.0, lng: 25.0 };
      const map = new google.maps.Map(document.getElementById("map"), {
        center: romania,
        zoom: 6,
        mapTypeId: "roadmap",
        styles: []
      });

      const openAQTileUrl = (x, y, z) =>
        `https://tiles.openaq.org/tiles/pm25/${z}/${x}/${y}.png`;

      const airQualityLayer = new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
          return openAQTileUrl(coord.x, coord.y, zoom);
        },
        tileSize: new google.maps.Size(256, 256),
        name: "PM2.5 (OpenAQ)",
        maxZoom: 12,
        minZoom: 0,
        opacity: 0.65
      });

      map.overlayMapTypes.insertAt(0, airQualityLayer);
    }
  </script>
</body>
</html>

