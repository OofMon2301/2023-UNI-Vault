---
date: 2024-03-11
type: Lecture
subject: MATH2400
tags: lecture
week: Week 5
Topic: 
field: $SUBJECT
date modified: 2024-03-18
---

#MATH2400


# Limits of Functions

## Example
$$
\lim_{ x \to 0} 3x+5 =11
$$
```ad-info
title: Proof
To prove this, given $\epsilon > 0$, we need to find $\delta>0$ such that $0<|x-2| < \delta \implies |3x+5-11| < \epsilon$.
We can see that $|3x+5-11| \implies |3x-6| \implies 3|x-2|$.

If we take $\delta = \frac{\epsilon}{3}$, then $|x-3| < \delta = \frac{\epsilon}{3} \implies |3x+5-11| < 3\delta = \epsilon$.
This shows that $\lim_{ x \to 0 } 3x+5 = 11$.

```

## Another Example

$$
\lim_{ x \to 2 } x^{2}+3 = 7
$$
```ad-note
title: Proving Mathematically Using $\epsilon$-$\delta$ Definition

To prove this, given $\epsilon>0$, we need to find $\delta>0$ such that $0<|x-2|<\delta \implies |x^{2}+3-7|< \epsilon$.
In this such case, using the same proofing as above ($\delta= \frac{\epsilon}{2}$ will not work). This is because if I take $\delta = \frac{\epsilon}{2},$ as some numbers in $\epsilon$ might not fit in the bounds of the question.

$|x^{2}+3-7|$ can be simplified to
$$
\mid x^{2} + 4 \mid < \epsilon \implies \mid x-2 \mid \mid x+2 \mid < \epsilon.
$$
##### Key Idea
If $\mid x-2 \mid < 1$ $\iff x \in (1,3) \iff x+2 \in (3,5) \iff |x-2|<5$.

If we take $\delta = \min\{\frac{1,\epsilon}{5}\}$, then if
$$
\mid x-2 \mid < \delta, \,\,\, \text{ We got } \,\,\, \mid x-2 \mid \mid x+2 \mid < \left( \frac{\epsilon}{5} \right) \times 5 = \epsilon.
$$
Thus, $\mid x+2 \mid$ is $<5$ because $\mid x-2 \mid < \delta \leq 1$ and $\mid x-2 \mid < \frac{\epsilon}{5}$.

```

## Relationships between Limits of Sequences and Limits of Functions

### Proposition:
$$
\lim_{ x \to a } f(x) =L
$$
$$
\iff
$$
for every sequence $x_{n}$ with $x_{n} \to a$ then $f(x_{n}) = L$

### Example
Show that $\lim_{ x \to 0 }\sin\left( \frac{1}{x_{n}} \right)$ does not exist.

```ad-note
title: Solution

In view of the proposition, it is sufficient to find a sequence $x_{n} \to 0$ such that $\sin\left( \frac{1}{x_{n}} \right)$ does not converge.

We can take $x_{n} = \frac{1}{\pi n + \frac{\pi}{2}}$ so that $x_{n = \frac{1}{\pi n + \frac{\pi}{2}}} \implies \sin\left( \frac{1}{x_{n}} \right) = (-1)^n$.

```



