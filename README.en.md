# ClikPets — Frontend

[Versão em português](README.md)

Frontend for the ClikPets platform, where people can find pets for adoption and authenticated users can register and manage pets. The application is a single-page app built with React, TypeScript, and Vite. It consumes the project API, which runs separately.

## Features

- Browse available pets and view each pet's details.
- Create an account, sign in, and sign out.
- Schedule an adoption and track the user's adoptions.
- Register, edit, mark as adopted, and delete the user's pets.
- View and edit the user's profile.
- Switch themes, with the preference saved in the browser.

## Technologies

- React 19 and TypeScript
- Vite for development and builds
- React Router for navigation
- TanStack Query for data fetching and mutations
- Axios for API communication
- CSS Modules for local styles and global CSS for shared styles
- ESLint for static analysis

## Requirements

- Node.js `^20.19.0` or `>=22.12.0` (required by the Vite 8 version installed in this project).
- npm.
- The ClikPets API running and accessible to the frontend.

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root, using `.env.example` as a reference:

   ```env
   VITE_API_URL=http://localhost:3000
   VITE_ENVIRONMENT=DEV
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Vite prints the local app URL in the terminal, usually `http://localhost:5173`.

## Run locally with the backend

To run the complete application, also clone the [ClikPets Backend repository](https://github.com/DanielRR76/ClikPets-Backend) and follow its setup instructions. The backend and frontend are separate projects. Docker is used to start the database through the backend's Compose configuration; the API itself runs through the backend's Node.js scripts.

With Docker installed and your terminal in the backend directory, install dependencies and start the database:

```bash
npm install
npm run compose:up
```

Then generate the Prisma client, apply development migrations, and start the API:

```bash
npm run generate
npm run migrate:dev
npm run dev
```

The backend also provides these scripts for other tasks:

| Command                  | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| `npm run start`          | Starts the compiled API from `dist/server.js`.          |
| `npm run build`          | Compiles `src/server.ts` to `dist/` with tsup.          |
| `npm run migrate:deploy` | Applies pending migrations in a deployment environment. |
| `npm run migrate:reset`  | Deletes the database data and reapplies the migrations. |
| `npm run compose:down`   | Stops the services started by Docker Compose.           |

Once the API is available at `http://localhost:3000`, return to this frontend's directory, set `VITE_ENVIRONMENT=DEV` in `.env`, and run `npm run dev`. To stop the database when finished, run `npm run compose:down` from the backend directory. Check the backend README for any additional configuration, such as environment variables and database credentials.

### Environment variables

| Variable           | Purpose                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `VITE_ENVIRONMENT` | When its value is exactly `PROD`, enables the production API configuration. Any other value uses `http://localhost:3000`. |
| `VITE_API_URL`     | API base URL when `VITE_ENVIRONMENT=PROD`.                                                                                |

The Axios client sends requests with `withCredentials: true`. The backend must therefore allow credentials for requests from the frontend's origin. `VITE_*` variables are embedded in the build bundle; do not put secrets in them. The `.env` file is ignored by Git.

## Available scripts

| Command                 | Description                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ |
| `npm run dev`           | Starts the Vite development server.                                            |
| `npm run build`         | Type-checks the TypeScript projects and creates a production build in `dist/`. |
| `npm run preview`       | Serves the generated build locally for review. Run `npm run build` first.      |
| `npm run lint`          | Runs ESLint on the project files.                                              |
| `npm run release:patch` | Creates a patch release with `standard-version`.                               |
| `npm run release:minor` | Creates a minor release with `standard-version`.                               |
| `npm run release:major` | Creates a major release with `standard-version`.                               |

There is currently no test script configured in `package.json`.

## Application routes

| Route              | Access        | Page                        |
| ------------------ | ------------- | --------------------------- |
| `/`                | Public        | Available pets list         |
| `/login`           | Public        | Sign in                     |
| `/register`        | Public        | User registration           |
| `/pet/:id`         | Public        | Pet details                 |
| `/user/profile`    | Authenticated | User profile                |
| `/pet/mypets`      | Authenticated | Pets registered by the user |
| `/pet/myadoptions` | Authenticated | User's adoptions            |
| `/pet/add`         | Authenticated | Register a pet              |
| `/pet/edit/:id`    | Authenticated | Edit a pet                  |

Protected routes are handled by `AuthGuard`. The application uses `BrowserRouter` without a `basename`; in production, the hosting server must route SPA paths to `index.html`.

## Code organization

Application code lives in `src/` and is organized by responsibility:

```text
src/
├── app/       # Application composition, providers, and global styles
├── api/       # HTTP client and response types
├── features/  # Authentication, user, and pet functionality
├── layouts/   # Shared visual structure, navigation, and footer
├── router/    # Routes, access guards, and navigation helpers
├── shared/    # Reusable components, hooks, types, constants, and utilities
└── stores/    # Authentication state and context
```

`src/main.tsx` mounts the application. `src/app/App.tsx` brings together the router, TanStack Query provider, authentication provider, and overall layout. Features contain pages, services, and hooks for each domain; reusable components and utilities live in `shared/`.

Imports use aliases configured in Vite and TypeScript, such as `@features`, `@layouts`, `@router`, `@shared`, `@stores`, and `@api`.

## Production build

Set `VITE_ENVIRONMENT=PROD` and `VITE_API_URL` before creating the bundle:

```bash
npm run build
npm run preview
```

Static output is written to `dist/` and can be published to a static site host. Configure the host to serve `index.html` as the fallback for application routes, and make sure the API accepts credentialed requests from the deployed domain.
