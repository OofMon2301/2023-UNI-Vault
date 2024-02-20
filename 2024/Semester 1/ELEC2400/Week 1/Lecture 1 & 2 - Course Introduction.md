---
date: 19-02-2024
type: Lecture
subject: Week 1
tags: lecture
Topic:
field: $SUBJECT
---
#ELEC2400

## Course Content
- Review of circuit analysis 
- Brief introduction to semiconductors. PN junction, diode circuit
- Single stage BJT and FET amplifiers
- Multiple stage amplifiers
- Discrete differential amplifier
- Amplifier models
- Operational amplifier circuit
- Others

## Revision Of Circuit Theory
### Passive Reference Configuration

![[Pasted image 20240220130623.png]]

This results in the current entering the positive terminal of the voltage.

### Kirchhoff's Laws

There are two Kirchhoff's Laws; [[Kirchhoff's Voltage Law]] and [[Kirchhoff's Current Law]].

### Series and Parallel Circuits

![[Pasted image 20240220130928.png]]

### Independent and Dependent Sources

There are many independent and dependent voltage and current sources, depending on the components that control each part.

#### Dependent Voltage Sources

Dependent Voltage Sources (also known as controlled voltage sources) are represented by diamond shaped symbols. The **voltage** across a **dependent voltage source** depends on the current or voltage that appears elsewhere in the circuit. 

![[Pasted image 20240220131232.png]]

> [!question] Example
> 

### Current Divider Circuit

For two resistances in parallel, the fraction of the total current flowing in a resistance is the ratio of the other resistance to the sum of the two resistance. This is known as the **Current division principle**. This only applies to **two resistors**. 

For more than two resistors in parallel, you need to first combine some resistors in order to get two resistors only.
$$
i_{1}=\frac{R_{2}}{R_{1}+R_{2}}i_{total}

$$
$$
i_{2}=\frac{R_{1}}{R_{1}+R_{2}}i_{total}
$$

$$
i_{n}=\frac{G_{n}}{G_{1}+G_{2}+G_{3}+\dots+G_{n}}\times i_{total}
$$
## Nodal Analysis Techniques

#### Steps to complete Nodal Analysis

##### Step 1 - Identifying Nodes and selecting the reference node
- Identify the nodes in the circuit
 - Select one of the nodes as the reference node - *Typically one end of the source* (Mostly negative terminal of the voltage source.)
 - Reference node has a negative polarity with respect to nodes
 ![[Pasted image 20240220132224.png]]
##### Step 2 - Assigning Node Voltages
 - Label the voltage of each nodes except for the reference node.
 - Node Voltages are positive with respect to reference voltage.
 - Reference Node has a negative polarity with respect to nodes.
![[Pasted image 20240220132428.png]]
##### Step 3 - Writing KCL equations in terms of the node voltages and solve for unknowns
- Apply KCL to all unknown nodes (avoid nodes that are connected to voltage sources.)
 - How many unknown nodes are there?
 - How many unknown equations are required to solve for the unknowns?
 ![[Pasted image 20240220132656.png]]
### Mesh Current Analysis






