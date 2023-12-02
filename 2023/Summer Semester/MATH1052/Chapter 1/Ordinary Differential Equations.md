---
date: 02-12-2023
type: Lecture
subject: Week 1
tags:
  - lecture
"Topic:": Ordinary Differential Equations
---
#MATH1052

# Contents

- [Just Some Basic Information To Know:](#Just%20Some%20Basic%20Information%20To%20Know:)
	- [Rough Course Outline:](#Rough%20Course%20Outline:)
- [Introductory Comments on Lectures on ODE's](#Introductory%20Comments%20on%20Lectures%20on%20ODE's)
	- [Ordinary Differential Equations (ODEs)](#Ordinary%20Differential%20Equations%20(ODEs))
		- [Initial Value Problem (IVP)](#Initial%20Value%20Problem%20(IVP))
		- [Common Notation](#Common%20Notation)
- [1 Ordinary Differential Equations](#1%20Ordinary%20Differential%20Equations)
	- [1.1 Introduction](#1.1%20Introduction)
			- [1.1.1 Examples of ODEs](#1.1.1%20Examples%20of%20ODEs)
			- [1.1.3 Solution to an ODE](#1.1.3%20Solution%20to%20an%20ODE)
				- [Example:](#Example:)

# Ordinary Differential Equations
## Just Some Basic Information To Know:

### Rough Course Outline:
- Chapter 1 - Ordinary differential equations
- Chapter 2 - Functions of several variables
- Chapter 3 - Partial Derivatives and Tangent Planes
- Chapter 4 - Max and min Problems on surfaces
- Chapter 5 - Parameterisation of curves and line integrals

## Introductory Comments on Lectures on ODE's

### Ordinary Differential Equations (ODEs)
 An [[2023/Definitions/ODE|ODE]] is an equation containing a function $y$ of a *single* independent variable $x$, as well as derivatives of the function. An equation of the form
 $$
f\left( x, y, \frac{dy}{dx}, \frac{d^{2}y}{dx^{2}}, \dots, \frac{d^ny}{dx^n} \right) = 0
$$
is called an ODE of order $n$. Here $f$ encodes a relationship between $x$ and $y$ and some of its derivatives.

```ad-note
title: Solutions
collapse: open

A *solution* of an ODE is a function $y(x)$ that satisfies the ODE for all $x$ in some (real) domain.

A solution	 to an $n$-th order ODE contains up to $n$ arbitrary constnants.
```

#### Initial Value Problem (IVP)
An [[2023/Definitions/IVP|IVP]] is the problem of finding a solution of a differential equation that satisfies one or more *initial conditions*. 

Imposing initial conditions will usually fix (some of) the arbitrary constants appearing in the general solution to the differential equation.

#### Common Notation
$$
y'=\frac{dy}{dx},\ y''=\frac{d^{2}y}{dx},\ y^{(k)} = \frac{d^ky}{dx^k}, \ k \in \mathbb{N}
$$
This allows us to write a first order ODE in the form
$$
y'=g(x,y)
$$
---
## 1 Ordinary Differential Equations
### 1.1 Introduction
There are two types of DE's:

- Ordinary Differential Equations ([[ODE]]), where the unknown function is a function of only one variable
- Partial Differential Equations (PDE), where the unknown function is a function of more than one variable. We will not consider PDEs in this course. 

#### 1.1.1 Examples of ODEs
- Unbounded population growth: $P'(t)$ = $kP$
- Bounded population growth: $P'(t)$ = $kP(1-P/\theta)$
- Motion due to gravity: $my''(t)$ = $-mg$
- Spring system: $mx''(t)$ = $-kx$

```ad-todo
title: Reminder
collapse: open
Derivatives such as $x'(t)$ and $x''(t)$ with respect to time are often written as $\dot{x}$ and $\ddot{x}$ respectively.

```

#### 1.1.3 Solution to an ODE
Suppose that we are given an [[ODE]] for $y$ which is an unknown function of $x$. then $y=f(x)$ is said to be a *solution* to the [[ODE]] if the [[ODE]] is satisfied when $y=f(x)$ and its [[Derivatives]] are substituted into the equation.

##### Example
Show that $y=y(x)=A\exp(x^{2}/2)$ is a solution to the ODE $y'=xy$.

$$
\text{We need to show that }y=A\exp (x^{2}/2) \text{ satisfies the ODE.}
$$$$
\text{Calculate LHS}
$$
