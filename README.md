# RadixCodeTest

Desafio Técnico Radix

## Instruções

Abaixo segue as instruções de como utilizar a 
aplicação localmente rodando no Visual Studio Code.

### Database

[Instalar MySql Installer Community](https://dev.mysql.com/downloads/installer/) e selecioar
para instalar o Servidor e o Workbench.

Criar uma base de dados no MySQL Workbench com o seguinte script:

```
CREATE SCHEMA radix;

USE radix;

CREATE TABLE IF NOT EXISTS Equipment (
id INT AUTO_INCREMENT PRIMARY KEY,
equipmentId VARCHAR(255) NOT NULL,
timestamp DATETIME NOT NULL,
value FLOAT NOT NULL
);
```

### Backend

Dentro da pasta Backend criar um arquivo `.env` e preencher 
com os valores pertinentes de acordo com o arquivo exemplo `.env.example`.

OS VALORES APRESENTADOS ABAIXO SÃO EXEMPLOS, 
PREENCHER COM OS DADOS AO ACESSAR O BANCO MySQL.

```
DB_HOST=localhost
DB_PORT=1234
DB_USER=usuario
DB_PASSWORD=senha
DB_NAME=radix
PORT=5000
```

O campo PORT foi definido como padrão o valor 5000 podendo conforme preferencia 
ser alterado no código fonte do backend e no arquivo de variaveis de ambiente do backend `.env`.

acessar `cd backend` instalar os pacotes necessários 
com o comando `npm install` ou `npm i` e por fim executar 
em ambiente de desenvolvimento com o comando `npm run dev`.

### Frontend

Dentro da pasta Frontend criar o arquivo `.env` e 
preencher com a seguinte linha `NEXT_PUBLIC_API_URL=http://localhost:5000/api`
no lugar do valor padrão 5000 pode ser a porta definida na aplicação backend

acessar `cd frontend` instalar os pacotes necessários 
com o comando `npm install` ou `npm i` e por fim executar 
em ambiente de desenvolvimento com o comando `npm run dev`.

### Usar a Aplicação

Com ambos os projetos Backend e Frontend rodando acessar o endereço 
[localhost:3000](https://localhost:3000) e esta pronto para uso.