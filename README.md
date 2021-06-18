# Reproduce TS Inferred Type Bug

## Install toolchain and build projects

Install `rush`

```sh
npm install -g @microsoft/rush
```

Install monorepo depedencies

```sh
rush install
```

Build monorepo projects

```sh
rush rebuild
```

---

## Observe bug

Open [`libs/ui-web/src/Button.tsx`](./libs/ui-web/src/Button.tsx) in VSCode another editor that supports the TypeScript language server.

On [line 6 of Button.tsx](./libs/ui-web/src/Button.tsx#L6) VSCode reports the following error:

```
The inferred type of 'Button' cannot be named without a reference to '../../common/temp/node_modules/.pnpm/@material-ui+core@5.0.0-alpha.37_89cf641f581d2cb2eddb2af450100ffd/node_modules/@material-ui/core/OverridableComponent'. This is likely not portable. A type annotation is necessary.
```

## Observe bug #2

Open [`apps/react-app/src/components/Button.tsx`](./apps/react-app/src/components/Button.tsx) in VSCode another editor that supports the TypeScript language server.

On [line 4 of Button.tsx](./apps/react-app/src/components/Button.tsx#L4) VSCode reports the following error:

```
The inferred type of 'Button' cannot be named without a reference to '../../../../common/temp/node_modules/.pnpm/@material-ui+core@5.0.0-alpha.37_89cf641f581d2cb2eddb2af450100ffd/node_modules/@material-ui/core/OverridableComponent'. This is likely not portable. A type annotation is necessary.
```
