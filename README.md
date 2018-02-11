# NgGotchas

## NgOnDestroy does not get called
### An example app showcasing **`ng-gotcha # 1`** 

1. Implemented a service. App-wide one - gets provided in `AppModule`. Eagerly i.e. at app start, before components get loaded.
2. Inject service in `TimeWidgetComponent`. Service is provided in `AppModule`
3. Destroy component
4. Expect service to get destroyed? 
5. It is not destroyed.

Alternative

2. Inject service in `FeedComponent` provided in `FeedComponent`
3. Destroy component
4. Expect service to get destroyed? 
4. It does get destroyed?


### WAT?
My take on that:
 * `FeedComponent` provides the service and component does get destroyed and in turn it destroys its 'destructable' providers
 * `AppModule` provides the service but never gets destroyed until user navigates away from our site at which point the Garbage collector is responsible for eventually cleaning that memory


---------------------------
## Ng Cli Readme
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
