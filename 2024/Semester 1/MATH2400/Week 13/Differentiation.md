---
date: 2024-05-20
type: Lecture
subject: MATH2400
tags: lecture
week: Week 13
Topic: 
field: $SUBJECT
---

# Differentiation
#MATH2400

Let $\Omega \subseteq \mathbb{R}^n$ be open, and suppose function $f:\Omega \to \mathbb{R}^m$ has partial derivatives $\frac{\partial f_{i}}{\partial x_{j}}$ in an open ball around $\mathbf{a}$. Suppose these $\frac{\partial f_{i}}{\partial x_{j}}$ are continuous at $\mathbf{a}$.

Then $f$ is differentiable at $a$.


### Theorem 5
Chain rule. Let $U \subseteq \mathbb{R}^n, V \subseteq \mathbb{R}^m$ both be open and

let $g: U\to V$ be differentiable at $\mathbf{a}\in U$.
let $f:V\to \mathbb{R}^p$ be differentiable at $g(\mathbf{a})$.
Then $F = (f \circ g)$ is differentiable at $\mathbf{a}$ and
$$
F'(\mathbf{a}) = f'(g(\mathbf{a}))g'(\mathbf{a}).
$$
Proof. For ease of notation, let $g(\mathbf{a}) = \mathbf{b}$. Since $g$ is differentiable at $\mathbf{a}$ and $f$ is differentiable at $\mathbf{b}$, there  exist Jacobian matrices $J_{g}=g'(\mathbf{a})$ and $J_{f}=f'(\mathbf{b})$ such that whenever $\mathbf{a}+\mathbf{h}\in U, \mathbf{b}+\mathbf{z}\in V$,
$$
g(\mathbf{a+h})=g(\mathbf{a})+J_{g}\mathbf{h}+R_{g,\mathbf{a}}(\mathbf{h})|\mathbf{h}|
$$
$$
f(\mathbf{b+z})=f(\mathbf{b})+J_{f}\mathbf{z} + R_{f,b}(\mathbf{z})|\mathbf{z}|
$$
and 
$$
\lim_{ h \to 0 }| R_{g,\mathbf{a}}(\mathbf{h}) |= 0
$$
$$
\lim_{ z \to 0 } |R_{f,\mathbf{b}}(\mathbf{z})| = 0
$$
Without loss of generality, we set
$$
R_{g,\mathbf{a}}(\mathbf{0})=\mathbf{0}
$$
$$
R_{f,\mathbf{b}}(\mathbf{0}) = \mathbf{0}
$$
so both functions are continuous. 

### Definition 7

Let $U \subseteq \mathbb{R}^n.$We say $f:U \to \mathbb{R}^m$ is **continuously differentiable** if $f$ is differentiable in $U$ and all its partial derivatives are continuous in $U$.