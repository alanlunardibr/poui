# CRUDFornecedor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Componentes Po-Ui 
ng add @po-ui/ng-components
ng add @po-ui/ng-templates

## Componentes Theme Totvs
npm i @totvs/po-theme

Ajustar Styles.

"styles": [
  "node_modules/@totvs/po-theme/css/po-theme-default-variables.min.css",
  "node_modules/@totvs/po-theme/css/po-theme-default.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
]

## Ajustar Angular.json

    "builder": "@angular-devkit/build-angular:browser",
    "options": {
    "outputPath": "dist/proj_base",
    "index": "src/index.html",
    "main": "src/main.ts",
    "polyfills": [
        "zone.js"
    ],

## Protheus Lib Core
npm i @totvs/protheus-lib-core
Utilização
Para utilizar o protheus-lib-core, basta importar o módulo principal no projeto:

import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';