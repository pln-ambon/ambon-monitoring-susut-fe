# Ambon Monitoring Susut Project (FE)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server by running this command:

```bash
$ npm i
$ npm run dev
```

Production mode
```
$ npm run build
$ npm run start
```

If you want to run the application using pm2:
running application

```
  pm2 start pm2.config.js
```


Open [http://localhost:6002](http://localhost:6002) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## File Structure

This is the overall structure of folder

```
.
└── src/
    ├── app/
    │   ├── example/
    │   │   ├── layout.tsx
    │   │   └── pages.tsx
    │   ├── favicon.svg
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── common/
    │   │   ├── root/
    │   │   │   └── base-component.tsx
    │   │   └── ...
    │   ├── icon/
    │   │   ├── home-icon.tsx
    │   │   └── ...
    │   ├── pages/
    │   │   ├── example/
    │   │   │   └── ...
    │   │   └── ...
    │   └── ui/
    │       └── ...
    └── libs/
        └── ...
```

#### App Router
This project use `app router` to control the routing. If you want to create new router, make sure to create new folder and file as follow.

```
app/
    ├── example/
    │   ├── layout.tsx
    │   └── page.tsx
    ├── new-route/
    │   ├── layout.tsx
    │   └── page.tsx
    └── ...

```
See [this resouce](https://nextjs.org/docs/app/building-your-application/routing) for more understanding behind it.

####  Component
`Component` are the piece of code that resemble some, if not all, of the User Interface for some page. For this project, Component was divided into 3 category:
- `UI Component`. This component was the smallest component that the usage is strictly for constructing User Interface. Because of that, this component have relatively small size.

- `Common Component`. This is the component that can be shared to multiple layout and page.

- `Page Component`. This is the component that consist of multiple `UI Component` to create unique behavior that any other page does not have.

All of the component are contained inside `/components`

## Naming Convention
This is some simple rules to naming your file inside this project.

### File
1. **Always** use `.tsx` to component file, and `.ts` for anything else (libs, types, .etc)
2. To name your component file, use "flatcase" for `UI Component` (ie. sidenav.tsx, textarea.tsx) and "snake_case" for `Page Component`.

## Class/Function
1. For naming your component class/function, use "PascalCase" (ie. ExampleComponent)
2. For naming your libs function, use 'camelCase' (ie. 'getClass'). For your libs class/interface, use 'PascalCase' (ie. ExampleProps)

---

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- Check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

