# Angular dev week - DIO


Esse projeto foi desenvolvido durante o programa de pré-lançamento do bootcamp fullstack Philips DIO (www.dio.me).
Este projeto frontend com angular está realizando requisições HTTP à um projeto spring. Por sua vez o programa em java
busca os dados persistidos em um banco de dados físico. Toda a implementação é baseda em localhost, portanto, caso necessário
modifique as configurações para o IP do seu servidor.

O SGBD utilizado é o mysql que se conecta ao spring por um usuário dedicado a este fim. Dessa forma, o springboot utiliza 
as configurações do application.propeties para realizar a conexão.

A integração do front é realizada através de um redirecionamento utilizando proxy. O arquivo proxy.config.js possui os
parâmetros para efetuar o redirecionamento.
_______________________________________________________________________________________________________

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
