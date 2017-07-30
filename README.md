# Overview

* [Project brief](#project-brief)
* [Constraints](#constraints)
* [Technology stack](#technology-stack)
* [User stories](#user-stories)
* [Design process](#design-process)
    * Tech choice
	* Planning
	* Implementation
* [Challenges](#challenges)
* [Reflections](#reflections)
* [Next steps](#next-steps)

# Project brief

* The task is to design a system that allows the user to enter coins in the following
denominations (10c, 20c, 50c, $1, $2). It will then prompt the user to enter their choice of
chocolate bar from the following selections; 

- Caramel $2.50
- Hazelnut $3.10
- Organic Raw $2.00

The app must not allow the user to enter invalid currency and must ensure they’ve entered the
correct amount of money prior to prompting for their selection.

Writing unit tests is essential for this vending machine to make it into production and allow kids
across the country to get awesome vegan snacks.

* What happens if the child enters too much money (two $2 coins)?
* What happens if the child enters a 5c coin?
* Don’t mix presentation logic with business logic
* How does a child enter their choice of chocolate bar?
* Browser or CLI your choice

# Constraints

* Up to 24 hours to complete task

# Technology Stack

* Javascript
* React - create-react-app
* Mocha
* Chai

# User stories

1. As a user, I can only enter either 10c, 20c, 50c, $1, $2 values as currency so that I can add credit to purchase some vegan bars.
2. As a user, I can only select the vegan bar I want once I have enough credit.
3. As a user, I can see what products I have selected so far.
4. As a user, I can click a 'Purchase' button that will tell me if I have any remaining credit left on the vending machine.
5. As a user, I can click a 'clear' button that will let me completely reset the app.

# Design process

### Tech choice

* ReactJS
    - To build an app quickly such as this I thought it would be perfect for something like create-react-app which lets me spin up an app pretty quickly and would also allow me to showcase modu.
* Mocha Chai
    - I wanted confidence in my code and so attempted a TDD approach to solving this challenge (see reflections)
* Ramda
    - Continuing my learning of Ramda js to compose and reuse smaller functions

### Planning

Part of the planning involved:

* Making decisions about the file/folder structure. Keeping things modular rather than hacking things together in one file.
* Breaking down the app into manageable parts based on functionality.
    - view layer of the sudoku board and buttons
    - formatting user input
    - populating and rendering sudoku board with input
    - resetting sudoku board
    - validating rows, columns and regions
    - solving the sudoku

### Implementation

Create an implementation order based on the features that build on top of each other


# Challenges

A list of challenges I faced:


# Reflections


# Next steps


