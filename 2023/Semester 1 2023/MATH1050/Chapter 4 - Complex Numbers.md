---
date: 14-03-2023
type: Lecture
subject: 
tags: lecture
Topic:: Complex Numbers
---
# [[Chapter 4 - Complex Numbers]]
#MATH1050 #ComplexNumbers

Number systems evolved from a basic need to count and to measure. As the need arose to solve more sophisticated problems, less intuitive (but very useful) number systems were introduced.

Complex numbers evolved from the need to solve quadratic equations that have no solutions in the real number system. To do this, the symbol $i$ was introduced, where $i^{2}=-1$. Although this seems artificial (and the term 'imaginary numbers' is sometimes used for complex numbers), this breakthrough had a huge impact and complex numbers are widely used in mathematics, physics and engineering.

We will look at several representations of complex numbers and investigate some important theorems.

## 4.1 Introduction to Complex Numbers

By the 16th century, it was known that the quadratic equation
$$
ax^{2}+bx+c=0, \ \ \ \text{where}\ a,b,c \in \mathbb{R}
$$
has solutions
$$
x=\frac{-b\pm \sqrt{ b^{2}-4ac }}{2a}
$$
provided that $a\neq 0$ and $b^{2}-4ac\geq 0$.

The quantity $b^{2}-4ac$ is called the *discriminant* of the quadratic equation. A quadratic equation (with real coefficients) having a negative discriminant has no solution over the real numbers.

In the next century, the first steps were taken to enlarge the real number system and create a new number system called the *complex numbers*, denoted $\mathbb{C}$, in which all quadratic equations have solutions.

The idea that allowed the formation of the complex numbers was the introduction of the symbol $i$, which satisfies $i^{2}-1$.

Eventually engineers and scientists discovered uses for complex numbers and they are now used extensively in many applications, including electric circuits and electromagnetic waves.

A complex number is an expression of the form $a+bi$, where $a,b \in \mathbb{R}$ and $i^{2}=-1$. The set of such numbers is called the complex numbers and is denoted $\mathbb{C}$. 

If $z=a+bi \in \mathbb{C}$, then we call $a$ the real part of $z$ and $b$ the imaginary part of $z$. We write this as $a=Re(z)$ and $b=Im(z)$.

The representations of a complex number in the form $a+bi$ is called the *Cartesian form* of the complex number.

### 4.1.1 Example
Let $z=-3-4i$. State $Re(z)$ and $Im(z)$.

A: $-3=Re(z)$ and $-4=Im(z)$.

Two complex numbers $a+bi$ and $c+di$ are equal if and only if $a=c$ and $b=d$.

Let $z=a+bi$ and $w=c+di$ be two complex numbers.

$$
\begin{gather}
\mathbf{Addition} \\
&&&z+w &=& &(a+bi)+(c+di) \\
&&&&=& &(a+c)+(b+d)i
\end{gather}
$$
So $Re(z+w)=Re(z)+Re(w)$
and $Im(z+w)=Im(z)+Im(w)$
$$
\begin{gather}
\mathbf{Multiplication} \\
&&&zw &=& &(a+bi)(c+di)\\
&&& &=& &ac+adi+bci+bdi^{2}\\
&&& &=& &ac+adi+bci-bd\\
&&& &=& &(ac-bd)+(ad+bc)i
\end{gather}
$$
Let $z=a+bi \in \mathbb{C}$. The *complex conjugate* of $z$, denoted $\bar{z}$, $\bar{z}=a-bi$.

The complex conjugate is useful because the product $z\bar{z}$ gives a real number.
$$
z\bar{z}-(a+bi)(a-bi)=a^{2}+b^{2}
$$
This is useful when we need to divide by a non-zero complex number.
$$
\begin{gather*}
\frac{a+bi}{c+di} &=& &\frac{a+bi}{c+di}\times \frac{c-di}{c-di} \\ \\
&=& &\frac{(a+bi)(c-di)}{c^{2}+d^{2}} \\ \\
&=& &\frac{ac+bd}{c^{2}+d^{2}}+ \frac{bc-ad}{c^{2}+d^{2}}i
\end{gather*}
$$

The *modulus* of the complex number $z=a+bi$ is denoted $|z|$. It is defined to be:
$$
|z| = \sqrt{ z\bar{z} } = \sqrt{ a^{2}+b^{2} }
$$
#### Properties of the Modulus and Complex Conjugate

Let $z=a+bi$ and $w=c+di$ be *conjugate* numbers.-

$|z| = |\bar{z}|$

$|z|^{2}=z\bar{z}$

$\overline{z+w} = \bar{z} + \bar{w}$

$\overline{zw}=\bar{z}\ \bar{w}$

$\large \overline{\left( \frac{z}{w} \right)}= \frac{\bar{z}}{\bar{w}}$


