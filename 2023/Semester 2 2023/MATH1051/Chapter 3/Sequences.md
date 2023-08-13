---
date: 31-07-2023
type: Lecture
subject: 
tags: lecture
Topic:: 
---
# [[Sequences]]
#MATH1051
# 3 Sequences

A sequence $\{a_{n}\}$ is an ordered list of numbers
$$
a_{0},a_{1},a_{2},a_{3}..a_{n},\dots
$$
A sequence can contain a finite number of terms or may continue forever.

## 3.1 Formal Definition: Sequence

More formally, a sequence is a function, with domain being $\{0,1,2,3,\dots\}$. We can also take the domain as $\{1,2,3,\dots\}$ and start the sequence at $a_{1}$ rather than $a_{0}$.

If $a:\{0,1,2,\dots\}\to \mathbb{R}$ is a function, viewed as a sequence, then we write $a_{0}$ instead of $a(0)$, $a_{1}$ instead of $a(1)$, etc.

### 3.1.1 Motivation

Infinite sequences of numbers are useful in many applications. The sequence might represent approximations to the solution of a problem such as the bisection method. Or the sequence might represent a *time series*, where the numbers represent the population each year. Mathematically, we are interested in how the sequence behaves as the number of terms becomes large: does it converge to a solution, or how fast does the population grow? Sequences can also appear from the partial sums in an *infinite series*, which comprises our next major topic.

## 3.2 Representations

There are two main ways to represent the $n^{th}$ term in a sequence. Firstly, there is a *direct* (or *closed form* or *functional*) representation. Secondly, there is a *recursive* (or *indirect*) representation.

A direct representation is a formula for $a_{n}$ in terms of $n$. A recursive description gives a way of obtaining $a_{n}$ from the previously calculated $a_{0},a_{1},\dots,a_{n-1}$.

Often in the recursive case the value of $a_{n}$ will only depend on the previous 1 or two terms, such as $a_{n}=f(a_{n-1},a_{n-2})$ or $a_{n}=g(a_{n-1})$.

## 3.3 Limits 

Let $\{a_{n}\}^\infty_{n=0}$ be a sequence. Then
$$
\lim_{ n \to \infty } a_{n}=\ell,\quad \ell \in \mathbb{R}
$$
As $a_{n}$ approaches $\ell$, $n$ gets larger and larger. $a_{n}$ is always close to $\ell$ for $n$ sufficiently large.

### 3.3.1 Convention

If a sequence $\{a_{n}\}^\infty_{n=0}$ has limit $\ell\in \mathbb{R}$, we say that $a_{n}$ *converges* to $\ell$ and that the sequence $\{a_{n}\}^\infty_{n=0}$ is *convergent*. Otherwise the sequence is *divergent*.

## 3.4 Theorem: Limit Laws

> [!caution]
> 

The following limit laws apply provided that the separate limits exist (that is $\{a_{n}\}$ and $\{b_{n}\}$ are convergent):

Suppose that $\{a_{n}\}$ and $\{b_{n}\}$ are convergent sequences such that 
$$
\lim_{ n \to \infty } a_{n}=\ell \quad \text{ and } \quad \lim_{ n \to \infty } b_{n}=m
$$
and $c$ is a constant. Then
$$
\begin{align}
\lim_{ n \to \infty } (a_{n}\pm b_{n}) & =\ell\pm m; \\
\lim_{ n \to \infty } ca_{n} & =c\ell; \\
\lim_{ n \to \infty } (a_{n}b_{n}) & =\ell m; \\
\lim_{ n \to \infty } \frac{a_{n}}{b_{n}} & = \frac{\ell}{m} 
\end{align}
$$

## 3.5 Useful sequences to remember

![[Pasted image 20230731090857.png]]

Take care with inequalities and limits. For example $\frac{1}{n}>0$ for all $n$ but $\lim_{ n \to \infty } \frac{1}{n}=0$. In general, even if $a_{n}>b_{n}$ for all $n$, we can only conclude $\lim_{ n \to \infty }a_{n}\geq \lim_{ n \to \infty }b_{n}$. Note the $\geq$.

## 3.6 Theorem: Squeeze 

If $a_{n}\leq b_{n}\leq c_{n}$ for $n\geq n_{0}$ for some $n_{0} \in \mathbb{N}$ and $\lim_{ n \to \infty }a_{n}=\lim_{ n \to \infty }c_{n}=\ell$, then
$$
\lim_{ n \to \infty } b_{n}=\ell
$$
### 3.6.1 Example

Use the squeeze theorem on $\{a_{n}\}$, where $a_{n}=\frac{1}{n}\sin n$.

Since 
$$
-1\leq \sin n\leq 1, \text{ for }n\geq 1,
$$
we have
$$
-\frac{1}{n}\leq a_{n}\leq \frac{1}{n}
$$
Now
$$
\lim_{ n \to \infty } -\frac{1}{n}=\lim_{ n \to \infty } \frac{1}{n}=0
$$
## 3.7 The Formal Definition of a Limit of a Sequence

We write
$$
\lim_{ n \to \infty } a_{n}=\ell
$$
if for every number $\epsilon>0$ there exists a number $n_{0}$ such that
$$
\mid a_{n}-\ell \mid<\epsilon \text{ whenever }n>n_{0}
$$
For example, $\lim_{ n \to \infty }a_{n}=0$ means $\mid a_{n}\mid<\epsilon$ whenever $n>n_{0}$.
