# CV-Project

## Introduction

This project is built as a task in [The Odin Project](https://www.theodinproject.com/) curriculum, [this lesson](https://www.theodinproject.com/lessons/cv-application) to be specific.

[Live Page](https://clumsynite.github.io/react-cv-project/)

Built using **React**, It contains 3 main sections.

- **Personal** - *To add user's personal details*
- **Education** - *To add user's Previous Education details*
- **Experience** - *To add user's work history/experience*

Each section has two components to add and render data.

- **Form** - *To get details from user*
- **Template** - *To render the details*

These components then pass data to the **Form Component**, where state object is used to store data from form, and render into template.

### Personal

Personal Form has is simple with placeholders in place to describe fields and a button to save data to state.

After clicking save, the *Personal* template is rendered, which also has an edit button in title, in order to edit the user's data.

### Education & Experience

Education and Experience forms are almost similar, with the only difference that *Experience* form contains an extra field to save user's previous job's decription.

However, considering the need for more than one mentions for Education history(Qualifications) or Work History(Experience) these forms have two buttons.

- **Add** - *To add detail to array*
- **Save** - *To render the Template*

Another difference between personal and this section can be the **delete** and **edit** option, in case the user needs to delete a wrong entry in either section, or if user has to modify the details for an entry.

### To be added

> These options will be added in the next updated after 13/10/20

- An option to hide buttons for a better preview of the CV.
- A preview option with one template containing all details, like an actual Resume.

### Needs improvement

- Editing Education or Experience pushes that entry to array instead of replacing it. So, if user edits the first entry,  it'll be pushed to the bottom after saving the entry.
- No cancel option for edit button
- No confirm on Delete
- No way of storing the details (might try localStorage later)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved [here](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved [here](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved [here](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved [here](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved [here](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved [here](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
