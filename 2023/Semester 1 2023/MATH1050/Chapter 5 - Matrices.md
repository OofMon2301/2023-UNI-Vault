---
date: 21-03-2023
type: Lecture
subject: MATH1050
tags: lecture
Topic:: 
---
# [[Chapter 5 - Matrices]]
#MATH1050 #Matrices

Matrices represent a structured way of storing and using groups of data in mathematically valid ways.
They were initially developed for solving systems of simultaneous equations, such as 
$$
\begin{gather}
\begin{aligned}
2x-3y+z&=-13 \\
x+4y&=0 \\
x-2y+3z &=2
\end{aligned}
\end{gather}
$$
Matrices are used very heavily in computer software, for solving complex problems from science, business and engineering. Most supercomputers spend a lot of their time solving large matrix problems.
## 5.1 Introduction to Matrices

We will start with an example to illustrate what matrices are and how they can be used in a familiar situation.
### 5.1.1 Example
Suppose that this week you buy 1kg of apples, 0.6kg of oranges and 0.76kg of bananas, and next week you buy 0.75kg of apples, 1kg of oranges and 0.8kg of bananas. If the cost of apples is $2.99 per kg, orange is $3.99 per kg, bananas is $1.89 per kg, how much did you spend on fruit each week?

This information can be presented as follows.

![[Pasted image 20230328074657.png]]

To determine how much money was spent on fruit each week we combine the information in a row of the first table with a column of the second table.

$$
\begin{gather}
\begin{aligned}
\begin{pmatrix}
1 & 0.6 & 0.76 \\
0.75 & 1 & 0.8 \\

\end{pmatrix}
\begin{pmatrix}
2.99 \\
3.99 \\
1.89
\end{pmatrix}
\end{aligned}
\end{gather}
$$
$$
\begin{gather*}
\begin{aligned} =
\begin{pmatrix}
1 \times 2.99 + 0.6 \times 3.99 + 0.76 \times 1.89  \\
0.75 \times 2.99 + 1 \times 3.99 + 0.8 \times 1.89
\end{pmatrix}
= \begin{pmatrix}
6.82  \\
 7.7
\end{pmatrix}
\end{aligned}
\end{gather*}
$$
You spent $6.82 in the first week and $7.74 in the second week. 

---
The rows and columns of numbers enclosed in brackets are examples of matrices and this combining operation is an example of matrix multiplication. We will now define matrices and operations on matrices formally.

A *matrix* is a rectangular array of numbers, enclosed in brackets.

An $m \times n$ matrix has *m* rows and *n* columns. The *size* or *order* of a matrix is its number of rows and number of columns. An $m \times n$ matrix has size "*$m$ by $n$".

The plural of matrix is *matrices*.

---

### Example 5.1.2

$$
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{pmatrix} \text{ is a }2 \times 3 \text{ matrix.}
$$

---
Common notation for a general $m \times n$ matrix A is:
$$
A= 
\begin{pmatrix}
a_{11} & a_{12} & a_{13} & \dots & a_{1n} \\
a_{21} & a_{22} & a_{23} & \dots & a_{2n} \\
\vdots & \vdots & \vdots &  & \vdots \\
a_{m1} & a_{m2} & a_{m3} & \dots & a_{mn} 
\end{pmatrix}
= (a_{ij})
$$
The notation $a_{ij}$ is used to represent the *element* or *entry* in the $i$th row and $j$th column of the matrix A.

We commonly use an upper case letter to refer to a matrix and the corresponding lower case letter (with subscripts) to refer to the elements of that matrix.

A matrix with exactly one row may be called a *row vector*. A matrix with exactly one column may be called a *column vector*. Row and column vectors are often denoted by lower-case letters in bold type.

