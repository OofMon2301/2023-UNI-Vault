---
date: 06-07-2023
type: Lecture
subject: MATH1051
tags: lecture
Topic:: 
---
# [[Chapter 2 - Vectors]]
#Lecture Notes 2008

# 2 Vectors

- A *vector* quantity has both a magnitude and a direction; force and velocity are two examples of vector quantities.
- A *scalar* quantity has only a magnitude (it has no direction); time, area and temperature are examples of scalar quantities.

## 2.1 [[Chapter 2 - Vectors|Revision]]

A vector is represented geometrically in the ($x,y$) plane or in ($x,y,z$) space by a directed line segment (arrow). The direction of the arrow is the direction of the vector, and the length of the arrow is proportional to the magnitude of the vector. Only the length and direction of the arrow are significant: it can be placed anywhere convenient in the ($x,y$) plane.

If $P,Q$ are points in 2-space or 3-space, $\vec{PQ}$ denotes to the vector from $P$ to $Q$.

A vector $\mathbf{v}=\vec{PQ}$ in the ($x,y$) plane may be represented by a pair of numbers
$$
\mathbf{v}=\begin{pmatrix}
v_{1} \\
v_{2}
\end{pmatrix}=\begin{pmatrix}
x_{Q}-x_{P} \\
y_{Q}-y_{P}
\end{pmatrix}
$$
which is the same for all representations $\vec{PQ}$ of $\mathbf{v}$. We call $v_{1},v_{2}$ the *components* of the vector $\mathbf{v}$.

We call the vector $\left(\begin{matrix}0 \\ 0\end{matrix}\right)$ the *zero vector*. It is denoted by $\mathbf{0}$.

### 2.1.1 Position Vectors
Let $P=(x_{p},y_{p})$ be a point in the $(x,y,)$ plane. Then the vector $\vec{OP}$, where $O$ is the origin, is called the *position vector* of $P$. Obviously
$$
\vec{OP}=\begin{pmatrix}
x_{p} \\
y_{p}
\end{pmatrix}
.$$
### 2.1.2 Definition: Magnitude

See: [[2023/Definitions/Magnitude|Magnitude Definition]]

### 2.1.3 Vector addition

We add vectors by the triangle rule.

Consider the triangle $PQR$ with $\mathbf{v}=\vec{PQ}$, $\mathbf{w}=\vec{QR}$. Then $\mathbf{v}+\mathbf{w}=\vec{PR}$. In terms of components, if
$$
\mathbf{v}=\begin{pmatrix}
v_{1} \\
v_{2}
\end{pmatrix},\quad \quad \mathbf{w}=\begin{pmatrix}
w_{1} \\
w_{2}
\end{pmatrix}
$$
then
$$
\mathbf{v}+\mathbf{w}=\begin{pmatrix}
v_{1}+w_{1} \\
v_{2}+w_{2}
\end{pmatrix}
.$$
It follows from the component description that vector addition satisfies the following properties:
$$
\begin{align}
\mathbf{v}+\mathbf{w} & = \mathbf{w}+\mathbf{v} \quad \quad \quad \quad  & \text{(commutative law)} \\
\mathbf{u}+(\mathbf{v}+\mathbf{w}) & =(\mathbf{u}+\mathbf{v})+\mathbf{w} \quad \quad \quad \quad  & \text{(associative law)} \\
\mathbf{v}+\mathbf{0} & =\mathbf{0}+\mathbf{v}=\mathbf{v}
\end{align}
$$

### 2.1.4 Scalar Multiplication

With $\alpha \in \mathbb{R}$ a number (called a *scalar*), we define $\alpha \mathbf{v}$ to be the vector of magnitude
$$
||\alpha \mathbf{v}||=||\alpha||\cdot||\mathbf{v}||
$$
in the same direction as $\mathbf{v}$ if $\alpha>0$ and opposite direction if $\alpha<0$.
Using similar triangles it follows that if $\mathbf{v}=\begin{pmatrix}v_1\\v_2\end{pmatrix}$ then $\alpha \mathbf{v}=\begin{pmatrix}\alpha v_{1}\\ \alpha v_{2}\end{pmatrix}$

