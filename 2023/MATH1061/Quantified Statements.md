---
date: 02-03-2023
type: Lecture
subject: MATH1050
tags: lecture
Topic:: 
---
# [[Quantified Statements]]
#MATH1061

## Predicates & Valid Arguments

[[2023/Definitions/Predicate|Predicates]] are able to be used in different scenarios to determine quantified statements and common arguments.

Activity 1:

1. $q\implies p$
2. $\sim p \longleftrightarrow r$
3. $\sim s \implies q$  (or $\sim q \implies s$)
4. $\sim s$
5. $\therefore \sim r$

Solution 1: Check whether the argument is invalid, by assuming conclusion is false and all premises are true.

$$
\begin{gather*}
\begin{aligned}
\text{Suppose all the premises are true and the conclusion is false.} \\
\text{Since the conclusion} \sim r \ \text{is false,}\ r \ \text{is true.} \\
\text{Since 4 is true,} \sim s \ \text{is true and so}  \ s \ \text{is false.}
\text{}

\end{aligned}
\end{gather*}
$$
$$
\begin{gather*}
\begin{aligned}
\begin{gathered}
\begin{cases}
1. &q\implies p \\
2. &\sim p \longleftrightarrow r \\
3. &\sim s \implies q \\
4. &\sim s
\end{cases}
\\
\\
\text{Goal: Get the conclusion} \sim r \\ \\
\begin{cases}
5. &q & \text{from 3 and 4, using Modus Ponens} \\
6. &p & \text{from 1 and 5 using Moddus Ponens} \\
7. &\sim r &\text{from 6 and 2 by definition of bidirectional arrow} \longleftrightarrow \\
8. &r \implies \sim p &\text{from 7 by specialisation} \\
9. &\sim r &\text{from 8 and 6 by Modus Tollens (Double Negative Law)}
\end{cases}
\end{gathered}
\end{aligned}
\end{gather*}
$$

### Quantified Statements

The symbol $\forall$ means "for all".

The symbol $\exists$ means "there exists."

#### Pre-class Questions

True or false? $\exists y \in \mathbb{Z}$ such that $y^2-y=0$.
This statement is true as you only need one set of $f(y)$ to make the statement true. For example, $y=0$ or $y=1$ makes the statement true.

True or false? $\forall x \in \mathbb{Z}$, if 6 is divisible by $x$, then $x=2$.
This statement is false as you need all sets of numbers in the range of the integer to make the statement true. In this case, consider $x=3$. We have $3 \in \mathbb{Z}$, and 6 is divisible by 3, but $3\neq 2$.


