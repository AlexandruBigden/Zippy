# Zippy – Autonomous Delivery & Air Quality Drone with AI Assistant

Zippy is a smart drone platform designed to **deliver lightweight packages** and **monitor air quality in real time**, while offering users an **AI-powered web interface** for data visualization, control, and support.  

The system integrates environmental sensing, GPS mapping, and remote communication with an **AI chatbot assistant** powered by OpenAI's GPT to guide users with deliveries, alerts, and environmental analysis.

---

## 📦 Use Cases

- Autonomous **delivery of food or small packages**
- Real-time **air quality mapping** (NO₂, VOCs, humidity, temperature)
- Smart city monitoring and environmental awareness
- AI chatbot for live **delivery support** and **air quality insights**

---

## 🧠 Architecture Overview

ZIPPY DRONE SYSTEM
┌────────────────────────────┐
│ Drone Hardware │
│ │
│ ┌──────────────────────┐ │
│ │ Arduino UNO │◄─┐
│ │ - Sensor readings │ │
│ │ - Controls actuators │ │
│ └──────────────────────┘ │
│ │
│ ┌──────────────────────┐ │
│ │ SIM800C GSM Module │──┘
│ │ - Sends data to Web │
│ └──────────────────────┘
│ │
└────────────────────────────┘

WEB SERVER (Raspberry Pi or VPS)
┌────────────────────────────┐
│ Node.js Backend │
│ - Receives & stores data │
│ - WebSocket comms │
│ - REST API │
├────────────────────────────┤
│ MySQL / SQLite DB │
└────────────────────────────┘

CLIENT INTERFACE
┌────────────────────────────┐
│ Web Dashboard (Leaflet.js) │
│ - Live drone map │
│ - Air quality graphs │
│ - ChatGPT Assistant (OpenAI)│
│ │
│ Mobile App (Flutter) │
│ - Push alerts │
└────────────────────────────┘


---

## 🧰 Tech Stack

### Drone Hardware
- **Arduino UNO** – reads sensors, controls motors/servos, sends data
- **SIM800C GSM module** – sends data via TCP/IP or SMS
- **Sensors**:
  - MQ-135 (VOCs)
  - NO₂ electrochemical sensor
  - DHT22 (temperature + humidity)
  - NEO-6M GPS
  - HC-SR04W ultrasonic (obstacle/water level)
- **Actuators**:
  - Servos (sensor head rotation, delivery mechanism)
  - Stepper motor (compartment door)

### Software & Web
- **Node.js** – backend server (API, WebSocket)
- **MySQL** – data storage (location, sensors, delivery logs)
- **Leaflet.js + Chart.js** – interactive map and real-time sensor graphs
- **Flutter App** – mobile live tracker and alerts
- **OpenAI API (ChatGPT)** – integrated AI assistant on the website

---

## 💡 Features

✅ Autonomous drone operation  
✅ Real-time delivery tracking on web  
✅ Air quality sensor logging and heatmap  
✅ AI chatbot assistant (via OpenAI GPT)  
✅ Delivery logging and command center  
✅ SMS + WebSocket alerts  
✅ Solar-charged LiFePO₄ battery system  
✅ Modular and scalable design

---

## 🌐 Website Features

- 📍 **Live Map Interface** with drone position and pollution heatmap (Leaflet.js)
- 📊 **Charts for NO₂, VOC, Temperature, Humidity**
- 🤖 **ChatGPT Assistant** – ask for delivery status or pollution reports
- 📱 **Mobile Friendly** UI + Flutter app for notifications

---

## 🔌 Installation Guide

### 1. Arduino UNO Setup
- Upload the Arduino sketch (`firmware.ino`) using Arduino IDE
- Connect the following modules:
  - DHT22 to digital pin
  - MQ-135, NO₂ to analog pins
  - GPS via SoftwareSerial
  - SIM800C via SoftwareSerial (RX/TX)
- Configure the sketch to send data over HTTP to your server

### 2. Backend Server Setup (Node.js)

```bash
git clone https://github.com/yourusername/zippy-drone.git
cd zippy-drone/server
npm install
node index.js

    Configure your .env file for:

        PORT=3000

        MYSQL_USER, MYSQL_PASSWORD, etc.

3. Database Setup

CREATE DATABASE zippy;
-- Use provided schema.sql to create required tables

4. Frontend Setup

cd ../client
# Open index.html directly or serve with a local server

Make sure to set your WebSocket & API endpoints correctly in main.js.
5. Flutter Mobile App

    Open the /mobile folder in Android Studio or VS Code

    Replace API keys and endpoints

    Run on Android/iOS
    
    
🔐 OpenAI ChatGPT Integration

To enable the chatbot:

    Sign up on OpenAI

    Get your API key

    Set your key in the environment:

OPENAI_API_KEY=sk-...

In your Node.js backend, use the key to proxy requests to OpenAI and return answers in the chat UI.
📂 Folder Structure

zippy-drone/
│
├── arduino/           # Arduino UNO firmware (sensors, GSM)
├── server/            # Node.js + REST API + WebSocket
├── client/            # Web UI (HTML/CSS/JS + Leaflet/Chart)
├── mobile/            # Flutter mobile app
├── docs/              # Diagrams, schematics, docs
└── README.md

📌 Roadmap

Web-based delivery and sensor dashboard

GPS + GSM integration

ChatGPT website assistant

Add PM2.5 + CO sensors

HTTPS + secure API

    Edge processing with AI (e.g., anomaly detection)

🧑‍💻 Contributors

    Alexandru Morosanu – Lead Developer & Project Manager

    Darius Bogdan Andrei – Hardware Integration & Sensors

    Zippy Robotics Team

📜 License

This project is licensed under the MIT License. See the LICENSE file for details.
