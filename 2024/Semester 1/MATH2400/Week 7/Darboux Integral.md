---
date: 2024-04-08
type: Lecture
subject: MATH2400
tags: lecture
week: Week 7
Topic: 
field: $SUBJECT
---

#MATH2400

## Darboux Integral

Definition 1: A partition $P$ of $[a,b]$ is a finite set of numbers $\{x_{0},x_{1},x_{2},x_{3},\dots,x_{n}\}$ such that $a = x_{0}<x_{1}<x_{2}<x_{3}<x_{4}<\dots<x_{n}$.

Definition 2: Suppose $P = \{x_{0},x_{1},x_{2},\dots,x_{n}\}$ is a *partition* of $[a,b]$. Then for $1\leq i \leq n$,
$$
\begin{align}
m_{i} &= \inf\{f(x): x_{i-1}\leq x \leq x_{i}\} \\ \\
M_{i} &= \sup\{f(x): x_{i-1}\leq x \leq x_{i}\}
\end{align}
$$
The *lower ( Darboux ) sum* of $f$ with respect to $P$, denoted by $L(f,P)$, is defined as
$$
L(f,P) = \sum_{i=1}^n m_{i}(x_{i}-x_{i-1})
$$
The *upper ( Darboux ) sum* of $f$ with respect to $P$, denoted as $U(f,P)$, is defined as
$$
U(f,P) = \sum_{i=1}^n M_{i}(x_{i}-x_{i-1})
$$
