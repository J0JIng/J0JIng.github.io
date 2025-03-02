const Projfullstack = [
  {
    header: "Full Stack | Web ",
    name: "BTOgether",
    description:
      "BTOgether is a web application that aims to simplify the BTO housing journey in Singapore, offering a seamless and user-friendly experience that guides users, particularly couples and young adults seeking to embark on their homeownership journey, through every step of the application process.",
    technology: [
      "JavaScript",
      "React.Js",
      "Tailwind CSS",
      "Gemini API",
      "Firebase",
    ],
    githubRepo: "https://github.com/J0JIng/BTOgether",
    website: "https://btogether-571a3.web.app/",
  },
  {
    header: "Full Stack | Web",
    name: "Civic Otters",
    description:
      "A web app that encourages young adults to participate in volunteering by making it social and rewarding. Users can find and join events with friends, track their service hours, and climb the XP leaderboard.",
    technology: [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS",
      "MongoDB",
      "Vercel",
    ],
    githubRepo: "https://github.com/J0JIng/civic-otters",
    website: "",
  },
  {
    header: "Full Stack | Web | Personal Journaling",
    name: "Journal App",
    description:
      "A web-based journaling application that allows users to create and manage journal entries. Built with React for the frontend and a simple JSON server for local data storage.",
    technology: [
      "JavaScript",
      "React",
      "Node.js",
      "CSS3",
      "HTML5",
      "JSON Server",
    ],
    githubRepo: "https://github.com/J0JIng/journal-app",
    website: "",
  },
  {
    header: "Java | OOP | CLI Application",
    name: "CAMs",
    description:
      "A Java-based CLI application for staff and students at NTU to manage, view, and register for camps, serving as a centralised hub for camp administration.",
    technology: ["Java", "OOP", "SOLID Principles", "Git"],
    githubRepo: "https://github.com/J0JIng/CAMs-project",
    website: "",
  },
];

const ProjAIML = [
  {
    header: "AI | Web | Full Stack",
    name: "TrafficGPT",
    description:
      "A project utilising Large Language Models (LLMs) to analyse, predict, and manage crowd control efficiently. It features a real-time monitoring system that gathers and processes crowd density data, providing actionable insights to improve safety and traffic management. The system integrates AI-powered predictions to anticipate congestion and suggest optimal crowd distribution strategies.",
    technology: [
      "Python",
      "React Native",
      "Flask",
      "Docker",
      "SQLite",
      "Gemini API",
    ],
    githubRepo: "https://github.com/J0JIng/NUS-NCS-Hackathon-2024",
    website: "",
  },
  {
    header: "AI | Computer Vision | Speech Recognition",
    name: "BrainHack-TIL-AI-2023",
    description:
      "A hackathon project focused on security management, utilising computer vision to identify key individuals and automatic speech recognition to interpret intelligence communications during a high-level conference.",
    technology: ["Python", "yolov5", "PyTorch"],
    githubRepo: "https://github.com/J0JIng/BrainHack-TIL-AI-2023",
    website: "",
  },
  {
    header: "ML | Anomaly Detection",
    name: "Anomalous Time Series Detection",
    description:
      "This project focuses on detecting anomalous time series in datasets using machine learning models. The goal is to identify unusual patterns or deviations that indicate outliers, events, or errors. Various models, such as autoencoders, Isolation Forest, and KNN, were evaluated for anomaly detection.",
    technology: ["Python", "scikit-learn", "tensorflow", "Matplotlib."],
    githubRepo: "https://github.com/J0JIng/TimeSeries-AnomalyDetection", 
    website: "",
  },
  {
    header: "ML | Classification",
    name: "Heart Disease Prediction",
    description:
      "This project analyses a Heart Failure Prediction Dataset from Kaggle, applying machine learning techniques to identify key features that determine a patient's likelihood of developing heart disease.",
    technology: [
      "Python",
      "Scikit-learn",
      "Jupyter Notebook",
      "Pandas",
      "Matplotlib",
    ],
    githubRepo: "https://github.com/J0JIng/BTOgether",
    website: "",
  },
];

