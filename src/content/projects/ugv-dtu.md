---
title: "UGV-DTU"
subtitle: "Autonomous Vehicle Platform"
slug: "ugv-dtu"
tag: "Robotics"
year: "2024"
status: "complete"
description: "Hardware architecture, low-latency micro-controller bus communication, and multi-sensor time synchronization protocols for collegiate autonomous ground vehicle platform."
image: "/assets/quote-hiker.jpg"
tags: ["Embedded C++", "CAN Bus", "Sensor Sync", "Robotics Architecture"]
role: "Systems & Embedded Lead"
duration: "1 year"
links:
  - label: "Team GitHub"
    href: "https://github.com/vedantsinggh"
---

## Overview

UGV-DTU represents the foundational electrical and firmware platform for autonomous navigation systems at Delhi Technological University. 

The primary challenge was deterministic sensor acquisition: aggregating 3D LiDAR point clouds, stereoscopic camera frames, dual RTK-GPS fixes, and high-frequency IMU data without packet drop or non-deterministic jitter.

## System Design

- **Distributed CAN Bus Communication**  
  Isolated motor controllers, battery management systems, and safety e-stops onto deterministic broadcast buses.

- **Hardware Time Synchronization**  
  PPS (Pulse Per Second) hardware triggering across cameras and IMU ensuring all sensor timestamps align within microseconds.

- **Power Distribution & Safety E-Stop**  
  Isolated high-voltage motor drivers from sensitive compute electronics with opto-isolated logic.
