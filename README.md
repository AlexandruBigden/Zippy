# **Zippy – Autonomous Delivery and Air Quality Drone with AI Assistant**

**Zippy** is an advanced drone platform engineered to **deliver lightweight packages** and **monitor air quality** in real time. It features an AI-powered web interface for data visualization, operational control, and user support. The system integrates environmental sensing, GPS mapping, GSM communication, and an AI chatbot assistant (OpenAI’s GPT) to streamline deliveries, alerts, and environmental analysis.

---

## **Use Cases**

- **Autonomous delivery** of food or small packages  
- **Real-time air quality mapping** (NO₂, VOCs, humidity, temperature)  
- **Smart city environmental monitoring**  
- **AI chatbot** for delivery status and pollution insights  

---

## **Architecture Overview**

ZIPPY DRONE SYSTEM

┌──────────────────────────────┐
│         Drone Hardware       │
│                              │
│  ┌────────────────────────┐  │
│  │ Arduino UNO            │◄─┐
│  │ • Sensor data          │  │
│  │ • Actuator control     │  │
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │ SIM800C GSM Module     │──┘
│  │ • Data transmission    │
│  └────────────────────────┘  │
└──────────────────────────────┘

WEB SERVER (Raspberry Pi or VPS)

┌──────────────────────────────┐
│ **Node.js Backend**         │
│ • REST API                  │
│ • WebSocket communication   │
│ • Data storage interface    │
├──────────────────────────────┤
│ **MySQL** / **SQLite**      │
└──────────────────────────────┘

CLIENT INTERFACE

┌──────────────────────────────┐
│ **Web Dashboard**           │
│ (Leaflet.js + Chart.js)     │
│ • Live drone location        │
│ • Air quality visualizations │
│ • AI Chatbot (OpenAI API)    │
└──────────────────────────────┘

┌──────────────────────────────┐
│ **Mobile App**              │
│ (Flutter)                   │
│ • Real-time alerts           │
│ • Delivery tracking          │
└──────────────────────────────┘


---

## **Technology Stack**

### **Drone Hardware**

- **Arduino UNO** — Sensor acquisition, actuator control, data formatting  
- **SIM800C GSM module** — GSM/GPRS communication (TCP/IP, SMS)  
- **Sensors**  
  - **MQ-135** (volatile organic compounds)  
  - **NO₂ electrochemical sensor**  
  - **DHT22** (temperature and humidity)  
  - **NEO-6M GPS module**  
  - **HC-SR04W** ultrasonic waterproof obstacle detector  
- **Actuators**  
  - Standard **servomotors** (sensor head rotation, delivery mechanism)  
  - **Stepper motor** with driver (compartment door)  

### **Software & Web**

- **Node.js** — Backend server providing REST API and WebSocket services  
- **Database** — **MySQL** or **SQLite** for telemetry, location, and delivery logs  
- **Leaflet.js & Chart.js** — Interactive map and real-time sensor graphing  
- **Flutter** — Cross-platform mobile application for live tracking and notifications  
- **OpenAI API (ChatGPT)** — Integrated AI assistant on the web interface  

---

## **Features**

- Fully autonomous drone operation  
- Real-time delivery and sensor tracking via web dashboard  
- Comprehensive air quality logging and heatmap generation  
- Integrated AI chatbot assistant for delivery support and environmental queries  
- Delivery logging, command center, and alerting (SMS, WebSocket)  
- Solar-assisted power system (LiFePO₄ battery with flexible panel)  
- Modular and scalable hardware design  

---

## **Website Features**

- **Live map** with drone position and pollution heatmap  
- **Sensor data charts** for NO₂, VOCs, temperature, and humidity  
- **AI assistant** powered by OpenAI’s ChatGPT for user guidance  
- **Mobile-friendly** dashboard and push notifications  

---

## **Installation Guide**

### **1. Arduino UNO Firmware**

1. Open the **Arduino IDE** (or PlatformIO).  
2. Load `firmware.ino` from the `arduino/` directory.  
3. Connect modules as follows:  
   - **DHT22** → digital input  
   - **MQ-135**, **NO₂ sensor** → analog inputs  
   - **NEO-6M GPS** → serial interface (SoftwareSerial)  
   - **SIM800C** → serial interface (SoftwareSerial)  
4. Configure the server endpoint in the sketch (HTTP or MQTT).  
5. Upload the firmware to the Arduino UNO.

### **2. Backend Server (Node.js)**

```bash
git clone https://github.com/yourusername/zippy-drone.git
cd zippy-drone/server
npm install

Create a .env file with the following variables:

PORT=3000
MYSQL_HOST=localhost
MYSQL_USER=your_db_user
MYSQL_PASSWORD=your_db_password
MYSQL_DATABASE=zippy
OPENAI_API_KEY=your_openai_key

Initialize the database schema:

CREATE DATABASE zippy;
-- Run schema.sql to create tables

Start the server:

    npm start

3. Frontend Dashboard

    Navigate to zippy-drone/client/.

    Serve the static files via any HTTP server or open index.html in a browser.

    Update main.js with your API and WebSocket endpoint URLs.

4. Flutter Mobile Application

    Open the mobile/ directory in Android Studio or VS Code.

    Replace API endpoint constants and OpenAI key in the configuration file.

    Run on an Android or iOS device/emulator:

    flutter pub get
    flutter run

OpenAI ChatGPT Integration

    Sign up at OpenAI and obtain an API key.

    Set OPENAI_API_KEY in your .env file.

    The Node.js backend will proxy requests to OpenAI and serve responses in the web chat interface.

## Project Structure

zippy-drone/
│
├── arduino/           # Arduino UNO firmware (sensors, GSM)
├── server/            # Node.js backend (REST API, WebSocket)
├── client/            # Web UI (HTML, CSS, JS with Leaflet and Chart.js)
├── mobile/            # Flutter mobile application
├── docs/              # Diagrams, schematics, and documentation
├── LICENSE
└── README.md

## Roadmap

    Web-based delivery and sensor dashboard

    GPS and GSM integration

    AI chatbot integration on website

    Support for additional sensors (PM2.5, CO)

    HTTPS and secure API endpoints

    Edge AI processing for anomaly detection

## Contributors

    Aleksandru Moroșanu — Lead Developer & Project Manager

    Darius Bogdan Andrei — Hardware Integration & Sensors

    Zippy Robotics Team

## License

This project is licensed under the MIT License. See the LICENSE file for details.

