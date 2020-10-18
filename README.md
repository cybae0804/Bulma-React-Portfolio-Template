# Bulma React Portfolio Template

[Demo](https://bulma-react-portfolio-template.netlify.app/)

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

1) If you're manually pushing the build files to your hosting service like AWS S3 or Firebase -

After running npm build, create a 'projects' folder in the build folder, then create another folder for the project, and drop other React build files in there or any static files. Then, link the file path to the project from the <a> tag used in the projects section. 

ex. build/projects/calculator/index.html

2) If you're using automated deploy process such as Netlify -

Same idea as above, but you have to manually copy over the static files into the build folder after the build process completes. In your Netlify build command, you can use the `cp -r` command - ex. `yarn build && cp -r ./calculator ./build && cp -r ./sgt ./build`. This will copy over your project files after the build process completes. 

NOTE - FOR BOTH 1) and 2)

For deploying react projects inside the portfolio, there's a special configuration needed. Before building the project app, add below line to your project's `package.json`.

* "homepage": "https://YOUR_DEPLOYMENT_LINK.com/YOUR_PROJECT_FOLDER"

This will allow the nested react build to open properly by referring to homepage as its root.

Refer to [this](https://facebook.github.io/create-react-app/docs/deployment#building-for-relative-paths) React documentation for more detailed info.

### Resume

Place your `resume.pdf` file somewhere in the repo, (ex. `src/`) and import the file as a variable and set it as the `href` for the resume buttons. Refer to [this](https://stackoverflow.com/a/49882656/8711377) post for exactly what it looks like.

### Contact/Email

1. Make an account at [emailJS](https://www.emailjs.com/). 

2. Add your email provider (ex. Gmail) on the email services tab. Keep the Service ID.

3. Modify the example email template to include {{title}} {{from_name}} {{reply_to}} {{message}}. Grab the Template ID.

![Example](https://i.imgur.com/gPW6jh0.png)

4. Go to your account tab, and grab the User ID.

5. In src/components/Contact/ContactForm/ContactForm.jsx, modify the 'send' function to include your service id, template id, and user id.

* The email sent through this form will show up as sent from yourself. You have to look into the reply_to dropdown to see who sent it and manually reply.

### Deploying

~I like to use Firebase for my deployments, because I usually separate my frontend and backend. But you're free to deploy it anywhere you'd like. Just make sure to drop in your resume and projects before deploying.~ Netlify makes the whole process a lot easier. Make sure to refer to 2) above to deploy your projects properly.

## Customizing and Decorations

I purposefully made it as minimal as possible so that it's easier to alter it however you'd like. But even by itself, it shouldn't look too bad.
