# Simply run this script to install the backend dependencies
# and start the backend server
# You need to have nodejs and npm installed
# https://nodejs.org/en/download/
## Install dependencies
```
npm install
```
## Start the server
```
npm run build && npm run dev 

```
## Routes:-  
### 1. /api/register/ 
#### Method: 
```  POST   ```
#### Data:-
```
{
				"name": "string",
				"email": "string",
				"Phone": "string",
				"age": "number",
				"gender":"string",
				"password": "string"
}
```
### Response:-
```
{
				"message": "User registered successfully",
				"status": 200
}
```
### 2. /api/login/
#### Method: 
```  POST   ```
#### Data:-
```
{
				"email": "string",
				"password": "string"
}
```
### Response:-
```
{
				"message": "User logged in successfully",
				"barierToken":"Lhkhkugjfjfhgdgfdgsgrsgrsgfrsfgfgfbdndhgdytdtyrdertrsryty",
				"status": 200
}
```


### 3. api/mop/create
#### Method: 
```  POST   ```
#### Data:-
```
{
  "email": "salmankhan@gmail.com",
  "pregnency": "No",
  "smoking": "sometimes",
  "alcoholUse": "76",
  "concurrentMedicalConditions": {
    "nameOfMedicalConditions": [
      "fever",
      "cholera"
    ],
    "diagonisisDateStart": "20-12-2002"
  },
  "pastMedicalConditions": {
    "nameOfMedicalConditions": [
      "fever",
      "cholera"
    ],
    "diagonisisDateStart": "20-12-2002",
    "diagonisisDateEnd": "23-11-2203"
  },
  "pastMedications": [
    {
      "date": "23-10-2202",
      "details": {
        "nameOfMedicinalProduct": "abc",
        "composition": "def",
        "dose": "ghi",
        "purposeOfUse": "requ",
        "startDate": "req",
        "stopDate": "requ",
        "frequency": "re",
        "usageRecommendations": "req"
      }
    }
  ]
}
```
### Response:-
```
{
	"message": "MOP has been created for user email",
	"status": 200
}
```