const ProjIot = [
  {
    header: "Edge AI | ML | IoT",
    name: "GasSentinel",
    description:
      "Low-latency gas leak detector using edge AI for propane, butane, and natural gas. Utilises BSEC software for signal processing and ML model on a microcontroller",
    technology: [
      "C++",
      "EFR32MG24 microcontroller",
      "Thread network",
      "CoAP",
      "InfluxDB",
    ],
    githubRepo: "https://github.com/J0JIng/GasSentinel",
    website: "",
  },
  {
    header: "Server | Cloud Solutions",
    name: "ot-coap-server",
    description:
      "A Python-based CoAP server for the GasSentinel project. It manages client interactions within an OpenThread network, advertises its service, and handles CoAP messages in CSV format. The server also integrates with InfluxDB for data storage and analysis.",
    technology: ["Python", "CoAP", "OpenThread", "InfluxDB"],
    githubRepo: "https://github.com/J0JIng/ot-coap-server",
    website: "",
  },
  {
    header: "IoT | Cloud Solutions",
    name: "Escendo-Hackathon-2024",
    description:
      "A hackathon project focusing on an IoT-based safety solution for migrant workers, using sensors to monitor heat stress and alert workers via visual and auditory signals.",
    technology: ["C++", "ESP32", "ESP-NOW", "AWS IoT", "FreeRTOS"],
    githubRepo: "https://github.com/J0JIng/Escendo-Hackathon-2024",
    website: "",
  },
  {
    header: "IoT | Cloud Solutions",
    name: "AquaHack2023",
    description:
      "A hackathon project featuring an IoT-based aquaponics monitoring system that tracks water quality parameters for sustainable fish and plant farming. Includes CloudSensor for real-time data collection and AquaFeeder for community engagement, particularly for hospitalised children",
    technology: ["Python", "C++", "ESP32", "AWS IoT", "MQTT", "Grafana"],
    githubRepo: "https://github.com/J0JIng/AquaHack2023",
    website: "",
  },
  {
    header: "Embedded Systems | Control Systems | PID",
    name: "GyroPID - IMU + PID",
    description:
      "This project implements PID control on an STM32 microcontroller board along with an Inertial Measurement Unit (IMU) sensor. The goal is to achieve stabilisation of a platform using IMU readings, with control algorithms adjusting servo motors based on sensor data.",
    technology: [
      "C",
      "STM32F4",
      "PID Control",
      "IMU Sensor (MPU-6050)",
      "Servo Motors",
      "OLED Display",
      "STM32CubeIDE",
    ],
    githubRepo: "https://github.com/J0JIng/STM32F4-GyroPID-Project",
    website: "",
  },
  {
    header: "Embedded Systems | Robotics | MSP432",
    name: "MSP432 Robotics Project",
    description:
      "A microcontroller-based robotics project utilising the MSP432 processor and the RSLK MAX Robotic Kit. Implements various sensor tests, motor control, and UART communication for system monitoring and debugging.",
    technology: ["MSP432", "C", "Assembly", "UART", "IR Sensors", "DC Motors"],
    githubRepo: "https://github.com/J0JIng/MSP432-Robotics-Project",
    website: "",
  },
];

const ProjOther = [
  {
    header: "API Integration | Data Processing",
    name: "API Guide",
    description:
      "This repository contains a Jupyter Notebook detailing how to pull APIs from LTA DataMall and HERE Routing API. It also includes instructions on how to use Google Gemini. The goal is to implement both APIs together as a working prototype for NUS-NCS-Hackathon-2024.",
    technology: [
      "Jupyter Notebook",
      "LTA DataMall API",
      "HERE Routing API",
      "Google Gemini",
    ],
    githubRepo: "https://github.com/J0JIng/api-guide",
    website: "",
  },
  {
    header: "Algorithm Analysis",
    name: "classic-algorithm-analysis",
    description:
      "A collection of projects for SC2001, focusing on algorithm design and analysis using Java. Includes implementations of Mergesort & Insertion Sort, Dijkstra’s Algorithm, and the Unlimited Knapsack problem using Dynamic Programming.",
    technology: [
      "Java",
      "Algorithms",
      "Dynamic Programming",
      "Graph Algorithms",
      "Sorting Algorithms",
      "Shell Scripting",
    ],
    githubRepo: "https://github.com/J0JIng/classic-algorithm-analysis",
    website: "",
  },
];

export { Projfullstack, ProjAIML, ProjIot, ProjOther };
