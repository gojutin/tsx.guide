# tsx.guide [https://www.tsx.guide](https://www.tsx.guide)

<img src="https://res.cloudinary.com/gojutin/image/upload/v1584239143/www.tsx.guide/tsx-guide-logo.png" alt="Logo" style="max-width: 400px" />

## A guide for writing React apps with TypeScript

[![Netlify Status](https://api.netlify.com/api/v1/badges/6405ed4b-0a96-4cbf-b786-3bc3bc8f0782/deploy-status)](https://app.netlify.com/sites/tsx-guide/deploys)

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

```
$ yarn cold-start
```

This command removes the `.docusaurus` directory, then runs `yarn start`.

```
$ yarn dev
```

This command starts Netlify Dev, which injects the Algolia environment variables for search. Search will not work otherwise. You do not need to worry about this for contributing to the documentation.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory.

### Deployment

This site is hosted by Netlify. Any updates to the `master` branch result in a new build to be published.

## Contributing

Thanks for your interest in contributing to this site! Please check out the [Contributing](https://www.tsx.guide/introduction/contributing) page on the website for information about how you can help.
