---
date: 28-02-2023
type: Lecture
subject: MATH1061
tags: lecture
Topic:: 
---
# [[Valid and Invalid Arguments]]
#MATH1061
# Whether Arguments Are Valid or Invalid

An [[2023/Definitions/Math1061/Argument|Argument]] can be considered like this:

If today is Tuesday, then I am wearing a pink shirt.
Today is Tuesday.
Therefore, I am wearing a pink shirt.

Valid argument: The statement
(Premise 1 $\land$ Premise 2 $\land$ $\dots$ $\land$ Last Premise) $\implies$ Conclusion is a [[2023/Definitions/Tautology|Tautology]]/Redundant

Let $p$ represent the statement "today is Monday", and $q$ represent the statement "I am wearing a pink shirt".

Then this argument can be written as:
$$
\begin{align}
p \implies q  & \\
p \\
\therefore q
\end{align}
$$
This is a valid argument, but it has a false conclusion.
Note that the premise "If today is Tuesday, then I am wearing a pink shirt" is false.



### Proving an argument is valid (using rules of inference)

**Premise 1**: $p \implies q$
**Premise 2**: $p \lor r$
**Premise 3**: $p \lor \sim r$
**Conclusion**: $q$

Use the laws of logical equivalence and the rules of inference to show that this argument is valid.

1. $p \implies q$
2. $p \lor r$
3. $p \lor \sim r$
$$
\begin{cases}
(p \lor r) \land (p \lor \sim r) &  &  & \text{From 2. and 3. }
\end{cases}
$$


Activity 5:

Proving an argument is valid (by checking if the argument is invalid):

**Premise 1**: $p \implies q$
**Premise 2**: $q \implies r$
**Premise 3**: $\sim p \ \lor \sim q$
**Conclusion**: $r$

$$
\begin{align}
\text{Suppose all premises are true and the conclusion is false.} \\
\begin{cases}
\text{Since the conclusion is false,}  & q & \text{is false.} \\
\text{Since 2. is true and}  & r & \text{is false, } 
\end{cases}
\end{align}

$$


Activity 6:

**Premise 1**: $p \implies q$
**Premise 2**: $p \lor r$
**Premise 3**: $p \lor \sim r$
**Conclusion**: $q$

$$
\begin{align}
\text{Suppose all premises are true and the conclusion is false.} \\
\begin{cases}
\text{Since conclusion is false}, \ \ q  \text{ is false.} \\
\text{Since 1. is true and}\ \ q   \text{ is false,} \ \ p \  \text{is false.} \\

\end{cases}
\end{align}
$$

