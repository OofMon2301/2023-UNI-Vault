---
date: 10-07-2023
type: Lecture
subject: Lecture Notes 2008
tags: lecture
Topic:: 
---
# [[Chapter 3 - Matrices and Linear Transformations]]
#Lecture Notes 2008
# Matrices and Linear Transformations

## 3.1 2 X 2 Matrices

Recall that a $2 \times 2$ array of numbers
$$
A=\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
is called a $2 \times 2$ *matrix*. Suppose $\mathbf{v}=\begin{pmatrix}x\\y\end{pmatrix}$ is a 2 element column vector. Then the *product* $A\mathbf{v}$ is defined the be the 2 element column vector whose entries are given by taking the dot product of each row of $A$ with the vector $\mathbf{v}$:
$$
A\mathbf{v}=\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}=\begin{pmatrix}
ax+by \\
cx+dy
\end{pmatrix}$$
### 3.1.1 Example

Let $A=\begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}$, and let $\mathbf{v}=\begin{pmatrix}5\\6\end{pmatrix}$. Calculate $A\mathbf{v}$.
$$
\begin{align}
A\mathbf{v} & =\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}\begin{pmatrix}
5 \\
6
\end{pmatrix}  \\
  & = \begin{pmatrix}
1\times 5 + 2 \times 6 \\
3 \times 5 + 4 \times 6 \\
\end{pmatrix} \\
  & = \begin{pmatrix}
17 \\
39
\end{pmatrix}
\end{align}
$$
## 3.2 Transformations of the Plane

In computer graphics there is often a need to transform a set of points, or a figure, that appears on the screen. For example, moving the figure to another part of the screen, rotating the figure about a central point, reflecting the figure in a line, scaling the figure to a new size, or shooting at moving things.

Moving a figure about in the $(x,y)-$plane can be described by the addition of a vector (the translation vector) to each of the position vectors of the points making up the figure.

Transformations such as rotations, reflections, and scalings, are examples of a special class of transformations called *linear transformations*.

A linear transformation of the $(x,y)-$plane can be represented by a $2 \times 2$ matrix, and we can use matrix multiplication to calculate the effect of the transformation on the points of the plane (using position vectors).

Transformations of the plane have important applications in computer graphics and other areas.

### 3.2.1 Transformations of the Plane

A *transformation* of the $(x,y)-$plane is an operation (function) that maps each point of the $(x,y)-$plane to some other point of the $(x,y)-$plane.

If a transformation maps the point $P$ with coordinates $(x,y)$ to the point $P'$ with coordinates $(x',y')$, then we call $P$ the original point and $P'$ the image point.

For particular transformations, we are given, or can determine, a formula for $x'$ and $y'$ in terms of $x$ and $y$.

### 3.2.2 Example

Find the coordinates of the image points of $A=(2,1)$ and $B=(-1,3)$ under the transformation defined by
$$
x'=2x-y \quad \text{ and } \quad y'=x^{2}+y
$$
and sketch the points and their images.

## 3.3 Translations

A *translation* is a transformation that involves shifting each point of the plane a certain distance in the same direction.

The translation in which each point is shifted $a$ units in the $x-$direction and $b$ units in the $y-$direction can be described by the equations $x'=x+a$ and $y'=y+b$.

This translation can be described in terms of vectors. If $\mathbf{p}$ is the position vector of the original point $P=(x,y,),\mathbf{p}'$ is the position vector of the image point $P'=(x',y')$ and $\mathbf{t}=\begin{pmatrix}a\\b\end{pmatrix}$  is the translation vector, then
$$
\mathbf{p}'=\mathbf{p}+\mathbf{t}, \text{ that is, }\begin{pmatrix}
x' \\
y'
\end{pmatrix}=\begin{pmatrix}
x \\
y
\end{pmatrix}+\begin{pmatrix}
a \\
b
\end{pmatrix}
$$
A translation shifts each point the same distance in the same direction, so the shape of figures is preserved.

## 3.4 Linear Transformations



