ECG quick test data
==================

This package contains the ECG quick test data and tests to validate it.

## Installation

```
npm install --save ecg-data-quicktest
```

## Data

The data is saved as JSON files (``*.<lang>.json``) in the ``data/`` folder.

## Exports

This module exports the data in the following form:

```javascript
{
  de: { /* German quick test data */ },
  en: { /* English quick test data */ },
}
```

## Testing

Run the tests:

``make test``

The data files and the module are tested with [Mocha](http://visionmedia.github.io/mocha/) and [Chai](http://chaijs.com/).

## Roadmap

* :white_check_mark: add German quick test data
* :arrow_right: add English quick test data

## Contributing

Feel free to contribute to the Roadmap or otherwise.

### Issues and Features

Feel free to share issues and desired features [in GitHub](https://github.com/nikolayhg/ecg-data-quicktest/issues).

## License

* All files under ``data/`` contain texts from the Economy for the Common Good (ECG) movement which will be soon be released under a Creative Commons license.
* All other files are under the MIT License.

## Developers

* [Nikolay Georgiev](http://nikolay-georgiev.net/), ECG Berlin.

## Release History

* 0.0.1 - Added german quick test data and few tests.