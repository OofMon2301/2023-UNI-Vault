---
date: 22-02-2023
type: Lecture
subject: MATH1050
tags: lecture
Topic:: Vectors
---
# [[Chapter 2 - Vectors]]
#MATH1050  #Vectors

```toc
```

## 2.1 Vectors

A *[[Vector|Vector]]* quantity is something whose specification requires **both** a magnitude and a direction.

Normally, when writing vectors, a lower case letter, with the tilde (~) symbol below it, for example, $\large \underline{v}$. 

### Geometric Representation of a Vector
---
A [[Vector]] can be represented geometrically in $\mathbb{R}^2$ or $\mathbb{R}^3$ by an arrow.

The length of the arrow represents the *magnitude* of the [[Vector]], and the *direction* of the [[Vector]] is indicated by the direction the arrow is pointing.

The actual location of the arrow in the diagram is irrelevant, only its magnitude and direction matter.

If $P$ and $Q$ are points in $\mathbb{R}^2$ or $\mathbb{R}^3$, then $\overrightarrow{PQ}$ denotes the [[Vector]] from $P$ to $Q$. The point $P$ is the tail of the [[Vector]] and the point $Q$ is the head of the [[Vector]]. 

--- 
#### Matrix Representation of a Vector

For a (geometric) [[Vector]] $v \in \mathbb{R}^2$ with tail at the point $(x_{1},y_{1})$ and head at the point $(x_{2},y_{2})$, the matrix form of the [[Vector]] has 2 rows and 1 column and is written as:
$$\Large \begin{pmatrix}
x_{2}-x_{1} \\
y_{2}-y_{1}
\end{pmatrix}$$
The matrix form of a [[Vector]] is the same for all geometric representations of the [[Vector]].

The usual notation for writing a general [[Vector]] $v$ in matrix form is:
$$v=\begin{pmatrix}
v_{1} \\
v_{2}
\end{pmatrix}$$
This is a column [[Vector]].
It can also be written as a row [[Vector]]:
$$v=(v_{1},v_{2})$$
Given a [[Vector]] in matrix form, you can find a geometric representation of $v$ by picking any point in the plane as the tail of the [[Vector]], moving $v_{1}$ units in the $x$ direction and the $v_{2}$ units in the $y$ direction to find the point that is the head of the [[Vector]].

For a geometric [[Vector]] $v=\overrightarrow{PQ}$ in $\mathbb{R}^3$, where $P = (x_{P},y_{P},z_{P})$ and $Q=(x_{Q},y_{Q},z_{Q})$, the matrix form is:
$$\large v=\begin{pmatrix}
x_{Q}-x_{P} \\
y_{Q}-y_{P} \\
z_{Q}-z_{P} \\
\end{pmatrix}=\begin{pmatrix}
v_{1} \\
v_{2} \\
v_{3}
\end{pmatrix} \text{or} \space v=(v_{1},v_{2},v_{3}) 
$$
The entries $v_{1}$ and $v_{2}$ are called the components of the [[Vector]].

---
## 2.2 Addition of Vectors
### Geometric addition of Vectors
Given vectors $v$ and $w$, we define the sum $v+w$ by the triangle rule for [[Vector]] addition.
 Let $P,Q$ and $R$ be points in $\mathbb{R}^{2}$ (or $\mathbb{R}^3$) such that $\mathbf{v}=\overrightarrow{PQ}$ and $\mathbf{w}=\overrightarrow{QR}$. Then $\mathbf{v}+\mathbf{w}=\overrightarrow{PR}$. 

Note that when adding vectors $v$ and $w$ geometrically you put the tail of $w$ at the head of $v$ and then draw the sum $v+w$ from the tail of $v$ to the head of $w$.

#### Matrix addition of Vectors
If:
$$v=\begin{pmatrix}
v_{1} \\
v_{2}
\end{pmatrix}$$
and:
$$w=\begin{pmatrix}
w_{1} \\
w_{2}
\end{pmatrix}$$
, then 
$$v+w=\begin{pmatrix}
v_{1}+w_{1} \\
v_{2}+w_{2}
\end{pmatrix}$$
Addition of vectors in $\mathbb{R}^{3}$ is the same procedure.

