---
title: "Osmium OS"
subtitle: "Preemptive Server Kernel"
slug: "osmium"
tag: "Bare Metal"
year: "2024"
status: "complete"
description: "Minimalist micro-kernel engineered from scratch in C and x86-64 assembly for deterministic execution on resource-constrained hardware. Features custom paging, interrupt handlers, and a priority-aware scheduler."
image: "/assets/mountain-philosophy.jpg"
tags: ["C", "x86-64", "Assembly", "Kernel", "Virtual Memory"]
role: "Lead Developer"
duration: "6 months"
links:
  - label: "GitHub Repository"
    href: "https://github.com/vedantsinggh"
---

## Overview

Osmium OS is an educational and experimental x86-64 operating system kernel written from bare metal. The goal was to understand computing from the silicon up: hardware interrupts, page tables, memory virtualization, and preemptive multitasking.

No external libraries. No standard runtime. Just bare metal assembly and C.

## Kernel Architecture

The kernel initializes from a custom bootloader sequence, establishes 64-bit long mode, and constructs a 4-level paging memory manager before enabling hardware interrupts.

- **Virtual Memory Management (VMM)**  
  Direct 4-level paging implementation with page frame allocation and bitmap tracking.
  
- **Interrupt Descriptor Table (IDT)**  
  Custom ISR handlers for CPU exceptions, PIC remapping, and programmable interval timer (PIT) interrupts.

- **Preemptive Scheduler**  
  Context switching mechanism saving processor register state across timer interrupts to switch execution threads deterministically.

## What I Learned

Building an operating system is an exercise in absolute accountability. When code causes a triple fault, there is no stack trace or runtime to catch you. You must trace CPU registers, page faults, and interrupt masks by hand.
