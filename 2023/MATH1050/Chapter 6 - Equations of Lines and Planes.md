---
date: 03-04-2023
type: Lecture
subject: 
tags: lecture
Topic:: 
---
# [[Chapter 6 - Equations of Lines and Planes]]
#MATH1050

In Chapters 2 and 3, we learned about vectors and how to use them to solve problems in physics and engineering. In this chapter, we use vectors to describe lines and planes in space.

## 6.1 Scalar Equation for a plane

The equation of a plane can be expressed using scalars or vectors. In this section we will sketch planes in $\mathbb{R}^3$ and determine their scalar equations.

### 6.1.1 Horizontal Planes

The $x-$ and $y-$axes lie in the horizontal plane $z=0$. All other horizontal planes are parallel to $z=0$ and are given by the equation $z=c$.

### 6.1.2 Vertical Planes

A vertical plane has the form $ax+by=d$: it depends of $x$ and $y$ only and $z$ does not appear. If you are not told this is an equation of a plane, or, equivalently, an equation in $\mathbb{R}^3$, then you cannot distinguish it from the equation of a line in $\mathbb{R}^2$.

### 6.1.3 Arbitrary planes

The general equation of a plane in $\mathbb{R}^3$ is given by:
$$
ax+by+cz=d
$$
with $a,b,c,d$ fixed real numbers, If the plane is not vertical, i.e., $c \neq 0$, this equation can be rearranged so that $z$ is expressed in terms of $x$ and $y$:
$$
z=-(a/c)x-(b/c)y+(d/c)=mx+ny+z_{0}
$$
The easiest way to sketch the plane by hand is to use the triangle method: If all of $a,b,c \neq 0$ the plane $ax +by +cz=d$ intercepts each axis at precisely one point. These three points make up a triangle which fixes the plane.
![[Pasted image 20230403214205.png]]

The triangle method is based on the simple fact that any three points that lie in a plane uniquely determine this plane provided these three points do not lie on a single straight line.

> [!note]+
> It is customary to say the equation of a plane, even though it is not unique. Multiplying the equation of a plane by a nonzero constant gives another equation for the same plane. For example, $x-2y+3z=4$ and $-2x+4y-6z=-8$ are equations of the same plane.

The following picture shows the intersection of the planes $2x+3y-z+6=0$ and $z=9x-4y+5$. Note that the intersection is a line.

![[Pasted image 20230403214435.png]]

## 6.2 Vector equation of a plane I

We have seen in section 6.1 that any three points in $\mathbb{R}^3$ which do not lie on a straight line determine a plane. A plane can also be specified by a point $P_{0}=(x_{0},y_{0},z_{0})$ in the plane and a vector $\mathbf{n}$ which is perpendicular to the plane.

Let $P=(x,y,z)$ be an arbitrary point in the plane. Let $\mathbf{r}_{0}$ and $\mathbf{r}$ be the position vectors of $P_{0}$ and $P$ respectively. Then $\vec{P_{0}P}=\mathbf{r}-\mathbf{r}_{0}$. Since $\vec{P_{0}P}$ is perpendicular to $\mathbf{n}$,

Hence 
$$
\mathbf{n} \cdot(\mathbf{r}-\mathbf{r}_{0})=0
$$
This is the **vector equation** for a plane.

The vector and scalar equations are in fact the same, as shown next.

We start with the vector equation, where $\mathbf{n}=(a,b,c)$ is a normal, $\mathbf{r}_{0}=(x_{0},y_{0},z_{0})$ and $\mathbf{r}=(x,y,z)$. Then
$$
\begin{align}
\mathbf{n} \cdot (\mathbf{r}-\mathbf{r}_{0}) &=0 \\
(a,b,c)\cdot(x-x_{0},y-y_{0},z-z_{0})&=0 \\
ax+by+cz&=d
\end{align}
$$
where $d=\mathbf{n}\cdot \mathbf{r}_{0}=ax_{0}+by_{0}+cz_{0}$.

> [!note]+ Important Remark
> Given a plane $ax+by+cz=d$ we now have a geometric interpretation of the vector $(a,b,c)$: it is a normal to the plane. Obviously the normal is not unique since any vector of the form $k(a,b,c)$, where $k$ is nonzero scalar, is also a normal.

Given a plane $P$ in a vector equation:
$$
P: \quad n \cdot r = n \cdot r_{0}
$$
$$
\begin{gather*}
\begin{aligned}
\text{Let} \quad n & =\begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix}  & r & =\begin{pmatrix}
x \\
y \\
z
\end{pmatrix}  & r_{0} & =\begin{pmatrix}
x_{0} \\
y_{0} \\
z_{0}
\end{pmatrix} \\
\begin{pmatrix}
a \\
b \\
c
\end{pmatrix}
\cdot   \begin{pmatrix}
x \\
y \\
z
\end{pmatrix}  & =  \begin{pmatrix}
a \\
b \\
c
\end{pmatrix} \cdot   \begin{pmatrix}
x_{0} \\
y_{0} \\
z_{0}
\end{pmatrix}
\end{aligned}
\end{gather*}
$$

