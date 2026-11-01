---
title: "Why I Rewrote the Scheduler from Scratch"
date: "March 2025"
description: "Investigating priority inversion and latency spikes in physical robotics runtimes. How replacing standard round-robin queues with priority inheritance restored guaranteed 12ms loop response."
---

When controlling physical actuators on rough terrain, timing is not an optimization — it is a safety constraint.

On standard desktop Linux kernels, task scheduling is optimized for fair throughput across competing userland processes. But in an autonomous robotics control loop, a 15-millisecond delay in the odometry estimator doesn't just mean a dropped frame: it means an inverted Kalman state or a delayed emergency stop.

## The Problem: Priority Inversion Under Load

During initial test runs on uneven terrain with dense point clouds, we noticed intermittent steering oscillations. Telemetry revealed that while average compute time was under 8ms, 99th-percentile jitter occasionally spiked to 45ms.

The root cause was classical priority inversion: a lower-priority logging thread had acquired a mutex shared with the pose estimator, while mid-priority perception tasks preempted the logging thread.

## The Approach

We isolated the real-time control pipeline from general ROS node communications:

1. **Immediate Priority Inheritance:** Whenever a high-priority real-time task requests a locked resource, the holding thread temporarily inherits the real-time priority class until the mutex is released.
2. **Lockless Ring Buffers:** Replaced shared-memory mutexes between the sensor ingestion threads and the fusion pipeline with single-producer single-consumer lockless ring buffers.
3. **Core Pinning:** Pinned the 100Hz estimation loop and actuator command publisher to isolated CPU cores, shielded from OS scheduling interrupts.

## The Result

The 99th-percentile latency dropped from 45ms down to a deterministic 11.8ms, eliminating control oscillations across mixed gravel and slope testing.
