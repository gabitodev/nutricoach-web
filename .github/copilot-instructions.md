We use pnpm as the package manager. So whent talking about packages always give me instructions and code samples that uses pnpm.

This is a TypeScript project. All code should be written in TypeScript.

This is a pnpm workspace. The root package.json file contains the workspace configuration. When adding dependencies, ensure they are added to the correct package within the workspace.

We use ESLint to enforce code quality and style. Always ensure that the code adheres to the rules defined in the `.eslintrc.js` file.
We use Prettier for code formatting. Ensure that the code is formatted according to the rules defined in the `.prettierrc` file.

In the client workspace, we use React for building user interfaces. Ensure that components are written in a functional style using hooks where appropriate.
In the server workspace, we use Node.js with Fastify for building APIs. Ensure that routes and middleware are written in a functional style.

We always write TypeScript following the rules declared in the tsconfig.json. The generated code, examples, etc. Each workspace has his own tsconfig.json file.

Preferably use functional programming.
