---
date: 22-08-2023
type: Lecture
subject: Chapter 6
tags: lecture
Topic:: 
---
# [[Series]]
#MATH1051

A finite *series* is a sum of finitely many terms $a_{1}+a_{2}+a_{3}+\dots+a_{n}$. An *infinite* series is a sum of infinitely many terms $a_{1}+a_{2}+a_{3}+\dots$

We shall see that if we add an infinite number of terms the result may be finite or infinite.

If the series has a finite sum, we say it *converges*.

*Whether or not a series converges is not obvious.*

## 7.1 Infinite Sums (notation)

If we have an infinite sum we write:
$$
a_{0}+a_{1}+a_{2}+\dots+a_{n}+\dots=\sum_{n=0}^\infty a_{n}.
$$
Note that the lower bound ($n=0$) of the sum may vary.

## 7.2 Motivation

Series come from many fields.

1. Approximation to problem solutions:
	1. $a_{0}$ zeroth order approximation
	2. $a_{0}+a_{1}$ ($a_{1}$ small) first order approximation
	3. $a_{0}+a_{1}+a_{2}$ ($a_{2}$ very small) second order approximation
	4. $a_{0}+a_{1}+a_{2}+\dots+a_{n}$ $n$th order
	5. $a_{0}+a_{1}+a_{2}+\dots+a_{n}+\dots$ exact solution, provided the series converges
2.  Current state of a process over infinite time horizon
3. Approximating functions via Taylor/Fourier Series, e.g.,
$$
e^x = 1+ e^x+\frac{1}{2}x^{2} + \frac{1}{3!}x^{3}+\dots
$$
$$
f(t)=c_{0}+c_{1}\sin t+c_{2}\sin (2t)+c_{3}\sin(3t)+\dots
$$
4. Riemann Sums

## 7.3 The Harmonic Series

The series $1+\frac{1}{2}+\frac{1}{3}+\dots=\sum_{n=1}^\infty \frac{1}{n}$ is called the *Harmonic series*


## 7.4 Definition of Convergence

Given a series $\sum_{n=0}^\infty a_{n}=a_{0}+a_{1}+a_{2}+\dots$, let $s_{n}$ denote its $n$th partial sum:
$$
\begin{align}
s_{0} & = a_{0} \\
s_{1} & = a_{0}+a_{1} \\
s_{2} & = a_{0}+a_{1}+a_{2} \\
\vdots  \\
s_{n }  & = a_{0}+a_{1}+\dots+a_{n}=\sum_{k=0}^n a_{k}
\end{align}
$$

If the sequence $\{s_{n}\}$ is convergent (i.e. $\lim_{ n \to \infty }s_{n}=s$ with $s \in \mathbb{R}$), then the series $\sum_{n=0}^\infty a_{n}$ is said to be *convergent* and we write 
$$
\lim_{ n \to \infty } s_{n}=\sum_{n=0}^\infty a_{n}=s.
$$
The number $s$ is called the *sum* of the series. Otherwise the series is said to be *divergent*.

## 7.5 The P-test

For $p \in \mathbb{R}$, the $p-$series $\sum_{n=1}^\infty \frac{1}{n^p}$ is convergent if $p>1$ and divergent if $p\leq 1$

Note the above sum is from $n=1$. This is just a matter of taste since
$$
\sum_{n=1}^\infty \frac{1}{n^p} = \sum_{n=0}^\infty \frac{1}{(n+1)^p}
$$

## 7.6 The Divergence Test (also Called the Nth Term test)

If $\sum_{n=0}^\infty a_{n}$ is convergent then $\lim_{ n \to \infty }a_{n}=0.$

The divergence test is if $\lim_{ n \to \infty }a_{n} \neq 0$ then the series is divergent.

## 7.7 Geometric Series

The series
$$
\sum_{n=0}^\infty ar^n
$$
is convergent if $|r|<1$ with $\sum_{n=0}^\infty ar^n= \frac{a}{1-r}$ and divergent if $|r| \geq 1$.

## 7.8 Application: Bouncing Ball

> [!danger] Error
> Please look at the workbook online for the notes. Takes too long to write with all the working

## 7.9 The Comparison Test

If we are trying to determine whether or not $\sum_{n=0}^\infty a_{n}$ converges, where $a_{n}$ contains complicated terms, then it may be possible to bound the series by using simpler terms. If $|a_{n}|$ is always smaller than $|b_{n}|$ and $\sum_{n=0}^\infty |b_{n}|$ converges, then $\sum_{n=0}^\infty a_{n}$ should also. On the other hand, if $a_{n}$ is always large -  in fact larger than $|b_{n}|$, and $\sum_{n=0}^\infty b_{n}$ diverges, then $\sum_{n=0}^\infty a_{n}$ should diverge too.

## 7.10 Alternating Series

An *alternating series* is a series whose terms alternate in signs.

Here is an interesting result about a special alternating series:

We have seen that the harmonic series
$$
1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\dots
$$
is divergent. However, the alternating series
$$
1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\dots
$$
is convergent. Why? Later, we shall see that this series converges to $\ln 2$.

If the alternating series
$$
\sum_{n=0}^\infty (-1)^n b_{n} = b_{0}-b_{1}+b_{2}-b_{3}+\dots \quad (\text{all }b_{n}>0)
$$
satisfies
$$
\lim_{ n \to \infty }b_{n}=0 \text{ and } 
$$
$$
b_{n+1}\leq b_{n}, \quad \text{ for all }n \geq 0
$$
then the series is convergent.
The alternating series test can only be used to show convergence, not divergence.

## 7.11 Absolute and Conditional Convergence

A series $\sum_{n=0}^\infty a_{n}$ is called *absolutely convergent* if the series $\sum_{n=0}^\infty |a_{n}|$ is convergent.
A series $\sum_{n=0}^\infty a_{n}$ is called *conditionally convergent* if it is convergent, but not absolutely convergent.

### 7.11.1 Example

Are the following series conditionally or absolutely convergent?

$$
\sum_{n=1}^\infty (-1)^n \frac{1}{n}
$$

$\sum_{n=1}^\infty (-1)^n \frac{1}{n}$ is an alternating series with $b_{n} = \frac{1}{n}$. Since $b_{n}>b_{n+1}$, for all $n \geq 1$, and $\lim_{ n \to \infty }b_{n}=0$, then by the alternating series test, this series converges.

Now let $a_{n}=(-1)^n \frac{1}{n}$ for $n \geq 1$. Then
$$
\sum_{n=1}^\infty|a_{n}| = \sum_{n=1}^\infty \frac{1}{n},
$$
and this series is divergent ($p$-series with $p=1$.)

Consequently, the series is conditionally convergent.

## 7.12 The Ratio Test

A powerful test for convergence of series is the ratio test. We will use it extensively in the following sections.

If $\lim_{ n \to \infty }\mid \frac{a_{n+1}}{a_{n}}\mid = L<1$, then the series $\sum_{n=1}^\infty a_{n}$ is absolutely convergent (and therefore convergent).

If $\lim_{ n \to \infty }\mid \frac{a_{n+1}}{a_{n}}\mid = L>1$ or $\lim_{ n \to \infty }\mid \frac{a_{n+1}}{a_{n}}\mid = \infty$, then the series $\sum_{n=1}^\infty a_{n}$ is divergent.

If $\lim_{ n \to \infty }\mid \frac{a_{n+1}}{a_{n}}\mid = 1$, then the ratio test is inconclusive.

If $\lim_{ n \to \infty }\mid \frac{a_{n+1}}{a_{n}}\mid$ is not defined, then the ratio test is inconclusive.