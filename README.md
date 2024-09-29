# Woordenlijst Client
Woordenlijst Client is a JavaScript client for interacting with the [Woordenlijst](https://woordenlijst.org/) API. This client allows you to fetch and manipulate word data from the API.


## Motivation
This project was created to provide a simple way to interact with the Woordenlijst API. The API provides a wealth of information about Dutch words, and this client makes it easy to access that information.

## Installation
To install the dependencies, run:

```sh
yarn install
```

## Usage
Here is an example of how to use the Woordenlijst Client:

```javascript
import { getWord } from 'woordenlijst-client';

async function fetchWord() {
  try {
    const wordData = await getWord('werken');
    console.log(wordData);
  } catch (error) {
    console.error('Error fetching word data:', error);
  }
}

const word = fetchWord();
// Output format can be seen in the ./test/index.test.js file
```

## Running Tests
To run the tests, use the following command:

```sh
yarn test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.