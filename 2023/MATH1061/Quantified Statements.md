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
\begin{cases}
1. &q\implies p \\
2. &\sim p \longleftrightarrow r \\
3. &\sim s \implies q \\
4. &\sim s
\end{cases}
\\
\text{Goal: Get the conclusion} \sim r \\
\begin{cases}
5. &q & \text{from 3 and 4, using Modus Ponens} \\
6. &p & \text{from 1 and 5 using Moddus Ponens} \\
7. &\sim r &\text{from 6 and 2 by definition of bidirectional arrow} \longleftrightarrow \\

\end{cases}
\end{aligned}
\end{gather*}
$$