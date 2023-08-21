---
date: 20-04-2023
type: Lecture
subject: 
tags: lecture
Topic:: 
---
# [[Modular Arithmetic]]
#MATH1061
# Notes

## Floor and Ceiling

Definition: Given any $x \in \mathbb{R}$, the floor of $x$, denoted $\lfloor x \rfloor$, is the unique integer $n$ such that $n \leq x < n+1$

Definition: Given any $x \in \mathbb{R}$, the ceiling of $x$, denoted $\lceil x \rceil$, is the unique integer $n$ such that $n-1<x\leq n$.

### Examples

Prove the following statements or give a counterexample.

$\forall x,y \in \mathbb{R}, \quad \lfloor x+y \rfloor= \lfloor x \rfloor + \lfloor y \rfloor$

Counterexample: Take $x=0.9$ and $y=0.1$.
Then $\lfloor x \rfloor=0$ and $\lfloor y \rfloor=0$, so $\lfloor x \rfloor + \lfloor y \rfloor =0$

Thus, the statement is false.

$\forall x,y \in \mathbb{R}, \quad \lfloor x+y \rfloor= \lfloor x \rfloor \lfloor y \rfloor$

Counterexample: Take $x=1.5$ and $y=1.5$.
Then $\lfloor x \rfloor = \lfloor y \rfloor = \lfloor 1.5 \rfloor = 1$ 
So $\lfloor x \rfloor \lfloor y \rfloor =\lfloor 2.25 \rfloor =2$

Thus, the statement is false. 

## The Quotient Remainder Theorem

Given any integer $n$ and a positive integer $d$, there exists unique integers $q$ and $r$ such that $n = dq+r$ and $0\leq r<d$.

$q$ is called the quotient and $r$ is called the remainder. 
Note that $q=\lfloor \frac{n}{d} \rfloor$


Definition: For integers $a$ and $b$, and a positive integer $d$, we can say that $a$ is congruent to $b$ modulo $d$ and write:
$$
a \equiv b (mod \ d)
$$
if and only if $d \mid (a \times b)$

> [!note]
> 












