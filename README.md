# Currency Conversion App

## Overview

This project is a mobile cryptocurrency conversion app built using React Native, Expo, and TypeScript. The app is designed to allow users to view and convert different cryptocurrencies based on live exchange rates. The app is built for one screen where the user can input an amount, select a source currency, and then choose a destination currency to get a conversion quote.

The app also utilizes Husky for precommit hooks, ensuring code quality and consistency during development. The application uses styled-components for styling and Axios for API calls to retrieve currency and market data.

## Installation

1. Clone the repository

```sh
git clone <repository_url>

cd <repository_directory>
```

2. Install dependencies

Since the app uses Yarn as the package manager, you need to install dependencies with the following command:

```sh
yarn install
```

3. Install Expo CLI

If you do not have Expo CLI installed globally, you can install it using the following command:

```sh
npm install -g expo-cli
```

4. Run the project

Once all dependencies are installed, you can start the Expo project using the following command:

```sh
expo start
```

This will open the Expo development server, and you can scan the QR code with the Expo Go app on your mobile device to run the app.

For more detailed information visit the expo documentation: https://docs.expo.dev/get-started/set-up-your-environment/

## Features

- Currency Conversion: Users can input an amount in one currency and get the equivalent amount in another currency.
- Searchable Currency List: The app provides a searchable dropdown for selecting source and destination currencies.
- Live Exchange Rates: The app fetches live exchange rates for various currencies.
- Precommit Checks: Husky ensures pre-commit checks, including linting and formatting.
- Responsive Design: Styled components are used to create a responsive and consistent UI.

## Styling

The app uses Styled Components for styling the UI. This approach allows for scoped and reusable styles tied directly to components.

## API Integration

The app uses Axios for making API calls. The API is used to fetch live currency, market and quote data.
