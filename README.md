# ClikPets — Frontend

[English version](README.en.md)

Frontend da plataforma ClikPets, onde pessoas podem encontrar pets para adoção e usuários autenticados podem cadastrar e administrar pets. A aplicação é uma SPA construída com React, TypeScript e Vite e consome a API do projeto, executada separadamente.

## Funcionalidades

- Consultar os pets disponíveis e visualizar os detalhes de cada pet.
- Criar uma conta, entrar e sair da aplicação.
- Agendar uma adoção e acompanhar as adoções do usuário.
- Cadastrar, editar, concluir a adoção e excluir pets próprios.
- Consultar e editar o perfil do usuário.
- Alternar entre temas, com a preferência salva no navegador.

## Tecnologias

- React 19 e TypeScript
- Vite para desenvolvimento e build
- React Router para navegação
- TanStack Query para consultas e mutações de dados
- Axios para comunicação com a API
- CSS Modules para estilos locais e CSS global para estilos compartilhados
- ESLint para análise estática

## Requisitos

- Node.js `^20.19.0` ou `>=22.12.0` (requisito do Vite 8 instalado no projeto).
- npm.
- API do ClikPets em execução e acessível pelo frontend.

## Configuração local

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie um arquivo `.env` na raiz, usando `.env.example` como referência:

   ```env
   VITE_API_URL=http://localhost:3000
   VITE_ENVIRONMENT=DEV
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   O Vite informa no terminal o endereço local da aplicação, normalmente `http://localhost:5173`.

## Executar localmente com o backend

Para usar a aplicação completa, clone também o repositório do [ClikPets Backend](https://github.com/DanielRR76/ClikPets-Backend) e siga as instruções de configuração dele. O backend e o frontend são projetos separados. O Docker é usado para iniciar o banco de dados pelo Compose do backend; a API é executada pelos scripts Node.js do próprio backend.

Com Docker instalado e o terminal na pasta do backend, instale as dependências e inicie o banco:

```bash
npm install
npm run compose:up
```

Em seguida, gere o cliente Prisma, aplique as migrações de desenvolvimento e inicie a API:

```bash
npm run generate
npm run migrate:dev
npm run dev
```

O backend também disponibiliza estes scripts para outras tarefas:

| Comando                  | Descrição                                          |
| ------------------------ | -------------------------------------------------- |
| `npm run start`          | Inicia a API compilada em `dist/server.js`.        |
| `npm run build`          | Compila `src/server.ts` para `dist/` com tsup.     |
| `npm run migrate:deploy` | Aplica migrações pendentes em ambiente de deploy.  |
| `npm run migrate:reset`  | Apaga os dados do banco e reaplica as migrações.   |
| `npm run compose:down`   | Encerra os serviços iniciados pelo Docker Compose. |

Com a API disponível em `http://localhost:3000`, volte à pasta deste frontend, configure `VITE_ENVIRONMENT=DEV` no `.env` e execute `npm run dev`. Para encerrar o banco depois do uso, execute `npm run compose:down` na pasta do backend. Consulte o README do backend para eventuais configurações adicionais, como variáveis de ambiente e credenciais do banco.

### Variáveis de ambiente

| Variável           | Uso                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `VITE_ENVIRONMENT` | Quando o valor é exatamente `PROD`, ativa a configuração de produção da API. Qualquer outro valor usa `http://localhost:3000`. |
| `VITE_API_URL`     | URL base da API quando `VITE_ENVIRONMENT=PROD`.                                                                                |

O cliente Axios envia chamadas com `withCredentials: true`. Portanto, o backend deve permitir credenciais nas chamadas de origem do frontend. Variáveis `VITE_*` são incorporadas ao bundle no build; não coloque segredos nelas. O arquivo `.env` é ignorado pelo Git.

## Scripts disponíveis

| Comando                 | Descrição                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`           | Inicia o servidor de desenvolvimento do Vite.                                       |
| `npm run build`         | Verifica os projetos TypeScript e gera a build de produção em `dist/`.              |
| `npm run preview`       | Serve localmente a build já gerada para conferência. Execute `npm run build` antes. |
| `npm run lint`          | Executa o ESLint nos arquivos do projeto.                                           |
| `npm run release:patch` | Gera uma versão de patch com `standard-version`.                                    |
| `npm run release:minor` | Gera uma versão minor com `standard-version`.                                       |
| `npm run release:major` | Gera uma versão major com `standard-version`.                                       |

Não há script de testes configurado no `package.json` atualmente.

## Rotas da aplicação

| Rota               | Acesso      | Página                        |
| ------------------ | ----------- | ----------------------------- |
| `/`                | Público     | Lista de pets disponíveis     |
| `/login`           | Público     | Login                         |
| `/register`        | Público     | Cadastro de usuário           |
| `/pet/:id`         | Público     | Detalhes do pet               |
| `/user/profile`    | Autenticado | Perfil do usuário             |
| `/pet/mypets`      | Autenticado | Pets cadastrados pelo usuário |
| `/pet/myadoptions` | Autenticado | Adoções do usuário            |
| `/pet/add`         | Autenticado | Cadastro de pet               |
| `/pet/edit/:id`    | Autenticado | Edição de pet                 |

As rotas protegidas passam pelo `AuthGuard`. A aplicação usa `BrowserRouter` sem `basename`; em produção, o servidor que hospeda o frontend precisa encaminhar rotas da SPA para `index.html`.

## Organização do código

O código da aplicação fica em `src/` e é organizado por responsabilidade:

```text
src/
├── app/       # Composição da aplicação, providers e estilos globais
├── api/       # Cliente HTTP e tipos relacionados às respostas
├── features/  # Funcionalidades de autenticação, usuários e pets
├── layouts/   # Estrutura visual compartilhada, navegação e rodapé
├── router/    # Rotas, proteção de acesso e helpers de navegação
├── shared/    # Componentes, hooks, tipos, constantes e utilitários comuns
└── stores/    # Estado e contexto de autenticação
```

`src/main.tsx` monta a aplicação. `src/app/App.tsx` reúne o roteador, o provider do TanStack Query, o provider de autenticação e o layout geral. As features concentram páginas, serviços e hooks ligados a cada domínio; componentes e utilitários reutilizados ficam em `shared/`.

Os imports usam aliases configurados no Vite e no TypeScript, como `@features`, `@layouts`, `@router`, `@shared`, `@stores` e `@api`.

## Build de produção

Configure `VITE_ENVIRONMENT=PROD` e `VITE_API_URL` antes de gerar o bundle:

```bash
npm run build
npm run preview
```

A saída estática é gravada em `dist/` e pode ser publicada em um host de sites estáticos. Configure o host para servir `index.html` como fallback das rotas da aplicação e garanta que a API aceite requisições com credenciais provenientes do domínio publicado.
