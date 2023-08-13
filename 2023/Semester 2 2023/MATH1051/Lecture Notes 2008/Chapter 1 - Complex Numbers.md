

--
date: 03-07-2023
type: Lecture
subject: MATH1051
tags: lecture
Topic:: 
---
# [[Chapter 1 - Complex Numbers]]
#Lecture Notes 2008
# 1 Complex Numbers

## 1.1 - Notation

The symbol $\in$ means  "is an element of". Thus we write:
$$
x \in \mathbb{R}
$$
to mean $x$ is an element of $\mathbb{R}$. That is, $x$ is a real number. Hence, we can write, for example, $2 \in \mathbb{R}, \pi \in \mathbb{R}, -\sqrt{ 3 }\in \mathbb{R}$, and so forth.

## 1.2 - Complex Numbers

Complex numbers were introduced in the 16th century to obtain roots of polynomial equations. A complex number is of the form
$$
z=x+iy
$$
where $x,y \in \mathbb{R}$ and $i$ is (formally) a symbol satisfying $i^{2}=-1$. The quantity $x$ is called the *real part* of $z$ and $y$ is called the *imaginary part* of $z$.
The set of all complex numbers is denoted $\mathbb{C}$. Thus $3-2i \in \mathbb{C}$.

### 1.2.1 Example

The real part of $3-2i$ is $3$ and the imaginary part is $-2$ (not $-2i$).
Complex numbers can be added and multiplied by replacing $i^{2}$ everywhere with $-1$. For example $(2i)^{2}=4i^{2}=-4$.

### 1.2.2 Example

Simplify $(3-2i)(1+i)$.
$$
\begin{align}
(3-2i)(1+i) & =3+3i-2i-2i^{2} \\
  & =3+i+2=5+i
\end{align}
$$
### 1.2.3 Example

Suppose $a, \in \mathbb{R}$. Simplify $(a+bi)(a-bi)$.
$$
\begin{align}
(a+bi)(a-bi)  & a^{2}-abi+abi-b^{2}i^{2} \\
  & =  a^{2}+b^{2}
\end{align}
$$
### 1.2.4 Example

Simplify $\frac{3i-2i}{1-i}$.
$$
\begin{align}
\frac{3i-2i}{1-i}  &= \frac{3i-2i}{1-i} \times \frac{1+i}{1+i} \\
  &= \frac{(3-2i)(1+i)}{1^{2}+1^{2}} \\
 &= \frac{1}{2}(3-2i)(1+i) \\
&=\frac{1}{2}(5+i) \\
&=\frac{5}{2}+\frac{1}{2}i
\end{align}
$$
It is a fact if we consider complex roots of polynomials and count them with their correct multiplicity, then a polynomial of degree $n$ always has $n$ roots. For example, every quadratic has two roots.

### 1.2.5 Example

Find the roots of $x^{2}+2x+2=0$.
$$
\begin{align}
x^{2}+2x+2 & =(x+1)^{2}+1=0 \\
\iff (x+1)^{2} & =-1=i^{2} \\
\iff x+1 & \pm i \\
\therefore x & =-1\pm i \text{ are the roots.}
\end{align}
$$
Alternatively use the quadratic formula:
$$
\begin{align}
x & = \frac{1}{2}(-2\pm \sqrt{ 4-8 })=\frac{1}{2}(-2\pm 2i) \\
&=-1\pm i.
\end{align}
$$
## 1.3 Polar Form

A complex number $z=x+iy$ may be represented by a point in the *complex plane* where the vertical axis is the *imaginary axis* and the horizontal axis is the *real axis*.

We can also specify $z$ by giving the length $r$ and the angle $\theta$ in figure 1. The quantity $r$ is called the *modulus* of $z$, denoted $|z|$. It measures the distance of $z$ from the origin. The angle $\theta$ is called the *argument* of $z$. We have:
![[Pasted image 20230703084721.png]]

### 1.3.1 Example

Write $z=1+i$ in polar form.
First find the modulus:
$$
|z|=\sqrt{ 1+1 }=\sqrt{ 2 }
$$
We have for the argument $\tan \theta=\frac{y}{x}$, so we can take
$$
\begin{align}
\theta & = \arctan \frac{y}{x} \\
&= \arctan 1 \\
&= \frac{\pi}{4}
\end{align}
$$
$$
\begin{align}
\therefore z  & = \sqrt{ 2 }\left( \cos \frac{\pi}{4}+i \sin \frac{\pi}{4}\right)
\end{align}
$$
## 1.4 Euler's Formula

Euler's formula states for any real number $\theta$:
$$
\cos \theta + i \sin \theta =e^{i\theta }
$$
(To make sense of this, one has to define the exponential function for complex arguments. This may be done using a series.)
Thus every complex number $z=x+iy$ can be represented in polar form
$$
z=re^{i\theta}
$$

