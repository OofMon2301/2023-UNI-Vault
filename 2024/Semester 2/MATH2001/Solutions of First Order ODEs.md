---
subject: MATH2001
week: "1"
type: lecture
topic: 1
date: 2024-08-05
---
#MATH2001

# First Order ODEs

- How do you solve an IVP associated with directly integrable, separable or linear ODEs?
- Under what conditions does a solution to an IVP problem exist?
- Under what conditions is a solution to an IVP problem unique? 

```ad-info
title: Directly Integrable
$$\frac{dy}{dx} = f(x)$$
$$y(x) = \int f(x) \, dx + c$$
```

```ad-info
title: Separable
$$\frac{dy}{dx} = f(x)g(y)$$
$$\int \frac{1}{g(y)} dx = \int f(x) dx$$
$$\int \frac{1}{g(y)} dy = \int f(x) dx \quad  \text{(Implicit Solution)}$$
```

```ad-info
title: Linear Differential Equations
$$\frac{dy}{dx} = q(x) - p(x)y$$
$$I\frac{dy}{dx}+Ipy=Iq \quad \text{I is the integrating factor}$$
$$\text{Choose I s.t.} \,\, LHS = \frac{d}{dx}(Iy)$$
$$I=e^{ \int p dx  }$$ 
```

In most applications involving first order ODEs, we are required to solve an IVP.
Generally this is a problem of the form
$$
\frac{dy}{dx} = f(x,y), \quad y(x_{0}) = y_{0}.
$$
In other words, we seek to find solutions of the ODE which pass through the point $(x_{0},y_{0})$ in the $x-y$ plane.

## Example: $\frac{dy}{dx}=x, y(0)=1$ has a unique solution
$$
\begin{align}
 \implies y(x) = \frac{1}{2}x^{2}+c \\
y(0) = 1 \implies 1 = 0 + c \implies y(x)=\frac{1}{2}x^{2}+1
\end{align}
$$
## Example: $\frac{dy}{dx}=3xy^{\frac{1}{3}}, \, y(0)=0$ has more than one solution
$$
\begin{gather}
\implies \int y^{\frac{-1}{3}} = 3\int x dx \\
\implies \frac{\frac{3}{2}y^{\frac{2}{3}=}3}{2}x^{2}+c \\
y(0) = 0 \implies c = 0 \\
\implies y^{\frac{2}{3}} = x^{2} \implies y = x ^{3} o
\end{gather}
$$

## Example: $\frac{dy}{dx} = \frac{x-y}{x}, \, y(0) =1$ has no solution
$$
\implies \frac{dy}{dx}+ \frac{1}{x} y = 1 \quad (\text{Integrating factor} \quad I =e^{ \int \frac{1}{x} dx } =x)
$$
$$
\begin{gather}
\implies x \frac{dy}{dx} + y = x \\
\implies \frac{d}{dx} (xy) = x \\
\implies xy = \frac{1}{2} x^{2} + c \quad \text{Family of hyperbolas} \\ 
y(0) =1 \implies 0 = 0 + c \\
\implies xy = \frac{1}{2}x^{2} \implies y = \frac{1}{2}x \\ 
\text{Does not satisfy the Initial Conditions}
\end{gather}
$$


