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

A solution	 to an $n$-th order ODE contains up to $n$ arbitrary constants.
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
\begin{aligned}
\text{Calculate LHS}\\
y'&=\frac{d}{dx}\left(A\exp x^{2}/2 \right)\\ 
&= Ax\exp x^{2}/2 = xy \\
&\therefore \text{ RHS as required}
\end{aligned}
$$
When asked to *solve* an ODE, you are expected to **find all possible solutions**. 

Solving [[ODE]] of various forms. For an [[ODE]] that involves only the unknown function $y$ and its first [[Derivatives]], the general solution will involve *one* arbitrary constant.

##### Example
Find the general solution to the differential equation $y' = x^{2}$.
$$
\frac{dy}{dx}=x^{2} \implies y=\int x^{2} \, dx =\frac{x^{3}}{3}+c

$$
This is the general solution for this [[ODE]].

#### 1.1.4 Initial value problems

An [[2023/Definitions/IVP|Initial Value Problem]] (IVP) is the problem of solving an ODE subject to some initial conditions of the form $y(t_{0})=a, \ y'(t_{0})=b$, etc.

The solution to an initial value problem no longer contains arbitrary constants from the general solution to the [[ODE]] - these are determined by the inital conditions.

##### Example
> [!help]+ Question
> A flow-meter in a pipeline measures flow-through as $2+\sin t$ litres/second.
How much fluid passes through the pipeline from time zero up to time $T$?

> [!success]+
> As Flow-through time is volume/unit time, the general solution would be $\frac{dv}{dt}=2+\sin t\implies v(t) =2t-\cos t+c$
> $v(0)=2\times_{0}-\cos 0+c = c-1 = 0 \implies c=1$ and that means 
> $v(T)=2T-\cos T+1$

#### 1.1.5 The order of an ODE
The highest order [[Derivatives]] in an [[ODE]] defines the order of the [[ODE]].

That would mean that first derivative, e.g. $\dot{x}$ would have a higher order of the [[ODE]] than $\ddot{x}$ and so on.

#### 1.1.6 Riding your bike at constant speed
Find the position of your bike (at time $t$) if you are travelling at a constant speed	 of 60km/h along a perfectly straight road.

If $x=x(t)$ is the distance you have travelled at time $t$ then the corresponding [[ODE]] is
$$
\frac{dx}{dt}=60.
$$
This yields the general solution to the [[ODE]]
$$
x(t)= 60t+C
$$
To determine the constant $C$ we need more info, such as the initial position at time 0, in which that would be IVP.

For different vales of $C$ we get different solutions, and below we graph some of these. If $C=0$ then $y=60t$. All the other solutions are parallel to this line.

The curves $y=60t+C$ are called *solution curves* to the [[ODE]] ($*$). Note that in this particular case all curves are straight lines with slope 60.

#### 1.1.7 Motion of Projectiles
In this case, we can consider finding an expression for gravity.

##### Example
> [!help]+ Question
> Consider  an apple falling under gravity. Find an expression for the height $y$ of the apple at time $t$.

[[2023/Definitions/Newton's 2nd law of motion|Newton's 2nd law of motion]] is $F=ma$. The velocity of the apple is $\dot{y}$, and the acceleration of the apple would be $\ddot{y}$.

The force exerted on the apple is $F=-mg$.
$$
\implies F=-mg =\ddot{m}y
$$
$$
\implies \ddot{y}=-g
$$
Integrating this, $\dot{y}=-gt+c$ and $y=-\frac{gt^{2}}{2}+ct+d$

#### 1.1.8 Extra Reading: Realistic Models

For realistic objects, a projectile motion includes air resistance.

Most moving objects of a good model deal with air resistance proportional to the square of the velocity:
$$\frac{d^2y}{dt^2} = -g - f\frac{dy}{dt} \left|\frac{dy}{dt}\right|$$
For slower objects, a good model has air resistance proportional to velocity:

Realistic models may also include the fact that gravity diminishes as you move away from the earth's surface (Newton's inverse square law).

##### Example
Consider the motion of a ball subject to air resistance proportional to the square of the speed. Note that the air resistance vector is always directed against the direction of motion.

Decompose the coordinates to $x$ and $y$ directions and again apply [[Newton's 2nd law of motion]].

Note that 
$$
\sin \theta = \frac{\dot{y}}{\sqrt{ \dot{x}^{2} + \dot{y}^{2}}} \quad \text{and } \quad \cos \theta = \frac{\dot{x}}{\sqrt{ \dot{x}^{2}+\dot{y}^{2} }}
$$
Hence $F=ma$ in the $y$ directions gives 
$$
\begin{align}
&\quad \ \ m\ddot{y}=-mg -F_{D}\sin \theta \\
& \Rightarrow m \ddot{y} = -mg -kv^{2} \sin \theta \\
& \Rightarrow m \ddot{y} = -mg-k(\dot{x}^{2}+\dot{y}^{2}) \times \frac{\dot{y}}{\sqrt{ \dot{x}^{2}+\dot{y}^{2} }} \\
& \Rightarrow \ddot{y} = -g -\frac{k}{m}\dot{y}\sqrt{ \dot{x}^{2}+\dot{y}^{2} }
\end{align}
$$
In much of the same way:
$$
\ddot{x} = -\frac{k}{m}\dot{x}\sqrt{ \dot{x}^{2}+\dot{y}^{2} }
$$
This is a coupled system of [[ODE]] which is extremely difficult to solve analytically. However, numerical solutions are easy to obtain.

#### 1.1.9 Analytical and numerical solutions
To solve an [[ODE]] (or [[IVP]]) analytically means to give a solution curve in terms of continuous functions defined over a specific interval, where the solution is obtained exactly by analytic means (e.g., by integration). The solutions satisfies the [[ODE]] (and initial conditions) on direct substitution.

To solve an [[ODE]] or IVP *numerically* means to use an algorithm to generate a sequence of points which approximates a solution curve.

```ad-info
title: Important Remark
collapse: open

As we have already seen, the ODE
$$
\frac{dy}{dt}=f(t)
$$ 
can be solved analytically. The *solution* simply is 

$$
y=\int f(t) \, dt 
$$

```

### 1.2 Slope Fields and Equilibrium Solutions


