# Moroccan Phone Formatter

Utilities to normalize, format, validate, and identify Moroccan phone numbers.

## Features

- Normalize local and international Moroccan numbers
- Format numbers in local or `+212` form
- Add readable spacing
- Detect the operator from the prefix
- Validate supported Moroccan fixed and mobile prefixes

## Installation

```bash
npm install @hamza_sehouli/moroccan-phone-formatter
```

## Usage

```js
import {
  detectOperator,
  formatPhone,
  isValidMoroccanNumber,
  normalizeNumber,
} from "@hamza_sehouli/moroccan-phone-formatter";

formatPhone("0612345678", { spaces: true });
// "06 12 34 56 78"

formatPhone("0612345678", { international: true, spaces: true });
// "+212 6 12 34 56 78"

detectOperator("+212610123456");
// "IAM"

isValidMoroccanNumber("+212612345678");
// true

normalizeNumber("+212612345678");
// "0612345678"
```

## API

### `normalizeNumber(phone)`

Returns a local Moroccan number like `0612345678`.
Returns `null` for unsupported input.

### `formatPhone(phone, options)`

Options:

- `international`: returns a `+212` number
- `spaces`: inserts spaces for readability

Returns `null` for unsupported input.

### `isValidMoroccanNumber(phone)`

Returns `true` when the input can be normalized to a supported Moroccan number.

### `detectOperator(phone)`

Returns one of:

- `IAM`
- `Orange`
- `Inwi`
- `IAM Fixe`
- `Orange Fixe`
- `Inwi Fixe`
- `Unknown`

## Release automation

This repository includes [`.github/workflows/release.yml](.github/workflows/release.yml), which:

- runs on pushes to `main`
- runs the test suite
- bumps the patch version in `package.json`
- creates and pushes the release tag
- publishes the package to npm

Required GitHub repository secrets:

- `NPM_TOKEN`: npm access token with publish rights for the package

## Development

```bash
node test/index.test.js
```

## License

MIT
