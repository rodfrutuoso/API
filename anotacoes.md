**Passo 1: Criar um projeto no GCP**

Acesse o console do GCP e crie um novo projeto.

**Passo 2: Habilitar o Compute Engine**

No console do GCP, acesse a guia **Compute Engine** e habilite o serviço.

**Passo 3: Criar uma instância Compute Engine**

Crie uma instância Compute Engine com as seguintes configurações:

* Região: Escolha uma região próxima de você.
* Zona: Escolha uma zona na região selecionada.
* Tipo de máquina: Escolha uma máquina com pelo menos 1 vCPU e 3,75 GB de memória.
* Sistema operacional: Escolha o sistema operacional Linux.
* Imagem: Escolha a imagem Ubuntu 22.04 LTS.

**Passo 4: Criar uma chave SSH**

Crie uma chave SSH para conectar-se à sua instância Compute Engine.

**Passo 5: Conectar-se à sua instância Compute Engine**

Use a chave SSH criada no passo anterior para conectar-se à sua instância Compute Engine.

**Passo 6: Instalar o Docker na sua instância Compute Engine**

Acesse a sua instância Compute Engine e execute os seguintes comandos para instalar o Docker:

```
sudo apt update
sudo apt install docker.io
```

**Passo 7: Criar um repositório GitHub para sua aplicação/site Node.js**

Crie um repositório GitHub para sua aplicação/site Node.js.

**Passo 8: Criar um Dockerfile**

Crie um arquivo Dockerfile na raiz do seu repositório GitHub. O Dockerfile deve conter as instruções para construir uma imagem Docker para sua aplicação/site Node.js.

**Passo 9: Criar um arquivo .github/workflows/deploy.yml**

Crie um arquivo .github/workflows/deploy.yml na raiz do seu repositório GitHub. O arquivo deploy.yml contém as instruções para o GitHub Actions implantar sua aplicação/site Node.js na VM do GCP.

**Passo 10: Publicar sua aplicação/site Node.js**

Publice sua aplicação/site Node.js no repositório GitHub.

**Passo 11: Configurar o GitHub Actions**

No console do GitHub, acesse a guia **Actions** e clique no botão **Set up a workflow yourself**.

Selecione o arquivo deploy.yml na raiz do seu repositório GitHub e clique no botão **Create workflow**.

**Passo 12: Testar o deploy**

Faça um commit em seu repositório GitHub e verifique se o GitHub Actions implanta sua aplicação/site Node.js na VM do GCP.

**Atualizando sua aplicação/site Node.js**

Após configurar o GitHub Actions, você pode atualizar sua aplicação/site Node.js fazendo um commit em seu repositório GitHub. O GitHub Actions irá implantar automaticamente a nova versão da sua aplicação/site na VM do GCP.

**Exemplo de Dockerfile**

```
FROM node:17-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
```

**Exemplo de arquivo .github/workflows/deploy.yml**

```
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: 17

      - name: Build
        run: npm install && npm run build

      - name: Deploy
        uses: google-github-actions/deploy-to-gcp@v0.3.0
        with:
          project_id: ${{ secrets.GCP_PROJECT_ID }}
          region: us-central1
          zone: us-central1-a
          machine_type: n1-standard-1
          image: gcr.io/${{ secrets.GCP_PROJECT_ID }}/my-app:latest
          port: 3000
          ssh_key_file: ${{ secrets.GCP_SSH_KEY_FILE }}
```