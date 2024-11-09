# Website



This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## How to add your page

1. Create a folder inside `docs` or use the existing one as needed
     - `_category.json` needs to be created for the new folder
2. Create a subfolder as needed
3. Create a `.md` file for your document
4. To use an image in your doc, you need to add it inside `img` directory and provide the reference in your source.

## Installation

```console
npm install
```

## Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

This will run on port 8888 to avoid conflicts with other apps.

## CI/CD Deployment
Create a PR for your changes
PR builds will run and validate the build for any compilation issue. Adding doc files will not cause any compilation issue, only when there is a reference to something and that link is broken you will see the build fails.

Committing this repo fires off a Github Actions workflow  which will deploy this repo using Github Pages.



