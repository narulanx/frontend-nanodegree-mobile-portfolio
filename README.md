## Website Performance Optimization portfolio project

The goal of this project is to optimize this online portfolio for speed. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques taught in the course.

To get started, check out the repository.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

The index.html has been hosted on github pages and can be accessed using [this](https://narulanx.github.io/frontend-nanodegree-mobile-portfolio/) URL.

Page Speed can be verified using [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) URL.

PageSpeed Score before the optimization -
Mobile - 28/100
Desktop - 30/100

PageSpeed Score after the optimization -
Mobile - 95/100
Desktop - 97/100

Optimizations done to achieve this score -
* Add print media for print.css
* Add async for analytics.js (and make the protocol https)
* Remove webfonts css to improve speed (as it adds unnecessary overhead)
* Resize images profilepic.jpg and pizzeria.jpg using grunt tool - grunt-responsive-images
* Compress images profilepic.jpg and pizzeria.jpg using grunt tool - grunt-contrib-imagemin
* Remove the reference to style.css and inline its content in index.html
* Move inline scripts to the bottom of the page
* Minify all the js file using grunt tool - grunt-contrib-uglify
* Minify all the css file using grunt tool - grunt-contrib-cssmin

Associated Package.json and gruntfile.js are available in the root folder. To run the grunt tool, you will have to install the npm (node.js package manager) so that nodes_modules folder is created in the root directory. Configuration changes will have to be done in gruntfile.js to run the corresponding grunt tool.

####Part 2: Optimize Frames per Second in pizza.html

The method updatePositions() in file views/js/main.js is modified to optimize the page views/pizza.html until frame rate of 60 fps is reached.

Optimizations done to reach the frame rate of 60 fps -
* Move the document.body.scrollTop call outside the for loop
* Use document.getElementsByClassName instead of document.querySelectorAll to identify all the mover objects
* Move the call to identify all the mover objects outside the function call
* Calculate the 5 phase values outside the for loop so that they are not calculated again and again for each pizza object
* Use 'style.transform=translateX()' instead of 'style.left' to optimize the page render
* Use the style 'will-change: tranform' to layer each of the background pizza objects

####Part 3: Efficiently compute the time to resize pizza

The method changePizzaSizes() in file views/js/main.js is modified to compute the time to resize pizza in less than 5ms using the pizza slider on the views/pizza.html page.

New time to resize the pizza using pizza slider ranges between 0.865ms - 2.27ms

Optimizations done to achieve this -
* Replace document.querySelector with document.getElementById in changeSliderLabel() function
* Move the call to identify all the pizzas with class 'randomPizzaContainer' outside the for loop
* Use document.getElementsByClassName instead of document.querySelectoryAll to identify all the pizza elements
* Remove the code that identifies the delta width and adds it to the previous width
* Since we know the NewWidth beforehand, use it as percentage width on the pizza styles

####General Optimizations in views/js/main.js on page load of views/pizza.html

* Move the call to identify 'randomPizzas' id element outside the for loop
* Move the call to identify 'movingPizzas1' id element outside the for loop
* Replace document.querySelectorAll with document.getElementById for moving pizzas element
* Calculate the window width and height and using that identify the number of columns and rows
* Use the number of columns and rows to calculate the number of moving pizzas element
* Subtract the Moving Pizzas's basicLeft value by 690 to fix the alignment issues due to transform property