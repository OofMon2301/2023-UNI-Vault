---
date: 2024-05-13
type: Lecture
subject: MATH2400
tags: lecture
week: Week 12
Topic: 
field: $SUBJECT
---

# Lecture 1 - Monday Lecture
#MATH2400

### Theorem 4
Let $\Omega \subseteq \mathbb{R}^n$.
*Consider a multivariable function* $f: \Omega \to \mathbb{R}^n$ *which is continuous at * $\mathbf{a} \in \Omega$.
Let $g:U \subseteq \mathbb{R}^p \to \Omega$ satisfy*.
$$
\lim_{ t \to k }  g(\mathbf{t}) = \mathbf{a}.
$$
Then
$$
\lim_{ t \to k } (f \circ g)(\mathbf{t}) = f(\lim_{ t \to k } g(\mathbf{t})) = f(\mathbf{a})
$$

Proof. We want to show that $\forall \epsilon > 0, \qquad \exists \delta > 0$ 


###  Corollary
The two path rule let $\Omega \subseteq \mathbb{R}^n$.
Consider a multivariable function $T: \Omega \to \mathbb{R}^n$.
Suppose $\mu, \eta: U \subseteq \mathbb{R} \to \Omega$, with $\lim_{  t  \to k } \mu(t) = \lim_{  t \to k }\eta (t) = \mathbf{a}$

Proof. Supposed that $\lim_{ h \to a }T = \mathbf{L}$. Then $\bar{T}$ defined by
$$\bar{T}(\mathbf{h})
\begin{cases}
T(\mathbf{h}) & \text{ for } \mathbf{h} \neq \mathbf{a} \\
\mathbf{L}  &  \text{ for } \mathbf{h} \eq \mathbf{a}
\end{cases} 
$$

### Example 10
Consider

$$
f(x,y,z) = \frac{xy+y^{2}+zx}{x^{2}+y^{2}+z^{2}}
$$
*Does the following limit exist?*
$$
\lim_{ (x,y,z) \to (0,0,0) } f(x,y,z). 
$$

Along the z axis, $x=y=0, \quad x(t) = 0, \quad y(t) = 0 \quad z(t) = t$.

$$
\lim_{ t \to 0 } f(0,0,t) = \lim_{ t \to 0 } 0=0 
$$

### Example 11
*The function of* $f: \mathbb{R}^{2} \backslash \{ (x,y) | y=x \}\to \mathbb{R}$ *is defined by*
$$
f(x,y) = \frac{x^{2}}{y-x}
$$
*It can be shown that for all* $m \in \mathbb{R}$ *and all* $\alpha > 0$
$$
\lim_{ x \to 0 } f(t,mt^\alpha) = 0
$$

Does $\lim_{ (x,y) \to (0,0) }f(x,y)$ exist?

### Theorem 5 
(If the limit exissts, it is unique) Suppose $\Omega \subseteq \mathbb{R}^n$, $\mathbf{a}$ is a limit point of $\Omega$, and let $f:\Omega \to \mathbb{R}^m$. If $\lim_{ x \to a }f(X)=L_{1}$, and $\lim_{ x \to a }f(X)=L_{2}$, then $L_{1}=L_{2}$.
Proof. The proof is very similar to the single variable case in the first half of the course.

### Theorem 6
Suppose $\Omega \subseteq \mathbb{R}^n$, $c \in \mathbb{R}$, $\mathbf{a}$ is a limit point of $\Omega$, and let $f,g: \Omega \to \mathbb{R}^m$. If $\lim_{ x \to a }f(\mathbf{x}), \lim_{ x \to a }g(\mathbf{x})$ both exist, then
$$
\lim_{ x \to a } (f+g)(\mathbf{x}) =(\lim_{ x \to a } f(\mathbf{x})) + (\lim_{ x \to a } g(\mathbf{x}))
$$
$$\lim_{ x \to a }(cf)(\mathbf{x}) = c \lim_{ x \to a }f(\mathbf{x})$$
The proof is very similar to the single variable case in the first half of the course.

### Theorem 7
(Squeeze Theorem) Suppose $\Omega \subseteq \mathbb{R}^n$, $\mathbf{a}$ is a limit point of $\Omega$, and let $f,g,h:\Omega \to \mathbb{R}$.
Let $f(\mathbf{x}) \leq g(\mathbf{x}) \leq h)\mathbf{x}$ for all $\mathbf{x}$ on some $\delta>0$ ball of $\mathbf{a} \in \Omega$.

If the limits of $f$ and $h$ exist with $\lim_{ x \to a }f(\mathbf{x}) = L$, then the limit of $g$ likewise exists and $\lim_{ x \to a }g(\mathbf{x}) = L$.

The proof is very similar to the single variable case in the first half of the course.

# Multivariable Differentiation
## Preliminaries

### Lemma 1
If $T \in M_{m \times n}$, there is $M \geq 0$ such that $|Th| \leq M|h|$ for $h \in \mathbb{R}^m$.

Proof. If $h=0, \, |Th| = 0 = M|h|$. Suppose $h \neq 0$. Then $|h| \neq 0$ and 
