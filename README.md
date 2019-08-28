# Prisoner Skills - Back-End

---

## API Documentation

#### NON-AUTH ENDPOINTS

| Links                                   | Endpoints            |
| --------------------------------------- | -------------------- |
| [POST Registration](#post-registration) | `/api/auth/register` |
| [POST Login](#post-login)               | `/api/auth/login`    |
| [GET Prisons](#get-prisons)               | `/api/prisons`    |
| [GET Prisons by ID](#get-prisons-by-id)               | `/api/prisons/:id`    |
| [GET Prisoners](#get-prisoners)               | `/api/prisoners`    |
| [GET Prisoners by ID](#get-prisoners-by-id)               | `/api/prisoners/:id`    |
| [GET Prisons](#get-prisons)               | `/api/prisons`    |
| [GET Skills by Prisoner ID](#get-prisoners-by-skill)               | `/api/prisoners/:id/skills`    |


#### AUTH ENDPOINTS

#### All Endpoints below require a token!

| Links                                             | Endpoints           |
| ------------------------------------------------- | ------------------- |
| [POST Prisoners](#post-prisoners)               | `/api/prisoners`    |
| [PUT Prisoner by ID](#put-prisoner)         | `/api/prisoners/:id`    |  |
| [DEL Prisoner by ID](#del-prisoner)         | `/api/prisoners/:id`    |  |
| [POST Prison](#post-prisons)       | `/api/prisons/`  |
| [PUT Prison by ID](#put-prison)                         | `/api/prisons/:id`       |
| [DEL Prison by ID](#del-prison)         | `/api/prison/:id`    |  |
| [POST Skills by Prisoner ID](#post-skills-by-id)             | `/api/prisoners/:id/skills`   |
| [PUT Skills by Pirsoner ID](#put-skills-by-id)                       | `/api/prisoners/:id/skills`       |
| [DEL Skills by Prisoner ID](#del-skills-by-id)                 | `/api/prisoners/:id/`    |

### [POST] Registration

#### URL: https://prisoners-bw.herokuapp.com/api/auth/register


```
{
	"username": "janedoe1",
	"password": "DoePass"
}
```

Returns id, username, and hashed password: 

```
{
    "id": 1,
    "username": "janedoe1",
    "password": "hashed"
}
```

### [POST] Login

#### URL: https://prisoners-bw.herokuapp.com/api/auth/login


```
{
	"username": "janedoe1",
	"password": "DoePass"
}
```
Returns:

```
{
    "message": "Welcome Jane!",
    "token": "keeping it secret!"
}
```

---
### [GET] Prisons

#### URL:

```
[
	{
		prison_id: integer,
		name: string,
		address: string
	},
	.
	.
	.
]
```


---


### [GET] Prisons By ID

#### URL:

```
   {
	prison_id: integer,
	name: string,
	address: string
	prisoners: [
		{
			prisoner_id: integer,
			name: string,
			gender: string,
			prison_id: integer,
			canHaveWorkLeave: boolean //0 - false, 1 - true,
			skills: [ 
				skill: string,
				skill: string,
				skill: string
			]

		},
		.
		.
		.
	]
}
```

---

### [PUT] Prisons By ID

#### URL:

```
{
	prison_id: integer,
	name: string,
	address: string
}
```

---

### [DEL] Prisons by ID

#### URL:

Returns: 1 means true

```
{
    "removed": 1
}
```

---

### [GET] Prisoners by ID

#### URL:

```
[
	{
			prisoner_id: integer,
			name: string,
			gender: string,
			prison_id: integer,
			canHaveWorkLeave: boolean //0 - false, 1 - true,
			skills: [ 
				skill: string,
				skill: string,
				skill: string
			]
	}
	.
	.
	.
]
```

---

### [GET] Prisoners By ID

#### URL:

```
[
	{
			prisoner_id: integer,
			name: string,
			gender: string,
			prison_id: integer,
			canHaveWorkLeave: boolean //0 - false, 1 - true,
			skills: [ 
				skill: string,
				skill: string,
				skill: string
			]
	}
	.
	.
	.
]
```

---

### [POST] Prisoners

#### URL:

```
[
	{
			name: string,
			gender: string,
			prison_id: integer,
			canHaveWorkLeave: boolean //0 - false, 1 - true,
			skills: [ 
				skill: string,
				skill: string,
				skill: string
			]
	}
	.
	.
	.
]
```

Returns:

```
{
    prisoner_id: integer
}
```

---

### [PUT] Prisoners by ID

#### URL:

```
[
	{
			prisoner_id: integer,
			name: string,
			gender: string,
			prison_id: integer,
			canHaveWorkLeave: boolean //0 - false, 1 - true,
			skills: [ 
				skill: string,
				skill: string,
				skill: string
			]
	}
	.
	.
	.
]
```

Returns:

```
{
   integer: //0 fail, 1 success
}
```

---

### [DEL] Prisoners By ID

#### URL:

Returns: 1 means true

```
{
    "removed": 1
}
```

---


### [GET] Skills By Prisoner ID

#### URL:

```
{
	prisoner_id: integer,
	skills: [ 
				skill: string,
				skill: string,
				skill: string
			]
}
```

### [POST] Skills By ID

#### URL:

```
{
	skill: string,
	prisoner_id: integer
}
```

Returns:

```
{
    "message": "Update Successful!"
}
```

---

### [DEL] Prisoner By ID

#### URL:

Returns: 1 means true

```
{
    "removed": 1
}
```

---

### [DEL] Prison By ID

#### URL:

Returns: 1 means true

```
{
    "removed": 1
}
```

---

### [DEL] Skills by Prisoner ID

#### URL:

Returns: 1 means true

```
{
    "removed": 1
}
```

---
