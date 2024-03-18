---
date: 2024-02-27
type: Lecture
subject: ELEC2300
tags: lecture
week: Week 2
Topic: Electromagnetism
field: Physics
date modified: 2024-03-18
---
#ELEC2300
# Parallel Plate Capacitor

A [[Parallel-Plate Capacitor]] is a simple model consisting of two parallel conductive plates separated by a distance $d$, with equal and opposite charges $+Q$ and $-Q$ on each plate.

## Electric Field
When the plates are large compared to their separation, we can ignore **fringing effects** at the edges and assume a uniform electric field $\vec{E}$ between the plates.

The direction of $\vec{E}$ is from the positive to the negative plate, and its magnitude is given by:

$$|\vec{E}| = \frac{\sigma}{\epsilon_0}$$

Where $\sigma = Q/A$ is the surface charge density on each plate, $A$ is the plate area, and $\epsilon_0$ is the permittivity of free space.

Importantly, the electric field strength does **not** depend on the plate separation $d$ in this idealized model.

## Electric Potential
The potential difference $\Delta V$ between the plates is obtained by integrating the electric field along a line from one plate to the other:

$$\Delta V = -\int_a^b \vec{E} \cdot d\vec{l} = Ed$$

Since $E$ is uniform, this gives:

$$\Delta V = \frac{Q}{\epsilon_0 A}d = \frac{Q}{C}$$

Where $C = \epsilon_0 A/d$ is the **capacitance** of the parallel plate capacitor.

Within the region between the plates, the electric potential $V(z)$ varies linearly from 0 at the negative plate to $\Delta V$ at the positive plate.

## Capacitance
The capacitance $C$ is a measure of the amount of charge $Q$ stored on each plate for a given voltage $\Delta V$ between the plates. It depends on:

- Plate area $A$ (directly proportional)
- Plate separation $d$ (inversely proportional)
- Permittivity $\epsilon$ of the material between the plates

For parallel plates with vacuum/air between them, the permittivity is $\epsilon_0$ (permittivity of free space).

The greater the capacitance, the more charge can be stored per unit voltage applied across the capacitor.

## Applications
Parallel plate capacitors find applications in many areas of electrical engineering and physics due to their ability to store charge and energy in the electric field between the plates. Understanding their basic principles is important for topics like capacitors, dielectrics, energy storage, and more.