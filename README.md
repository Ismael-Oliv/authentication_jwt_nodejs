# Explicação

Essa API foi desenvolvido para estudos pessoais de como realizar autenticação utilizando  <a href="https://jwt.io/">JWT web token</a>, mas outras tecnologias também foram implementadas, tais como:

- Jest (Testes unitarios)
- TSyringe (Injeção de dependencia)
- Docker e Docker compose (Distribuição de aplicações)
- Postgres (Bando de dados)
- BCryptjs (Criptografia)



## Utilização

A primeira coisa que devemos fazer é baixar a aplicação, para fazer isso vamos executar o seguinte comando

`git clone https://github.com/Ismael-Oliv/authentication_jwt_nodejs`

` cd authentication_jwt_nodejs`

Agora que estamos dentro da pasta da aplicação vamos inicia-lo

Existem três maneiras para iniciar a aplicação:

1º  Executar `docker-compose up`

​	É necessário ter instalado o <a href="https://docs.docker.com/engine/install/">Docker</a> e <a href="https://docs.docker.com/compose/install/">docker compose</a> em sua maquina

2º  Executar `yarn dev` ou `npm run dev`

​	Além da necessidade de ter o <a href="https://docs.docker.com/engine/install/">Docker</a> instalado, executar o seguinte comando `docker run --name postgres -e POSTGRES_PASSWORD=docker -d postgres`

