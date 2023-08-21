---
date: 12-05-2023
type: Lecture
subject: MATH1050
tags: lecture
Topic:: 
---
# [[Chapter 8 - Differentiation]]

^140362

#MATH1050 #Calculus
# Notes
*This chapter is not complete and might remain so.*
In many applications of mathematics, it is very important to be able to calculate the gradient, or slope, of the graph of a function at a particular point.

This gradient is called the derivative of the function at the point and it measures the rate of change of the function at that point.

Derivatives of functions provide useful information about the graph of a function and also have important applications in many areas of science and economics.

In this section we will look at the definition of the derivative of a function and review some rules that allow us to calculate the derivatives of many functions.

We will apply our knowledge of derivatives to sketch the graphs of functions and to solve optimisation problems and problems involving rates of change.

Topics in this section are:
-  Tangent Lines
- The derivative of a function ^ee6555
- Differentiation rules
- Critical points and curve sketching
- Applications of differentiation.


## 8.1 Tangent Lines

The slope of a line describes the rate of change of $y$ with respect to $x$.

A secant line is a line that passes through two points on a curve.

For a curve $y=f(x)$, we can use the slope of a secant line to describe the average rate of change of $f(x)$ with respect to $x$ over a given interval of values for $x$.

The slope of the secant line passing through the points $(a,f(a))$ and $(b,f(b))$ is $\frac{f(b)-f(a)}{b-a}$.

Another way of writing the slope of the tangent line to $f(x)$ at $x=a$ is to let $b=a+h$. Then $b \to a$ is equivalent to $h \to 0$ and the slope of the tangent line to $f(x)$ at $x=a$ is
$$
\lim_{ h \to 0 } \frac{f(a+h)-f(a)}{a+h-a}=\lim_{ h \to 0 } \frac{f(a+h)-f(a)}{h}
$$
## 8.2 The Derivative of a Function

The derivative of a function $f$ at the number $a$, denoted by $f'(a)$ is 
$$
f'(a)=\lim_{ h \to 0 } \frac{f(a+h)-f(a)}{h}
$$
if this limit exists.

Thus the tangent line to the curve $y=f(x)$ at $x=a$ is the line through $(a,f(a))$ whose slope is equal to $f'(a)$, the derivative of $f$ at $a$.

The derivative $f'(a)$ is the instantaneous rate of change of $y=f(x)$ with respect to $x$ when $x=a$.

Given a function $f$, we can define a new function, called the derivative of $f$, and denoted $f'$, by the rule that
$$
f'(x)=\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}
$$
The domain of $f'$ is the set of all $x$ in the domain of $f$ such that $f'(x)$ exists.

The derivative of $f$ is also called the derived function of $f$. The process of determining the derivative of a function $f$ is called differentiation.

If $y=f(x)$, then other notation commonly used for the derivative $f'(x)$ includes:
$$
y' \quad \frac{dy}{dx} \quad \frac{df}{dx} \quad \frac{d}{dx}f(x)
$$
A function $f$ is said to be differentiable at $a$ if $f'(a)$ exists.

## 8.3 Differentiation Rules

Determining derivatives from the definition can be time-consuming. Luckily there are some rules for differentiation that speed up the process. The proofs of these rules can be found in most calculus textbooks, but you do not need to know the proofs for this course.

---

The derivative of a constant function is zero.

If $f(x)=x^n$, then $f'(x)=nx^{n-1}$ for $n \in \mathbb{R}$.

### Constant Multiple Rule
If $c$ is a constant and $f$ is a differentiable function, then
$$
\frac{d}{dx}(cf(x))=c \frac{d}{dx}f(x)
$$
### Sum Rule
If $f$ and $g$ are both differentiable functions, then
$$
\frac{d}{dx}(f(x)+g(x))=\frac{d}{dx}f(x)+\frac{d}{dx}g(x)
$$
This rule can also be written as $(f+g)'=f'+g'$.

### Product Rule
If $f$ and $g$ are both differentiable functions, then
$$
\frac{d}{dx}\left( \frac{f(x)}{g(x)} \right)=\frac{\left( g(x) \frac{d}{dx}f(x)-f(x) \frac{d}{dx}g(x) \right)}{(g(x))^2}
$$
### Chain Rule (Composite Function Rule)

^59e87f

