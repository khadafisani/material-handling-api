# Material Handling API

## Introduction

This project is configured to use Bun as the runtime. If you want to run in NodeJS you have to change script in package.json

If you dont have bun you can install bun with command below

Windows:

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

Linux or MacOS:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Note

This NestJS folder structure already modified. There is may some file unused because its not needed for solve current problem / case. You see the API / feature inside _./src/features_ folder.

## Setup & Running the Project

Before running the project, follow these steps:

1. Install the project dependencies:
   ```bash
   bun install
   ```
2. Start the development server:
   ```bash
   bun run start:dev
   ```

## Modules

This API have 2 main modules:

1. **Material Request**
2. **Material Request Detail**

## Endpoint

### Material Request

There is 5 endpoint for this module:

1. **GET** /material-request (findAll)
2. **GET** /material-request/:id (findOne)
3. **POST** /material-request (create)
4. **PUT** /material-request/:id (update)
5. **DELETE** /material-request/:id (remove)

### Material Request Detail

there is 5 endpoint for this module, but currently i just use 3 of them:

1. **GET** /material-requests/:materialRequestId/details (findAll) _unused_
2. **GET** /material-requests/:materialRequestId/details/:id (findOne) _unused_
3. **POST** /material-requests/:materialRequestId/details (create)
4. **PUT** /material-requests/:materialRequestId/details/:id (update)
5. **DELETE** /material-requests/:materialRequestId/details/:id (remove)
