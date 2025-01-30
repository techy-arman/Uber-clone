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

## User Profile
Endpoint for retrieving the authenticated user's profile.

### METHOD GET
### ENDPOINT /users/profile

#### Success Response (200 OK)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com"
}
```

#### Authentication
- Requires JWT token in the Authorization header or as a cookie

## User Logout
Endpoint for logging out the authenticated user.

### METHOD GET
### ENDPOINT /users/logout

#### Success Response (200 OK)
```json
{
  "message": "User logged out successfully!"
}
```

#### Authentication
- Requires JWT token in the Authorization header or as a cookie

## Captain Registration
Endpoint for creating new captain accounts.

### METHOD POST
### ENDPOINT /captains/register

#### Request Body
```json
{
  "fullname": {
    "firstname": "Jane",     // required, min 3 chars
    "lastname": "Doe"        // required, min 3 chars
  },
  "email": "jane@example.com", // required, valid email format
  "password": "secret123",     // required, min 6 chars
  "vehicle": {
    "color": "red",           // required, min 2 chars
    "plate": "ABC123",        // required, min 2 chars
    "capacity": 4,            // required, min 1
    "vehicleType": "car"      // required, one of ["motorcycle", "car", "auto"]
  }
}
```

#### Success Response (201 Created)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", 
  "captain": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
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
      "msg": "Firstname must contain at least 3 characters.",
      "param": "fullname.firstname"
    },
    {
      "msg": "Lastname must contain at least 3 characters.",
      "param": "fullname.lastname"
    },
    {
      "msg": "Password must contain at least 6 characters.",
      "param": "password"
    },
    {
      "msg": "Vehicle color must contain at least 2 characters.",
      "param": "vehicle.color"
    },
    {
      "msg": "Vehicle plate must contain at least 2 characters.",
      "param": "vehicle.plate"
    },
    {
      "msg": "Capacity must be at least 1.",
      "param": "vehicle.capacity"
    },
    {
      "msg": "Invalid vehicle type.",
      "param": "vehicle.vehicleType"
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
- `fullname.lastname`: Required, minimum 3 characters
- `email`: Required, valid email format
- `password`: Required, minimum 6 characters
- `vehicle.color`: Required, minimum 2 characters
- `vehicle.plate`: Required, minimum 2 characters
- `vehicle.capacity`: Required, minimum 1
- `vehicle.vehicleType`: Required, one of ["motorcycle", "car", "auto"]

#### Authentication
- Returns JWT token upon successful registration
- Password is hashed using bcrypt before storage

## Captain Login
Endpoint for authenticating existing captains.

### METHOD POST
### ENDPOINT /captains/login

#### Request Body
```json
{
  "email": "jane@example.com", // required, valid email format
  "password": "secret123"      // required, min 6 chars
}
```

#### Success Response (200 OK)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", 
  "captain": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
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
      "msg": "Password must contain at least 6 characters.",
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
- `password`: Required, minimum 6 characters

#### Authentication
- Returns JWT token upon successful login

## Captain Profile
Endpoint for retrieving the authenticated captain's profile.

### METHOD GET
### ENDPOINT /captains/profile

#### Success Response (200 OK)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane@example.com",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Authentication
- Requires JWT token in the Authorization header or as a cookie

## Captain Logout
Endpoint for logging out the authenticated captain.

### METHOD GET
### ENDPOINT /captains/logout

#### Success Response (200 OK)
```json
{
  "message": "Captain logged out successfully!"
}
```

#### Authentication
- Requires JWT token in the Authorization header or as a cookie