If $f$ and $g$ are both differentiable functions, then
$$
(f\circ g)'(x)=f'(g(x))g'(x)
$$
If $y=f(u)$ and $u=g(x)$, then this rule can be written as
$$
\frac{dy}{dx}=\frac{dy}{du} \frac{du}{dx}.
$$
To apply the chain rule, think about starting with the outside function and working your way in.  ^1b528e

---

So far we have only looked at deriving relations where $y$ or $f(x)$ is defined explicitly as a relation of $x$. What happens if $y$ is defined implicitly as a relation of $x$, such as $y^{2}=x$ or  $y^{3}+2y=4x^{3}$? We can use a technique called *implicit differentiation* which is based on the chain rule.

Let's look at the derivative of $x^{2}+y^{2}=25$ (Circle, radius 5, centred at the origin). We differentiate both sides with respect to $x$,
$$
\frac{d}{dx}(x^{2}+y^{2})=\frac{d}{dx}25
$$
$$
\implies \frac{d}{dx}(x^{2})+\frac{d}{dx}(y^{2})=0
$$
We can easily work out $\frac{d}{dx}(x^2)$, but how can we do $\frac{d}{dx}(y^{2})$?

This is where the chain rule comes in.
$$
\frac{d}{dx}(y^{2})=\frac{d}{dy}(y^{2}) \frac{dy}{dx}=2y \frac{dy}{dx}
$$
So we now have $2x+2y \frac{dy}{dc}=0$
$$
\implies \frac{dy}{dx}= -\frac{2x}{2y}
$$
$$
\implies \frac{dy}{dx}= -\frac{x}{y}
$$
So the derivative of $y$ with respect to $x$, where $y$ is defined in terms of $x$ implicitly by the equation $x^{2}+y^{2}=25$, is $\frac{dy}{dx}=-\frac{x}{y}$.

---

### Derivatives of Trigonometric Functions

Note that when we use the trigonometric functions, such as $f(x)=\sin x$, all angles are measured in radians.

To determine the derivative of $f(x)=\sin x$ we require two special limits:
$$
\lim_{ h \to 0 } \frac{\sin h}{h}=1 \quad \lim_{ h \to 0 } \frac{\cos(h-1)}{h}=0
$$
The proofs of these limits can be found in most calculus textbooks, but we won't worry about the proofs in this course.

If $f(x)=\sin x$ then $f'(x)=\cos x$.

#### Proof
$$
\begin{align}
f'(x) &= \lim_{ h \to 0 } \frac{\sin (x+h)-\sin x}{h}  \\
&= \lim_{ h \to 0 } \frac{\sin x \cos h + \cos x \sin h - \sin x}{h} \\
&= \lim_{  h \to 0 } \left( \frac{\sin x \cos h - \sin x}{h}+\frac{\cos x \sin h}{h} \right) \\
&= \lim_{ h \to 0 } \left( \sin x \left( \frac{\cos h -1}{h} \right) + \cos x \left( \frac{\sin h}{h} \right) \right) \\
&= \lim_{ h \to 0 } \sin x \lim_{ h \to 0 } \left( \frac{\cos h-1}{h} \right) + \lim_{  h \to 0 } \cos x \lim_{ h \to 0 } \left( \frac{\sin h }{h} \right)  \\
&= \sin x \cdot 0 + \cos x \cdot 1 \\
&= \cos x
\end{align}
$$
Using a similar method to the previous page, we can show that if $f(x)=\cos x$ then $f'(x)=-\sin x$.

The derivatives of the trigonometric functions are summarised below:

---
$$
\frac{d}{dx}(\sin x)=\cos x
$$
$$
\frac{d}{dx}(\cos x)=-\sin x
$$
$$
\frac{d}{dx}(\tan x)=sec^{2}\ x
$$
$$
\frac{d}{dx}(\csc x)=-\csc x\cot x
$$
$$
\frac{d}{dx}(\sec x)=\sec x \tan x
$$
$$
\frac{d}{dx}(\cot x)=-\csc ^{2}x
$$

If $f(x)=e^{ x }$, then $f'(x)=e^{ x }$. Note: Another way of writing $e^{ x }$ is $\exp(x)$.

Thus, on the graph of $f(x)=e^{ x }$, the slope of the tangent line at each point is equal to the function value at that point.

If $f(x)=\ln x$, then $f'(x)=\frac{1}{x}$. Note that here $x>0$ since the domain of $f(x)=\ln x$ is $x>0$.

## 8.4 Critical Points and Curve Sketching

