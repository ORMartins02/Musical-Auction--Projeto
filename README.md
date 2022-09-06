## Padrões de código

**Código será em ingles.**

**Gerenciador de pacotes => -npm**

**Linguagem do projeto => React.ts**

**Função => arrow function**

**Aspas duplas ""**

**export simples**

## Branches

Main() => Ninguém usa!!!

Developer() => só tech leader usa.

git checkout -b "feat/nome-da-feature"

git commit -m "feat:login-page"

**commits em português**

## Bibliotecas 

React icons




base_URL: https://musical-auction.herokuapp.com/ 


### Cadastro

POST /register <br/>
POST /signup <br/>
POST /users

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.
Você pode ficar a vontade para adicionar qualquer outra propriedade no corpo do cadastro dos usuários.

Request:
{
"email": "joaozin@mail.com",
"password": "123456",
"name": "John",
"age": 24,
"id": 10
}

Response:
{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW96aW5AbWFpbC5jb20iLCJpYXQiOjE2NjE4MDY2MzUsImV4cCI6MTY2MTgxMDIzNSwic3ViIjoiMTAifQ.NgclJfaYtpaeum6qVRolbjbA4_K23y0uKOLKYyLEaYo",
"user": {
"email": "joaozin@mail.com",
"name": "John",
"age": 24,
"id": 10
}
}

### Login

POST /login <br/>
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"

Request:
{
"email": "joaozin@mail.com",
"password": "123456"
}

Response:
{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW96aW5AbWFpbC5jb20iLCJpYXQiOjE2NjE4MDY2NzQsImV4cCI6MTY2MTgxMDI3NCwic3ViIjoiMTAifQ.SI-3zgn0kdIca0KKeGZTismb9bTE1G-0yKQvu8msenQ",
"user": {
"email": "joaozin@mail.com",
"name": "John",
"age": 24,
"id": 10
}
}

### Registrar novo instrumento

POST /userInstrument

Endpoint para realizar cadastro de um novo instrumento.

Request:
{
"title" : "Guitarra",
"description" : "instrumento de corda",
"userId" : "10"
}

Response:
{
"title": "Guitarra",
"description": "instrumento de corda",
"userId": "10",
"id": 4
}

### Pegar um usuário pelo id

GET /users/userid

Endpoint para pegar os dados de um usuário.

Response:
{
"email": "joaozin@mail.com",
"password": "$2a$10$KJ8T9hJXe9fevWTkOJzsVeO4AaVMlGIrg2vXbRSktQimnh2lnt9rW",
"name": "John",
"age": 24,
"id": 10
}

### Listagem de todos os instrumentos

GET /userInstrument

Endpoint para listar todos os intrumentos dos usuários cadastrados.

Response:
{
[{
"title": "flute",
"description": "instrumento de sopro",
"userId": "3",
"id": 1
},
{
"title": "violin",
"description": "instrumento de corda",
"userId": "3",
"id": 2
}
{
"title": "Guitarra",
"description": "instrumento de corda",
"userId": "1",
"id": 3
}]
}
