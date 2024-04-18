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

## Theorem 9
(Mean value theorem for integrals)

If $f$ is continuous on $[a,b]$, then there exists $c \in [a,b]$ such that 
$$
\int _{a}^b f \, dx = f(c)(b-a).
$$

You can then, from theorem 1 and 4:
$$
\begin{align}
f(x_{n})(b-a) &\leq \int _{a}^b f \, dx \leq f(x_{n})(b-a) \\
f(x_{n}) & = \frac{1}{b-a} \int_{a}^b f \, dx \leq f(x_{n})
\end{align}
$$
By the [[Intermediate Value Theorem|Intermediate Value Theorem]], $\exists c \in (a,b) : \frac{1}{b-a} \int_{a}^b f \, dx = f(c)(b-a).$

## Definition 7 

$F$ *is called an anti-derivative of* $f$ if $F' = f$.

### Theorem 10
Fundamental theorem of calculus. Suppose $f:[a,b]\to \mathbb{R}$ is continuous.

Define $F(x) = \int_{a}^x f(t) \, dt$. Then $F$ is an antiderivative of $f$ and
$$
\int_{a}^b f(t)  \, dt = F(b)-F(a).
$$

---

Now, $F(x+h)-F(x) = \int _{h}^{x+h} f \, dt - \int _{h}^x f \, dt$
$= \int _{x}^{x+h} f \, dt = f(c)(x+h-x)$.

