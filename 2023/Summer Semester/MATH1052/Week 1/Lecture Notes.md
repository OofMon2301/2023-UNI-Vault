---
date: 30-11-2023
type: Lecture
subject: MATH1052
tags:
  - lecture
"Topic:": Multivariate ODE's
---
# [[Lecture Notes]]
#MATH1052

```toc
```
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
An [[2023/Definitions/IVP|IVP]] is the problem of finding a solution of a differential equation that satisfies one or more *inital conditions*. 

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
- Partial Differential Equations 