# Bulma React Portfolio Template

[Demo](https://bulma-react-portfolio-template.web.app/)

![Preview](https://i.imgur.com/3EgtDNN.png)

This is a React portfolio template that is 

1. Mobile Responsive

2. Easy to set up

3. Minimal

The idea is to build this, add additional files (resume, other projects) into the build foler, and deploy using Firebase, etc.

## Dependencies

- Vanilla State Management

- [Bulma](https://bulma.io/) CSS for columns, buttons, forms, navbar.

- [emailJS](https://www.emailjs.com/) for client-only side emailing.

- [React Scroller](https://www.npmjs.com/package/react-scroll) for smooth scrolling.

- [unDraw](https://undraw.co/) for fancy svgs.

## Setting Up and Deploying

### Basic Information

You can fill out most of your information in /src/configs.js to autofill most of the portfolio.

### Projects

After running npm build, create a 'projects' folder in the build folder, then create another folder for the project, and drop other React build files in there or any static files. Then, link the file path to the project from the <a> tag used in the projects section. 

ex. build/projects/calculator/index.html

For deploying react projects inside the portfolio, there's a special configuration needed. Before building the project app, add below line to the package.json file.

* "homepage": "https://YOUR_DEPLOYMENT_LINK.com/YOUR_PROJECT_FOLDER"

This will allow the nested react build to open properly by referring to homepage as its root.

Refer to [this](https://facebook.github.io/create-react-app/docs/deployment#building-for-relative-paths) React documentation for more detailed info.

### Resume

After running npm build, drop resume.pdf in the folder before deploying.

If you want to structure the folders differently, feel free to change up the <a> tags in the template respectively.

### Contact/Email

1. Make an account at [emailJS](https://www.emailjs.com/). 

2. Add your email provider (ex. Gmail) on the email services tab. Keep the Service ID.

3. Modify the example email template to include {{title}} {{from_name}} {{reply_to}} {{message}}. Grab the Template ID.

![Example](https://i.imgur.com/gPW6jh0.png)

4. Go to your account tab, and grab the User ID.

5. In src/components/Contact/ContactForm/ContactForm.jsx, modify the 'send' function to include your service id, template id, and user id.

* The email sent through this form will show up as sent from yourself. You have to look into the reply_to dropdown to see who sent it and manually reply.

### Deploying

I like to use Firebase for my deployments, because I usually separate my frontend and backend. But you're free to deploy it anywhere you'd like. Just make sure to drop in your resume and projects before deploying.

## Customizing and Decorations

I purposefully made it as minimal as possible so that it's easier to alter it however you'd like. But even by itself, it shouldn't look too bad.
