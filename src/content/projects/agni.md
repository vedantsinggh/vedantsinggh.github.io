---
title: "AGNI"
subtitle: "Autonomous Terrain Navigation"
slug: "agni"
tag: "Robotics"
year: "2025"
status: "active"
description: "Multi-modal sensor fusion system for real-world autonomous navigation. Operates at 4.2 m/s on uneven outdoor terrain with 12ms control loop latency."
image: "/assets/agni.png"
tags: ["C++", "ROS2", "SLAM", "LiDAR", "Kalman Filter"]
role: "Lead Engineer"
duration: "8 months"
links:
  - label: "GitHub Repository"
    href: "https://github.com/vedantsinggh/ugvc2024_ws"
---
 
## Overview
 
AGNI started as a simple idea: build something that actually works outside.
Not in simulation. Not on clean lab floors. Real terrain. Dust, slopes, broken paths, no GPS.

It evolved into a full autonomous ground vehicle designed to survive uncertainty.
The system doesn’t assume sensors are reliable. It constantly questions them.

At its core, AGNI is about one thing — staying operational when everything starts failing.
 
## Architecture
 
The system is built in layers, each solving a different part of the problem but tightly coupled in execution.

- **Perception**  
  LiDAR, stereo vision, GPS-IMU, and wheel encoders all feed into a unified pipeline.  
  Instead of trusting them equally, each sensor is scored in real time based on reliability.

- **Fusion (HCAF)**  
  The Hybrid Confidence-Adaptive Fusion system dynamically adjusts sensor weights.  
  If LiDAR degrades in dust or GPS drops, the system shifts reliance without breaking.

- **Planning**  
  Local navigation is handled using Dynamic Window Approach.  
  It continuously samples feasible trajectories and re-evaluates them at runtime.

- **Control**  
  A terrain-aware PID controller adapts gains based on vibration feedback from IMU.  
  Smooth terrain and gravel behave completely differently — the controller reflects that.
 
## What Makes It Different
 
Most systems assume sensors fail occasionally.  
AGNI assumes they are unreliable by default.

The fusion layer modifies the Kalman gain based on confidence instead of keeping it static. :contentReference[oaicite:0]{index=0}

That single decision changes everything:
- No hard dependency on any sensor  
- Graceful degradation instead of failure  
- Stable localization even in GPS-denied environments  

This is what allowed the system to keep navigating when:
- LiDAR lost density in dust  
- GPS dropped entirely  
- Wheel encoders slipped on loose terrain  
 
## Mechanical + System Design
 
The hardware is not an afterthought. It directly affects the algorithms.

The rover uses an inverted V suspension inspired by rocker-bogie and lambda mechanisms. :contentReference[oaicite:1]{index=1}  
It gives high ground clearance while keeping the center of gravity low.

BLDC hub motors remove transmission complexity and reduce power loss.  
Each wheel is independently controlled, which makes differential turning simple and reliable.

This combination matters because bad mechanics will break even the best algorithms.
 
## Key Results
 
01. Maintains localization in GPS-denied environments  
02. ~32% reduction in localization error vs standard EKF :contentReference[oaicite:2]{index=2}  
03. ~20 cm 3D mapping accuracy using LiDAR + stereo fusion :contentReference[oaicite:3]{index=3}  
04. Successfully navigated mixed terrain with ~95% success rate :contentReference[oaicite:4]{index=4}  
05. Adaptive control improves stability on gravel by dynamically tuning gains  

## What I Learned
 
You can design perfect algorithms on paper and they will still fail in the real world.

Noise is not random. It has patterns.  
Sensors don’t fail cleanly. They degrade.

The hardest part wasn’t planning or control.  
It was building a system that keeps working when inputs become unreliable.

```cpp
// Core control loop
while (ros::ok()) {
  auto state = estimator.getState();
  auto cmd   = controller.compute(state, goal);
  actuator.send(cmd);
  ros::spinOnce();
  rate.sleep();
}
```
 
> The hardest part wasn't the algorithm — it was making it robust to real sensor noise
> and mechanical vibration at speed.
 
