# Backend API Documentation

## User Registration
Endpoint for creating new user accounts.

### METHOD POST
### ENDPOINT /users/register

#### Request Body
```json
{
  "fullname": {
    "firstname": "John",     // required, min 3 chars
    "lastname": "Doe"        // optional, min 3 chars if provided
  },
  "email": "john@example.com", // required, min 5 chars
  "password": "secret123"      // required, min 5 chars
}
```

#### Success Response (201 Created)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", 
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email.",
      "param": "email"
    },
    {
      "msg": "Firstname must contain atleast 3 characters.",
      "param": "fullname.firstname"
    },
    {
      "msg": "Password must contain atleast 5 characters.",
      "param": "password"
    },
    {
      "msg": "All fields are required!",
      "param": "general"
    }
  ]
}
```

#### Validation Rules
- `fullname.firstname`: Required, minimum 3 characters
- `email`: Required, valid email format, minimum 5 characters
- `password`: Required, minimum 5 characters
- `fullname.lastname`: Optional, minimum 3 characters if provided

#### Authentication
- Returns JWT token upon successful registration
- Password is hashed using bcrypt before storage

## User Login
Endpoint for authenticating existing users.

### METHOD POST
### ENDPOINT /users/login

#### Request Body
```json
{
  "email": "john@example.com", // required, valid email format
  "password": "secret123"      // required, min 5 chars
}
```

#### Success Response (200 OK)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", 
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email.",
      "param": "email"
    },
    {
      "msg": "Password must contain atleast 5 characters.",
      "param": "password"
    }
  ]
}
```

#### Error Response (401 Unauthorized)
```json
{
  "message": "Invalid email or password!"
}
```

#### Validation Rules
- `email`: Required, valid email format
- `password`: Required, minimum 5 characters

#### Authentication
- Returns JWT token upon successful login