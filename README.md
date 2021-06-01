# Auth0 ♥️ React Workshop

This repository is set up to facilitate a hands-on workshop with authentication in React using Auth0. There are a few additional sections for adding multi-factor authentication and deploying to AWS Amplify.

![Auth0 Loves React](./images/auth0-react.jpg)

_For the majority of the hands-on portion, you will follow this blog post, [The Complete Guide to React User Authentication](https://auth0.com/blog/complete-guide-to-react-user-authentication/), created by [Dan Arias](https://auth0.com/blog/authors/dan-arias/). Thanks Dan!_

## About this Repository

In this workshop, you'll learn about several crucial concepts.

-   modern authentication workflows
-   handling authentication in React using React Hooks, Context API, etc.
-   JSON Web Tokens
-   securely calling APIs
-   (bonus) multi-factor authentication
-   (bonus) how to deploy/host your application with AWS Amplify

During the majority of the hands-on portion, you'll follow **[this article](https://auth0.com/blog/complete-guide-to-react-user-authentication/)** for the detailed walkthrough. In that article, the frontend and backend projects are in two different repositories. **However, this repository already includes both projects, a React frontend and a Node/Express backend**.

Two important notes on this...

> 1. When the blog post mentions the `auth0-react-sample` directory in the _Get the Starter Application_ section, you will instead use the `frontend` directory from this repository.

> 2. When the blog post mentions the `auth0-express-js-sample` directory in the _Calling an API_ section, you will instead use the `backend` directory from this repository.

### Branches

Each step has a corresponding branch with the starting code for that step. If you get behind, you can always skip ahead by checking out the next branch.

For example, if you are on Step 1, you would check out the `step-1` branch. To get the finished code from Step 1, you would check out the `step-2` branch.

### Expectations and Requirements

To participate in this workshop, it is expected that you have at least beginner knowledge of JavaScript, React.js, and Git.

You will also need to have a few things installed.

-   [node.js](https://nodejs.org/en/download/)
-   code editor ([VS Code](https://code.visualstudio.com/) is recommended)
-   [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/)
-   [AWS Amplify CLI](https://docs.amplify.aws/cli) (for deploying to Amplify)

## Sign up for Auth0

If you haven't already, [sign up for a free Auth0 account](https://a0.to/react-workshop-signup), which offers you:

-   7,000 [free active users and unlimited logins](https://auth0.com/pricing/).
-   A [centralized, ready-to-ship login page](https://auth0.com/universal-login) for Web, iOS & Android.
-   Up to 2 [social identity providers](https://auth0.com/docs/connections/identity-providers-social) like Google and Facebook login.
-   Unlimited [serverless Rules](https://auth0.com/docs/rules/current) to customize and extend Auth0's capabilities.

During the sign-up process, you will create an [Auth0 Tenant](https://auth0.com/docs/getting-started/the-basics#account-and-tenants), which is a container that Auth0 uses to store your identity service configuration and your users in isolation. No other Auth0 customer can peek into or access your tenant.

## Workshop Overview

**Step 0:** Overview of Authentication

You can find the slides [here](https://a0.to/react-workshop-slides).

**Step 1:** Get the Starter Application

Start by cloning this repository.

```bash
git clone https://github.com/jamesqquick/auth0-react-workshop.git
```

Check out the `step-1` branch.

```bash
git checkout step-1
```

[Follow the hands-on instructions](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Get-the-Starter-Application)

**Step 2:** Connect React with Auth0

Check out the `step-2` branch.

```bash
git checkout step-2
```

[Follow the hands-on instructions](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Connect-React-with-Auth0)

**Step 3:** Setup the Auth0 React SDK

Check out the `step-3` branch.

```bash
git checkout step-3
```

[Follow the hands-on instructions](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Set-Up-the-Auth0-React-SDK)

**Step 4:** Add User Authentication

Check out the `step-4` branch.

```bash
git checkout step-4
```

[Follow the hands-on instructions](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Add-User-Authentication)

**Step 5:** Retrieving User Information

Check out the `step-5` branch.

```bash
git checkout step-5
```

[Follow the hands-on instructions](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Retrieving-User-Information)

**Step 6:** Protecting Routes

Check out the `step-6` branch.

```bash
git checkout step-6
```

[Follow the hands-on instructions](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Protecting-Routes)

**Step 7:** Calling an API

Check out the `step-7` branch.

```bash
git checkout step-7
```

[Follow the hands-on instructions](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Calling-an-API)

**Optional** Hosting with AWS Amplify

For deploying the React application to AWS Amplify from the Amplify CLI, you'll need the [Amplify CLI](https://docs.amplify.aws/cli/start/install) installed and a user profile set up in AWS that has sufficient access. If you don't have a user created, you can create one in the steps below.

Make sure to navigate into the `frontend` directory in your terminal if you aren't already. Then, configure the Amplify CLI.

`amplify configure`

You will then be taken to the browser where you will need to login with your AWS credentials. After you have logged in successfully, continue in the terminal.

Choose your region. In this example, I'm using `us-east-1`.

Choose a username for your new user. If you have already have a created user, just press enter.

You should then be taken back to the browser where you can finish creating the new user. Make sure to choose the following setup.

-   AWS Access Type - programmatic access
-   Permissions - you can choose `AdministratorAccess` for demo purposes although it is recommended to restrict this access more appropriately with a real application
-   Tags - none

After you've gone through those settings, click `Create User` and take note of the `Access key ID` and `Secret access key`. Follow the details in the command line by pasting in these two properties appropriately. Lastly, choose a profile name (**you'll need this profile name shortly**).

With the CLI configured, now initialize the React project as an AWS Amplify project.

`amplify init`

Choose a name for your project, and the CLI should complete the following configurations. If not, enter them manually.

-   Default editor - Visual Studio Code
-   App type - JavaScript
-   JavaScript framework - `react`
-   source directory - `src`
-   dist directory - `build`
-   build command - `npm run-script build`
-   start command - `npm run-script start`

If you're prompted to create a new environment, give it a name. Then, selected the AWS profile you just created.

Now, run the following command to add hosting to the project. Make sure to choose `Hosting with Amplify Console` and then `Manual`.

`amplify hosting add`

And finally, publish the project.

`amplify publish`

After your application has been deployed to Amplify, you should see an HTTPS URL for your deployed app. Open it in the browser to see the app itself.

For authentication to work in this deployed app, you'll need to update the following settings in the Auth0 dashboard with the deployed URL. You can add multiple values in these properties by comma-separting them.

-   allowed callback urls
-   allowed logout urls
-   allowed web origins

Now, you should be able to login/logout in your deployed application.

**optional** Add Multi-factor Authentication with Auth0 Actions

To add multi-factor authentication to the app, in the Auth0 dashboard navigate to `Security -> Multi-factor Auth`. Then, click on the `Phone Message` section and choose the following options.

-   Choose a delivery provider - Auth0
-   Choose a delivery method - SMS

Make sure that the toggle in the top right is set to the green/on state. Then, go back to the `Multi-factor Authentication` page. Under `Define policies`, set `Require Mutli-factor Auth` to `Always`.

The next time you log into your app, you should be prompted to enter a code that was sent to you via text.
