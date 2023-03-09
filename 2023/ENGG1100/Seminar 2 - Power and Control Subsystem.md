---
date: 09-03-2023
type: Lecture
subject: 
tags: lecture
Topic:: 
---
# [[Seminar 2 - Power and Control Subsystem]]
#ENGG1100

## 1. Key Aspects for Power Supply in Your Project

### Choose Your Power Supply
- What devices need to be powered?
	- Controller, console, actuators (DC motor, servo motor, stepper motor, pump, PCB...)
- What should be considered when selecting power supply?
	- Rating of the devices (voltage and current), durability (no 9V), wiring (size and length)
- Where can I find the information?
	- Manuals (first priority), website, ask UQ innovate, project leaders (lecturers) or tutors.


#### Device Specification
All different types of pumps and power supply have different voltage and current requirements.

### Arduino 5v Pin with DC Motors
 Carful with connecting DC motor directly to the arduino using the 5v pins on pin 10 & 11, they will fry the arduino due to over current (with the arduino only handling 200mA.)


## 3. Control Design and Linkage to other 

Develop a high level design that explores the control and the input $\to$ output to your vehicle.

For example: 

Fluid delivery and $z$ direction and motor can be used via pump, and lots of servos.

### Outputs: Controllability for Devices

- Controllability:
	- Digital (Discrete) ON or OFF (e.g. switch, transistors, ...) or Incremental (e.g. servo, stepper motors, ...)
	- Analog (PWM) full power - high power - low power - no power, PWM control (e.g. pump, motor)

![[Pasted image 20230309122859.png]]
Server motor control 
![[Pasted image 20230309123005.png]]
