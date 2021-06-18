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

On [line 6 of libs/ui-web/src/Button.tsx](./libs/ui-web/src/Button.tsx#L6) VSCode reports the following error:

```
The inferred type of 'Button' cannot be named without a reference to '../../common/temp/node_modules/.pnpm/@material-ui+core@5.0.0-alpha.37_89cf641f581d2cb2eddb2af450100ffd/node_modules/@material-ui/core/OverridableComponent'. This is likely not portable. A type annotation is necessary.
```

## Observe bug #2

Open [`apps/react-app/src/components/Button.tsx`](./apps/react-app/src/components/Button.tsx) in VSCode another editor that supports the TypeScript language server.

On [line 4 apps/react-app/src/components/Button.tsx](./apps/react-app/src/components/Button.tsx#L4) VSCode reports the following error:

```
The inferred type of 'Button' cannot be named without a reference to '../../../../common/temp/node_modules/.pnpm/@material-ui+core@5.0.0-alpha.37_89cf641f581d2cb2eddb2af450100ffd/node_modules/@material-ui/core/OverridableComponent'. This is likely not portable. A type annotation is necessary.
```

---

# References

- [microsoft/TypeScript#42873](https://github.com/microsoft/TypeScript/issues/42873)
- [microsoft/TypeScript#33567](https://github.com/microsoft/TypeScript/pull/33567)
- [microsoft/TypeScript#36866](https://github.com/microsoft/TypeScript/issues/36866)
- [microsoft/TypeScript#32970](https://github.com/microsoft/TypeScript/issues/32970)
- [microsoft/TypeScript#30858](https://github.com/microsoft/TypeScript/issues/30858)
- [microsoft/TypeScript#29808](https://github.com/microsoft/TypeScript/issues/29808)
- [microsoft/TypeScript#29221](https://github.com/microsoft/TypeScript/issues/29221)
- [microsoft/TypeScript-Node-Starter#276](https://github.com/microsoft/TypeScript-Node-Starter/issues/276)
- [StackOverflow ](https://stackoverflow.com/questions/43335336/error-ts4058-return-type-of-exported-function-has-or-is-using-name-x-from-exter)
