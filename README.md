# AngularJS Application Starter for Teams

An **opinionated** AngularJS application starter for teams depending on [John Papa's style guide] and other best practices that apply for JavaScript in general and AngularJS in specific.

### Requirements
It's always preferable that your machine are running the latest version of each:
  - Git
  - Node.js
  - npm
  - Bower

### Instllation
  Clone this repository:
  ```sh
  $ git clone https://github.com/anasshekhamis/angular-app-starter.git
  ```

  `cd` into the directory:
  ```sh
  $ cd angular-app-starter
  ```
  Install Node dependencies:
  ```sh
  $ npm install
  ```
  Install Bower dependencies:
  ```sh
  $ bower install
  ```

### Running the aplication
You can run the application locally on a server of choice (Apache, Nginx...etc). However, **AngularJS Application Starter** comes with a simple `gulp` server which is suitable for development purposes. To run the application on `gulp` server, from within the application directory, simply type in your shell:
```sh
$ gulp serve
```
> Note: make sure you that `gulp-cli` is installed globally on your machine.

> PS: don't use `gulp` server for production.

### What's inside?
  - AngularJS (of course).
  - Angular UI Router.
  - jQuery.
  - Twitter Bootstrap.

> Note: **Angular UI Router**, **jQuery**, and **Twitter Bootstrap** are optional. If you prefer **ngRoute** to **Angular UI Router**, then go for it, but I for once prefer the **Angular UI Router** because it has everything that **ngRoute** has and more. Same goes for **Bootstrap**. You are not limited here.

### Application Directory Structure
  - `app`: the AngularJS application lives in this directory.
  - `assets`: contains the assets of the application (css, fonts, images...etc).
  - `config`: contains the environment configuration of the application.
  - `data`: mimicking the data API for demonstration purposes (should be removed when you start development).
  - `vendor`: all the bower dependencies can be found in the `vendor` directory, and you can install other dependencies depending on your needs.
  - `node_modules`: `npm` dependencies.

### AngularJS Application
The application (as mentioned before) lives in the `app` directory, and it's taking the modular approach to build components. For example, a "products" is a module that contains functionalities apply on products, like listing all products, displaying details about a product, creating a new product, deleting a product, and so on. That will make it easier for you and your team to navigate easily through out your application, and same goes for debugging and detecting problems. For more details please reffer to [the style guide].

### Environmnet Configuration
You can place your environment variables in the `core.config.js`, but that's not a good practice. Instead, you place them in another file (`ENV.js`) that you can "require" and use. Why should you do that? For the following reasons:

  - **Scalabbility** - coupling the configuration with the application logic will make it painful to deploy your application specially if you are using deployment tools.
  - **Security** - while you're placing your configurations within the application, others will be able to see them when you, for example, push the application to your repository. This can be a security issue.
  - **Different builds** - simply when there's two different APIs, one for development and one for production. If your development configurations are coupled with your code, you have to create another built for your production.

Now by placing your application's configurations you can deploy your application to development or production without exposing your any private details and without modifing your AngularJS code. 


[John Papa's style guide]: <https://github.com/johnpapa/angular-styleguide/tree/master/a1>
[the style guide]:<https://github.com/johnpapa/angular-styleguide/tree/master/a1#modularity>