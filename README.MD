> [!IMPORTANT]
> **Unreleased Beta**
> This software is currently in an unreleased beta state. Features are subject to change and stability is not guaranteed.

# Lobster Lock - Official Website

This repository contains the source code for the official Lobster Lock website, which provides project information, detailed DIY build guides, and software downloads.

The site is built as a modern static-generated site (SSG) using Vite and React, and styled with Tailwind CSS.

## ⚠️ Disclaimer & Safety Warning

This project is intended for educational and novelty purposes by responsible adults. Self-bondage carries inherent and serious risks, including nerve damage, circulation loss, and asphyxiation.

* You are building this toolkit at your **own risk**.
* Thoroughly test all components, especially release mechanisms, before any use.
* Always have a failsafe plan and emergency tools (like shears or cutters) within reach.
* Never use this system in a way that restricts breathing or in any situation you cannot safely escape from.
* The creators of this project assume **no liability** for any harm, damage, or legal consequences.

## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

## Technical Stack

* **Framework:** [React](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Routing:** [React Router](https://reactrouter.com/)

## Development

**Prerequisites:**
* Node.js (v18+)
* Yarn

### Installation

Clone the repository and install the dependencies:

```bash
yarn install
````

### Running the Development Server

To run the website locally with hot-reloading:

```bash
yarn dev
```

This will start the Vite development server, typically available at `http://localhost:5173`.

### Linting

To check the code for any linting errors:

```bash
yarn lint
```

### Building for Production

To create a static, optimized build of the website:

```bash
yarn build
```

This will compile the application into the `dist/` directory. You can preview the production build locally using `vite preview`.
