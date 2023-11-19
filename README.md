# Projeto Docker - Desafio Nginx com Node.js

## Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio para demonstrar a utilização do Nginx como proxy reverso em um ambiente Docker. O objetivo é configurar o Nginx para redirecionar requisições para uma aplicação Node.js, que por sua vez interage com um banco de dados MySQL para armazenar e recuperar informações.

### Funcionalidades

- **Nginx como Proxy Reverso:** Redireciona as requisições para o servidor Node.js.
- **Aplicação Node.js:** Processa as requisições, interage com o banco de dados MySQL e retorna uma lista de nomes cadastrados, juntamente com a mensagem `<h1>Full Cycle Rocks!</h1>`.
- **Banco de Dados MySQL:** Armazena os nomes cadastrados pela aplicação Node.js.

## Pré-requisitos

Para executar este projeto, você precisará ter o Docker e o Docker Compose instalados em seu sistema.

## Como Executar

1. **Clonar o Repositório:**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd [NOME_DO_REPOSITORIO]
Após executar este comando, os serviços do Nginx, Node.js e MySQL serão iniciados.

2. **Iniciar os Serviços com Docker Compose:**
   ```bash
   docker compose up -d --build
Após executar este comando, os serviços do Nginx, Node.js e MySQL serão iniciados.

3. **Acessar a Aplicação:**
Abra o navegador e acesse `http://localhost:8080`. Você verá a mensagem "Full Cycle Rocks!" e a lista de nomes cadastrados no banco de dados.

## Estrutura do Projeto

- `/nginx`: Contém a configuração do Nginx.
- `/node`: Código fonte da aplicação Node.js.
- `/mysql`: Backup do banco de dados MySQL.
- `docker-compose.yml`: Define os serviços, redes e volumes utilizados no projeto.

## Tecnologias Utilizadas

- **Docker/Docker Compose:** Para criar e gerenciar os containers.
- **Nginx:** Como proxy reverso.
- **Node.js:** Linguagem de programação para o backend.
- **MySQL:** Banco de dados para armazenamento de dados.

## Contribuições

Contribuições são sempre bem-vindas! Para contribuir, por favor, crie um pull request com suas sugestões de melhorias ou correções.

Desenvolvido por Bernardo Souza de Oliveira.
