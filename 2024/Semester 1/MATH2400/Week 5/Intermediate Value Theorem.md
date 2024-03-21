---
date: 2024-03-21
type: Lecture
subject: MATH2400
tags: lecture
week: Week 5
Topic: Intermediate Value Theorem
field: Mathematics
---

#MATH2400


> [!info] Theorem
> Let $f \cdot [a,b] \to \mathbb{R}$ be a continuous function and $\lambda \in \mathbb{R}$ satisfies $f(a)<\lambda \leq f(b)$ or $f(b)<\lambda \leq f(a)$.
> 
> Then there exists $c\in [a,b]$ such that $f(c)=\lambda$.


#### Proof

###### Step 1
We can assume that $\lambda=0$. If, in the case that $\lambda \neq 0$, then consider the function $\tilde{f}(x) = f(x) - \lambda$.

###### Step 2
Assume that $f(a)<0<f(b)$. If this is false, then consider the function $\hat{f}(x) = -f(x)$.

So we need to show that if $f(a)<0<f(b)$ then $\exists c \in [a,b]$ such that $f(c)=0$.


### Example

Let $\mu_{1} = \frac{a+b}{2}$. If $f(\mu_{1})=0$, then we are done, and we can just set $c=\mu_{1}$.

If we have a value where $f(\mu_{1})<0$, then we need to set $a_{1}=m_{1}$ and $b_{1}=b$.

Let $\mu_{2}=\frac{a_{1}+b_{1}}{2}$.
If $f(\mu_{2}) = 0$, then we are done and we can se $c=\mu_{2}$.
If $f(\mu_{2})>0$, then set $a_{2}=a_{1}$ and $b_{2}=m_{2}$,
If $(\mu_{2})<0$, then set up that $a_{2} = \mu_{2}$ and $b_{2}=b_{1}$.

We can continue this, we will get sequences $\langle a_{n}\rangle^\infty_{n=1}$ and $\langle b_{n} \rangle^\infty_{n=1}$ such that $a_{n}$ is increasing, where $a \leq a_{2} \leq a_{3} \leq a_{4} \leq \dots \leq a_{k}$ and $b_{n}$ is decreasing, where $b \geq b_{1} \geq b_{2} \geq b_{3} \geq b_{4} \geq \dots \geq a$.
The following is also true for the function:

$$b_{n}-a_{n} = \frac{b-a}{2^n} \,\,\, \forall a \geq 1.$$

For instance, 
$$
b_{1}-a_{1}^{2n} = \begin{cases}
M_{1} - a &= \frac{a+b}{2} - a & = \frac{b-a}{2}  \\
b-M_{1} &= b- \frac{a+b}{2} & = \frac{b-a}{2}
\end{cases}
$$

The general case follows from mathematical induction, 

By monotone convergence,  $\langle a_{i} \rangle ^\infty_{n=1}$ converges to some number $\alpha$ and  $\langle b_{i} \rangle ^\infty_{n=1}$ converges to some number $\beta$.  As $a_{i} \to \alpha = \beta \to a_{i}$.

##### Claim I 
$\alpha = \beta$ as $\lim_{ n \to \infty } (a_{n}-b_{n}) = \lim_{ n \to \infty }a_{n} - \lim_{ n \to \infty }b_{n} = \alpha - \beta$.

##### Claim II
$f(\alpha) = 0$. Note that $f(a_{n})< 0$ and $f(b_{n})> 0$, as $\lim_{ n \to \infty }f(a_{n})\leq 0$, $\lim_{ n \to \infty }f(b_{n}) \geq 0$.

Now, by continuity:
$\lim_{ n \to \infty }f(a_{n}) = f(\lim_{ n \to \infty }a_{n})$
$$
\begin{align}
& = f(\alpha) \\
 & = f(\beta )  \\
 & = f(\lim_{ n \to \infty }b_{n} ) \\
 & =\lim_{ n \to \infty } f(b_{n}) \\
 & \implies f(\alpha) = 0
\end{align}
$$


