# Nutrition Calculation API

This is a simple Express.js server that provides an API endpoint for calculating nutrition details based on the provided ingredients. It uses the Edamam API to fetch the nutrition data.

## Prerequisites

Before running this application, make sure you have the following prerequisites:
    -Node.js installed on your machine
    -Edamam API credentials (APP_ID and APP_KEY)

## Installation

1. Clone the repository:
    
    ```
    git clone <https://github.com/your-username/your-repository.git>
    ```
    
2. Install the dependencies:
    
    ```php
    npm install
    ```
    
3. Set up environment variables:
    - Create a **`.env`** file in the root directory.
    - Add the following variables to the **`.env`** file:
    
    ```php
    APP_ID=your_edamam_app_id
    APP_KEY=your_edamam_app_key
    ```
    
    Replace **`your_edamam_app_id`** and **`your_edamam_app_key`** with your actual Edamam API credentials.
    

## **Usage**

1. Start the server:
    
    ```php
    npm start
    ```
    
    This will start the server on **`http://localhost:3000`**.
    
2. Make a POST request to the **`/calculate-nutrition`** endpoint with the following JSON payload:
    
    ```php
    {
      "title": "Recipe Title",
      "ing": [
        "1 cup rice",
        ...
      ]
    }
    ```
    
3. The server will fetch the nutrition details from the Edamam API and return the total nutrients in the response.

```markdown
## License

This project is licensed under the [MIT License](LICENSE).
```
