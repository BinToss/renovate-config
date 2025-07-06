# renovate-config

Shareable preset for Mend Renovate.

## Usage

Extend from this [shareable preset](./default.json) by adding it to the `extends` array in your own config.

### Example

```json
{
  "extends": [
    "github>bintoss/renovate-config"
  ]
}
```

## Notable Mend Renovate Documentation

- [matchCategories](https://docs.renovatebot.com/configuration-options/#matchcategories)
  - [Managers](https://docs.renovatebot.com/modules/manager/)
