---
date: 15-04-2023
type: Lecture
subject: 
tags: lecture
Topic:: 
---
# [[Chapter 7 - Functions]]
#MATH1050 #Functions
# Notes

A function is a rule that associates a unique output to each input.

Functions are used heavily in all areas of mathematics and in most applications of mathematics.

Some examples of functions include:
- A formula that converts temperature in Fahrenheit to temperature in Celcius, $c=\frac{5}{9}(f-32)$, describes temperature in degrees centigrade as a function of temperature in degree Fahrenheit .
- A formula for the area of a circle in terms of its radius, $A=\pi r^{2}$, describes area as a function of radius.
- A table of values that given the human population of the world for each year from 1900 to 2000 describes population as a function of year.

Topics in this sections are:
- Introduction to functions
- A collection of standard functions
- Solving inequalities
- Composition of functions
- Inverse functions
- Limits of functions

## 7.1 Introduction to Functions

A *function* is a rule that assigns to each element $x$ in a set $A$ exactly one element from a set $B$. 

The notation $f(x)$ is used to denote the element in $B$ that arises from applying the function $f$ to the element $x$, and we say that $f$ maps $x$ to $f(x)$. We call $f(x)$ the value of $f$ at $x$, or the image of $x$ under $f$.

The set $A$ is called the *domain* of the function. It is the set of all possible inputs to the function.

The set of all possible values of the function is called the *range* of the function. The range is a subset of the set $B$.

There are some common notations used to denote functions. The notation $f: \mathbb{R}\to \mathbb{R}$ is read as "the function $f$ maps a real number to a real number".

---
> [!note] Domain Convention
> If a function is given by a formula and the domain is not specified, the convention is that the domain is the set of all real numbers for which the formula defines a real number.

Although we often use $x$ as the variable in the rule of a function, this is not required. For example, if $f$ is the function which computes the area of a circle given its radius then $f(r)=\pi r^{2}$, and we say that $f$ is a function of $r$.

We can represent a function $f: A \to B$ using an *arrow diagram*. We draw the set $A$ on the left and the set $B$ on the right, and draw an arrow from each $x \in A$ to its image $f(x)\in B$.

If an arrow diagram illustrates a function, then there will be a single arrow coming out of each element on the left.

The most common representation of a function is a graph with the domain of the function on the horizontal axis and its range on the vertical axis.

The graph of a function $f$ with domain $A$ is given by the set of ordered pairs $\{ (x,f(x))$ for all $x \in A \}$. If $f$ is a function of $x$, we often let $y=f(x)$ and draw the graph of $f$ on the $x,y$-axes.

An important property of a function $f$ is that each $x$ in the domain corresponds to a unique value $f(x)$. Thus, to check whether a graph represents a function, we can use the vertical line test.

> [!important] Vertical Line Test
>  A curve in the $x,y$ plane is the graph of a function of $x$ if and only if no vertical line intersects the curve more than once.

## 7.2 A Collection of Standard Functions
### Polynomial Functions

A *polynomial* in the variable $x$ is an expression of the form
$$
a_{n}x^n+_{n-1}x^{n-1}+n_{n-2}x^{n-2}+\dots+a_{2}x^{2}+a_{1}x+a_{0},
$$
Where $n \in \mathbb{N}$ is the degree (highest power) of the polynomial, $a_{n},a_{n-1},a_{n-2},\dots,a_{2},a_{1},a_{0}$ are the coefficients of $x$, and $a_{n}\neq 0$.

The general shape of the graph of a polynomial function depends on the degree of the polynomial.

---

A polynomial function $f$ of degree 0 is defined by a formula of the form $f(x)=a$ where  $a$ is a real number. It is called a *constant function* and its graph is a horizontal line.

---

A polynomial function $f$ of degree 1 is defined by a formula of the form $f(x)=ax+b$ where $a$ and $b$ are real numbers $(a\neq 0)$. It is called a *linear function* and its graph is a line with slope $a$.

---

A polynomial function $f$ of degree 2 is defined by a formula of the form $f(x)=ax^{2}+bx+c$ where $a,b$ and $c$ are real numbers $(a\neq 0)$. It is called a *quadratic function* and its graph is a parabola.

---

A polynomial function $f$ of degree 3 is defined by a formula of the form $f(x)=ax^{3}+bx^{2}+cx+d$ where $a,b,c$ and $d$ are real numbers $(a\neq 0)$. It is called a *cubic function*.

---

