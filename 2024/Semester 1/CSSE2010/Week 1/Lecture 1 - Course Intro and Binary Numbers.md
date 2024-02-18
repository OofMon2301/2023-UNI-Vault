---
date: 19-02-2024
type: Lecture
subject: Week 1
tags: lecture
Topic:
field: $SUBJECT
---
#CSSE2010

## Course Details
## What this course is about (mainly)

We will learn about computers in different aspects.

### Assessment Details - ECP Section 5

- In-semester theory exam (20%)
- In-semester lab exam (10%)
- Project (20%)
	- AVR microcontroller programming
	- *10% pass hurdle*
- Final Exam (50%)
	- *40% pass hurdle*
	- Invigilated 2-hr written exam on campus

# Computers and Binary Numbers

## A Computer at Different Levels of Abstraction

In decreasing abstraction:

- Level 5 - Problem-oriented language level
- Level 4 - Assembly language level
- Level 3 - Operating system machine level
- Level 2 - Instruction set architecture level
- Level 1 - Microarchitecture level
- Level 0 - Digital Logic Level

We will mostly cover Level 0, 2, 4 and 5.
Level 1 will be covered briefly but Level 3 will be skipped.

![[Pasted image 20240219082020.png]]

## Bits, Bytes and Binary Numbers

Computers represent everything in binary. 
A [[Bit|bit]] is a binary digit (0 or 1). There are 8 bits in a byte. (e.g. 01010111)

Modern computers deal with words which are usually a power of 2 number of bytes, e.g. 
- 1, 2, 4, or 8 bytes = 8, 16, 32, 64 bits

## Representing Whole (Unsigned) Numbers in Binary

Each bit position has a value:

![[Pasted image 20240219082701.png]]

Converting binary to decimal:
*Add values of each position where bit is 1*
![[Pasted image 20240219082732.png]]

## Least and Most significant Bits

There are two types of Bits:
- Least Significant Bit
	-  The least significant bit is the position on the far right that is 'worth' (in value) the least.
- Most Significant Bit
	- The most significant bit is the position on the *left* that is 'worth' (in value) the most.
	- For an $n-$bit unsigned word, the MSB is worth $2^{n-1}$.
![[Pasted image 20240219084043.png]]

## Number Range

Assuming whole unsigned numbers:
- The lowest number possible is 0 (with all 0 on the binary scale)
- The Highest number possible represented on Octal (radix-8), are $(2^n)-1$.

## Other Radices
A Radix is a number system base. A radix-k system uses $k$ systems to represent digits 0 to $k-1$.
The value of each digit is (from the right) $k^0,k^1,k^{2},k^{3},\dots$
