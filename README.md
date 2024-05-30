Certainly! Here's an updated version of your README that includes information about the CSS theming with CSS variables and how to change the API for the bot:

---

# Sage Bot SGWS 1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

This project is a chatbot application with dynamic theming using CSS variables. It demonstrates how to create a chatbot interface in React, dynamically update the theme, and interact with an external API.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Customizing the Chatbot Theme

The chatbot uses CSS variables to allow for dynamic theming. You can find and modify these variables in the `Chatbot.css` file. Here's an example of the CSS variables defined in the project:

```css
:root {
  --primary-bg-color: #f9f9f9;
  --border-color: #ccc;
  --user-message-bg-color: #e0f7fa;
  --bot-message-bg-color: #ffecb3;
  --input-border-color: #ccc;
  --button-bg-color: #4CAF50;
  --button-hover-bg-color: #45a049;
  --button-text-color: white;
  --font-size: 16px;
  --border-radius: 5px;
}
```

To change the theme, update these variables. You can also pass a new theme object to the `Chatbot` component. Here is an example of how to pass a theme object in `App.js`:

```jsx
import React from 'react';
import Chatbot from './components/Chatbot';

const customTheme = {
  'primary-bg-color': '#ffffff',
  'border-color': '#000000',
  'user-message-bg-color': '#e0f7fa',
  'bot-message-bg-color': '#ffecb3',
  'input-border-color': '#000000',
  'button-bg-color': '#0000ff',
  'button-hover-bg-color': '#000080',
  'button-text-color': 'yellow',
  'font-size': '16px',
  'border-radius': '10px',
};

const App = () => (
  <div>
    <h1>Chatbot with Custom Theme</h1>
    <Chatbot theme={customTheme} />
  </div>
);

export default App;
```

## Changing the API for the Bot

The chatbot makes API calls to get responses. To change the API endpoint, update the `axios.post` URL in the `Chatbot.js` file. Here is an example:

```jsx
const handleSend = async () => {
  if (input.trim() === '') return;

  const userMessage = { sender: 'user', text: input };
  setMessages((prevMessages) => [...prevMessages, userMessage]);
  setInput('');
  setIsLoading(true);

  try {
    const response = await axios.post(
      'https://your-new-api-endpoint.com/api/v1/prediction',
      { question: input },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const botMessage = {
      sender: 'Your Bot Name',
      text: response.data.text,
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    setIsLoading(false);
  }
};
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Additional Resources

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [Troubleshooting `npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

This updated README includes instructions on how to customize the chatbot's theme using CSS variables and how to change the API endpoint for the bot.