We define the *zero [[Vector]]* to be the [[Vector]] (of an appropriate size) with each component equal to zero, and denote it by 0.
$$0=\begin{pmatrix}
0 \\
0 \\

\end{pmatrix} or \space 0=\begin{pmatrix}
0 \\
0 \\
0 \\

\end{pmatrix}$$
The zero [[Vector]] has zero magnitude and unspecified direction, so can be represented geometrically as a point.

### Properties of Vector addition
1. [[Vector]] addition is *commutative* ($v+w=w+v$).
	1. To illustrate the commutativity of addition geometrically, consider four points $P,Q,R,S$, arranged in 2-space so that:
$$v=\overrightarrow{PQ}=\overrightarrow{SR} \space\text{and}\space w=\overrightarrow{PS}=\overrightarrow{QR}$$
![[Drawing 2023-02-23 00.15.53.excalidraw|center]]
Then:
$$\large v+w=\overrightarrow{PQ}+\overrightarrow{QR}=\overrightarrow{PR}=\overrightarrow{PS}+\overrightarrow{SR}=w+v$$
2. [[Vector]] addition is *associative*, that is:
   $$u+(v+w)=(u+v)+w$$
3.  $0+v=v+0=v$
   
## 2.3 Scalar Multiplication of Vectors

### Geometric Scalar Multiplication of Vectors
Given a vector $v$ and a real number $t$, we define the scalar multiple $tv$ to be the vector whose magnitude is $|t|$ times the magnitude of $v$, and whose direction is the same as $v$ if $t>0$ and opposite to $v$ if $t<0$.

Note that if $t=0$, then the scalar multiple $tv$ is the zero vector.

### Matrix Scalar Multiplication of Vectors

If $t$ is a real number and $v=$:
$$v=\begin{pmatrix}
v_{1} \\
v_{2}
\end{pmatrix}$$
then:
$$tv=\begin{pmatrix}
t \times v_{1} \\
t \times v_{2}
\end{pmatrix}$$
Scalar multiplication of vectors in $\mathbb{R}^{3}$ is the same procedure.
$$
t\times \begin{pmatrix}
w_{1} \\
w_{2} \\
w_{3}
\end{pmatrix}=\begin{pmatrix}
t \times w_{1} \\
t \times w_{2} \\
t \times w_{3}
\end{pmatrix}
$$
Note that we usually write $-1\mathbf{v}$ as $-\mathbf{v}$.
We can define *vector subtraction* as a combination of vector addition and scalar multiplication. If $\mathbf{v}$ and $\mathbf{w}$ are two vectors, then:
$$
\mathbf{v}-\mathbf{w}=\mathbf{v}+(\mathbf{-w})
$$
## 2.4 Position Vectors
Of all the geometric representations of a vector $\mathbf{v}$, the one with its tail at the origin is special.

In $\mathbb{R}^{2}$, let $P$ be the point with coordinates $(x_{P},y_{P},z_{P})$. The vector $\vec{OP}$ with its tail at the origin $O$ and its head at $P$ is called the *position vector* of $P$.

The matrix form of $\vec{OP}$ = $(x_{P},y_{P})$.
Similarly, in $\mathbb{R}^{3}$, let $P$ be the point with coordinates $(x_{P},y_{P},z_{P})$. The vector $\vec{OP}$ with its tail at the origin $O$ and its head at $P$ is called the *position vector* of P, and the matrix form of $\vec{OP}$ is:
$$
\begin{pmatrix}
x_{P}-0 \\
y_{P}-0 \\
z_{P}-0
\end{pmatrix}
=
\begin{pmatrix}
x_{P} \\
y_{P} \\
z_{P} \\
\end{pmatrix}
$$
which can also be written as $\vec{OP}= (x_{P},y_{P},z_{P})$.

The coordinates of the point $P$ are the components of position vector of $P$.

## 2.5 The Norm of a Vector
The *norm* (or *length* or *magnitude*) of the vector $\mathbf{v}=\vec{PQ}$ is the (shortest) distance between points $P$ and $Q$.

The Norm of the vector $\mathbf{v}$ is denoted $||\mathbf{v||}$.

