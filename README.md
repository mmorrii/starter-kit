# React Starter Kit

Starter template for building web applications with React.

## Tech Stack

- [React](https://react.dev/), [React Router](https://reactrouter.com/en/main),
  [TypeScript](https://www.typescriptlang.org/)

- [PostCSS](https://postcss.org/) (
  [mixins](https://github.com/postcss/postcss-mixins),
  [nested](https://github.com/postcss/postcss-nested),
  [font-magician](https://github.com/csstools/postcss-font-magician),
  [autoprefixer](https://github.com/postcss/autoprefixer),
  [cssnano](https://github.com/cssnano/cssnano)
  )

- [Vite](https://vite.dev/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)*

> [!NOTE]
> The Prettier package isn't installed as dependency in `package.json`. 
> If you aren't using Prettier plugin in your IDE, it should be installed <br/>
> ```bash 
> npm install --save-dev --save-exact prettier
> ```

## Directory Structure

```text
├── public/                        # Static files such as SVG-sprites, favicon.ico
├── src/                           # Application source code
│   ├── components/                # The main UI building blocks
│   ├── hooks/                     # Custom hooks and Context providers
│   ├── icons/                     # Icon components
│   ├── layout/                    # Common page components that aren't changed by routing 
│   ├── pages/                     # Entry point for each pages
│   ├── styles/                    # Global CSS styles
│   ├── types/                     # Entity types used in multiple parts of application
│   ├── utils/                     # Utility functions
│   ├── index.css                  # Entry point for global styles and repeating styles
│   ├── main.tsx                   # Entry point that render app in root DOM element
│   ├── router.tsx                 # The root route
│   └── vite-env.d.ts              # User-defined env variables for TypeScript
└── .env.example                   # Environment variables for local development (in dev process rename to `.env.local`)
... other configuration packages
```

## Acknowledgement

Thanks to [MineKing9534](https://github.com/MineKing9534) for `useRest` hook