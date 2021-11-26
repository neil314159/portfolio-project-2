# Connect 4

Connect 4 is a classic family game, and this project brings it online with eye-catching colours and 3D interactive elements. Players can battle each other in two player mode or challenge the computer to a match.

 The project was completed using material learned in the first two modules of the Code Institute Diploma in Software Development, covering HTML, CSS and JavaScript.

The website can be seen [here](https://neil314159.github.io/portfolio-project-2/).

![Mockup](https://github.com/neil314159/portfolio-project-2/blob/main/docs/screenshot.png) <br>

## Table of Contents
* [Purpose](#Purpose)
* [Features](#Features)
* [Future Features](#features-to-implement-in-the-future)
* [Wireframes](#wireframes)
* [Technologies Used](#Technologies-Used)
* [Testing](#Testing)
* [Validation Testing](#validation-testing)
* [Deployment](#deployment)
* [Credits](#credits)
* [Acknowledgements](#acknowledgements)

## Features

* Home Screen
    * This project exists on a single HTML page, and all interaction is through the board game and buttons presented on the screen. The home page has a vibrant colour scheme designed to provide a sense of fun. The game board and menus are presented on a 3D cube which rotates to display the relevant content and engage the user.

    ![Homescreen](docs/homescreen.png)

* Game Board
    * This board is a digital representation of the classic Connect 4 board game. Each empty slot subtly changes colour when the user hovers their mouse over. Once the user clicks the column they want to select, a green or yellow token will appear in the next available location.

    ![Board](docs/gameboard.png)

* Game Logic
    * After a player places a token on the board, the entire board is analysed to see if a winning pattern has been completed. The board is sequentially checked for horizontal, vertical and diagonal patterns of four tokens, and notifies the user if one is found, ending the game.

* Computer Player Mode
	* This mode provides a simple computer opponent for the player. Programmed in Javascript, this algorithm looks for patterns of three tokens already on the board, and seeks to disrupt them before them other player can win. It does this by looking at open slots beside any vertical, horizontal or diagonal stretches of three tokens and then places a token in the fourth spot. If there are no such patterns on the board, the computer chooses a column at random.

* 2 Player Mode
    * This mode allows for 2 players using the same device side-by-side to take turns. There are green and yellow tokens which alternate on every turn. 

* Control Buttons
    * These buttons under the main game board allow the user to reset the game back to its starting point, or to access the setting menu. The settings menu button will toggle over and back to the setting page if tapped repeatedly.

     ![Buttons](docs/buttons.png)

* Player Status
	* This text shows which colour player is currently active.

    ![Status](docs/status.png)

* Night Mode
    * Turning on night mode darkens the background of the site, making it easier to use at night when on a phone or laptop.

    ![Nightmode](docs/nightmode.png)

* Results Page
    * This page notifies the user who has won the game, for either a two-player or computer opponent game. It also has a button allowing the user to restart the next game straight away. 

    ![Resultspage](docs/resultspage.png)

* Setting Page
    * Here the user can choose to play two-player or computer games. They can also turn on and off dark mode from this page. Clicking the button in the menu will take you back while still maintaining the state of the game.

    ![Settings](docs/settingspage.png)

### Features to implement in the future
* Currently the logic used by the computer player is quite simple. It is possible to calculate multiple moves ahead and choose the best option statistically, but this is quite taxing on the browser when done through CSS and Javascript. A different software framework may be required for handling these operations.
* Adding some sound effects and animations to the game would increase the level of interactivity.
* An online multiplayer option could be added to increase user engagement. This would require managing user accounts and networking protocols.

## Wireframes
![Homepage](docs/homepage.png)<br>
![Settings](docs/settings.png)<br>
![Results](docs/results.png)<br>

## Technologies Used

* HTML 
    * HTML was used to define the content and overall structure of the website.
* CSS 
    * CSS was used for styling the site, as well as for defining and manipulating 3D elements needed for the game.
* JavaScript
    * Javascript was used to create the layout and interactive elements of the game. This involved using event listeners to trigger actions, and manipulating the DOM to manage the state of the game.
* [Github](https://github.com) 
    * GitHub is used to store the source code of the site.
* [Git Pages](https://pages.github.com)
    * Git Pages was used to deploy the website.
* [Gitpod](https://gitpod.io) 
    * Gitpod provided a remote development environment and was linked to Github to facilitate storage and deployment.
* [Google Fonts](https://fonts.google.com/)
	* Google Fonts was used to browse a number of options and select the Sora font as being suitable for the project.
* [Balsamiq](https://balsamiq.com/wireframes/)
	* Before starting coding, Balsamiq was used to lay out the site and refine the design.
* [clrs.cc](https://clrs.cc)
    * This site provided a pallette of suitable colours for a modern website which were then adjusted for my project.
* [MacOS Preview](https://support.apple.com/guide/preview/welcome/mac)
    * MacOS Preview was used to generate and edit screenshots of the website.
* [Favicon](https://favicon.io/) 
    * Favicon.io was used to draw, edit and download a favicon ready to deploy to the site.
* [Lighthouse](https://developers.google.com/web/tools/lighthouse#devtools) 
    * Google Lighthouse generated a report which verified the performance and usability of the site. 
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) 
    * Chrome Developer Tools were used to debug programming logic errors by logging variables to the console.
* [Wave Web Accessibility Tool](https://wave.webaim.org) 
    * The Wave Tool generated a report which highlighted potential problems for users with accessibilty concerns.

## Testing


* Test that the site is responsive and scales smoothly across different screen sizes.
    * Test:
        1. Select a number of common browsers such as Chrome, Safari and Firefox.
        1. Navigate to the site and select the dev tools for each browser.
        1. Examine the site at a number of different resolutions from widescreen monitor (2000px wide) down to small mobile phone (300px wide).
        1. Verify that the site looks and behaves correctly at each resolution and scales smoothly between resolutions.
    * Result:
        * The site behaved as expected across a variety of browsers and screen sizes.

* Test that site operates correctly on a physical mobile device.
    * Test:
        1. Secure a number of mobile devices such as an iPhone XR and a Samsung S20.
        1. On each phone, open the browser application and input the address of the site.
        1. Click on every menu option and test gameplay to make sure it works the same as on a desktop computer.
    * Result:
        * On both phones the site behaved correctly in terms of appearance and gameplay.

* Test the gameplay logic of the site
    * Test:
        1. Navigate to the site.
        1. Play multiple games using different strategies and menu options to verify that the expected results and behaviours are displayed.
    * Result:
        * All options and games behaved as expected under a variety of conditions.

* Choose every button and menu option to ensure they operate correctly
    * Test:
        1. Navigate to the site.
        1. Click every button multiple times and in different sequences to ensure that the game works correctly.
        1. All options selected in the menu should be reflected properly in the game.
    * Result:
        * All buttons and menu options behaved correctly when operated in different sequences and combinations..

* Validate that all graphical elements behave correctly when interacting with the mouse.
    * Test:
        1. Open the browser and navigate to the website.
        1. Hover over gameplay elements with the mouse and verify that they change colour appropriately.
        1. Operate the 3D animations by clicking the menu buttons and verify that they behave as expected with no graphical glitches or clipping issues.
    * Result:
        * Each page was correctly highlighted in the menu when the page is currently selected.
                

### Fixed Bugs

* After the 3D elements of the site design were implemented, they were tested on different browsers. The 3D CSS cube had no problems on Chrome or Firefox, but displayed clipping issues on Safari. After testing further, it was necessary to refactor the CSS code for displaying 3D shapes to use a different approach.

* When the project was nearing completion, it was tested on a number of handheld devices including an iPhone XR. The site displayed an issue with text incorrectly overflowing a div, an issue that was not apparent on the site simulators or dev tools. The code was adjusted and the issue solved.

* During testing of gameplay, an issue arose where the computer was always designated the winner even after losing. Using Chrome dev tools and logging the game variables to the console, the bug was tracked down and fixed.

### Validation Testing

* HTML: The site was fully tested using the [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fneil314159.github.io%2Fportfolio-project-2%2F). There were no errors and no warnings.
* The [W3C Jigsaw Validator](jigsaw.w3.org) was used to check the CSS of the website. There were no errors shown.
* Accessibility: the site was checked for accessibility problems using the Google Lighthouse suite in Chrome and the [Wave](https://wave.webaim.org/report#/https://neil314159.github.io/portfolio-project-2/index.html) Report Generator. This showed no errors.
* [JSHint](https://jshint.com/) was used to validate the Javascript on the project website. This showed up one warning about declaring a function within a loop that could potentially access a variable outside the scope of the loop. This method of declaration was used in the course material. This is also a commmonly-reported overzealous warning from JSHint, as using let rather than var manages the scope of the loop properly and renders this operation safe.

![Lighthouse](https://github.com/neil314159/portfolio-project-2/blob/main/docs/lighthouse.png)

### Unfixed Bugs

There are no other unfixed bugs at this point.


## Deployment

### Project Set-up
The recommended Code Institute template found [here](https://github.com/Code-Institute-Org/gitpod-full-template) was used. This template was set up with a standard configuration for VSCode and Gitpod which saved time and let me get started quickly. I chose a repository name and used Gitpod to create and edit my project files.

The Remote/Guide website was deployed to GitHub Pages by the following actions:
1. Navigate to [Project 2 Portfolio](https://github.com/neil314159/portfolio-project-2) on GitHub.
1. Click on the 'Settings' tab.
1. Select 'Pages' from the menu on the left side of the page. 
1. Select the 'main' branch in the source selector drop-down.
1. Click 'Save'.
1. After a few minutes the website was deployed. The finished project can be found here: https://neil314159.github.io/portfolio-project-2/


## Credits

### Code

This [tutorial](https://3dtransforms.desandro.com/cube) on how to construct and rotate 3D cubes in CSS was used to understand some of the principles used in my project.

### Acknowledgements
Thanks to Daisy McGirr for her advice and guidance on this project.