A matrix with one row **and** one column is just a number (as we're all familiar with). Sometimes this is called a *scalar*, to distinguish it from matrices with multiple rows or columns, and we write it without any brackets.

A matrix in which every entry is 0 is called a *zero matrix*. The $m \times n$ zero matrix will sometimes be written as $\mathbf{0}_{m \times n}$.

A matrix with the same number of rows and columns is called a *square matrix*.

Matrices $A = (a_{ij})$ and $B = (b_{ij})$ are equal if and only if:
- A and B have the same size, 
- $a_{ij}=b_{ij}$ for all values of $i$ and $j$.

## 5.2 Adding and Subtracting Matrices

Two matrices can be added or subtracted provided that they have the same size. Two matrices of different sizes cannot be added or subtracted!

*Matrix addition*: Let $A=(a_{ij})$ and $B=(b_{ij})$ be $m \times n$ matrices. Then $A+B=C=(c_{ij})$ is the $m \times n$ matrix with $c_{ij}=a_{ij}-b_{ij}$.

## 5.3 Scalar Multiplication of Matrices

It is possible to multiply any matrix by any scalar (number); this is called *scalar multiplication*.

Let $A=(_{ij})$ be an $m \times n$ matrix, and let $k$ be any scalar (number). Then $kA=C=(c_{ij})$ is the $m \times n$ matrix with $c_{ij}=ka_{ij}$.

Scalar multiplication of a matrix $A$ by a positive integer $k$ is the same as adding $k$ copies of $A$ together.

We usually write $-A$ for $(-1)A$. Note that matrix subtraction is just a combination of matrix addition and scalar multiplication since $A=B=A+(-B)$.

## Multiplying Matrices

The product AB of matrices $A$ and $B$ exists if and only if the number of columns in $A$ equals the number of rows in $B$.

*Matrix multiplication*: Let $A=(a_{ij})$ be an $m \times n$ matrix and $B=(b_{ij})$ be an $n \times p$ matrix. Then $AB=C=(c_{ij})$ is the $m \times p$ matrix with $c_{ij}=a_{i_{1}}+b_{ij}+a_{i_{2}}+b_{2j}+\dots+a_{in}b_{nj}$.

Some people get confused by how to work out exactly which row should be multiplied by which column. The following method may help you.

To multiply matrix A by matrix B (assuming possible):

Position (1,1) - multiply the first element in the first row of A by the first element in the first column of B. Add to this the product of the second element in the first row of A and the second element in the first column of B. Keep going until there are no more entries in the first row.

Position (1,2) - multiply the first element in the first row of A by the first element in the second column of B. Add to this the product of the second element in the first row of A and the second element in the second column of B. Keep going until there are no more entries in the first row.

Repeat the above procedure until the first row of your new matrix (AB) is complete.

Position (2,1) - multiply the first element in the second row of A by the first element in the first column of B. Add to this the product of the second element in the second row of A and the second element in the first column of B. Keep going until there are no more entries in the second row.

Repeat the above procedure until the second row of your new matrix (AB) is complete.

Repeat (a)-(e) until all rows are completed.

### Properties of Matrix Multiplication

For matrices of appropriate sizes:

$A(BC)=(AB)C \quad \text{associative}$;
$A(B+C)=AB+AC \quad \text{and} \quad (A+B)C=AC+BC \quad \text{distributive}$

The order of multiplication is important. Matrix multiplication is not commutative, so in general $AB\neq BA$.

## The Transpose of a Matrix

Informally, the transpose of an $m \times n$ matrix is the $n \times m$ matrix obtained by exchanging the rows and columns of $A$.

Formally, given an $m \times n$ matrix $A=(a_{ij})$, the transpose of $A$ is the $n \times m$ matrix $C=(c_{ij})$ where:
$$
c_{ij}=a_{ji}, \quad \text{for all} \quad i, j
$$
The transpose of $A$ is usually denoted by $A^T$.


## 5.6 Identity and Inverse Matrices

In the multiplication of real numbers, the number 1 plays a special role because $1 \cdot k=k\cdot 1 = k$ for all real numbers $k$. In matrix multiplication, this role is played by the identity matrix.

The *identity matrix* of order $n$, denoted $I$ or $I_{n}$, is the $n \times n$ matrix $A=(a_{ij})$ where:
$$
a_{ij}=
\begin{cases}
1 & \text{if } i=j \\
0 & \text{if }i\neq j
\end{cases}
$$
If $A$ is any $m \times m$ matrix, then
$$
I_{m}A = AI_{m}=A.
$$
More generally, if $A$ is any $m \times n$ matrix, then:
$$
I_{m}A=AI_{n}=A.
$$
When dealing with matrix powers, if $A$ is an $m \times m$ matrix, we define $A^0=I_{m}$.

The identity matrix is an example of a *diagonal matrix*. 
A square matrix $A=(a_{ij})$ is a *diagonal matrix* if and only if $a_{ij}=0$ whenever $i\neq j$.

### The Inverse of a Square Matrix

A square matrix $A$ is *non-singular* if there exists a matrix $B$ such that $AB=BA=I$. The matrix $B$ is called the *inverse of $A$*, and is denoted $A^{-1}$.

A non-singular matrix is said to be *invertible*.

Not every square matrix is invertible. 

A matrix that does not have an inverse is said to be *singular* or *non-invertible*.

### Example 5.6.4

Show that the matrix $A =\bigl( \begin{smallmatrix}0&1 \\ 0&2 \end{smallmatrix} \bigr)$ is non-invertible.

$$
\begin{gather*}
\begin{aligned}
\text{Proof: Assume A is invertible (i.e. Here exists}  \ A^{-1}=\begin{pmatrix}
a & b  \\
c & d
\end{pmatrix}
\text{ such that }A{A}^{-1}=A^{-1}A=I \\
AA^{-1}=\begin{pmatrix}
0 & 1 \\
0 & 2
\end{pmatrix}
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
= \begin{pmatrix}
c & d \\
2c & 2d
\end{pmatrix}
= \begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
\end{aligned}
\end{gather*}
$$
### Properties of Matrix Inverses
If $A$ and $B$ are non-singular $n \times n$ matrices, then:
-  $(A^{-1})^{-1}=A$
- $(AB)^{-1}=B^{-1}A^{-1}$
- $(A^{T})^{-1}=(A^{-1})^T$

### The Inverse of a 2 X 2 Matrix

 Consider the $2 \times 2$ matrix:
 $$
A=\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
A is invertible if and only if $ad-bc \neq 0$.

If $ad-bc \neq 0$, then the inverse of $A$ is:
$$
A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}
d & -b \\
-c & a
\end{pmatrix}
$$

### Example 5.6.5

Suppose that $ad-bc \neq 0$, verify that $AA^{-1}=A^{-1}A=I$

$$
\begin{gather*}
\begin{aligned}
\text{Let} \quad \Delta=ad-bc \\
B &= \frac{1}{\Delta} \begin{pmatrix}
d & -b \\
-c & a
\end{pmatrix} \\
AB&=BA=I \\
AB&=\begin{pmatrix}
a & b \\
c & d
\end{pmatrix} \frac{1}{\Delta}
\begin{pmatrix}
d & -b \\
-c & a
\end{pmatrix} \\
&= \frac{1}{\Delta} \begin{pmatrix}
a & b \\
c & d
\end{pmatrix} 
\begin{pmatrix}
d & -b \\
-c & a
\end{pmatrix} \\
&= \frac{1}{\Delta} \begin{pmatrix}
ad-bc&ab+ab \\
cd-cd & -bc+ad
\end{pmatrix} \\
&= \frac{1}{\Delta} \begin{pmatrix}
\Delta  & 0 \\
0 & \Delta
\end{pmatrix} \\
&= \begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}

