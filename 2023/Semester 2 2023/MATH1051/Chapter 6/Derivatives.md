---
date: 21-08-2023
type: Lecture
subject: Chapter 5
tags: lecture
Topic:: 
---
# [[Derivatives]]
#MATH1051
# Derivatives

Finding the instantaneous velocity of a moving object and other problems involving *rates of change* are situations where derivatives can be used as a powerful tool. All rates of change can be interpreted as *slopes* of appropriate tangents. Therefore we shall consider the tangent problem and how it leads to a precise definition of the derivative.

## 6.1 Tangents

## 6.2 Definition of Derivative

The *derivative* of $f$ at $x$ is defined by 
$$
f'(x)-\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}
$$
We say that $f$ is *differentiable* at some point $x$ if this limit exists. Further, we say that $f$ is differentiable on an open interval if it is differentiable at every point in the interval. Note that $f'(a)$ is the slope of the tangent line to the graph of $y=f(x)$ at $x=a.$

We have thus defined a new function $f'$, called the derivative of $f$. Sometimes we use the Leibniz notation $\frac{dy}{dx}$ or $\frac{df}{dx}$ in place of $f'(x).$

Note that if $f$ is differentiable at $a$, there holds:
$$
f'(a)=\lim_{ x \to a } \frac{f(x)-f(a)}{x-a}
$$

### 6.2.1 Example

Using the definition of the derivative ("from first principles"), find the derivative of $f(x)=x^{2}+x$.

Using the definition for a derivative, we find:
$$
\begin{align}
f'(x) & =\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h} \\
  & = \lim_{ h \to 0 } \frac{(x+h)^{2}+(x+h)-(x^{2}+x)}{h} \\
  & = \lim_{ h \to 0 } \frac{x^{2}+2xh+h^{2}+x+h-x^{2}-x}{h} \\
  & = \lim_{  h \to 0 } \frac{2xh+h^{2}+h}{h} \\
  & = \lim_{ h \to 0 } (2x+h+1) \\
  & = 2x+1
\end{align}
$$
## 6.4 Chain Rule

![[Chapter 8 - Differentiation#^59e87f]]
