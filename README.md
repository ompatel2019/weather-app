# Weather App

Welcome to the Weather App project! This project is a weather forecasting application that provides real-time weather information for multiple cities. It features a dynamic background that changes based on the weather conditions, enhancing the user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Overview

The Weather App is designed to offer users an engaging way to check weather conditions. By utilizing a weather API, the app provides current weather data and updates the background gradient to reflect the current weather, ensuring a visually appealing interface.

## Features

- **Real-Time Weather Data**: Fetches and displays the current weather for multiple cities.
- **Dynamic Background**: Changes the background gradient based on weather conditions.
- **Search Functionality**: Allows users to search for weather information by city name.
- **Responsive Design**: Fully responsive layout that works on all devices.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ompatel2019/weather-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd weather-app
   ```

3. **Open the `index.html` file in your preferred web browser**:
   ```bash
   open index.html
   ```

## Usage

1. **Viewing Weather Data**:
   - The app will display the current weather data for a default city upon loading.
   - The background gradient will change based on the current weather conditions (e.g., sunny, cloudy, rainy).

2. **Searching for a City**:
   - Use the search bar to enter the name of a city.
   - Press "Enter" or click the search button to fetch and display the weather data for the specified city.

## Project Structure

The project structure is as follows:

```
weather-app/
│
├── css/
│   ├── tailwind.css
│   ├── styles.css
│
├── js/
│   └── main.js
│
├── index.html
│
├── README.md
│
└── assets/
    └── images/
        └── sunny.jpg
        └── cloudy.jpg
        └── rainy.jpg
        └── ...
```

- `index.html`: The main homepage of the application.
- `css/tailwind.css`: The Tailwind CSS file.
- `css/styles.css`: Custom CSS for additional styling.
- `js/main.js`: JavaScript file containing the main functionality of the application.
- `assets/images/`: Directory containing images used as background for different weather conditions.

## Technologies Used

- **HTML**: The structure of the application.
- **CSS**: Styling of the application using Tailwind CSS and custom CSS.
- **JavaScript**: Functionality and interactivity of the application.
- **Weather API**: Fetches real-time weather data for various cities.

---
