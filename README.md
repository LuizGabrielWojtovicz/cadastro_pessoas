# cadastro_pessoa

- Luiz Gabriel
- Matheus Sanches

# Passos para executar

1. Abra um servidor mongodb
2. Instale as dependências (`npm i`)
3. Execute o projeto (`npm start`)
4. Se necessário, atuaize a url do banco em database/mongodb.js

# Rotas

## `GET /users/`

Essa rota retorna a lista de usuários do sistema. É possivel aplicar filtros via query, dessa forma:

- `GET /users/?nome=teste`
- `GET /users/?sobreNome=teste`
- `GET /users/?cidade=curitiba`
- `GET /users/?status=Inativo` -> É preciso ser `Inativo` ou `Ativo` (com a primeira letra maiúscula apenas)

- os filtros são case insentive, mas é preciso inserir acentuações
- é possivel incluir mais de um filtro


### Exemplo
![image](https://github.com/LuizGabrielWojtovicz/cadastro_pessoas/assets/22124518/e9605697-30fe-4cf1-8a9f-d0c12c948afa)

## `GET /users/:id`

Retorna um usuário pelo id

### Exemplo
![image](https://github.com/LuizGabrielWojtovicz/cadastro_pessoas/assets/22124518/eb240cfc-021a-4c44-8207-22baf31531fc)

## `POST /users/`

Rota para criar um usuário, passando os campos como json no body

### Exemplo
![image](https://github.com/LuizGabrielWojtovicz/cadastro_pessoas/assets/22124518/edfa71aa-8594-43af-8c4e-895170d97ccf)

## `PUT /users/:id`

Rota para editar um usuário com alguns campos

### Exemplo
![image](https://github.com/LuizGabrielWojtovicz/cadastro_pessoas/assets/22124518/e9ac51a2-6268-4124-9e0e-a101db867b0a)

## `DELETE /users/:id`

Rota para deletar um usuário

### Exemplo
![image](https://github.com/LuizGabrielWojtovicz/cadastro_pessoas/assets/22124518/09eeb78f-eaeb-414e-889e-20e7e22de10b)

## `PUT /users/:id/profile-image`

Atualiza a imagem de perfil de um usuário, sendo que a imagem precisa ser enviada pelo body do request (a imagem precisa ser jpeg)

### Exemplo
![image](https://github.com/LuizGabrielWojtovicz/cadastro_pessoas/assets/22124518/d0ff6e85-1c0b-4120-b1aa-25c660d9f99c)

## `GET /users/:id/profile-image`

Rota que retorna a imagem de perfil, caso ela exista

### Exemplo
![image](https://github.com/LuizGabrielWojtovicz/cadastro_pessoas/assets/22124518/7c57bf6a-7a1f-4426-b7bf-e97de7bf54f3)

