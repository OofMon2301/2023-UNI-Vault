---
date: 2024-03-19
type: Lecture
subject: ELEC2300
tags: lecture
week: Week 2
Topic: Dielectrics
field: Physics
---

#ELEC2300
# Dielectrics in Capacitors

## Introduction

When an insulating material (dielectric) is placed between the plates of a capacitor, the electric field and capacitance are affected due to the formation of induced dipoles within the dielectric material.

## Induced Dipoles

In the presence of an external electric field $\vec{E}_0$, the atoms or molecules of the dielectric material form dipoles. The positive ends of the molecules align with the direction of the field, while the negative ends align oppositely, resulting in an induced surface charge density on the dielectric.

## Induced Electric Field

The induced surface charge density on the dielectric creates an induced electric field $\vec{E}_\text{ind}$ that opposes the original external field $\vec{E}_0$. The actual electric field $\vec{E}$ within the dielectric is the vector sum of the external field and the induced field:

$$\vec{E} = \vec{E}_0 + \vec{E}_\text{ind}$$

## Dielectric Constant

The ratio of the original electric field $\vec{E}_0$ to the actual electric field $\vec{E}$ within the dielectric is defined as the dielectric constant $\kappa$:

$$\kappa = \frac{\vec{E}_0}{\vec{E}}$$

The dielectric constant $\kappa$ is always greater than or equal to 1, with $\kappa = 1$ for a vacuum.

## Capacitance

The presence of a dielectric material increases the capacitance $C$ of a capacitor by a factor of $\kappa$, compared to the capacitance in a vacuum $C_0$:

$$C = \kappa C_0$$

For a parallel-plate capacitor with a dielectric material, the capacitance is given by:

$$C = \kappa \epsilon_0 \frac{A}{d}$$

where $\epsilon_0$ is the permittivity of free space, $A$ is the area of the plates, and $d$ is the distance between the plates.

## Polarization and Displacement Fields

The induced field $\vec{E}_\text{ind}$ can be expressed in terms of the polarization field $\vec{P}$:

$$\vec{E}_\text{ind} = \frac{1}{\epsilon_0} \vec{P}$$

The displacement field $\vec{D}$ is related to the electric field $\vec{E}$ and the polarization field $\vec{P}$ by:

$$\vec{D} = \epsilon_0 \vec{E} + \vec{P}$$

In a dielectric material, the displacement field $\vec{D}$ is proportional to the electric field $\vec{E}$, with the proportionality constant being the permittivity $\epsilon$ of the dielectric material:

$$\vec{D} = \epsilon \vec{E}$$

where $\epsilon = \kappa \epsilon_0$.