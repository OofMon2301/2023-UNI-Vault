---
date: 24-02-2023
type: Lecture
subject: MATH1061
tags: lecture
Topic:: Logical Form
---
# [[Logical Form and Logical Equivalence]]
#MATH1061

## Introduction to Logical Form

1. ~ p $\land$ q
2. ~ q $\lor$ ~ p $\land$ r

1. It is not snowing but it is cold
2. It could be cold and snowing or it could be sunny.

> [!info] Logical Form Notation
> 
> **Statement Variables**
> ---
> Logical connectives are ways to connect one number from another.
> 
> **AND/BUT** = $\large \land$
> 
>**OR** = $\large \lor$
>
>**NOT** = $\large \sim$
>

### Inclusive and Exclusive *OR*
---
The symbol $\lor$ means "inclusive or:. So $p \lor q$ is true  when $p$ is true, or $q$ is true or both are true. Sometimes when the word "or" is used, the meaning is "one or the other, but not both".

This is "exclusive or". Exclusive *or* is often written using the logical connective $\large \oplus$.
| **P**   | **Q**   | **R**   |      Statement Form $(p \land \sim q) \lor (q \land r)$|
| --- | --- | --- | --- | -------------- |
| t   | t   | t   | f    |        t        |
| t   | t   | f   | f    |        f        |
| t   | f   | t   | t    |        f        |
| t   | f   | f   | t    |        f        |
| f   | t   | t   | f    |        t        |
| f   | t   | f   | f    |        f        |
| f   | f   | t   | t    |        f        |
| f   | f   | f   | t    |        f        |

## De Morgan's Laws
--- 
> [!note] De Morgan's Laws
>  Important logical equivalences for the negations of statements involving "and" and "or".
>  $$\sim (p \land q ) \equiv \sim p \lor \sim q$$
>  
>  $$\sim (p \lor q ) \equiv \sim p \land \sim q$$

Use the laws of logical equivalence to show that:

$$\sim ((\sim p \land q )\lor (\sim p \land \sim q )) \equiv p$$
---
$$
\equiv \sim (\sim p \land q) \land \sim (\sim p \land \sim q)\ \ \ \ \ \ \ \ \ \ \ \ \ \text{De Morgan's Law}
$$
$$ \equiv (\sim ( \sim p)\lor \sim q) \land (\sim ( \sim p) \lor \sim (\sim q))$$


