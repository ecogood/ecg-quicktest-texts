ECG quick test data
==================

This package contains the texts for the ECG quick test and tests to validate their proper structure.

### Build Status
[![Build Status](https://travis-ci.org/ecogood/ecg-quicktest-texts.svg?branch=master)](https://travis-ci.org/ecogood/ecg-quicktest-texts)

## Installation

Requirements:

* Node.js 0.10.x

```
npm install --save ecg-quicktest-texts
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

## Tests

The data files and the module are tested with [Mocha](http://visionmedia.github.io/mocha/) and [Chai](http://chaijs.com/).

### View the tests

[Open the tests](test/tests.spec.js)

### Run the tests

``npm test``

## Roadmap

* :white_check_mark: add German texts.
* :arrow_right: add English translation.
* add Spanish translation.

## Contributing

Feel free to contribute to the Roadmap or otherwise.

### Translation

All texts for a single language are contained in single file ``data/quicktest-texts.<matrix-version>.<lang>.json``.

If you want to help with translating the texts:

* if a file with the desired language does not exist in the ``data/`` folder, create it.
* open the file for translation and
  * you will see a lot of data in the format ``<key>: <value>`` (e.g. ``"name": "Schnelltest Gemeinwohl-Ökonomie"``)  
  * do not translate any keys.
  * translate all values, except those belonging to the following keys:
    * ``matrixVersion``
    * ``structure.participants.type``
    * ``structure.individualAnswer.evaluationValues.value``
    * ``structure.result.feedback.minValue/maxValue``
    * ``test.questions.stakeholders/ecgValue``

To do this you can either:
* collaborate through GitHub ([See how in this video](https://www.youtube.com/watch?v=SCZF6I-Rc4I#t=1m19s)):
  * fork the repository
  * translate the files
  * If you can, run ``npm test`` to make sure that the tests are still running successfully after your changes.
  * send a pull request
* email the translated files to the main developer, see below.

### Issues and Features

Share issues and desired features [in GitHub](https://github.com/ecogood/ecg-quicktest-texts/issues).

## License

* All files under ``data/`` contain texts from the Economy for the Common Good (ECG) movement which will be soon be released under a Creative Commons license.
* All other files are under the MIT License.

## Developers

* [Nikolay Georgiev](http://nikolay-georgiev.net/), main developer, ECG Berlin.

## Release History

* 0.0.6 - tests fixed.
* 0.0.5 - add result level, remove app specific translations.
* 0.0.4 - added module tests and grunt.
* 0.0.3 - fixed tests and added travis CI.
* 0.0.2 - Simplified the JSON structure, moved the repository to the new ECG GitHub account, updated collaboration info.
* 0.0.1 - Added german quick test data and few tests.