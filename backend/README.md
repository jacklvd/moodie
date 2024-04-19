# Back End Setup Instructions

To set up the back end of the application, follow these steps:

1. Open a new terminal.
2. Navigate to the `backend` directory using the command `cd backend`.
3. Install the required dependencies by running `pip install -r requirements.txt`.
4. Navigate to the `server_fer` directory using the command `cd server_fer`.
5. Initiate the back end server by running `python manage.py runserver`.

# Reference

We extend our heartfelt gratitude to Justin Shenk, whose contributions made this project possible. His exceptional work on the pretrained model is commendable. You can find his repository [here](https://github.com/justinshenk/fer).

## API Endpoints

### User Registration:

- **Endpoint:** [http://localhost:8000/account/register/](http://localhost:8000/account/register/)
- **Description:** This API allows users to create new accounts by providing their username, email, password, and password confirmation (`password2`). It ensures password validation by checking if `password == password2`.

### User Login:

- **Endpoint:** [http://localhost:8000/account/login/](http://localhost:8000/account/login/)
- **Description:** Users can authenticate themselves by providing their username and password. The API returns an authentication token upon successful login.

### User Logout:

- **Endpoint:** [http://localhost:8000/account/logout/](http://localhost:8000/account/logout/)
- **Description:** This API facilitates user account logout.

### Image Processing:

- **Endpoint:** [http://localhost:8000/ferapp/post/](http://localhost:8000/ferapp/post/)
- **Description:** Users can submit images to be processed by facial expression recognition AI.

### Emotion Detection:

- **Endpoint:** [http://localhost:8000/ferapp/post/create](http://localhost:8000/ferapp/post/create)
- **Description:** This API utilizes facial expression recognition AI to generate emotions based on the faces detected in the submitted image.

Feel free to explore these endpoints for further interaction with the application.
