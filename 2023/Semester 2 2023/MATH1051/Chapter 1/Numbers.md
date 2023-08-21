---
date: 25-07-2023
type: Lecture
subject: Chapter 0
tags: lecture
Topic:: 
---
# [[Numbers]]
#MATH1051

## 1.1 Number Systems

Irrational numbers are real numbers which cannot be represented as a ratio of integers. For example, $\sqrt{ 2 },\sqrt{ 3 },\sqrt{ 5 },\pi=3.1415926\dots,e=2.71828\dots$ are all irrational.


> [!NOTE] Note:
> Proving Rationality or Irrationality of a given number can be quite subtle.

## 1.2 Real Number line and Ordering of $\mathbb{R}$

The real number system can be visualised by imagining each real number as a point on a line, with the positive direction being to the right, and an arbitrary origin being chosen to represent 0.

The real numbers are *ordered*, i.e. given any 2 real numbers $a$ and $b$ there holds *precisely* one of the following: $a>b,a<b$ or $a=b$. This means we can use the symbols $'<','>','\leq','\geq'$ to write statements such as $1\leq 2$ and $3>\sqrt{ 3 }$. geometrically, $a<b$ means that $a$ lies to the left of $b$ on the real number line. 

> [!NOTE] Note:
> $a\leq b$ means that either $a<b$ or $a=b$.

## 1.3 Definition: Intervals

An interval is a set of real numbers that can be thought of as a segment of the real number line. For $a<b$, the *open interval* from $a$ to $b$ is given by
$$
(a,b)=\{x \in \mathbb{R} \mid a<x<b \}
$$

There are also infinite intervals such as
$$
\begin{align}
(-\infty,a] &= \{ x \in \mathbb{R} \mid x\leq a \} \\
(-\infty,a) &= \{ x \in \mathbb{R} \mid x< a \}  \\
[a,\infty) &= \{ x \in \mathbb{R} \mid a\leq x \} \\
(a,\infty) &= \{ x \in \mathbb{R} \mid a< x \} \\
\mathbb{R} &= (-\infty,\infty)
\end{align}
$$
Note that $\pm \infty$ can never be included in an interval.

## 1.4 Absolute Value

We define 
$$
|x| = \begin{cases}
x,  & \text{if }x\geq 0 \\
- x, & \text{if }x<0
\end{cases}
$$

### 1.4.3 Convention for $\sqrt{ }$

For $a>0$, $\sqrt{  a}$ always denotes the positive solution of $x^{2}=a$. Thus $\sqrt{ 4 }=2$ and so on. This means that we can now solve $x^{2}=a$. For $a>0$, solutions to $x^{2}=a$ are $x=\pm \sqrt{ a }$.

## 1.5 Complex Numbers

Complex numbers were introduced in the 16th century to obtain roots of polynomial equations. A *complex number* is of the form
$$
z=x+iy
$$
where $x,y \in \mathbb{R}$ and $i$ is a symbol satisfying $i^{2}=-1$. The quantity $x$ is called the *real part of* $z$ and $y$ is called the *imaginary part* of $z$.

The set of all complex numbers is denoted $\mathbb{C}$.

### 1.5.1 Example

The real part of $3-2i$ is $3$ and the imaginary part is $-2$ (not $-2i$).

Complex numbers can be added and multiplied by replacing $i^{2}$ everywhere with $-1$. For example, $(2i)^{2}=4i^{2}=-4$.

---

If $z=a+bi$ is a complex number, the number $a-bi$ is called the *complex conjugate* of $z$. The complex conjugate of $3+2i$ is $\overline {3+2i}=3-2i$.

## 1.6 Polar Form

Real numbers are often represented on the real line. A complex number $z=x+iy$ may be represented by a point in the *complex plane*, where the horizontal axis is the *real axis* and the vertical axis is the *imaginary axis*.

We can also specify $z$ by giving the length $r$ and the angle $\theta$. The quantity $r$ is called the *modulus* of $z$, denoted $|z|$. It measures the distance of $z$ from the origin. The angle $\theta$ is called the *argument* of $z$.

## 1.7 Euler's Formula

Euler's formula states for any real number $\theta:$
$$
\cos \theta+i\sin \theta = e^{ i\theta }
$$

Thus every complex number $z=x+iy$ can be represented in polar form
$$
z=re^{ i\theta }
$$

