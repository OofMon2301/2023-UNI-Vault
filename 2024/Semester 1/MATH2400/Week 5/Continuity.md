---
date: 18-03-2024
type: Lecture
subject: MATH2400
tags: lecture
week: Week 5
Topic: 
field: Mathematics
---
#MATH2400

> [!note] Informal Definition
>  A *sub-sequence* is a part of a sequence (just like how a subset is part of a whole set).
>  

#### Example
$$
x_{n}=\frac{(-1)^n}{n}
$$
An example of this sub-sequence would be $\frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \dots$
Another sub-sequence would be where $n$ is a perfect square ($\frac{1}{2}, \frac{1}{4}, \frac{1}{16}, \frac{1}{64},\dots$)
Another sub-sequence would be prime numbers ($\frac{1}{2}, \frac{1}{3}, \frac{1}{5}, \frac{1}{7},\dots$)


```ad-important
title: Peak Lemma

Every bounded sequence has a monotone subsequence.


```

```ad-faq
title: Idea

Imagine there is a straight street connecting UQ to the beach, and that there are infinitely many hotels lining up the road to the beach.

Assume the most expensive ones are the tallest hotels. (This indicates the pricing of the hotel).

We start walking from UQ to the beach along this street. As we walk along the road, we rate the hotels that we see, naming them $y_1$ and so on as we walk. 

Suppose that we can find the hotel which has a view of the sea, with no taller hotel in front. We can call this hotel $x_{1}$. We have other hotels that are 2nd and 3rd tallest and name them $x_{2}$ and $x_{3}$ respectively. 

Note that $x_{1}>x_{2}>x_{3}$. There can be two cases to this idea:
###### Case 1
*We can either continue this labelling for an infinite amount of time, and there are an infinite amount of $x_{i}$'s.*

If we consider **Case 1**, we see that $(x_{i})^\infty_{x=1}$ is a decreasing subsequence of $(y_{n})^\infty_{y=1}$.

---
###### Case 2 
*There are finitely many.*

Suppose we consider **Case 2**, where $x_{1},x_{2},\dots,x_{k}$ is finite.

This means that past the the number $x_{k}$, there is no hotel that could be greater or equal to $(\geq)$ all the other hotels in front of it,

We can let $z_{1}$ be any hotel past $x_{k}$. Then, the view of $z_{1}$ is blocked, so $\exists$ some hotel $z_{2}$ (further down the street, with $z_{2}\geq z_{1}$.)

We can continue with this case where $z_{1} \leq z_{2} \leq z_{3} \leq z_{4} \leq z_{5} \leq z_{6} \leq \dots \leq z_{n}$.

```



