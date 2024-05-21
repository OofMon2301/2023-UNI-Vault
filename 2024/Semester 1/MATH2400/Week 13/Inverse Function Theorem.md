---
date: 2024-05-20
type: Lecture
subject: MATH2400
tags: lecture
week: Week 13
Topic: 
field: $SUBJECT
---

# Inverse Function Theorem
#MATH2400

What follows is an attempt to rigorously introduce the Inverse Function Theorem in one dimension. We will then argue these concepts generalise to multivariable functions. There will not be time to prove the generalisation, however.

### Lemma 1
Let $a<b$ and $f:[a,b]\to \mathbb{R}$ be continuous and one-to one.
Then $f^{-1}$ exists and is continuous.


### Lemma 2
If $f$ is a continuous and one-to-one function defined on an interval and $f'(x_{0})=0$, then $f^{-1}$ is **not** differentiable at $f(x_{0})$.

Proof. We have
$$
f^{-1}(f(x))=x.
$$

If $f^{-1}$ were differentiable at $x_{0}$, the chain rule would imply that
$$
(f^{-1})(f(x_{0}))f'(x_{0})=1
$$
Hence
$$
(f^{-1})(f(x_{0}))_{x}0=1
$$
Contradiction.


```functionplot
---
title: f(x) = x^3
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x)=x^3
```
$f^{-1}$ exists everywhere.
Since $f(x)=3x^{2}$, then $f'(0)=0$.


### Lemma 3

Let $f$ be a continuous one-to-one function defined on an interval, and suppose that $f$ is differentiable at $a$, with derivative at $f'(a)\neq_{0}.$ Then $f^{-1}$ is differentiable at $f(a)$, and
$$
(f^{-1})'(f(a))=\frac{1}{f'(a)}.
$$
Proof. Let $f(a)=b$. We wish to show that
$$
\lim_{ h \to 0 } \frac{f^{-1}(b+h)-f^{-1}(b)}{h} = \frac{1}{f'(a)}.
$$
Since $f$ is differentiable at $a$, we can write
$$
f(a+k)=f(a)+kf'(a)+\alpha(k)k,
$$
with
$$
\lim_{ k \to 0 } \alpha(k)=0
$$
Without loss of generality, set $\alpha(0)=0$, so $\alpha$ is continuous at $0$. By [[#Lemma 1]], $f^{-1}$ exists and is continuous.

---

If $b+h$ is in the range of $f$, then there exists a function $k$ such that $f(a+k(h))=b+h=f(a)+h$.

Note that $f^{-1}(b+h)-f^{-1}(b)=a+k(h)-a = k(h).$

$h=f(a+k(h))-f(a)=k(h)+f'(a)+b(k(h))k(k)$
Since $f^{-1}$ is one-to-one, $k(h)=0 \iff h=0$.

We write $\displaystyle \frac{f^{-1}(b+h)-f'(b)}{h} = \frac{k(h)}{k(h)f(a)+\alpha(k(h))k(h)}$.

Since $f^{-1}$ is continuous, $\displaystyle \lim_{ h \to 0 } k(h) = \lim_{ h \to 0 } f^{-1}(b+h)-f^{-1}(b)=0.$

Since $\alpha$ is continuous at $0$, $\lim_{ h \to 0 }k(h) = \alpha (\lim_{ h \to 0 }k(h)) = \alpha(0)=0$.