\end{aligned}
\end{gather*}
$$
### Example 5.6.6
$$
\begin{align}
Let \ A=\begin{pmatrix}
2 & 2 \\
3 & 4 
\end{pmatrix} \ and \ B=\begin{pmatrix}
-1 & -\frac{2}{3} \\
6 & 4
\end{pmatrix}
\end{align}
$$
Determine, if possible, $A^{-1}$ and $B^{-1}$.

$$
\begin{align}
\text{For A:} \quad \Delta&=(2)(4)-(2)(3) =8-6=2 \neq 0 \\ \\
&\therefore \text{A is invertible}.
\end{align}
$$

### Example 5.6.7

Prove that a matrix $A$ has at most one inverse.

$$
\begin{align}
&\text{Proof: If A is non-invertible, then A has 0 inverses.} \\
&\text{Now suppose A is invertible (i.e. there exists matrices B and C such that:} \\
AB&=BA=I \\
AC&=CA=I \\
Since \quad AB&=I, \\
(CA)B&=CI \\
IB&=C \\
B&=C  \\
&\text{If we have 2 inveses of A, then they must be the same.} \\
&\therefore \text{A has at most one inverse}.
\end{align}
$$
## 5.7 The Determinant of a Square Matrix

With each square matrix $A$ we associate a number called *the determinant* of $A$, denoted $\det(A)$ or $|A|$.

A square matrix $A$ is invertible if and only if $\det(A)\neq 0$

The determinant of a matrix $A$ is often indicated by writing the elements of $A$ inside two vertical bars.

$$
\begin{gather}
\begin{aligned}
\text{For the } 2 \times 2 \text{ matrix, }A&=\begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix} \\
|A|=\Delta=\det(A)&=\left| \begin{matrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{matrix} \right| = a_{11}a_{22}-a_{12}a_{21}
\end{aligned}
\end{gather}
$$


$$
\begin{gather}
\begin{aligned}
\text{For the } 3 \times 3 \text{ matrix, }A=\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
\end{aligned}
\end{gather}
$$
Memorise the formula for the determinant of a $2 \times 2$ matrix.

For a $3 \times 3$  (or larger) matrix, understand the following method for calculating determinants.

### Calculating the Determinant of a Square Matrix

For the element $a_{ij}$ in a matrix $A$, define the $cofactor$ of $a_{ij}$ to be $(-1)^{i+j}$ times the determinant of the matrix obtained from $A$ by deleting row $i$ and column $j$.

To calculate the determinant of an $n \times n$ matrix $A$, choose one row (or column) of $A$ along which you will expand the determinant. Multiply each element of that row (or column) by its cofactor, and sum the results.

Observe that $(-1)^{i+j}$ gives the pattern:

$$\LARGE
\begin{pmatrix}
+ & - & + & - & \dots \\
- & + & - & + & \dots \\
+ & - & + & - & \dots \\
\vdots
\end{pmatrix}
$$
so if you remember this pattern, you don't need to work out $(-1)^{i+j}$ each time you calculate a cofactor.

## 5.8 Vector Product - part 2

In the previous chapter we saw how to calculate a vector product in $\mathbb{R}_{3}$ using the vector products of the unit vectors, $\mathbf{i},\mathbf{j}$ and $\mathbf{k}$. Although this method works, it can be a bit tedious. We now illustrate a shortcut using determinant notation.

If $\mathbf{u}=u_{1}\mathbf{i}+u_{2}\mathbf{j}+u_{3}\mathbf{k}$ and $\mathbf{v}=v_{1}\mathbf{i}+v_{2}\mathbf{j}+v_{3}\mathbf{k}$ then
$$\LARGE
\mathbf{u} \times \mathbf{v}=\mathbf{i} \left| \begin{matrix}
u_{2} & u_{3} \\
v_{2} & v_{3}
\end{matrix} \right| - \mathbf{j} \left| \begin{matrix}
u_{1} & u_{3} \\
v_{1} & v_{3}
\end{matrix} \right| + \mathbf{k} \left| \begin{matrix}
u_{1} & u_{2} \\
v_{1} & v_{2}
\end{matrix} \right|.
$$
$$
\LARGE \text{So } \mathbf{u} \times \mathbf{v} = \left| \begin{matrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
u_{1} & u_{2} & u_{3} \\
v_{1} & v_{2} & v_{3}
\end{matrix} \right|
$$
Where the determinant must be expanded along its top row.

### Area of a Triangle

The area of a triangle withy base length $b$ and height $h$ is given by $\frac{1}{2}bh$.

The triangle formed by the vectors $\mathbf{v}$ and $\mathbf{w}$ has base of length$|\mathbf{v}|$ and height given by $|\mathbf{w}| \sin \theta$ , where $\theta$ is the angle between $\mathbf{v}$ and $\mathbf{w}$.

Thus, the area of the triangle formed by vectors $\mathbf{v}$ and $\mathbf{w}$ is
$$
\text{Area}=\frac{1}{2}|\mathbf{v}||\mathbf{w}|\sin \theta = \frac{1}{2}|\mathbf{v}\times \mathbf{w}|
$$
## 5.9 Solving Systems of Linear Equations

Consider the following pair of simultaneous linear equations in two unknowns.

$$
\begin{align}
2x+y &=7  \\
3x+2y&=12
\end{align}
$$
We can write these using matrices as follows:
$$
\begin{pmatrix}
2 & 1 \\
3 & 2
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}=\begin{pmatrix}
7 \\
12
\end{pmatrix}$$
Now the inverse of $A$ is:
$$
A^{-1}=\begin{pmatrix}
2 & -1 \\
-3 & 2
\end{pmatrix}
$$
We can solve for $x$ and $y$ by multiplying both sides of the above matrix equation by $A^{-1}$ (on the left).

$$
\begin{align}
\begin{pmatrix}
2 & -1 \\
-3 & 2
\end{pmatrix} \begin{pmatrix}
2 & 1 \\
3 & 2
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix} &=\begin{pmatrix}
2 & -1 \\
-3 & 2
\end{pmatrix} \begin{pmatrix}
7 \\
12
\end{pmatrix}  \\
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix} \begin{pmatrix}
x \\
y \\
\end{pmatrix} &= \begin{pmatrix}
2 \\
3
\end{pmatrix}  \\
\begin{pmatrix}
x \\
y
\end{pmatrix} &= \begin{pmatrix}
2 \\
3
\end{pmatrix}
\end{align}
$$
Thus, the solution is $x=2,y=3$.
