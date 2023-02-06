Brandon Marks brandonmarkssc@gmail.com


TigerPark is a backend API made to supply data relating to Clemson University Parking lots


This program deals with the parking data of multiple different parking lots and the specific spacis inside them. Depeding on the request made, the program
will return data in a variety of differnet ways depending on what the data is.




List of Endpoints: 

/{{host}/newuser 
adds a new user based on the username and password passed in if the user doesnt already exist
salt is added to password and then hashed for increased security

/{{host}/auth
checks if the username and password that are passed in align with a user stored in the databse

/{{host}/logout
takes the user out of the list of currently logged in users 

/{{host}/lots/allLotName
returns a json file of all lots stored in the database

/{{host}/lots/reserve
uses the passed in info to veryify that the user is currently logged in
if the user is valid the lotName and spot passed in will be used to tell the database that the spot is reserved for the time period passed in

/{{host}/lots/avaliable
sorts through all avaliable lots and returns only the lots and spots in them that are avlaible during the time frame specified

/{{host}/lots/all
returns all information of all lots and the informations stored inside of them


