---
date: 31-05-2023
type: Lecture
subject: MATH1050
tags: lecture
Topic:: 
---
# [[Chapter 2 cont. - Vectors]]
#MATH1050 #Vectors
# Notes


## 2.7.1 Properties of the Scalar Product

1. The scalar product of two vectors is a *scalar*, not a vector.
2. $\mathbf{v} \cdot \mathbf{v} = |\mathbf{v}|^{2}$ since the angle between $\mathbf{v}$ and itself is 0 and $\cos 0=1$.
3. $\mathbf{v} \cdot \mathbf{w}=0$ if and only if $\mathbf{v}$ and $\mathbf{w}$ are perpendicular.
	(Perpendicular vectors are also called orthogonal vectors.) ^1a8b4c

```ad-example 
Proof if $\mathbf{v}\neq 0$ and $\mathbf{w}\neq 0$, then:
$$
\begin{gather*}
\begin{aligned}
\mathbf{v}\cdot \mathbf{w}=0 &\iff(\text{iff})\mid v\mid \mid w\mid \cos \theta=0 \\
&\iff \cos \theta=0 \\
&\iff \theta =\frac{\pi}{2}
\end{aligned}
\end{gather*}
$$

```

4. For vectors $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$, $(\mathbf{u}+\mathbf{v})\cdot \mathbf{w}=\mathbf{u}\cdot \mathbf{w}+\mathbf{v}\cdot \mathbf{w}$.
5. For vectors $\mathbf{v}$ and $\mathbf{w}$, $\mathbf{v}\cdot \mathbf{w}=\mathbf{w}\cdot \mathbf{v}$.
6.  For vectors $\mathbf{v}$ and $\mathbf{w}$ and any real number, $t$, $(t\mathbf{v})\cdot \mathbf{w}=t(\mathbf{v}\cdot \mathbf{w})$

# 2.8 The Vector Product (Cross Product)
![[Pasted image 20230302004650.png]]
Note that in any diagram of 3-dimensional space, the arrangement of the axes must satisfy the right hand rule so that $\mathbf{i}\times \mathbf{j}=\mathbf{k}$.

## Properties of the Vector Product

The vector product is a vector, *not* a scalar.

For two non-zero vectors $\mathbf{u}$ and $\mathbf{v}$, $\mid \mathbf{u}\times \mathbf{v}\mid=0$ if and only if $\mathbf{u}$ and $\mathbf{v}$ are parallel or antiparallel.

$$
\begin{gather*}
\begin{aligned}
\mid \mathbf{u}\times \mathbf{v}\mid = 0 &\iff \sin \theta = 0, \\
&\iff \theta=0 \ \ or \ \ \theta=\pi
\end{aligned}
\end{gather*}
$$
For any two vectors $\mathbf{u}$ and $\mathbf{v}$, $\mathbf{u}\times \mathbf{v}=-(\mathbf{v}\times \mathbf{u})$

The vector product is not associative, so for most vectors, $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$, $\mathbf{u}\times(\mathbf{v}\times \mathbf{w})\neq(\mathbf{u}\times \mathbf{v})\times \mathbf{w}$.
	For example, $(\mathbf{i}\times \mathbf{i})\times \mathbf{k}=0$ but $\mathbf{i}\times(\mathbf{i}\times \mathbf{k})=\mathbf{i}\times \mathbf{-j}=-\mathbf{k}$.
For vectors $\mathbf{u}$ and $\mathbf{v}$ and any real number $t$,
$$
t(\mathbf{u}\times \mathbf{v})=(t\mathbf{u})\times \mathbf{v}=\mathbf{u}\times(t\mathbf{v})
$$
For vectors $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$,
$$
\large
\mathbf{u}\times(\mathbf{v}+\mathbf{w})=\mathbf{u}\times \mathbf{v}+\mathbf{u}\times \mathbf{w}, \ \ \text{and} \ \ (\mathbf{u}+\mathbf{v})\times \mathbf{w} = \mathbf{u} \times \mathbf{w}+\mathbf{v}\times \mathbf{w}
$$

We can use the properties of the vector product and the table of vector products of $\mathbf{i}$, $\mathbf{j}$, and $\mathbf{k}$ to calculate the vector product of any pair of vectors expressed in component form.

## 2.8.1 Torque (extra)

When you use a spanner to turn a nut, or use different gears while riding a bicycle, your choice of size of spanner or particular gear on the bike is based on a turning force called *torque*.

The magnitude of the torque is given by $\mid \mid \mathbf{r} \times \mathbf{f} \mid \mid$ where $\mathbf{f}$ is the force and $\mathbf{r}$ is the vector from the point (or axis) about which the object is turning to the point of application of the force.

The standard unit for torque is Newton metres $(\text{Nm})$. To obtain torque in $\text{Nm}$, $\mathbf{f}$ should be in newtons and $\mathbf{r}$ should be in metres.

Since $\sin \theta$ reaches its maximum at $\frac{\pi}{2}$ radians ($90^\circ$), the torque is a maximum when the angle between $\mathbf{f}$ and $\mathbf{r}$ is $\frac{\pi}{2}$ radians.

### Some Tips on Opening Doors (obvious things)

Let's start with some obvious things:
 - The larger the force, the more effective it is opening the door (i.e., the harder you push, the more rapidly the door opens.)
 - The point at which we push is crucial - if we push too close to the hinges, the door will open slowly, if at all.
 - The direction in which we push is important. The most effective is perpendicular to the door - we push in this direction almost instinctively.

> [!note] Torque: Definition
> [[2023/Definitions/Torque|Torque]] is the rotational equivalent of a force. It is a measure of the effectiveness of a force in changing or accelerating a rotation (changing the angular velocity over a period of time).
> 
> In equation form, the magnitude of the torque is defined to be:
>$$\mid \mid \uptau \mid \mid = \mid \mid \mathbf{r} \mid \mid \mid \mid \mathbf{F} \mid \mid \sin \theta = \mid \mid \mathbf{r} \times \mathbf{F} \mid \mid$$
>where $\mathbf{r}$ is the vector from the pivot point to the point where the force is applied, $\mathbf{F}$ is the force vector, and $\theta$ is the angle between $\mathbf{r}$ and $\mathbf{F}$.
>
>Equivalently, we can define $\uptau=\mathbf{r}\times \mathbf{F}$.















