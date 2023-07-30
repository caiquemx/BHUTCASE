# BHUTCASE

Diretório destinado ao case backend node.js BHUT

## INSTALL

### Clone repository

- git clone `link`

`/repository/main-api`

- npm install

`/repository/notification`

- npm install

## RUN

`/repository/`

- docker compose up

`/repository/main-api`

- npm start

`/repository/notification`

- npm start

## API ENDPOINTS

### GET `/api/listCars`

- lista todos os carros

### GET `/api/logs`

- lista todos os registros salvos no banco de dado

### POST `/api/createCar`

### Body:

`{
  "title": "string",
  "brand": "string",
  "price": "string",
  "age": number
}`

- cria um carro e registra a chamada da api no banco de dados