#### Example 6.2.1 

Find the vector and scalar equations for the plane passing through the point $(2,4,-1)$ with normal $\mathbf{n}=2\mathbf{i}+3\mathbf{j}+4\mathbf{k}=(2,3,4)$.

$$
\begin{align}
\text{Vector Equation} \\
\mathbf{n} \cdot \mathbf{r} &= \mathbf{n}\cdot \mathbf{r}_{0} \\
\begin{pmatrix}
2 \\
3 \\
4
\end{pmatrix} \cdot \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} &= \begin{pmatrix}
2 \\
3 \\
4 \\

\end{pmatrix}\cdot \begin{pmatrix}
2 \\
4 \\
-1
\end{pmatrix} \\
\end{align}
$$
$$
\begin{align}
Scalar \ Equation \\
2x+3y+4z & =4+12-4 \\
\therefore 2x+3y+4z  & = 12
\end{align}
$$
Our understanding of normal vectors allows us to compute angles between planes.

#### Example 6.2.2

Find the agnel between the planes $x+4y-3z=1$ and $-3x +6y+7z=0$.
$$
\begin{align}
n_{1}=\begin{pmatrix}
1 \\
4 \\
-3
\end{pmatrix} \\ \\

n_{2}=\begin{pmatrix}
-3 \\
6 \\
7
\end{pmatrix}
\end{align}
$$
Angle between the two planes is the same as the angle between the two normal vectors.
To find the angle between the two vectors:
$$
n_{1}\cdot n_{2}=|n_{1}||n_{2}| \cos \theta
$$
$$
\begin{align}
 & -3+24-21  =0 \\
 & \therefore n_{1} \text{ and } n_{2} \text{ are perpendicular to each other.} \\
 & \therefore \text{ the two planes are also perpendicular to each other.}  
\end{align}
$$
> [!caution] Important Remark
> Contrary to popular belief, the angle between two planes cannot exceed $\Large\frac{\pi}{2}$.

## 6.3 Equations for a line

There are three common ways to represent a line:

1. the vector representation;
2. the parametric representation;
3. the symmetric equations, obtained by eliminating parameters in 2.

The representation that is best depends on the particular problem at hand.

> [!question] Important Remark
>  As with the equation of a plane, the vector equation of a line is not unique. One can choose any point $P_{0}$ on the line as "starting point" and one can multiply the vector $\mathbf{v}$ by any non-zero constant.

#### Example 6.3.1

Find:
1. The vector representation of the line passing through $(5,1,3)$ and parallel to the vector $(1,4,-2)$.
2. The vector representation of the line passing through $(4,-3,5)$ and parallel to the vector $(-2,-8,4)$.
What is the relation between the two lines?

$$
\begin{align}
L_{1}=\mathbf{r}=\begin{pmatrix}
5 \\
1 \\
3 \\
\end{pmatrix}+\lambda \begin{pmatrix}
1 \\
4 \\
-2
\end{pmatrix},  & \lambda \in \mathbb{R} \\
l_{2} = \mathbf{r}=\begin{pmatrix}
4 \\
-3 \\
5
\end{pmatrix} + k \begin{pmatrix}
-2 \\
-8 \\
4
\end{pmatrix},  & k \in \mathbb{R} \\
Note \ that -2\begin{pmatrix}
 1 \\
4 \\
-2
\end{pmatrix}=\begin{pmatrix}
-2 \\
-8 \\
4
\end{pmatrix}  & \to L_{1} \cap L_{2} \text{ are equivalent}
\end{align}
$$

#### Example 6.3.2

Find the parametric equations for the line passing through $(5,1,3)$ and parallel to $\mathbf{i}+4\mathbf{j}-2\mathbf{k}$.

$$
\begin{align}
\quad \text{Vector Equation} \\
\mathbf{r} & =\begin{pmatrix}
5 \\
1 \\
3
\end{pmatrix}+\lambda \begin{pmatrix}
1 \\
4 \\
-2
\end{pmatrix} \\
\text{Parametric equation}  \\
 & \begin{cases}
x=5+\lambda \\
y=1+2\lambda \\
z=3-2\lambda
\end{cases}
\end{align}
$$
### Symmetric Equations
The parameter $\lambda$ can be eliminated from the parametric equations of a line. For example, by eliminating $\lambda$ from each of the three equations $x=5+\lambda, y=1+4\lambda, z=3-2\lambda$ for the line $L$, we obtain:
$$
\lambda = x-5 = \frac{y-1}{4}=\frac{z-3}{-2}
$$
The equations
$$
x-5= \frac{y-1}{4}=\frac{z-3}{-2}
$$

