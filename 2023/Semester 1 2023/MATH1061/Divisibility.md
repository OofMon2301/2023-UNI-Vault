---
date: 14-03-2023
type: Lecture
subject: 
tags: lecture
Topic:: Divisibility
---
# [[Divisibility]]
#MATH1061
# Notes

Definition: If $n,d \in \mathbb{Z}$, then $n$ is divisible by $d$ if and only if there exists some $k\in \mathbb{Z}$ such that $n=kd$.

Alternatively, we can say:
$$
\begin{align}
&n \text{ is a multiple of }d \\
&d \text{ is a factor of }n \\
&d \text{ is a divisor of } n \\
&d \text{ divides }n
\end{align}
$$
The notation $d\mid n$ is used to represent the predicate "$d$ divides $n$".

If $n$ is not divisible by $d$, we write $d\nmid n$.

## Example:

$4 \mid 8$ and $3 \mid 21$

For any $a,b,c \in \mathbb{Z}$, if $a \mid b$ and $b \mid c$  then $a \mid c$.

Prove or find a counter examples:

1. For all $a,b,m \in \mathbb{Z}$, if $a$ and $b$ are divisible by $m$ then $a+b$ is divisible by $m$.
2.  For all $a,b,m \in \mathbb{Z}$, if $ab$ is divisible by $m$, then either $a$ or $b$ is divisible by $m$.

$d \mid 0$ for every nonzero integer $d$ since $k=0$ gives $0=d \times 0$.
		
		
$1 \mid n$ and $n$ mid n (if $n=0$) for every integer $n$.


# Theorem
Every integer $n>1$ can be written as a product of primes.

Suppose the theorem is false. Then there exists an integer $n>1$ that is not a product of primes.
Choose the smallest such number $n$.
Either $n$ is prime or $n$ is composite.

# Unique Factorisation Theorem for the Integers:

Given any integer $n>1$, there exists:
- a positive integer $k$
- distinct primes $p_{1},p_{2},\dots p_{k}$
- and positive integers $e_{1},e_{2},\dots,e_{k}$
such that:
$$n = p_{1}^{e_{1}}p_{2}^{e_{2 }}p_{3}^{e_{3}}\dots p_{k}^{e_{k}}$$
and any other expression of $n$ as a product of primes is identical to this, except perhaps for the order in which the terms are written.

# Application of Unique Factorisation

We know $168=2^{3} \times 3 \times 7$
The complete list of all positive divisors of 168 is:

$$
\begin{align}
2^{3}\times 3 \times 7 &= 168 \\
2^{2} \times 3 \times 7 &=84 \\
2^1 \times 3 \times 7 &=42 \\
2^0 \times 3 \times 7 & =21 \\
2^{3}\times 3^0   \times 7  & =56 \\
2^{2} \times 3^0 \times 7  & =28 \\
2^1 \times 3^0 \times 7  & =14 \\
2^0 \times 3^0 \times 7  & =7 \\
2^{3} \times 3 \times 7^0 & =24 \\
2^{2} \times 3 \times 7^0  & =12 \\
2^1 \times 3 \times 7^0  & =6 \\
2^0 \times 3 \times 7^0  & =3 \\
2^{3} \times 3^0 \times 7^0  & =8 \\
2^{2} \times 3^0 \times 7^0  & =4 \\
2^1 \times 3^0 \times 7^0  & =2 \\
2^0 \times 3^0 \times 7^0  & =1
\end{align}
$$
Total number of positive divisors:
$$
\begin{align}
\begin{pmatrix}
4 \text{ choices for the} \\
\text{exponent of 2}
\end{pmatrix} \times \begin{pmatrix}
2 \text{ choices for the } \\
\text{exponent of 3}
\end{pmatrix} \times \begin{pmatrix}
2 \text{ choices for the} \\
\text{exponent of 7}
\end{pmatrix}=16
\end{align}
$$













