---
date: 12-09-2023
type: Lecture
subject: Revision
tags:
  - lecture
"Topic:": Integration
---
# [[Integration]]
#MATH1051

## 9.1 Antiderivatives

A function $F$ is called an *antiderivative* of $f$ on an interval $I$ if
$$
F'(x) = f(x), \quad \text{ for all }x \in I.
$$
![[Pasted image 20230912120643.png]]

## 9.5 Volume of Revolution

Suppose $f(x)$ is positive and continuous on $[a,b]$. By rotating the graph of $f(x)$ above $[a,b]$ about the $x$-axis, we obtain a cylindrical solid. What is the volume of such a solid? This is what we call a *volume of revolution*.

### 9.5.1 Formula for the Volume of Revolution

Suppose $f(x)\geq 0$ and continuous on $[a,b]$. The volume of revolution of the solid obtained by rotating the graph $y=f(x)$ above $[a,b]$ about the $x$-axis is:
$$
\mathbf{V}=\pi \int ^b_{a} [f(x)]^{2} \, dx 
$$

### 9.5.3 Example

Let $a>0$. Find the volume of the solid obtained by rotating $y=f(x)=\sqrt{ x }$ about the $x$-axis over $[0,a]$.

$$
V = \pi \int ^a_{0}\left[\sqrt{ x }\right]^{2} \, dx 
$$
$$
\begin{align}
&= \pi \int ^a_{0}x \, dx  = \pi\left[ \frac{x^{2}}{2} \right]^a_{0}  \\
&=\frac{1}{2}\pi a^{2}
\end{align}
$$