Note that if we multiply any vector $\mathbf{v}=\begin{pmatrix}v_{1} \\v_{2}\end{pmatrix}$ by zero we obtain the zero vector:
$$
0 \cdot \mathbf{v}=\begin{pmatrix}
0 \\
0
\end{pmatrix}
=\mathbf{0}$$
### 2.1.5 Unit Vectors

A *[[2023/Semester 1 2023/MATH1050/Chapter 2 - Vectors#^4b2905|unit vector]]* is a vector of unit length. If $\mathbf{v}\neq 0$ is a vector, then
$$
\frac{\mathbf{v}}{||\mathbf{v}||}
$$
determines a unit vector in the direction of $\mathbf{v}$.
![[2023/Semester 1 2023/MATH1050/Chapter 2 - Vectors#^4b2905]]
In particular,
$$
\mathbf{i}=\begin{pmatrix}
1 \\
0 
\end{pmatrix}\quad, \quad \mathbf{j}=\begin{pmatrix}
0 \\
1
\end{pmatrix}
$$
determine unit vectors along the $x$ and $y$ axes respectively.
For any vector $\mathbf{v}=\begin{pmatrix}v_{1}\\v_{2}\end{pmatrix}$ we have
$$\mathbf{v}=\begin{pmatrix}v_{1}\\0\end{pmatrix}+\begin{pmatrix}0\\v_{2}\end{pmatrix}=v_{1}\mathbf{i}+v_{2}\mathbf{j},$$
Hence we can decompose $\mathbf{v}$ into a vector $1\mathbf{i}$ along the $x-$axis and $v_{2}\mathbf{j}$ along the $y-$axis. Then $v_{1}$ and $v_{2}$ are called the *components* of $\mathbf{v}$ with respect to $\mathbf{i}$ and $\mathbf{j}$.

### 2.1.6 Vectors in 3-space

Similarly in 3-space a vector $\mathbf{v}=\vec{PQ}$ is represented in component form by 
$$
\mathbf{v}=\begin{pmatrix}
v_{1} \\
v_{2} \\
v_{3}
\end{pmatrix}
=\begin{pmatrix}
x_{Q}-x_{P} \\
y_{Q}-y_{P} \\
z_{Q}-z_{P} \\
\end{pmatrix}$$
which is the same for all representations $\vec{PQ}$ of $\mathbf{v}$.

For $\mathbf{v}=\vec{OP}=\begin{pmatrix}v_{1}\\v_{2}\\v_{3}\end{pmatrix}$ the *magnitude* of the vector $\mathbf{v}$ is
$$
||\mathbf{v}||=\sqrt{ ON^{2}+NP^{2} }=\sqrt{ v_{1}^{2}+v_{2}^{2}+v_{3}^{2} }
$$
As before, we add vectors component by component. We also define multiplication by a scalar $\alpha$. So if 
$$
\mathbf{v}=\begin{pmatrix}
v_{1} \\
v_{2} \\
v_{3}
\end{pmatrix}, \quad \quad \mathbf{w}=\begin{pmatrix}
w_{1} \\
w_{2} \\
w_{3}
\end{pmatrix}
$$
are vectors then
$$
\mathbf{v}+\mathbf{w}=\begin{pmatrix}
v_{1}+w_{1} \\
v_{2}+w_{2} \\
v_{3}+w_{3}
\end{pmatrix}\quad \text{ and } \quad \alpha \mathbf{v}=\begin{pmatrix}
\alpha v_{1} \\
\alpha v_{2} \\
\alpha v_{3}
\end{pmatrix}\quad, \text{ for }\alpha \in \mathbb{R}.
$$
The unit vectors along the $x,y,z$ axes are respectively
$$
\mathbf{i}=\begin{pmatrix}
1 \\
0 \\
0 \\

\end{pmatrix}, \quad \quad \mathbf{j}=\begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}, \quad \quad \mathbf{k}=\begin{pmatrix}
0 \\
0 \\
1
\end{pmatrix}.
$$
Any vector $\mathbf{v}=\begin{pmatrix}v_{1}\\v_{2}\\v_{3}\end{pmatrix}$ may be expressed as
$$
\mathbf{v}=v_{1}\mathbf{i}+v_{2}\mathbf{j}+v_{3}\mathbf{k}
$$
We call $v_{1},v_{2},v_{3}$ the *components* of $\mathbf{v}$ in the $\mathbf{i,j,k}$ directions respectively.
We usually denote 2- and 3-space by $\mathbb{R}^{2}$ and $\mathbb{R}^{3}$ respectively. Thus
$$
\mathbb{R}^{2}=\left\{\begin{pmatrix}
x \\
y
\end{pmatrix} | x,y \in \mathbb{R} \right\}\quad \text{ and } \quad \mathbb{R}^{3}=\left\{\begin{pmatrix}
x \\
y \\
z
\end{pmatrix}|x,y,z \in \mathbb{R}\right\}
$$
### 2.1.7 Row and Column Vectors

Note that we may write vectors using columns, for example, $\begin{pmatrix}a\\b\end{pmatrix}$, or as row vectors $(a\quad b)$.

### 2.1.8 Dot Product

For non-zero vectors $\mathbf{v}=\vec{OP},\mathbf{w}=\vec{OQ}$ the *angle between* $\mathbf{v}$ and $\mathbf{w}$ is the angle $\theta$ with $0\leq \theta \leq \pi$ radians between $\vec{OP}$ and $\vec{OQ}$ at the origin $O$.
The *dot* (or *scalar* or *inner*) product of vectors $\mathbf{v}$ and $\mathbf{w}$, denoted by $\mathbf{v}\cdot \mathbf{w}$, is the *number* given by
$$
\mathbf{v}\cdot \mathbf{w}=\begin{cases}
0, & \text{if }\mathbf{v} \text{ or }\mathbf{w}=0 \\ \\
||\mathbf{v}||\cdot||\mathbf{w}||\cos \theta,  & \text{otherwise}
\end{cases}
$$
where $\theta$ is the angle between $\mathbf{v}$ and $\mathbf{w}$.
If $\mathbf{v},\mathbf{w}\neq 0$ and $\mathbf{v}\cdot \mathbf{w}=0$ then $\mathbf{v}$ and $\mathbf{w}$ are said to be *[[Chapter 6 - Equations of Lines and Planes#^29eed1|orthogonal]]* or *[[Chapter 2 cont. - Vectors#^1a8b4c|perpendicular]]*.

If $\mathbf{v}=v_{1}\mathbf{i}+v_{2}\mathbf{j}+v_{3}\mathbf{k}$ and $\mathbf{w}=w_{1}\mathbf{i}+w_{2}\mathbf{j}+w_{3}\mathbf{k}$ are two vectors, then $\mathbf{v}\cdot \mathbf{w}$ is given by:
$$
\mathbf{v}\cdot \mathbf{w}=v_{1}w_{1}+v_{2}w_{2}+v_{3}w_{3}
$$
In particular, for $\mathbf{v}\in\mathbb{R}^{3}$,
$$
||\mathbf{v}||^{2}=\mathbf{v}\cdot \mathbf{v}=v_{1}^{2}+v_{2}^{2}+v_{3}^{2}
$$
### 2.1.9 The Projection Formula

Fix a vector $\mathbf{v}$. Given another vector $\mathbf{w}$ we can write it as
$$
\mathbf{w}=\mathbf{w}_{1}+\mathbf{w}_{2}
$$
where $\mathbf{w}_{1}$ is in the direction of $\mathbf{v}$ and $\mathbf{w}_{2}$ is perpendicular to $\mathbf{v}$.

Then we have the *[[2023/Definitions/Projection Formula|projection formula]]*:
$$
\mathbf{w}_{1}=\frac{((\mathbf{w})\cdot \mathbf{v})}{||\mathbf{v}||^{2}}\mathbf{v}\quad , \quad \mathbf{w}_{2}=\mathbf{w}-\frac{((\mathbf{w})\cdot \mathbf{v})}{||\mathbf{v}||^{2}}\mathbf{v}
$$
