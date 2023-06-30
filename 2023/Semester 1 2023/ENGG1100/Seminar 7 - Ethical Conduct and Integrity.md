---
date: 09-05-2023
type: Lecture
subject: ENGG1100
tags: lecture
Topic:: 
---
# [[Seminar 7 - Ethical Conduct and Integrity]]
#ENGG1100 #Seminar 
# Notes

CRICOS code 00025B  
How do I know if EMI is a problem in  
my robot?  
Potential symptoms include:  
• Servo jitter  
• Arduino power cycles or even dies  
• Sensor read-outs are inconsistent  
• Power supplies are noisy  
• Controllers relying on reference signals  
that stop working as expected  
EMI – Electromagnetic interference  
35

CRICOS code 00025B  
Motors are inductive loads  
What does that mean?  
In a nutshell:  
On start-up, motors can have a  
large IN-RUSH CURRENT  
• Mitigate by decoupling power rails  
with capacitors  
On slowing down, motors  
discharge their BACK EMF  
• Mitigate with flyback diodes  
36

CRICOS code 00025B  
What can EMI look like in the real world?  
Example project:  
• Design and build of electronic-load to calculate power generation of wind-turbine  
37

CRICOS code 00025B  
EMI example - The Problem  
Inconsistent readings between setpoint  
and feedback  
Measured large back-EMF that was  
outside sampling frequency  
38

CRICOS code 00025B  
EMI Example - Solution  
Where:  
 𝑎𝑎𝑐𝑐 =inrush current (A)  
 𝐶𝐶 = capacitance F  
 𝑑𝑑𝑉𝑉 = change in voltage (V)  
  
dt = change in time (s)  
Add filtering capacitor:  
“Ohm’s Law” for capacitance:  
𝑎𝑎𝑐𝑐 = 𝐶𝐶 𝑑𝑑𝑉𝑉  
𝑑𝑑𝑐𝑐  
80 = 𝐶𝐶 × 132  
1/3000  
𝐶𝐶 = 80 × 1/3000  
132  
𝐶𝐶 ≈ 200 𝜇𝜇𝐹𝐹  
39

CRICOS code 00025B 40  
EMI Example - Solution

CRICOS code 00025B  
Transmission Systems  
We need more torque!  
41

CRICOS code 00025B  
Transmission Systems  
Why use a transmission?  
• Need to match the torque from the  
actuator to the load requirement.  
• Rotational to rotational motion  
- Reduce speed and increase  
torque  
- Change direction of rotation  
Input: Faster,  
lower torque  
Output: Slower,  
higher torque  
42

CRICOS code 00025B  
Transmission Equations  
Speed (no losses)  
Relationship between number of teeth (𝑁𝑁) and  
speed (𝜔𝜔): 𝑁𝑁1 𝜔𝜔1 = 𝑁𝑁2 𝜔𝜔2  
Speed reduction ratio:  
𝜔𝜔2 = 𝑁𝑁1  
𝑁𝑁2  
𝜔𝜔1  
Torque (no losses)  
Relationship between number of teeth (𝑁𝑁)  
and torque (𝜏𝜏): 𝜏𝜏1  
𝑁𝑁1  
= 𝜏𝜏2  
𝑁𝑁2  
Torque conversion becomes:  
𝜏𝜏2 = 𝑁𝑁2  
𝑁𝑁1  
𝜏𝜏1  
𝑁𝑁1  
𝑁𝑁2  
𝜔𝜔1 𝜔𝜔 2  
𝑁𝑁1 𝑁𝑁2  
𝜏𝜏1  
𝜏𝜏 2  
43

CRICOS code 00025B  
Image References  
Fallen Crane  
https://www.brisbanetimes.com.au/national/queensland/crane-crashes-  
down-outside-brisbane-shopping-centre-20180123-p4yyr3.html  
Stress-strain curve  
https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Stress_str  
ain_ductile.svg/710px-Stress_strain_ductile.svg.png  
Yellow DC Motor  
https://images-na.ssl-images-  
amazon.com/images/I/611DaaG9WbL._AC_SY355_.jpg  
Garage  
https://brisbanerollerdoors.com.au/wp-  
content/uploads/2019/02/IMG_3578-4032x2016.jpeg  
Phone Vibration Motor  
https://www.ifixit.com/Guide/Nexus+6P+Vibration+Motor+Replacement  
/104467  
Misaligned Bridge  
https://www.snopes.com/fact-check/misaligned-bridge-photo/  
Car Electric Motor  
https://i.pinimg.com/474x/c0/ee/4c/c0ee4cd52228ff61520a22e014e1a8ce--  
electric-motor-electric-vehicle.jpg  
Truck  
https://www.theverge.com/2019/8/15/20805994/ups-self-driving-trucks-  
autonomous-delivery-tusimple  
F1 race car  
https://www.formula1.com/en/latest/article.ferrari-boss-binotto-rates-mick-  
schumachers-progress-in-first-year-of-f1.19YvFMVUT4wPd0TOOUxxr2.html  
DC Motor  
https://i2.wp.com/sciencestore.pk/wp-content/uploads/2020/03/dc-motor-  
6V.jpg?fit=600%2C600&ssl=1  
Wheel  
https://www.stanleyproducts.com.au/static/uploads/images/97-stwbp100-  
1181x1181-1-wfrltzkhowrs.jpg?mode=max&upscale=true&width=768  
Gear GIF  
https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Animated_3_Gea  
r_Row.gif/1200px-Animated_3_Gear_Row.gif  
44
