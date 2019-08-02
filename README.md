# Bulma React Portfolio Template

This is a React portfolio template that is 

1. Mobile Responsive

2. Easy to set up

3. Minimal

The idea is to build this, add additional files (resume, other projects) into the build foler, and deploy using Firebase, etc.

## Dependencies

- Vanilla State Management

- [Bulma](https://bulma.io/) CSS for columns, buttons, forms, navbar.

- [Anime.js](https://animejs.com/) for decorations

- [React Scroller](https://www.npmjs.com/package/react-scroll) for smooth scrolling.

- [unDraw](https://undraw.co/) for fancy svgs.

## Setting Up and Deploying

### Basic Information

You can fill out most of your information in /src/configs.js to autofill most of the portfolio.

### Projects

After running npm build, create a 'projects' folder in the build folder, then create another folder for the project, and drop other React build files in there or any static files. Then, link the file path to the project from the <a> tag used in the projects section. 

ex. build/projects/calculator/index.html

### Resume

After running npm build, drop resume.pdf in the folder before deploying.

If you want to structure the folders differently, feel free to change up the <a> tags in the template respectively.

### Deploying

I like to use Firebase for my deployments, because I usually separate my frontend and backend. But you're free to deploy it anywhere you'd like. Just make sure to drop in your resume and projects before deploying.

## Customizing and Decorations

I purposefully made it as minimal as possible so that it's easier to alter it however you'd like. But even by itself, it shouldn't look too bad.
