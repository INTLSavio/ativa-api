## Sobre o Projeto

Repositório utilizado para a API RESTful da aplicação solicitada

## Tecnologias

Tecnologias utilizadas para o desenvolvimento da API

- [NodeJS](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Rodando o projeto

### Requisitos

- Para rodar esse projeto é necessário uma conexão com um banco de dados postgres, nesse caso eu utilizei o docker para subir a imagem

**Clone o repositório e acesse a pasta**

```bash
$ git clone https://github.com/INTLSavio/ativa-api && cd ativa-api
```

**Siga as etapas a seguir**

- Crie um arquivo .env
- Vá no arquivo .env.example e copie o conteúdo para .env
- Após isso coloque a sua url de acesso ao banco postgres

**Caso esteja usando docker abra o arquivo docker-compose.yml e escolha os valores para user, password e database e rode o seguinte comando para criar o container com a imagem do postgres**

```bash
$ docker compose up -d
```
Seu container estará disponível para ser acessado pela API.

```bash
# Instale as dependencias
$ yarn

# Rode as migrations para criar as tabelas no banco e inserir os carros na tabela
$ yarn prisma migrate dev

# Rode a aplicação
$ yarn start
```
Sua aplicação estará disponível na porta 3333.