A Polynomial function $f$ of even degree greater than two has a graph that is similar in shape to that of a quadratic function, but potentially having some bumps in the middle.

---

A polynomial function $f$ of odd degree greater than three has a graph that is similar in shape to that of a cubic function, but potentially having more bumps in the middle.

---

### Power Functions

A *power function* $f$ is defined by a formula of the form $f(x)=x^a$ where $a$ is a real number.

---

If $a$ is a positive integer, then the power function $f(x)=x^a$ is a polynomial function of degree $a$ (with only one term).

---

If $a=\frac{1}{n}$ where $n$ is a positive integer, then $f(x)=x^a=\sqrt[n]{x}$ is the $n$th root function. If $n$ is even, then the domain of $f(x)$ is $[0,\infty)$ and the graph of $f(x)=\sqrt[n]{x}$ looks similar to that of $f(x)=\sqrt{x }$ shown below. If $n$ is odd, then the domain of $f(x)$ is $\mathbb{R}$ and the graph of $f(x)=\sqrt[n]{x  }$ looks similar to that of $f(x)=\sqrt[3]{x  }$.

---

If $a=-1$. then $f(x)=\frac{1}{x}$ is the *reciprocal function*. Its domain and range are both $\mathbb{R} \backslash \{ 0\}$ and its graph is a hyperbola.

---

### Absolute Value Functions

An absolute value function is a function whose rule involves absolute value bars. An absolute value function can be written as a piecewise defined function.

---

### Rational Functions

A *rational function* $f$ is defined by a formula of the form $f(x)=\frac{p(x)}{q(x)}$ where $p$ and $q$ are polynomial functions. Unless otherwise specified, the domain of $f$ consists of all real numbers $x$ such that $q(x)\neq 0$.

The graph of the rational function $f(x)=\frac{p(x)}{q(x)}$ may have vertical asymptotes at those values of $x$ for which $q(x)=0$. 

A *non-vertical asymptote* is a line that the graph of a function approaches arbitrarily closely, far from the origin.

---

### Exponential Functions

An exponential function is defined by a rule of the form $f(x)=a^x$ where $a$ is a positive real number.

When $a>1$, the graph of $f(x)=a^x$ has the $x$-axis as a horizontal asymptote, passes through the point $(0,1)$ and rises steeply to the right of the $y-$axis.

When $a<1$, the graph of $f(x)=a^x$ has the $x-$axis as a horizontal asymptote, passes through the point $(0,1)$ and rises steeply to the left of the $y$-axis.

---

### Logarithmic Functions

A logarithmic function is defined by a rule of the form $f(x)=\log_{a}x$ where the base $a$ is a positive real number.

A logarithmic function has domain $(0,\infty)$. Its graph has the $y$-axis as a vertical asymptote and it passes through the point $(1,0)$. If $a>1$, then the graph rises slowly for $x>1$, whereas if $a<1$, then the graph descends slowly for $x>1$.

## 7.3 Solving Inequalities

Solving inequalities is similar to solving equations. However; remember that if you multiply (or divide) both sides of an inequality by a negative number, you must reverse the inequality sign. 

## 7.4 Composition of Functions

Often we apply one function and then apply another function to the result of the first function.

Given any two functions $f$ and $g$, we start with a number $x$ in the domain of $g$ and determine its image $g(x)$. If this number is in the domain of $f$, we can now apply $f$ to the number $g(x)$ and obtain the value $f(g(x))$. This process is called the *composition* of $f$ and $g$.

Given two functions $f$ and $g$, the function will input $x$ and output $f(g(x))$ is called the *composite function* of $f$ and $g$ and is denoted $f \circ g$.

The domain of $f \circ g$ is the set of all $x$ in the domain of $g$ such that $g(x)$ is in the domain of $f$.

To apply the function $f \circ g$, we must first apply $g$ and then apply $f$.

## 7.5 Inverse Functions

If $f$ is a function, then each element $x$ in the domain of $f$ gives rise to a unique value $f(x)$ in the range of $f$. However, it may be the case that multiple elements in the domain gives rise to the same element in the range.

Let $f$ be the function defined by $f(x)=x^{2}$, so $f(2)=4$ and $f(-2)=4$. The question: 'Which value of $x$ gives rise to the value 4?' does not have a unique answer. 

Hence, there is no function that reverse the action of $f$ to map elements in $B$ back to their corresponding elements in $A$.

