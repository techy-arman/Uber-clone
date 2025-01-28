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

#### Response Body
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
}{
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