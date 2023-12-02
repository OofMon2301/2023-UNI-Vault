---
date: 21-08-2023
type: Lecture
subject: Chapter 5
tags: lecture
Topic:: 
---
# [[Derivatives]]
#MATH1051

```toc
```

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

![[Chapter 8 - Differentiation#8.2 The Derivative of a Function]]
![[Chapter 8 - Differentiation#8.3 Differentiation Rules]]
## 6.5 Derivative of an Inverse Function

Suppose $y=f^{-1}(x)$, where $f^{-1}$ is the inverse of $f$. To obtain $\frac{dy}{dx}$ we use 
$$
x=f(f^{-1}(x))=f(y)
$$
Differentiating both sides with respect to $x$ using the chain rule gives:
$$
\begin{align}
1 & =\frac{d}{dx}(x)  \\
  & = \frac{d}{dx}f(y) \\
  & = \frac{df}{dy} \times \frac{dy}{dx}  \\
  & = \frac{dx}{dy} \times \frac{dy}{dx}
\end{align}
$$
Hence, if $\frac{dx}{dy} \neq 0:$
$$
\frac{dy}{dx} = \frac{1}{\left( \frac{dx}{dy} \right)}
$$
## 6.6 L'Hopital's Rule

Suppose that $f$ and $g$ are differentiable and $g'(x)\neq 0$ near $a$ (except possibly at $a$). Suppose that
$$
\lim_{ x \to a } f(x)=0  \text{ and } \lim_{ x \to a } g(x)=0
$$
or
$$
\lim_{ x \to a } f(x)=\pm \infty \text{ and } \lim_{  x \to a } g(x)=\pm \infty
$$
then
$$
\lim_{ x \to a } \frac{f(x)}{g(x)} = \lim_{ x \to a } \frac{f'(x)}{g'(x)}
$$
if the limit on the right exists or is $\pm \infty$.

### 6.6.1 Example

Find $\lim_{ x \to 1 } \frac{\ln x}{x-1}$.

Note that 
$$
\lim_{ x \to 1 } \ln x = \lim_{ x \to 1 } (x-1)=0
$$
Hence, we *cannot* use
$$
\lim_{ x \to 0 } \frac{f(x)}{g(x)}=\frac{\lim_{ x \to 0 } f(x)}{\lim_{ x \to 0 } g(x)}
$$
Instead, we use L'Hopital's rule to get:
$$
\lim_{ x \to 1 } \frac{\ln x}{x-1} = \lim_{ x \to 1 } \frac{\frac{1}{x}}{1}
$$
if this limit exits,
$$
=1.
$$
## 6.7 Continuous Extension of Sequences

Sometimes L'Hopital's rule can be used to evaluate limits of sequences. Let $f$ be a function on the real numbers such that $\lim_{ x \to \infty }f(x)$ exists. Let $f(n)=a_{n}$ for natural numbers $n$. Then:
$$
\lim_{ n \to \infty } a_{n} = \lim_{ x \to \infty } f(x)
$$
### 6.7.1 Example

Evaluate $\lim_{ n \to \infty } \frac{\ln x}{n}$.

Define $f(x)=\frac{\ln x}{x}$. Hence
$$
\begin{align}
\lim_{ x \to \infty } f(x)  & = \lim_{ x \to \infty } \frac{\ln x}{x} \\
  & = \lim_{ x \to \infty } \frac{1/x}{1} \text{ by L'Hopital's rule} \\
  & \implies \lim_{ n \to \infty } \frac{\ln n}{n}=0
\end{align}
$$
## 6.8 The Mean Value Theorem (MVT)

Let $f$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Then
$$
\frac{f(b)-f(a)}{b-a}=f'(c)
$$
for some $c$, where $a<c<b$.

Note $f'(c)$ is the slope of $y=f(x)$ at $x=c$ and $\frac{f(b)-f(a)}{b-a}$ is the slope of the chord joining $A=(a,f(a))$ to $B=(b,f(b))$.

## 6.9 Increasing/Decreasing Test

Suppose that $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$.

![[Chapter 8 - Differentiation#8.4 Critical Points and Curve Sketching]]

## 6.11 Local Maxima and Minima

A function $f$ has a *local maximum* at $a$ if 
$$
f(a)\geq f(x)
$$
for all $x$ in some open interval containing $a$.

Similarly, $f$ has *local minimum* at $b$ if 
$$
f(b)\geq f(x)
$$
for all $x$ in some open interval containing $b$.

### 6.11.1 Critical Points

A function $f$ is said to have a *critical point* at $x=a$, $a \in \text{dom}(f)$ if $f'(a)=0$ or if $f'(a)$ does not exist.

### 6.11.2 Global Maximum and Minimum

![[Chapter 8 - Differentiation#^16e6b7]]
![[Chapter 8 - Differentiation#^f4176d]]

