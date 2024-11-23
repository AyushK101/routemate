# Routemate


![Logo]()


Description



## Acknowledgement
-

## TechStack
- 

## Api reference

<details>
<summary>open</summary>
<br>

```JSON
{
	"info": {
		"_postman_id": "5eb9dd3e-3dcb-4ed3-b79e-6a8b95ffbc91",
		"name": "routemate",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "31098591"
	},
	"item": [
		{
			"name": "user",
			"item": [
				{
					"name": "signup",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"username\": \"ayush\",\n    \"email\": \"test2@gmail.com\",\n    \"password\": \"password\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/user/signup",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"user",
								"signup"
							]
						}
					},
					"response": []
				},
				{
					"name": "login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "test2@gmail.com",
									"type": "text"
								},
								{
									"key": "password",
									"value": "password",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/user/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"user",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "logout",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/user/logout",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"user",
								"logout"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "socialacc211@gmail.com",
									"type": "text"
								},
								{
									"key": "password",
									"value": "password",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/user/delete",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"user",
								"delete"
							]
						}
					},
					"response": []
				}
			],
			"description": "user related APIs"
		},
		{
			"name": "routemate APIs",
			"item": [
				{
					"name": "add",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "ayush",
									"type": "text"
								},
								{
									"key": "source",
									"value": "gaziabad",
									"type": "text"
								},
								{
									"key": "destination",
									"value": "kanpur",
									"type": "text"
								},
								{
									"key": "travelDate",
									"value": "2024-11-23",
									"type": "text"
								},
								{
									"key": "gender",
									"value": "female",
									"type": "text"
								},
								{
									"key": "year",
									"value": "1",
									"type": "text"
								},
								{
									"key": "mode",
									"value": "train",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/rm/add",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"rm",
								"add"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "_id",
									"value": "6741f5ee6b50e27e39a320ae",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/rm/delete",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"rm",
								"delete"
							]
						}
					},
					"response": []
				},
				{
					"name": "find",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "source",
									"value": "gaziabad",
									"type": "text"
								},
								{
									"key": "destination",
									"value": "kanpur",
									"type": "text"
								},
								{
									"key": "travelDate",
									"value": "2024-11-23",
									"type": "text"
								},
								{
									"key": "gender",
									"value": "all",
									"type": "text"
								},
								{
									"key": "mode",
									"value": "all",
									"type": "text"
								},
								{
									"key": "year",
									"value": "all",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/rm/find",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"rm",
								"find"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}
```
</details>

## Installation

Install my project with npm 

## Run Locally


## Contributing
- contributing is always welcome 
> [contribute](https://github.com/AyushK101/routemate/blob/master/CONTRIBUTING.md)



## Deployment
- 

# Features
- 

# Feedback
If you have any feedback, please reach out to us at socialacc211@gmail.com

## 🚀 About Me
I'm a full stack developer...
  
- [about_me](https://github.com/AyushK101)


## License

[MIT](https://github.com/AyushK101/routemate/blob/master/LICENSE)



## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

