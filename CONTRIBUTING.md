# Contributing

Feel free to contribute to this project. Any sort of contributions are always welcome and are greatly appreciated.

## Development

Visit the [issue tracker](https://github.com/traveloka/soya-next/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```bash
git clone https://github.com/your-username/soya-next.git
cd soya-next
```

### Setup

To get you started real quick, run the following:

```bash
npm install
```

It will install external dependencies, build all packages, and link local dependencies.

### Building

To build the module, run the following:

```bash
npm run build
```

To watch for code changes, run the following:

```bash
npm run watch
```

### Running Tests

To test your code, run the following:

```bash
npm test
```

### Code Style and Linting

This codebase follows [Traveloka JavaScript Style Guide](https://github.com/traveloka/javascript) and is enforced using [marlint](https://github.com/traveloka/javascript/tree/master/packages/marlint).

To lint your code, run the following:

```bash
npm run lint
```

### Examples

#### Setup

Open `lerna.json` and update it with the following:

```diff
{
  "lerna": "2.0.0",
  "npmClient": "yarn",
  "commands": {
    "bootstrap": {
-     "scope": [
+     "ignore": [
        "soya-next*"
      ]
    }
  },
  "packages": [
    "packages/*",
    "examples/*"
  ],
  "version": "0.2.11"
}
```

Then, run the following:

```bash
lerna bootstrap
```

It will install external dependencies and link local dependencies.

#### Building

To manually link the local repositories to any example app, run the following on each example directory:

```bash
npm link soya-next
npm link soya-next-scripts
npm link soya-next-server
```

To build and watch for code changes, run the following on each example directory:

```bash
npm start
```
