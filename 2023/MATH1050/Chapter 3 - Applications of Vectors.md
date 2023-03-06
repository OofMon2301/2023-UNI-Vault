---
date: 04-03-2023
type: Lecture
subject: MATH1050
tags: lecture
Topic:: 
---
# [[Chapter 3 - Applications of Vectors]]
#MATH1050

Now that we are familiar with the different representations of vectors, we can investigate some of the ways vectors are used to solve mathematical problems.

In pure mathematics, vectors can be used to solve problems in geometry.

In applied mathematics, vectors can be used to model quantities such as displacement, velocity, or forces acting on an object, and thus answer questions about such vector quantities.

There are two operations on vectors, the scalar product and the vector product, that also have useful applications.

In this section we look at several applications of vectors and investigate the scalar and vector products.

Topics in this section are:
- Vectors in Geometry
- Forces
- Displacement, velocity and momentum
- The scalar product
- The vector product - Part 1 

## 3.1 Vectors in Geometry

Let $P$ be a point on the line through points $A$ and $B$. We can use vectors to describe the position vector of $P$ in terms of the position vectors of $A$ and $B$.

Let $\mathbf{p}=\vec{OP}, \mathbf{a}=\vec{OA} \ \text{and}\ \mathbf{b}=\vec{OB}$.
![[Drawing 2023-03-05 00.16.05.excalidraw|center]]

$$
\begin{gather*}
\begin{aligned}
&\text{Now}\ \mathbf{a}+\vec{AB}=\mathbf{b} \ \text{so} \vec{AB} = \mathbf{b}-\mathbf{a}. \ \ \text{Thus,} \\
&\mathbf{p}=\mathbf{a}+\vec{AP}=\mathbf{a}+t\vec{AB}=\mathbf{a}+t(\mathbf{b}-\mathbf{a})=(1-t)\mathbf{a}+t\mathbf{b}, \\
&\text{where}\ t\ \text{is the real number such that} \ \vec{AP}=t\vec{AB}.
\end{aligned}
\end{gather*}
$$
---
## 3.2 Forces

A [[2023/Definitions/Forces|Force]] is an influence that can change the motion of an object and can be modelled as a vector.

> [!note] Newton's Laws of Motion
> **Newton's first law: the law of inertia**:
> Newton's first law states that if a body is at rest or moving at a constand speed in a straight line, it will remain at rest or keep mobing in a straight line at constant speed unless it is acted upon by a force.
> 
> **Newton's second law**
> $\vec{\mathbf{F}}=m\vec{a}$
> 
> **Newton's third law: Law of action and reaction**:
> To every action there is an opposed force acting against it.

The standard unit of measurement for forces is the newton, denoted $N$.

### Weight
This is the force due to gravity, and we will denote it by $\mathbf{W}$. the weight vector associated with an object of mass $m$ kilograms has magnitude $9m$ newtons and has the direction vertically downwards.

### Tension

### Normal reaction

### Friction
This is a force in the direction parallel to a surface. It is the force that counteracts an object sliding along a surface. We will denote it as $\mathbf{f}$.

