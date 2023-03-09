---
date: 09-03-2023
type: Lecture
subject: 
tags: lecture
Topic:: 
---
# [[Seminar 2 - Power and Control Subsystem]]
#ENGG1100

## 1.  Key Aspects for Power supply in your project

### Choose your Power Supply
- What devices need to be powered?
	- Controller, console, actuators (DC motor, servo motor, stepper motor, pump, PCB...)
- What should be considered when selecting power supply?
	- Rating of the devices (voltage and current), durability (no 9V), wiring (size and length)
- Where can I find the information?
	- Manuals (first priority), website, ask UQ innovate, project leaders (lecturers) or tutors.


#### Device specification
All different types of pumps and power supply have different voltage and current requirements.

## Arduino 5v pin with DC motors
 Carful with connecting DC motor directly to the arduino using the 5v pins on pin 10 & 11, they will fry the arduino due to over current (with the arduino only handling 200mA.)