---
date: 04-04-2023
type: Lecture
subject: 
tags: lecture
Topic:: 
---
# [[Direct Proofs and Counterexamples]]
#MATH1061
# Definitions

We begin by defining even and odd.

An integer $n$ is even if and only if $n$ is twice some integer.

$$
n \text{ is even} \iff \exists k \in \mathbb{Z} \text{ such that } n=2k
$$

An integer $n$ is odd if and only of $n$ is twice some integer plus one.
$$
n \text{ is even }\iff \exists k\in \mathbb{Z} \text{ such that }n=2k+1
$$

Next, lets define the terms prime and composite.

An integer $n$ is prime if and only if $n>1$ and for all positive integers $r$ and $s$, if $n=rs$  then $r=1$ or $s=1$.

An integer is composite if and only if $n>1$ and $n=rs$ for some positive integers $r$ and $s$ with $r\neq 1$ and $s\neq 1$

## Proving Existential Statements

To show $\exists x \in D$ such that $P(x)$ is true, iot is enough to find one example of an element $x \in D$ for which $P(x)$ is true.

### Example:
There exists a positive integer $x$ such that $x>30$ and $x$ is composite.

$$
\begin{align}
x & =32 \\
Then  \ 32>30 \cap 32 & =2 \times 16 \\
Where \ 2, 16 \in \mathbb{Z}^+  & \cap 2\neq 1, 16\neq 1 \\
\therefore x=32   & \text{ is a positive integer}
\end{align}
$$
## Direct Proof of Universal Statements

One way to show that $\forall x \in D$, if $P(x)$ then $Q(x)$ is true,
$$
\begin{align}
1. \quad & Suppose \  x \in D \text{ and }P(x) \text{ is true.} \\
2. \quad & \text{Show that the conclusion } Q(x) \text{ is true using definitions.}
\end{align}
$$
