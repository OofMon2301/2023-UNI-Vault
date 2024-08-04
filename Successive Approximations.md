---
subject: MATH2001
week: "1"
type: lecture
topic: ODEs
date: 2024-08-05
---
#MATH2001

# Method of Successive Approximations

## 2.1 A modified theorem

We note that it is always possible to apply a variable shift so that the initial value problem can be written as
$$
\frac{dy}{dx} = f(x,y), \quad y(0) = 0
$$
### Example: $y' = 2(x-1)(y-1), y(1)=2$
$$
\begin{gather}
\text{Set }
\begin{cases}
\bar{x} = x-1 \\ \\
\bar{y} = y-2
\end{cases}
\text{ and then check} \frac{dy}{dx} = \frac{d\bar{y}}{d\bar{x}} \\
\implies \frac{d\bar{y}}{d\bar{x}}=2\bar{x}(\bar{y}+1), \bar{y}(0)=0
\end{gather}
$$

Without loss of generality, we will consider this problem wherever the initial point is at the origin. We can restate the result as follows.

```ad-note
If $f$ and $f_y$ are continuous in some rectangle
$$R = \{ (x,y) \mid |x| \leq a, |y| \leq b, \}$$
then there is some interval which contains a unique solution $y=\phi(x)$ of the initial value problem
$$\frac{dy}{dx}=f(x,y) \quad y(0)=0$$
```

