# RickmortyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

When the application is loaded, 20 characters will be downloaded in one request from the backend, which will be displayed in the browser already sorted alphabetically. However, the characters returned by the backend are not all the characters in the database and they are not sorted in ascending or descending order (the API does not support full ASC or DESC sorting). Therefore, I decided to implement another logic for the operation of this web application. I decided to use a loop to get all the characters in the database, sort them, and display them to the user on the screen.

To activate this mode, simply click on the character's card, and a modal window will appear where you can also log in with a Google account. In this modal, we select the "getALL" option, which will change the logic of the web application.

The downside of this method is that the first loading of the array of all characters takes about 3-5 seconds on slow internet. But as an option, this method has the right to exist to display sorted characters immediately.

Also, this application implements authorization through a Google account, as specified in the technical task, and the route intended for the product card is protected from unregistered users. Authorization is available when calling the modal, as described above.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