If we start with a polynomial equation $P(z)=0$ where $P(z)$ has degree $n$, then we can continue taking out linear factors of the form $(z-a)$ until we have found $n$ linear factors.
From example 4.4.2 above:
$$
z^{3}-7z^{2}+6z+14=(z+1)(z^{2}-8z+14)
$$
We can use the quadratic formula to solve $z^{2}-8z+14=0$:

**Important Result** Let $P(z)$ be a polynomial of degree $n$, where $n \in \mathbb{N}$. Then the polynomial equation $P(z)=0$ has $n$ solutions.

### Geometric Representations of Complex Numbers

The complex number $z=a+bi$ can be represented by a point ($a,b$) in the *complex plane*. To represent the complex plane we use a pair of axes where the horizontal axis is the Real axis and the vertical axis is the Imaginary axis. 

The illustration of complex numbers in the complex plane is often called an *Argand diagram*.

(paste image)

If we represent each complex number by its position vector, the then sum of two complex numbers corresponds to vector addition.

The point corresponding to $\bar{z}$ is the reflection of the point corresponding to $z$ in the Real axis.

The modulus of a complex number $z$ is the length of the position vector corresponding to $z$

## 4.2 Complex Numbers in Polar Form

Suppose that the complex number $z=a+bi$ is represented as a point in the complex plane.

- The modulus of $z$ gives the distance from $z$ to the origin.
- The *argument* of $z$,  $\arg(z)$, is the angle that the position vector of $z$ makes with the positive Real axis. Note that there can be many different arguments for a non-zero complex number $z$, since the angle $\theta$ is equivalent to the angle $\theta$ plus or minus any multiple of $2\pi$ radians.
- Note that positive angles are in an anti-clockwise direction and negative angles are in a clockwise direction from the positive Real axis.
- We call the argument of $z$ that lies in the interval $(-\pi,\pi]$ the *principal argument* of $z$, denoted $\arg(z)$.
- If $z=a+bi$ then $\arg(z)=\theta$ where $\tan \theta=\frac{b}{a}$. Always draw a sketch to help you choose the correct value of $\theta$. 

Recall that the number $e=2.71828\dots$ is an irrational number. It can be defined as $e=\lim_{ n \to \infty }\left( 1+\frac{1}{n} \right)^n$.
The following important result is known as *Euler's formula*:
$$
\cos \theta + i \sin \theta = e^{i\theta}
$$
This result was introduced by the Swiss mathematician Euler in 1748. The proof is beyond the scope of this course.

Every non-zero complex number $z=a+bi$ with polar coordinates ($r, \theta$) can be written as
$$
z=r \ cis \theta 
$$
$$
z=re^{i\theta}
$$
Some people call both of the above forms of the polar form of $z$, since they are both based on the polar coordinates of $z$.

The exponential form of a complex number can be used to show that multiplication by $i$ can eb interpreted geometrically as a counter-clockwise rotation through $\frac{\pi}{2}$ radians about the origin.

If $z=re^{i\theta}$, then:
$$
\begin{gather*}
\begin{aligned}
iz &= e^{i\frac{\pi}{2}} \times re^{i\theta} \\
&= re^{i\frac{\pi}{2}}e^{i\theta} \\
&= re^{i(\frac{\pi}{2}+\theta)}
\end{aligned}
\end{gather*}
$$
The complex numbers that can be written as $z=e^{i\theta}$ for some $\theta$ are the complex numbers with modulus 1. Their corresponding points in the complex plane make up a circle of radius one, centred at the origin. Multiplication of any complex number  $z$ by the complex number $e^{i\theta}$ can be interpreted geometrically as a counter-clockwise rotation through $\theta$ about the origin.

If $z=re^{i\phi}$, then:
$$
\begin{gather*}
\begin{aligned}
e^{i\theta}z &= e^{i\theta} \times re^{i\phi} \\
&= re^{i\theta}e^{i\phi} \\
&= re^{i(\theta+\phi)}
\end{aligned}
\end{gather*}
$$
## 4.3 Powers of Complex Numbers

*De Moivre's Theorem* states that if $z=r(\cos \theta + i \sin \theta)$ and $n$ is a natural number, then
$$
z^n =r^n(\cos(n\theta)+i\sin(n\theta))
$$
This theorem  was named after the French mathematician Abraham de Moivre (1667-1754).

Notice that de Moivre's theorem is also true for $n \in \mathbb{R}$.

De Moivre's theorem allows us to calculate powers of complex numbers with ease.

De Moivre's Theorem also allows us to calculate the nth roots of any complex number, where $n \in \mathbb{N}$.

1. Express $w$ in polar form as $w=rcis\theta$.
2. Since the angle $\theta$ is equivalent to the angle $(\theta + 2k\pi)$ for any $k \in \mathbb{Z}$, we know that:
$$
 r cis \theta = r cis (\theta + 2k \pi), \quad \text{where} \quad k \in \mathbb{Z}.
$$
3. Thus $z=(rcis (\theta + 2k\pi))^\frac{1}{n}$, and by the extension of de Moivre's theorem:

