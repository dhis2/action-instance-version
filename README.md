# action-instance-version

Github action for getting the version of a DHIS2 instance

## Inputs

### `instance-url`

**Required** The URL to the instance. E.g. https://test.e2e.dhis2.org/ca-test-dev

### `username`

**Required** The DHIS2 username.

### `password`

**Required** The DHIS2 password.

## Outputs

### `version`

The DHIS2 instance version.

## Example

```
uses: JoakimSM/action-instance-version
with:
    instance-url: [URL]
    username: [username]
    password: [password]
```
