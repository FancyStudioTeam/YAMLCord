# Error Codes

Error codes are codes that help identify the type of error that occurred during compilation.

## General Errors

- `0`: Occurs when an error occurs that has not been documented with an error code.

## `1xxxx` Errors

Occurs when a value is invalid.

- `10001`: Occurs when an invalid YAML file is written.
- `10002`: Occurs when the length of a text string is greater than the maximum allowed value.
- `10003`: Occurs when the length of a text string is less than the minimum allowed value.
- `10004`: Occurs when the length of an array is greater than the maximum allowed value.
- `10005`: Occurs when the length of an array is less than the minimum allowed value.
- `10006`: Occurs when the data type of the value does not correspond to the required data type.
- `10007`: Occurs when the numeric length of a number is greater than the maximum allowed value.
- `10008`: Occurs when the numeric length of a number is less than the minimum allowed value.
- `10009`: Occurs when a string does not match a regular expression.
- `10010`: Occurs when an enumeration does not match the allowed enumerations.

## `2xxxx` Errors

Occur when an unknown structure is encountered.

- `20001`: Occurs when an unknown top level field is encountered.
- `20002`: Occurs when an unknown integrated function is encountered.