In $\mathbb{R}^{2}$, if $P=(x_{P},y_{P})$ and $Q=(x_{Q},y_{Q})$, then:
$$
\mathbf{v}=\vec{PQ}=\begin{pmatrix}
x_{Q}-x_{P} \\
y_{Q}-y_{P}
\end{pmatrix}
=
\begin{pmatrix}
v_{1} \\
v_{2} \\
v_{3}
\end{pmatrix}
$$
and:
$$
|\mathbf{v}| = \sqrt{ v_{1}^{2}+v_{2}^{2} }
$$
In $\mathbb{R}^{3}$, if $P=(x_{P},y_{P},z_{P})$ and $Q=(x_{Q},y_{Q},z_{Q})$, then:
$$
\mathbf{v}=\vec{PQ}=\begin{pmatrix}
x_{Q}-x_{P} \\
y_{Q}-y_{P} \\
z_{Q}-z_{P}
\end{pmatrix}
= \begin{pmatrix}
v_{1} \\
v_{2} \\
v_{3}
\end{pmatrix}, \text{and} \
|\mathbf{v}|=\sqrt{ v_{1}^{2}+v_{2}^{2}+v_{3}^{2} }$$
Note that for most vectors $\mathbf{v}$ and $\mathbf{w}$, $|\mathbf{v}+\mathbf{w}|\neq |\mathbf{v}| +|\mathbf{w}|$.
For any vector $\mathbf{v}$ and any real number $t$, $|t\mathbf{v}|=|t|+|\mathbf{v}|$.

A vector with norm 1 is called a *unit* vector.
The notation $\hat{\mathbf{v}}$ will be used to denote a unit vector having the same direction as the vector $\mathbf{v}$. ^4b2905

For a given vector $\mathbf{v}$, with norm $|\mathbf{v}|$, the vector: ^24eeaa
$$
\hat{\mathbf{v}}=\frac{1}{|\mathbf{v}|}\mathbf{v}
$$
is a unit vector in the direction of $\mathbf{v}$.

## 2.6 Component Form of a Vector

### Component Form in 2-space
In the $(x,y)$ plane, there are two important unit vectors. The unit vector in the direction of the $x$-axis is denoted $\mathbf{i}$, and the unit vector in the direction of the $y$-axis is denoted $\mathbf{j}$, so: ^76010d
$$
\mathbf{i}=\begin{pmatrix}
1 \\
0 \\

\end{pmatrix}

$$
and:
$$
\mathbf{j} =\begin{pmatrix}
0 \\
1
\end{pmatrix}
$$
Note that $\mathbf{i}$ and $\mathbf{j}$ can also be written as row vectors as $\mathbf{i} =(1,0)$ and $\mathbf{j}=(0,1)$.

Any vector $\mathbf{v}$ in $\mathbb{R}^{2}$can be written as the sum of scalar multiples of $\mathbf{i}$ and $\mathbf{j}$, since:

$$
\mathbf{v}=\begin{pmatrix}
a \\
b \\
\end{pmatrix}
=a\begin{pmatrix}
1 \\
0
\end{pmatrix}
+b\begin{pmatrix}
0 \\
1
\end{pmatrix}
=a\mathbf{i}+b\mathbf{j}
$$
The component form of the vector $\mathbf{v}$ is $\mathbf{v}=a\mathbf{i}+b\mathbf{j}$.

### Component Form in 3-space
In 3 space, there are three important unit vectors. In the $(x,y,z)$ plane, there are there important unit vectors. The unit vector in the direction of the $x$-axis is denoted $\mathbf{i}$, and the unit vector in the direction of the $y$-axis is denoted $\mathbf{j}$, and the unit vector in the direction of the $z$-axis is denoted $\mathbf{k}$, so:
$$
\mathbf{i}=\begin{pmatrix}
1 \\
0 \\
0 \\

\end{pmatrix}
\
\mathbf{j}=\begin{pmatrix}
0 \\
1 \\
0 \\

\end{pmatrix}
\mathbf{k}=\begin{pmatrix}
0 \\
0 \\
1
\end{pmatrix}
$$
Note that $\mathbf{i,j,k}$ can also be written as row vectors.

### Converting Vectors from Geometric to Component Form

