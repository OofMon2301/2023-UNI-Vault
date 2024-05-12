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