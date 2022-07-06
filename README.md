# Player vs. Player

Welcome to [Player vs. Player Game!](https://mihaielisei.github.io/Player-vs.-Player/)

# Introduction

Player vs. Player it is a small multiplayer game where two players attack eachother. Each player will have two attack options on each turn, each attack option deal a different amount of damage. First player that reach 3 points will win the game. 

The game was build only with HTML, CSS and JavaScript, and the main purpose of the project is to dynamically chage the DOM using only one HTML file.

Live version of the game [Player vs. Player.](https://mihaielisei.github.io/Player-vs.-Player/)


![responsivnes image](assets/images/README/responsive.png)

# Table of Contents

# 1. User Expereince (UX) design

* The game was build in only one HTML file and to every action of the user the HTML will update;
* The game is interactive, having nice specific images for each attack option;
* When a player reach 3 points score the game will reset;

# 1.1 User Goals

The game is designed for two players, they will have to random attack each turn, when a player reach 0 health loases the round, when a player reach 3 point score wins the game;

# 1.2 User Expectations

The content of the game changes at every action of a user. Folloiwng user's expections ware considered while designing the site:

* The site structure is designed considering the expectation of users to be simple and easy to use;
* The user interface is easy to navigate;
* Responsive design for all screen/device sizes like mobile, tablet and desktop;

# 1.3 Color Scheme

The choice of website right foreground and background colour is essential that decides the site visitors wheather to emote the site or not. I used [Color Hunt](https://colorhunt.co/) to select the background and foreground color. Colors that i used are:

* #6D8B74 - main background color;
* #E9EFC0, #e2e82e, #fa870c, #7b6919 linear gradient for Page Title animation;
* #E9EFC0 - text color;
* #fff - buttons background color;
* rgba(255, 255, 255, 0.5) - shadows;
* #000 - borders and instructions text color;
* green and red - form validation border.

# 1.4 Images and Logo

This website was created for academic purposes, all photos were searched and downloaded from [Giphy website](https://giphy.com/)

# 1.5 Site Skeleton

[Balsamiq](https://balsamiq.com/) was used to create wireframes of the website. This was very useful as it gives the template of the UI. Wireframes were designed for web browser and a mobile browser format:

## Main Page:
![Main page whireframe image](assets/images/README/main-page.png)

## Instructions 
![Instructions whireframe image](assets/images/README/instructions.png)

## Form Page:
![Form page whireframe image](assets/images/README/form-page.png)

## Main Game
![Main game whireframe image](assets/images/README/main-game.png)

# 2.Features

# Main Section

* Logo is placed in the top left corner;
* For the game title I have created a animation that translate text background colors, the font family I used is 'Press Start 2P', this will give the game a bit of retro look;
* New Game and Instructions buttons are centered in the middle of the page;
* Social media links (Facebook, Instagram, Twitter and Youtube) are placed at the bottom of the page in the footer. All the links will be opened in a new tab.

The screenshots of Main Section are below:
![Main section](assets/images/README/main-section.png)
![Game Instructions](assets/images/README/game-instructions.png)

# Form Section

* The form is centered on the middle of the page;
* If the imput is focused and empty red bottom border will appear;
* When the input is filled red border will change to green;
* Hover effect to the submit button.
![Form Section](assets/images/README/form-section.png)

# Game section

* Game section is divided in three sections : First player section, Second player section and middle section;
* On each player section is the name of the player, an image section , health bar and attack buttons;
* On the mid section are the start game and replay game buttons, score box and damage done displayed after each attack;
* Rock paper scissors game will be displayed once a start button is pressed or replay button is pressed. The game window is centered on the middle of the page and is divided in two sections where you will see each player option assigned automaticly.

The screenshots of Main Game are below:
![Main Game](assets/images/README/main-game1.png)
![Main Game](assets/images/README/main-game2.png)
![Main Game](assets/images/README/main-game3.png)

# Winner section

* When a player reach 3 points score will win the game;
* The images for both players will update;
* On the screen will be fireworks;
* Name of the winner will be displayed and the home button;
![Winner image](assets/images/README/winner.png)

# 3. Technologies Used

* HTML5 was used for structuring and presenting content of the website;
* CSS3 was used to provide the style to the content written in a HTML;
* JavaScript was used to give logic to the game;
* Balsamiq was used to create wireframes of the website;
* Font Awsome was used to improt icons to the sites;
* Google Fonts was used to import font-family 'Press Start 2P' into style.css file and which was used throughout the pages of the website;
* Chrome was used to debug and test the source code using HTML5 as well as to test site responsiveness;
* Github was used to create the repository and to store the cproject's code after pushed from Git;
* Git was used as the Code Editor for the site;
* Color Hunt was used to select the background and font color in the website;
* W3C Markup and Jigsaw validation tools were used to validate the HTML code and CSS style used in the proejct;
* JShint was used to validate JavaScript code;
* Ami was used to develop a Mockup screenshot generator.

# 4. Testing

## 4.1 Testing tools:

* Google Developer Tools for debug and test css and JavaScript code;
* [I Am Responsive](https://ui.dev/amiresponsive) site to check if website is responsive on all devices screen sizes;
* W3C Validator Tools was used to check for any errors within my HTML pages:
![Validate HTML](assets/images/README/validate-html.png)
* W3C CSS Validation was used to check for any error within my CSS stylesheet:
![Validate CSS](assets/images/README/validate-css.png)
* JsHint Validation was used to check for any error within my JavaScript file:
![Validate JavaScript](assets/images/README/validate-javascript.png)
The submiForm function was called in HTML at line 26 in the form tag;

## 4.2 Manual Testing

I have tested my site on multiple devices. These include:
* Galaxy Fold (280 x 653);
* Iphone 6/7/8 Plus (414 x 736);
* Ipad (768 x 1024);
* Nest Hub (1024 x 600);


## Main Section

| TEST | OUTCOME | PASS / FAIL |
|:---:|:---:|:---:|
| New Game Button| When New Game is clicked form section will appear | PASS |
|Instructions Button | When clicked a modal window will appear with all instructions of the game, when click X or if of if pressed Esc modal window will close | PASS |
| Responsive | All pages and elements are responsive (mobile and desktop) using differnt breakpoints. | PASS |
| Text | Checked if all fonts and colors used are consistent or not | PASS |
| Animations | All animations effects works on all pages | PASS |

## Footer

| TEST | OUTCOME | PASS / FAIL |
|:---:|:---:|:---:|
|Facebook| On clicking Facebook icon, a new tab opens and redirects to the Facebook website.|PASS|
|Twitter| On clicking Twitter icon, a new tab opens and redirects to the Twitter website.|PASS|
|Youtube| On clicking youtube icon, a new tab opens and redirects to the youtube website.|PASS|
|Instagram|	On clicking instagram icon, a new tab opens and redirects to the instagram website.|PASS|
| Hover | When hover all icons change font size.|PASS|

## Form Section

| TEST | OUTCOME | PASS / FAIL |
|:---:|:---:|:---:|
| Inputs | When an input it`s focused and empty it will have a red border, when it's filled it will have a green border | PASS |
|Responsive|Responsiveness of the page in different screen sizes (mobile and desktop) using differnt breakpoints were checked.|PASS|

## Game Section

| TEST | OUTCOME | PASS / FAIL |
|:---:|:---:|:---:|
| Players Names | Names in the game will be changed with the players inputs from the form; | PASS |
| Start Button | When clicked Rock Paper Scissors Game will start and the winner will start first. Who start first will have Attack Options in his section. | PASS |
| Replay Button | When clicked Rock Paper Scissors Game will start and the winner will start first. Who start first will have Attack Options in his section.| PASS |
| Rock, Paper, Scissors | Window is centered as wanted, images are loaded | PASS |
| Attack Options | When a player attack, the attack buttons will be hidden and will appear to the next player; | PASS |
| Health Bar | Health bar decrease by the amount of damage done by a player; | PASS |
| Images | Images will change at every attack, depending of the attack style; | PASS |
| Score Box | Score will increase when a player reach 0 health | PASS |

## End Game

| TEST | OUTCOME | PASS / FAIL |
|:---:|:---:|:---:|
| Fireworks | When a player reach 3 points mid section will be hidden and a fireworks gif will appear | PASS |
| Images | Change images for winner and for loser | PASS |
| Winner Name | Name of the winner will be displayed | PASS |
| Home Button | When clicked game will reset and will be redirected to Main section | PASS |

## 4.3 Lighthouse Reports:

* For Desktop:
![Lighthouse report](assets/images/README/lighthouse-desktop.png)

* For Mobile: 
![Lighthouse report](assets/images/README/ligthhouse-mobile.png)

# 5. Bugs

## Solved Bugs

* When i checked js file on jshint i found some lines that were not terminated with ";"
* Images for the players ware not changing after each player attack, I created an array with the images and I assigned attack images to array index and that fixed the issue;
* No meta tags and SEO for Ligthhouse report was low, added meta tags and problem fixed;

# 6. Deployment
 The site was deployed to GitHub pages using the following steps: 
 * Sign up to GutHub;
 * Create a new repository on GitHub;
 * Click on settings on the navigation bar under the repository title;
 * Select pages on the left menu bar;
 * Click on the master branch and save;
 * This will now generate a link with your website live;

 # 7. Acknowledgement

* Icons, footer and gallery section was inspired from Love Running project;
* This website was created for academic purposes, all photos were searched and downloaded from the[Giphy website](https://giphy.com/);
* For README.md file, reference of https://github.com/dhakal79/Portfolio-project-MS1 was considered; 
* Thanks to my mentor Marcel Mulders for his support and feedback.