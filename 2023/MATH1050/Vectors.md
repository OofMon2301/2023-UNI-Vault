---
date: 22-02-2023
type: Lecture
subject: MATH1050
tags: lecture
Topic:: Vectors
---
# [[Vectors]]
#MATH1050  

## Vectors

A *[[2023/Definitions/Vector|Vector]] quantity is something whose specification requires **both** a magnitude and a direction.

Normally, when writing vectors, a lower case letter, with the tilde (~) symbol below it, for example, $\large \underline{v}$. 

### Geometric representation of a vector
---
A vector can be represented geometrically in $\mathbb{R}^2$ or $\mathbb{R}^3$ by an arrow.

The length of the arrow represents the *magnitude* of the vector, and the *direction* of the vector is indicated by the direction the arrow is pointing.

The actual location of the arrow in the diagram is irrelevant, only its magnitude and direction matter.

If $P$ and $Q$ are points in $\mathbb{R}^2$ or $\mathbb{R}^3$, then $\overrightarrow{PQ}$ denotes the vector from $P$ to $Q$. The point $P$ is the tail of the vector and the point $Q$ is the head of the vector. 

--- 
#### Matrix representation of a vector

For a (geometric) vector $v \in \mathbb{R}^2$ with tail at the point $(x_{1},y_{1})$ and head at the point $(x_{2},y_{2})$, the matrix form of the vector has 2 rows and 1 column and is written as:
$$\Large \begin{pmatrix}
x_{2}-x_{1} \\
y_{2}-y_{1}
\end{pmatrix}$$
The matrix form of a vector is the same for all geometric representations of the vector.

The usual notation for writing a general vector $v$ in matrix form is:
$$v=\begin{pmatrix}
v_{1} \\
v_{2}
\end{pmatrix}$$
This is a column vector.
It can also be written as a row vector:
$$v=(v_{1},v_{2})$$
Given a vector in matrix form, you can find a geometric representation of $v$ by picking any point in the plane as the tail of the vector, moving $v_{1}$ units in the $x$ direction and the $v_{2}$ units in the $y$ direction to find the point that is the head of the vector.

For a geometric vector $v=\overrightarrow{PQ}$ in $\mathbb{R}^3$, where $P = (x_{P},y_{P},z_{P})$ and $Q=(x_{Q},y_{Q},z_{Q})$, the matrix form is:
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
The entries $v_{1}$ and $v_{2}$ are called the components of the vector.

---
## Addition of Vectors
### Geometric addition of vectors
Given vectors $v$ and $w$, we define the sum $v+w$ by the triangle ruel 