A function $f$ has a *global maximum* at $c$ if $f(c)\geq f(x)$ for all $x$ in the domain of $f$. The number $f(c)$ is called the maximum value of $f$ on its domain. A global maximum is also called an *absolute maximum*. ^16e6b7

A function $f$ has a *global minimum* at $c$ if  if $f(c)\leq f(x)$ for all $x$ in the domain of $f$. The number $f(c)$ is called the minimum value of $f$ on its domain. A global minimum is also called an *absolute minimum*. ^f4176d

A function $f$ has a *local maximum* at $c$ if $f(c)\geq f(x)$ for all $x$ near $c$.

A function $f$ has a *local minimum* at $c$ if $f(c)\leq f(x)$ for all $x$ near $c$.

If $f$ has a local maximum or minimum at $a$, and if $f'(a)$ exists, then $f'(a)=0$. The point $(a,f(a))$ is a *critical point* of the function $f$ if $f'(a)=0$ or if $f'(a)$ does not exists (but $f(a)$ does).

Thus, all local maxima and minima are critical points. Note however, that not all critical points are local maxima or minima.

To find any local maximum or minimum of a function $f$, we solve the equation $f'=0$. We can then classify any critical points we find using the information about the function near the critical point.

A function $f$ is strictly increasing on an interval $[a,b]$ if for all $x_{1}$ and $x_{2}$ in $[a,b], f(x_{1})<f(x_{2})$ whenever $x_{1}<x_{2}$.

If $f'(x)>0$ on an interval, then $f$ is strictly increasing on that interval.
If $f'(x)<0$ on an interval, then $f$ is strictly decreasing on that interval.
If $f'(x)=0$ on an interval, then $f$ is constant on that interval.

### First Derivative Test

Suppose that the function $f$ has a critical point at $x=c$. Then

If $f'$ changes sign from positive to negative at $c$, then $f$ has a local maximum at $c$.
If $f'$ changes sign from negative to positive at $c$, then $f$ has a local minimum at $c$.
If $f'$ does not change sign at $c$, then $f$ has neither a local maximum nor a local minimum at $c$.

### The Second Derivative

The *second derivative* of a function $f$ is the derivative of the derived function $f'$. The second derivative of $f$ is denoted $f"$.

The second derivative provides information about the concavity of the graph of a function.

If the graph of $f$ lies above all of its tangent lines on an interval, then it is *concave up* on that interval. If the graph of $f$ lies below all of its tangent lines on an interval, then it is *concave down* on that interval.

If $f"(x)>0$ for all $x$ in an interval, then the graph of $f$ is concave up on that interval. If $f"(x)<0$ for all $x$ in an interval, then the graph of $f$ is concave down on that interval.

### Second Derivative Test

Suppose $f"$ is a continuous function near a point $c$.

If $f'(c)=0$ and $f"(c)>0$, then $f$ has a local minimum (concave up) at $c$.
If $f'(c)=0$ and $f"(c)<0$, then $f$ has a local maximum (concave down) at $c$.
If $f"(c)=0$, then this test is inconclusive.

### Curve Sketching

To sketch the curve of a function $y=f(x)$:

- Determine the domain of $f$.
- Determine the $y$-intercept of the graph by evaluating $f(0)$.
- If it is possible to solve the equation $f(x)=0$, find the $x$-intercepts of the graph.
- Determine $f'$ and identify the intervals of which $f$ is increasing and the intervals on which $f$ is decreasing.
- Find the critical points of $f$. Determine which critical points are local maxima or local minima (use first or second derivative test).
- Determine $f"$ and identify the intervals on which $f$ is concave up and the intervals on which $f$ is concave down.
- Sketch the graph.

## 8.5 Applications of Differentiation

### Rates of Change

Rates of change have important applications in many areas. The derivative of a function $f$ with respect to a variable $x$ gives the rate of change of $f$ with respect to $x$.

If $s(t)$ is a function of displacement with respect to time, then the derivative $s'(t)$ gives the velocity, since velocity is the rate of change of displace with respect to time.

Similarly, $s"(t)$ gives the acceleration, since acceleration is the rate of change of velocity with respect to time.

---

In economics it is often important to study the functions that describe the cost of producing various quantities of a given product.

In economics marginal cost is defined as the cost of producing one more unit of product.

Let $C(x)$ be the total cost to produce $x$ unites of a certain commodity. The *marginal cost* is the rate of change of the cost function with respect to the number of units produced.
$$
C'(x)\approx C(x+1)-C(x)
$$


