---
date: 2024-04-29
type: Lecture
subject: MATH2400
tags: lecture
week: Week 10
Topic: 
field: $SUBJECT
---

# Taylor Series
#MATH2400

## Definition 1
Let $\{c_{k}\}$ be a (possibly infinite) sequence.

*The following is a shorthand for an $n$th degree polynomial*.
$$
\sum^n_{k=0} c_{k}(x-a)^k \equiv c_{0} +c_{1}(x-a)+ c_{2}(x-a)^{2} + \dots c_{n}(x-a)^n
$$
## Definition 2
If $f$ is a function defined on an open interval $I$, define $f^{(n)}(a)$ to be the $n$th order derivative of $f$ at the point $a \in I$.

## Definition 3

Suppose $f$ is $n$ times differentiable at $a$. 

The $n$th Taylor Polynomial of $f$ at $a$ is 
$$
P_{n,a}(x) = \sum^n_{k=0} \frac{f^{(k)}(a)}{k!} (x-a)^k
$$

## Definition 4
If it exists, we call $\lim_{ n \to \infty } P_{n,a}(x) = \sum_{k=0}^n\frac{f^{(k)}(a)}{k!} (x-a)^k$ the Taylor Series for $f$ (About $a$).
*In the special case where $a=0$, we call this the Maclaurin Series of $f$.*

## Theorem 1
(Taylor theorem - Integral form ). Let $n \in \mathbb{N}$, and let $f$ be a function having $n+1$ continuous derivatives on an open interval $I$. Let $a,x \in I$. Then
$$
f(x) = P_{n,a}(x) + R_{n,a}(x),
$$
where
$$
R_{n,a}(x) = \int_{a}^x \frac{f^{n+1}(t)(x-t)^n}{n!} \, dt 
$$

**Remark:** $R_{n,a}(x)$ is called the $n$th remainder term.


### Proof

Define
$$
L_{n}(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x-a)^k + \int_{a}^x \frac{f^{n+1}(t)(x-t)^n}{n!} \, dt
$$
We wish to prove $f(x) - L_{n}(x)$ for all $n \in \mathbb{N}$ and $x \in I$.

Proof by induction $n=0$.

First note that if $f'$ is continuous, the FTC tells us that 
$$
f(x) = f(a) + \int _{a}^x f'(t) \, dt = L_{0}(x)
$$

#### Induction Hypothesis
Assume that $f(x) = L_{m}(x)$ for some $m$.

We wish to prove $f(x) = L_{m+1}(x)$.
$$
L_{m+1}(x) = \sum_{k=0}^{m+1} \frac{f^{(k)}(a)}{k!}(x-a)^k + \int_{a}^x \frac{f^{(m+2)}(t)(x-t)^{m+1}}{(m+1)!} \, dt
$$

Integrate by parts ( possible because $f^{(m+2)}$ is continuous by assumption.)

Let $u(t) = \frac{(x-t)^{m+1}}{(m+1)!}$ , $v'(t) = f^{m+1}(t)$
$$
u'(t) = -\frac{(x-t)^m}{m!}, \quad v(t) = f^{(m+1)}(t)
$$
And then the second equation becomes:
$$
L_{m+1}(x) = \sum_{k=0}^{m+1} \frac{f^{(k)}(a)}{k!}(x-a)^k + \frac{(x-t)^{m+1}}{(m+1)!} \times f^{(a)}(x)|^x_{a} - \int_{a}^x \frac{f^{n+1}(t)(x-t)^n}{n!} \, dt
$$
$$
 = \sum_{k=0}^{m+1} \frac{f^{(k)}(a)}{k!}(x-a)^k - \frac{(x-a)^{m+1}}{(m+1)!} f^{(m+1)}(a) + \int _{a}^x \frac{f^{(m+1)}(t)(x-t)^m}{m!} \, dt
$$

 $$
 = \sum^m_{k=0} \frac{f^{(k)}(a)}{k!} (x-a)^k + \int _{a}^x \frac{f^{(m+1)}(t)(x-t)^m}{m!} \, dt
$$
$$
= L_{m}(x) = f(x) \quad \quad \text{ By the induction hypothesis.}
$$

## Lemma 2

Suppose $f$ is defined on an open interval $I$, and has continuous derivatives of all orders (infinitely differentiable) at $a \in I$.
Then the $P_{n,a}(x)$ converges to $f(x) \iff R_{n,a}(x)$ converges sto 0.

From then, $1$, we write $R_{n,a}(x) = f(x) - P_{n,a}(x)$.
If $\lim_{ n \to \infty } P_{n,a}(x) = f(x)$,

$\lim_{ n \to \infty } R_{n,a}(x) = \lim_{ n \to \infty } f(x)- P_{n,a}(x)$

$\lim_{ n \to \infty } f(x)- \lim_{ n \to \infty }P_{n,a}(x)$

$f(x)-f(x) = 0$.


## Definition 5

If $P_{n,a}(x)$ converges to $f(x)$ for all $x$ in an open interval containing $a$, $f$ is described as **analytic** at $a$.


## Lemma 3
(Lagrange form of remainder) If $a \neq x$, the $n$th remainder term from theorem 1 can be written as
$$
R_{n,a}(x) = \frac{f^{(n+1)}(t)}{(n+1)!}(x-a)^{n+1}
$$
for some $t$ between $a$ and $x$.

### Proof
Assume $x>a$ ( the $x<a$ case can be done very similarly.)

Since $f^{(n+1)}$ is continuous on $[a,x]$, there exists (by the Extreme Value Theorem):
$$
m = \min\{f^{(n+1)(t) }\text{ for } t \in [a,x]\}
$$