$$
z^{\frac{1}{n}} = r^\left( \frac{1}{n} \right) cis \left( \frac{\theta +2k\pi}{n} \right)
$$
for $k \in \mathbb{Z}$.

## 4.4 The Fundamental Theorem of Algebra

A polynomial in the variable $z$ is an expression where $n \in \mathbb{N}$ is the degree (highest power) of the polynomial, are the coefficients of $z$, and $a_{n}\neq 0$.

If $P(z)$ is a polynomial, then $P(z)=0$ is a polynomial equation.

### 4.4.3 Example
Write $z^4-81$ as the product of linear factors and hence find all solutions of $z^4-81=0$ (Over C).
$$
\begin{gather*}
\begin{aligned}
P(z) &= z^4-81 \\
&= (z^{2})^{2} - (9)^{2} \\
&= (z^{2}-9)(z^{2}+9) \\
& \text{Use null factor law} \\
0&= z^{2}-9 \\
9&=z^{2} \\
z&=\pm 3 \\
& or \\
0&=z^{2}+9 \\
-9&=z^{2} \\
9i^{2}&=z^{2} \\
z&=\pm 3i
\end{aligned}
\end{gather*}
$$

Write $z^{2}+2iz-1$ as the product of linear factors and hence find all solutions of $z^{2}+2iz-1=0$ (over C).
$$
\begin{gather*}
\begin{aligned}
P(z)&=z^{2}+2iz-1 \quad \text{Perfect Square} \\
&= (z+i)^{2} =(z+i)(z+i) \\
0 &= (z+i)(z+i) \\
\\
& \text{By null Factor Law} \\
\\
z+i &=0 \implies z=-i \\
or \\
z+i&=0 \implies z=-i \\
\therefore z&=-i \text{is the only repeated solution to } P(z).
\end{aligned}
\end{gather*}
$$

### 4.4.3 (continued) Example
Write $6z^4+z^{2}-1$ as the product of linear functions and hence find all solutions of $6z^4+z^{2}-1=0$
$$
\begin{gather*}
\begin{aligned}
P(z)&=6z^4+z^{2}-1 \\
\\
\text{Let} \quad t&=z^{2}\\
\\
Q(t)&=6t^{2}+t-1 \\
&=(6t^{2}-2t)+(3t-1) \\
&=2t(3t-1)+(3t-1) \\
&=(3t-1)(2t+1) \quad \quad =6 \left( z-\frac{1}{\sqrt{ 3 }} \right) \left( z+\frac{1}{\sqrt{ 3 }} \right)\left( z-\frac{i}{\sqrt{ 2 }} \right)\left( z+\frac{i}{\sqrt{ 2 }} \right) \\
\\
P(z)&=(3z^{2}-1)(2z^{2}+1) \\
\\
&\text{Apply Null Factor Law}\\ 
\\
0&=3z^{2}-1 \\
1&=3z^{2} \\
\frac{1}{3}&=z^{2} \\
z&= \frac{1}{2}\times \frac{1}{\sqrt{ 3 }}
\\
or \\
0&=2z^{2}+1 \\
-1&= 2z^{2} \\
-\frac{1}{2}&=z^{2}\\
\frac{1}{2}i^{2}&=z^{2} \\
z&= \pm \frac{i}{\sqrt{ 2 }}
\end{aligned}
\end{gather*}
$$

If a polynomial equation has real coefficients, its solutions (roots) are either real numbers or occur as pairs of conjugate complex numbers.
### 4.4.4 Example

$z=5+5\sqrt{ 2i }$ is a solution of
$$
z^{3}-8z^{2}+55z+150=0
$$
Find all the other solutions of this equation.
$$
\text{If }z=5+5\sqrt{ 2i } \text{is a solution, then } \bar{z}=5-5\sqrt{ 2i }\ \text{must be another solution.}
$$
$$
\begin{gather}
\begin{aligned}
P(z)&=(z-(5+5\sqrt{ 2i }))(z-(5-5\sqrt{ 2i }))(az+b) \\
&=(z^{2}-(5-5\sqrt{ 2i })z-(5+5\sqrt{ 2i })z+5^{2}+(5\sqrt{ 2 })^{2})(az+b) \\
&=(z^{2}-10z+25+50)(az+b) \\
&=(z^{2}-10+75)(az+b) \\
&=az^{3}+bz^{2}-10az^{2}-10bz+75az+75b \\
&=az^{3}+(b-10a)z^{2}+(-10b+75a)z+75b \\
\\
&\text{Equating Coefficients} \\
\\
z^{3}:\quad 1&=a \\
z^{2}:\quad -8&=b-10a \\
z^1: \quad 55&=-10b+75a \\
\text{Contstant} \quad 
\\
P(z)&=(z-(5+5\sqrt{ 2 }i))(z-(5-\sqrt{ 2 }i))(z+2)
\end{aligned}
\end{gather}
$$

