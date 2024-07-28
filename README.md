# Joke Generator chrome extension

This project is a simple joke generator web application. It fetches jokes from the JokeAPI and displays them on the webpage.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Using as Chrome Extension](#using-as-chrome-extension)
- [Code Explanation](#code-explanation)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/venusai-mabbu/JokeGen-chrome-extension.git
    ```
2. Open the project directory:
    ```bash
    cd JokeGen-chrome-extension
    ```
3. Open `popup.html` in your web browser to see the joke generator in action.

## Usage

- Click the "Generate Joke" button to fetch a random joke from the JokeAPI.
- The joke will be displayed in the joke container.

## Using as Chrome Extension

1. Clone the repository:
    ```bash
    git clone https://github.com/venusai-mabbu/JokeGen-chrome-extensionr.git
    ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click the "Load unpacked" button and select the directory where you cloned the repository.
5. The joke generator will be added as an extension, and you can use it by clicking the extension icon in the Chrome toolbar.

## Code Explanation

The main functionality is implemented in the `script.js` file:
It fetches data from a free joke API.
