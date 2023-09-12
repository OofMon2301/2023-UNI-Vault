---
date: 07-08-2023
type: Lecture
subject: 
tags: lecture
Topic:: 
---
# [[Limits]]
#MATH1051
# Notes

Limits arise when we want to find the tangent to the curve or the velocity of an object, for example. Once we understand limits, we can proceed to studying continuity and calculus in general. You should be aware that limits are a fundamental notion to calculus, so it is important to understand them well.

## 4.1 Definition: Limit

> (Stewart, p.50) Let $f(x)$ be a function and $\ell \in \mathbb{R}$. We say $f(x)$ *approaches* the limit $\ell$ (or *converges* to the limit $\ell$) as $x$ approaches $a$ if we can make the value of $f(x)$ arbitrarily close to $\ell$ (as close to $\ell$ as we like) by taking $x$ to be sufficiently close to $a$ but not equal to $a$.

We write
$$
\lim_{ x \to a } f(x)=\ell
$$
Roughly speaking, $f(x)$ is close to $\ell$ for all $x$ values sufficiently close to $a$, with $x\neq a$. The limit "predicts" what should happen at $x=a$ by looking at $x$ values close to but not equal to $a$.

### 4.1.1 Some Basic Limits
$$
\lim_{ x \to a } 1=1
$$
$$
\lim_{ x \to a } x=a
$$
## 4.2 Properties

^f5589e

Suppose that $c$ is a constant and the limits $\ell=\lim_{ x \to a }f(x)$ and $m=\lim_{ x \to a }g(x)$ exist for some fixed $a\in\mathbb{R}.$ Then:

(Add equation here)

### 4.2.1 Example

Find the value of $\lim_{ x \to 1 }(x^{2}+1)$
$$
\begin{align}
\lim_{ x \to 1 } (x^{2}+1)  & =(1^{2}+1) \\
  & = 2 \\
\therefore \lim_{ x \to 1 } (x^{2}+1) & =2
\end{align}
$$
### 4.2.3 Definition: Infinite Limits

Let $f$ be a function defined on both sides of $a$, except possibly at $a$ itself. Then
$$
\lim_{ x \to a } f(x)=\infty
$$
means that the values of $f(x)$ can be made arbitrarily large by taking $x$ sufficiently close to $a$, but not equal to $a$.
Similarly,
$$
\lim_{ x \to a } f(x)=-\infty
$$
means that the values of $f(x)$ can be made arbitrarily large negatively by taking $x$ sufficiently close to $a$, but not equal to $a$.
In these cases, we say that $f(x)$ *diverges* to $\pm \infty$. We also say that the limit does not exist in these cases. Note that the limit properties in [[#^f5589e|Section 4.2]] do not necessarily apply if the limits diverge.

## 4.3 One-sided Limits

Consider the piecewise function
$$
f(x)=\begin{cases}
  & 1, & x\geq 0 \\
& -2, & x<0 
\end{cases}
$$

Notice that $x\lim_{ n \to \infty }f(x)=1$, but $\lim_{ x \to 0,x<0 }f(x)=-2$. Therefore, the limit as $x]\to 0$ does not exist. We can, however, talk about the *one-sided* limits.

In the above example, we say that the limit as $x\to 0$ *from above* (or *from the right*) equals 1 and we write
$$
\lim_{ x \to 0^+ } f(x)=1
$$
Similarly, we say that the limit as $x\to 0$ *from below* (or *from the left*) equals -2 and we write
$$
\lim_{ x \to 0^- } f(x)=-2
$$
In general, for $\lim_{ x \to a^+ }f(x)=\ell,$ just consider $x$ with $x>a$ and similarly for $\lim_{ x \to a^- }f(x)=\ell$, consider only $x<a$.

## 4.6 Some Important Limits

The following limits are fundamental. We omit the proofs. Combined with the properties given in [[#4.2 Properties]] and the Squeeze Principle in 4.4, these will enable you to compute a range of other limits.
$$
\begin{equation}
\lim_{ x \to 0 } \frac{\sin x}{x}=1
\end{equation}
$$
$$
\lim_{ x \to 0 } \frac{1-\cos x}{x^{2}}=\frac{1}{2}
$$
$$
\lim_{ x \to 0 } \frac{e^{ x }-1}{x}=1
$$
### 4.6.1 Precise Definition

Let $f$ be a function defined on some open interval that contains the number $a$, except possibly $a$ itself. The we write
$$
\lim_{ x \to a } f(x)=\ell
$$
if for every number $\epsilon>0$ there is a number $\delta> 0$ such that 
$$
\mid f(x)-\ell \mid < \epsilon \text{ whenever }0<\mid x-a \mid < \delta
$$
