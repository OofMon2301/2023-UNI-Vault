---
date: 2024-04-11
type: Lecture
subject: MATH2400
tags: lecture
week: Week 7
Topic: 
field: $SUBJECT
---

# Integration and Continuity
#MATH2400 

> [!abstract] Theorem 7
>  *If $f: [a,b] \to \mathbb{R}$ is monotone* (i,e, *non increasing or non decreasing*), *then $f$ is integrable*.
>
>### Proof
>Assume that $f$ is non-decreasing (the non-increasing case is similar).
>Fix $\epsilon > 0$. We want to find a partition $P = \{ x_{0},x_{1},x_{2},\dots,x_{n} \}$ of $[a,b]$ such that
> $$U (f,P) - L(f,P) < \epsilon$$
> $x_{n} = a + \frac{b-a}{N}k, \quad k=0,1,\dots,N$

$$
\begin{align}
m_{1} & = \inf\{ f(x): x_{1-1}\leq x \leq x_{i} \} = f(x_{i-1}) \\
M_{1}  & = \sup \{ f(x): x_{1-1}\leq x \leq x_{i} \} = f(x_{i})
\end{align}
$$

$$
\implies L(f,P) = \sum_{i=1}^N f(x_{i-1})(x_{i}-x_{i-1})
$$

$$
\begin{align}
  & = \sum_{i=1}^N (f(x) - f(x_{i-1})) \frac{b-a}{N} \\
 & = \frac{b-a}{N} (f(x) - f(a) + f(x_{2}) - f(x_{1})) \\
 & = \frac{b-a}{N} (f(b)-f(a))
\end{align}
$$
$$
\begin{align}
 \text{We choose } \quad N  & = \left\lfloor  \frac{(b-a)(f(b)-f(a))}{\epsilon}  \right\rfloor  \\
 \text{Then } \quad     & \frac{(b-a)(f(b)-f(a))}{\epsilon} < N \\
  & \implies U(f,P) - L(f,P) < \epsilon \\
  & \text{Thus, }f  \text{ is integrable.}
\end{align}
$$


