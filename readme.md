# Feeback-be (backend repository)

This service serves as the backend to handle the feedback/review system for the [feedback_fe](https://github.com/faizkautsarr/feedback_fe) repo

## Prequisites

- Node.js v18.18.2

## How to run

To run this project locally:

- Make sure you have already clone this repo

- Go to this repo directory

  ```bash
  cd {PATH}feedback-be
  ```

- open this repo via your code editor

- Make sure you already installed the required node version

- Before install and run this project, we need to make sure that you configured the network correctly. Go to `index.ts` file and set the ip according to your network IP.

  ```bash
  app.listen(port, "{YOUR_NETWORK_IP}", () => {
  console.log(`Server is running on {YOUR_NETWORK_IP}:${port}`);
  });
  ```

- This services will run on `7777` port (default), so make sure that port is available on your device or you can configure to the another port

- Now you can install the package before run the project

  ```bash
  npm install
  ```

- After the installation complete you can run the project

  ```bash
  npm start
  ```

- You can make sure the project is successfully by checking it through directly hit it's endpoint, example:

  ```bash
  http://{YOUR_NETWORK_IP}:7777

  ```

  will return

  ```bash
  {"success":true,"message":"Welcome to the Feedback API","data":"author, faiz k."}

  ```

## API Reference

### Create Feedback

Create a new feedback entry.

- **URL:** `/api/feedback`
- **Method:** `POST`

#### Request Body

The request body should be a JSON object with the following properties:

- `name` (string, required): The name of the person providing feedback.
- `petName` (string, required): The name of the pet associated with the feedback.
- `rating` (number, required): The rating given, should be a number between 1 and 5.
- `comment` (string, optional): Additional comments or feedback.

Example request body:

```json
{
  "name": "John Doe",
  "petName": "Fluffy",
  "rating": 4,
  "comment": "Great service!"
}
```

### Get Feedback

Retrieve feedback data.

- **URL:** `/api/feedback`
- **Method:** `GET`

#### Response

- **Status Code:** 200 OK
- **Response Body:** JSON array containing feedback data.

Example response body:

```json
{
  "success": true,
  "message": "Feedback data retrieved successfully.",
  "data": [
    {
      "name": "John Doe",
      "petName": "Fluffy",
      "rating": 4,
      "comment": "Great service!"
    },
    {
      "name": "Jane Smith",
      "petName": "Buddy",
      "rating": 5,
      "comment": "Excellent experience!"
    }
  ]
}
```

## Authors

- [@octokatherine](https://www.github.com/faizkautsarr)