A vector $\mathbf{v}$ in $\mathbb{R}^{2}$, with magnitude $|\mathbf{v}|$ and direction $\theta$ measured anti-clockwise from the positive $x$-axis, has component form.
$$
\mathbf{v}=|\mathbf{v}| \cos \theta \mathbf{\underline{i}}+|\mathbf{v}|\sin \theta \mathbf{\underline{j}}
$$
### Converting Vectors from Component to Geometric Form

If $\mathbf{v}=v_{1}\mathbf{\underline{i}}+0\mathbf{\underline{j}}$ or $\mathbf{v}=0\mathbf{\underline{i}}+v_{2}\mathbf{\underline{j}}$, then $\theta$ will be one of 0, $\frac{\pi}{2}$,$\pi,\text{or} \ \frac{3\pi}{2}$, and you can determine which it is from the sketch.

If neither of $v_{1}$ not $v_{2}$ is zero, then calculate $\phi=\arctan (|\frac{v_{2}}{v_{1}}|)$. The value of $\phi$ will be between 0 and $\frac{\pi}{2}$.
The value of $\theta$ will be one of $\phi,\pi-\phi,\pi+\phi,\text{or} \ 2\pi-\phi$. You can identify which it is from your sketch.

## 2.7 The Scalar Product

Let $\mathbf{v}=\vec{OP}\neq 0$ and $\mathbf{w}-\vec{OQ}\neq 0$ be two vectors. Then the angle between $\mathbf{v}$ and $\mathbf{w}$ is the angle $\theta$ between $\vec{OP}$ and $\vec{OQ}$ at the origin, with $0\leq \theta \leq \pi-\pi$.

The *scalar product* of two vectors $\mathbf{v}$ and $\mathbf{w}$ is:
$$
\mathbf{v} \cdot \mathbf{w}=\begin{cases}
0  & \text{if}\ \mathbf{v}=0\ \text{or}\ \mathbf{w}=0 \\
|\mathbf{v}|\ |\mathbf{w}| \cos \theta  & \text{otherwise.} 
\end{cases}
$$
Where $\theta$ is the angle between $\mathbf{v}$ and $\mathbf{w}$.

The scalar product is also called the *dot product* or *inner product*.

If $\mathbf{v}$ and $\mathbf{w}$ are in matrix form, then the scalar product is easy to calculate. 
If $\mathbf{v}=(v_{1},v_{2})$ and $\mathbf{w}=(w_{1},w_{2})$, then:
$$
\mathbf{v}\cdot \mathbf{w}=v_{1}w_{1}+v_{2}w_{2}
$$
If $\mathbf{v}=(v_{1},v_{2},v_{3})$ and $\mathbf{w}=(w_{1},w_{2},w_{3})$, then:
$$
\mathbf{v}\cdot \mathbf{w}=v_{1}w_{1}+v_{2}w_{2}+v_{3}w_{3}
$$
If we are given two vectors and $\mathbf{v}$ and $\mathbf{w}$ in matrix or component form, then we can use the scalar product to calculate the angle between $\mathbf{v}$ and $\mathbf{w}$.

> [!example]+ Example 2.7.2
> Calculate the angle (in both degrees and radians) between vectors $\mathbf{u}=(4,3,1)$ and $\mathbf{v}=(2,-3,-2)$.
> $$
\Large
\begin{gather*}
\begin{aligned}
\underline{\mathbf{u}} \cdot \underline{\mathbf{v}} &= |\mathbf{u}|\times|\mathbf{v}|\times \cos \theta
\\
\\
\begin{pmatrix} 
4 \\
3 \\
1 \\  
\end{pmatrix} \cdot
\begin{pmatrix} 
2 \\
-3 \\
-2 \\
\end{pmatrix} 
&= \sqrt{ 4^{2}+3^{2}+1^{2} }\times \sqrt{ 2^{2}+(-3)^{2}+(-2)^{2} }\times \cos \theta
\\
\\
8+(-9)+(-2) &=\sqrt{26 }\times \sqrt{ 17 }\times \cos \theta \\
-\frac{3}{\sqrt{ 26 }\sqrt{ 17 }}&=\cos \theta \\
\theta &= \arccos\left( -\frac{3}{\sqrt{ 26 }\sqrt{ 17} } \right) \\ \\
&\approx 98.2^\circ \\
&\approx 1.71 \text{rad} 
\end{aligned}
\end{gather*}
$$

