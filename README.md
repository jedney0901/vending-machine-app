# Overview

* [Project brief](#project-brief)
* [Constraints](#constraints)
* [Technology stack](#technology-stack)
* [User stories](#user-stories)
* [Design process](#design-process)
    * Tech choice
	* Planning
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
    - I had been recently doing high code coverage on a previous project I had completed for an internship and wanted to see whether I could replicate this.

### Planning

Part of the planning involved:

* Decisions about the file/folder structure. As this is a react app I wanted to make sure things were modular and separeted them as per that requirement.
* Decisions about state management and also how I managed my functionality.
* Breaking down the app into components based on functionality.
    - Vending Machine Component
    - Available currency component
    - Available product component
    - Managing the available credit and remaining credit after a purchase

# Challenges

The app required careful consideration around the planning based on the brief provided and then writing the required functionality to suit the core logic. React seemed like a good framework as this was going to be a fairly small dynamic app to manage and I couldn't foresee any significant issues in structuring the app as I could use create-react-app framework to get me started quickly. The biggest issue I had was actually just setting up my test environment and getting into a TDD approach which I had been practising previously while working on a project at an internship. I wanted to try and use Mocha/Chai for testing and had started writing out my tests but not in a TDD approach and more as a post-development validation requirement incase I was to make changes in the future. I realised that because I was trying to test with Mocha/Chai that I was running into issues with the way create-react-app is configured in regards to testing. This led to me spending a large portion of time understanding jest and leading me to run out of time.

# Reflections

- Setup your test environment first and use TDD approach from the beginning.
- Review how functions are currently modifying state as currently they are changing state directly.
- I didn't have a good enough understanding of Jest to write my unit tests for everything. Need to work on transitioning between frameworks for testing and making sure that it works for my environment.

# Next steps

- Build an order summary component which shows what they have ordered so far, how much they have spent and how much credit they have remaining with a cashout option.
- Write my unit tests for the app functionality in jest.
- Update layout and make it more user friendly.


