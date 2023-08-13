---
date: 25-07-2023
type: Lecture
subject: 
tags: lecture
Topic:: 
---
# [[Functions]]
#MATH1051

## 2.1 Definition: Function, domain, range

Let $X$ and $Y$ be subsets of $\mathbb{R}$. A function $f:X \to Y$ is a rule which assigns to every element $x\in X$ *exactly one* element $f(x)\in Y$ called the value of $f$ at $x$. Here $X$ is called the *domain* of $f$ and 
$$
f(X)=\{ f(x)\mid x\in X\}
$$
is called the *range* of $f$, also written range$(f)$.

The range of $f$, $f(X)$, is a subset of $Y$. The range is the set of all possible values of $f(x)$ as $x$ varies throughout the domain. Note that $f(X)$ is not necessarily equal to all of $Y$.

## 2.2 Graphs

We can represent a function by drawing its *graphs* which is the set of all points $(x,y)$ in a plane where $y=f(x)$.

## 2.3 Convention (Domain)

An expression like "the function $y=\sqrt{ 1-x^{2} }$" means the function $f$ with $y=f(x)=\sqrt{ 1-x^{2} }$. When the domain is not specified it is taken to be the largest subset of $\mathbb{R}$ on which the rule is defined (and gives a real output). In this example, the domain would be $[-1,1]$.

## 2.4 Vertical line test

Not every curve represents the graph of a function. The crucial function property states that for each value $x$ in the domain there must correspond *exactly one* value $y$ in the range. Thus in the graph of a function, any vertical line $x=$ constant must cut the graph in *at most one point.*

The graph for the circle $x^{2}+y^{2}=1$, we can say that the vertical line intersects the circle at two points. In this case, the two $y$ values are given by $y=\pm \sqrt{ 1-x^{2} }$. Therefore $x^{2}+y^{2}=1$ does not give rise to a function on any domain intersecting $(-1,1)$.

## 2.5 Exponential functions

An exponential function is one of the form $f(x)=a^{x}$, where the *base* $a$ us a positive constant, and $x$ is said to be the *exponent* or *power*. One very common exponential function which we shall see often in this course is given by $f(x)=e^x$. It cuts the $y-$axis at $y=1.$


```functionplot
---
title: Exponential Function
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
f(x)=2^x
```
Exponential functions are very useful for modelling many natural phenomena such as population growth (base $a>1$) and radioactive decay (base $0<a<1$).

## 2.7 One-to-one functions

A function $f:X\to Y$ is said to be *one-to-one* or *injective* if $\forall x_{1},x_{2}\in X$.

On the graph of $f$, the 1-1 property holds exactly if any horizontal line $y=$ constant cuts through the curve in at most one place. 

If one $x$ corresponds to another $x$, then it is not one-to-one. Similarly, if $y$ corresponds to another $y$ of the same value, then the function is not one-to-one.

### 2.7.1 Example
If the value of the function $y=x^2+3$:

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
y=x^2+3
```

Then this is not a one-to-one function. This is because it does pass the vertical line test (with one $x$ corresponding to one $x$ only), but it does not pass the horizontal line test (for example, $x=2 \cap x=-2$ yield the same $y$ value (with $y=7$)).

On the other hand, for example, $y=e^{ 2x }$:


```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
y=exp(2x)
```



## 2.8 Inverse Functions

Let $f:X\to Y$ be a 1-1 function. For each $y\in f(X)$ the range of $f$, there is a unique $x$ with $f(x)=y$. Define the *inverse function* $f^{-1}:f(X)\to X$ by $f^{-1}(y)=$ that unique $x \in X$ with $f(x)=y$.
So $f^{-1}(y)=x \iff y=f(x).$

The inverse function reverses the direction of the mapping.

## 2.9 How to find $f^{-1}$

$f(x)=y\implies f^{-1}(y)=x$
$\therefore$ To find $f^{-1}$ solve for $x$ in terms of $y$.


```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
f(x)=(2x-5)^(1/3)
```

## 2.10 Logarithms

Logarithms are the inverse functions of the exponential functions.


```functionplot
---
title: Logarithmic Function
xLabel: 
yLabel: 
bounds: [-4,4,-1,10]
disableZoom: true
grid: true
---
y=2^x
y=3^x
y=4^x
```
> Three plots of $y=a^x$. (Green = $4^x$) (Red = $3^x$) (Blue = $2^x$)

From the graph of $y=a^x$ ($a\neq 1$ a positive constant), we see that it is 1-1 and thus has an inverse, denoted $\log_{a}x$. From this definition we have the following facts:
$$
\begin{align}
\log_{a}(a^x) & = x  & \forall x \in \mathbb{R}, \\
a^{\log_{a}x} & = x  &  \forall x > 0.
\end{align}
$$

## 2.11 Natural logarithm

Now we set $a=e$ (Euler's number $=2.71828\dots$) The inverse function of $f(x)=e^x$ is:
$$
\log_{e}(x)\equiv \ln x
$$

```functionplot
---
title: Graphs of natural logarithm and its inverse
xLabel: 
yLabel: 
bounds: [-3,6,-3,6]
disableZoom: true
grid: true
---
y=exp(x)
y=log(x)
```

## 2.12 Inverse Trigonometric functions

The function $y=\sin x$ is 1-1 if we just define it over the interval $\left[\frac{\pi}{2} , \frac{\pi}{2} \right]$. The inverse function for this part of $\sin x$ is denoted $\arcsin x$. Thus $\arcsin x$ is defined on the interval $[-1,1]$ and takes values in the range $\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$. The graph can easily be obtained by reflecting the graph of $\sin x$ about the line $y=x$ over the appropriate interval.

Similarly $y=\cos x$ is 1-1 on the interval $[0,\pi]$ and its inverse function is denoted $\arccos x$. The function $\arccos x$ is defined on $[-1,1]$ and takes values in the range $[0,\pi]$.

Also, $\tan$ is 1-1 on the open interval $\left( -\frac{\pi}{2}, \frac{\pi}{2}  \right)$ with inverse function denoted by $\arctan x$. Hence $\arctan$ has the domain $(-\infty,\infty)$ with values in the range $\left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$.



```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f^(-1)(x)=(exp(x)/(1+2*exp(x)))
```

