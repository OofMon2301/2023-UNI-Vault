---
date: 29-02-2024
type: Lecture
subject: CSSE2010
tags: lecture
week: Week 1
Topic: Binary Operations
field: Computer Science
---
#CSSE2010

## Negative Numbers in Binary Operations

Computers do not store positive (+) and negative (-) signs, so they must use binary digits (0,1).
There are 4 different formats to try and represent negative numbers:
- Signed magnitude
- Ones' complement
- Two's complement (This is most widely used.)
- Excess $2^{m-1}$

### Signed Magnitude Representation
In the sign–magnitude representation, also called sign-and-magnitude or signed magnitude, a signed number is represented by the bit pattern corresponding to the sign of the number for the sign bit (often the most significant bit, set to 0 for a positive number and to 1 for a negative number), and the magnitude of the number (or absolute value) for the remaining bits. For example, in an eight-bit byte, only seven bits represent the magnitude, which can range from 0000000 (0) to 1111111 (127). Thus numbers ranging from $-127_{10}$ to $+127_{10}$ can be represented once the sign bit (the eighth bit) is added. For example, $-43_{10}$ encoded in an eight-bit byte is **1**0101011 while $43_{10}$ is **0**0101011. 
![[Pasted image 20240229144028.png]]

### Ones' Complement
In the ones' complement representation, a negative number is represented by the bit pattern corresponding to the bitwise, opposite of the positive number.

As an example, the ones' complement form of 00101011 $(43_{10})$ becomes 11010100 ($-43_{10}$). 

Adding two numbers in this systems requires to do a necessary *end-around carry*.
![[Pasted image 20240229144325.png| An example of an "*end-around carry*".]]

### Two's Complement 
In the two's complement 