A function $f$ is called a *one to one function* if it never takes the same value twice; that is
$$
f(x_{1})\neq f(x_{2})\quad \text{for }x_{1}\neq x_{2} 
$$
Let $f$ be a one to one function with domain $A$ and range $B$. Then its inverse function $f^{-1}$ has domain $B$ and range $A$ and is defined by 
$$
f^{-1}(b)=a \text{ if and only if }f(a)=b
$$
for any $b$ in $B$.

---

To determine the inverse of a one to one function $f$:

1. Solve the equation $y=f(x)$ for $x$ in terms of $y$.
2. To express $f^{-1}$ as a function of $x$, interchange $x$ and $y$ in the result of the previous step.

---

### Inverse Trigonometric Functions

The trigonometric functions sine, cosine and tangent take an angle as input and return the value of the trigonometric ratio of that angle. We often wish to do the reverse of this; that is, given the value of trigonometric ratio, compute the corresponding angle. For this, we use the inverse s of the trigonometric functions.

with domain $\mathbb{R}$, none of the functions sine, cosine or tangent are one to one, so we must restrict the domains of the trigonometric functions.

The function $f(x)=\sin x$ where $-\frac{\pi}{2}\leq x\leq \frac{\pi}{2}$ is a one to one function. The function $f^{-1}$ exists and is denoted $\arcsin$ or $\sin^{-1}$. The inverse sine function has domain $[-1,1]$ and range $\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$.

The function $f(x)=\cos x$ where $0\leq x\leq \pi$ is a one to one function. The function $f^{-1}$ exists and is denoted $\arccos$ or $\cos^{-1}$. The inverse cosine function has domain $[-1,1]$ and range $[0,\pi]$.

The function $f(x)=\tan x$ where $-\frac{\pi}{x}\leq x\leq \frac{\pi}{2}$ is a one to one function. The function $f^{-1}$ exists and is denoted $\arctan$ or $\tan^{-1}$. The inverse tangent function has domain $\mathbb{R}$ and range $\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$.

## 7.6 Limits of Functions

When working with functions we often need to know what the function values are close to a particular value that may, or may not, be in the domain of the function. To obtain this type of information, we use limits, which describe function values for elements of the domain which are close to the particular value of interest.

Consider the following example: Let $f$ be the function defined by $f(x)=x^{2}+1$. What happens to the values of $f(x)$ as $x$ approaches 2 from the left? What happens to the values of $f(x)$ as $x$ approaches 2 from the right?

We express this as 'the limit of the function $f(x)=x^{2}+1$ as $x$ approaches 2 is equal to 5'. We write this as 
$$
\lim_{ x \to 2 } (x^{2}+1)=5
$$
Let $f$ be a function defined on both sides of the value $a$, except possibly at $a$. We write $\lim_{ x \to a }f(x)=L$ and say 'the limit of $f(x)$ as $x$ approaches $a$ equals $L$.' if we can make the values of $f(x)$ arbitrarily close to $L$ by taking $x$ to be sufficiently close to $a$ (on either side) but not equal to $a$.

Notice that we do not let $x=a$ when evaluating the limit. 

### One Sided Limits

Let $f$ be a function defined on both sides of $a$, except possible at $a$. If $\lim_{ x \to a }f(x)=L$ then the function values of muse approach $L$ as $x$ approaches $a$ with $x<a$ AND also as $x$ approaches $a$ with $x>a$.

If the graph of our function $f$ has a break of $x=a$, $\lim_{ x \to a }f(x)$ may not exist, but we can talk about the one sided limits as $x$ approaches $a$ from above and from below.

The notation $\lim_{ x \to a^+ }f(x)=L$ means that the values of $f(x)$ approach $L$ as $x$ approaches $a$ with $x>a$.

The notation $\lim_{ x \to a^- }f(x)=L$ means that the values of $f(x)$ approach $L$ as $x$ approaches $a$ with $x<a$.

### Limits at Infinity and Infinite Limits

The notation $\lim_{ x \to \infty }f(x)=L$ means that as $x$ gets larger and larger, $f(x)$ gets closer and closer to the value $L$.

The notation $\lim_{ x \to -\infty }f(x)=L$ means that as $x$ gets larger and larger in the negative sense, $f(x)$ gets closer and closer to the value $L$. 

### Continuous Functions

A function $f$ is continuous at a number $a$ if 
$$
\lim_{ x \to a } f(x)=f(a)
$$
A function $f$ is continuous on an interval if it is continuous at every number in the interval.










