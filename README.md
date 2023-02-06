# TigerPark

### TigerPark is a backend API made to supply data relating to Clemson University Parking lots

This program deals with the parking data of multiple different parking lots and the specific spaces inside them. Depeding on the request made, the program
will return data in a variety of different ways depending on what the data is.


## Endpoints 

### `{{host}}/newuser`
adds a new user based on the username and password passed in, if the user doesnt already exist
salt is added to password and then password is hashed for increased security

### `{{host}}/auth`
checks if the username and password that are passed in align with a user stored in the databse

### `{{host}}/logout`
takes the user out of the list of currently logged in users 

### `{{host}}/lots/allLotName`
returns all lots stored in the database

### `{{host}}/lots/reserve`
uses the passed in info to verify that the user is currently logged in
if the user is valid the lot and spot passed in will be used to tell the database that the spot is reserved for the time period passed in

### `{{host}}/lots/available`
sorts through all available lots, and returns only the lots and spots in them that are avlaible during the time frame specified

### `{{host}}/lots/all`
returns all information of all lots and the information stored inside of them


