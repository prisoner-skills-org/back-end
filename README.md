# Prisoner Skills - Back-End

---

## API Documentation

#### NON-AUTH ENDPOINTS

| Links                                                | Endpoints                   |
| ---------------------------------------------------- | --------------------------- |
| [POST Registration](#post-registration)              | `/api/auth/register`        |
| [POST Login](#post-login)                            | `/api/auth/login`           |
| [GET Prisons](#get-prisons)                          | `/api/prisons`              |
| [GET Prisons by ID](#get-prisons-by-id)              | `/api/prisons/:id`          |
| [GET Prisoners](#get-prisoners)                      | `/api/prisoners`            |
| [GET Prisoners by ID](#get-prisoners-by-id)          | `/api/prisoners/:id`        |
| [GET Skills](#get-skills)                            | `/api/skills`               |
| [GET Skills by Prisoner ID](#get-prisoners-by-skill) | `/api/prisoners/:id/skills` |

#### AUTH ENDPOINTS

#### All Endpoints below require a token!

| Links                                       | Endpoints            |
| ------------------------------------------- | -------------------- |
| [POST Prisoners](#post-prisoners)           | `/api/prisoners`     |
| [PUT Prisoner by ID](#put-prisoner)         | `/api/prisoners/:id` |  |
| [DEL Prisoner by ID](#del-prisoner)         | `/api/prisoners/:id` |  |
| [POST Prison](#post-prisons)                | `/api/prisons/`      |
| [PUT Prison by ID](#put-prison)             | `/api/prisons/:id`   |
| [DEL Prison by ID](#del-prison)             | `/api/prison/:id`    |  |
| [POST Skills](#post-skills)                 | `/api/skills`        |
| [PUT Skills by Skill ID](#put-skills-by-id) | `/api/skills/:id`    |
| [DEL Skills by Skill ID](#del-skills-by-id) | `/api/skills/:id/`   |

### [POST] Registration

#### URL: https://prisoners-bw.herokuapp.com/api/register

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

#### URL: https://prisoners-bw.herokuapp.com/api/login

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

#### URL: https://prisoners-bw.herokuapp.com/api/prisons/

```
[
	{
		id: integer,
		name: string,
		address: string,
		user_id: string // the admin assigned to the prison
	},
	.
	.
	.
]
```

---

### [GET] Prisons By ID

#### URL: https://prisoners-bw.herokuapp.com/api/prisons/1

```
   {
	id: integer,
		name: string,
		address: string,
		user_id: string
   }
		.
		.
		.
	]
}
```

---

### [PUT] Prisons By ID

#### URL: https://prisoners-bw.herokuapp.com/api/prisons/1

Requires the following in JSON body:

```
{
	name: string,
		address: string,
		user_id: string
}
```

---

### [DEL] Prisons by ID

#### URL: https://prisoners-bw.herokuapp.com/api/prisons/1

Returns: 1 means true

```
{
    "removed": {
		prison object
	}
}
```

---

### [GET] Prisoners by ID

#### URL: https://prisoners-bw.herokuapp.com/api/prisoners/1

```
[
	{
	 "id": 4,
  "name": "Morgan Ensley",
  "gender": "Female",
  "canHaveWorkLeave": 1,
  "prison_id": 1

	},
	.
	.
	.
]
```

---

### [GET] Skills By Prisoners ID

#### URL: https://prisoners-bw.herokuapp.com/api/prisoners/1/skills

```
{
  "id": 2,
  "name": "Sally Mason",
  "gender": "Female",
  "canHaveWorkLeave": 0,
  "prison_id": 2,
  "skills": [
    {
      "id": 2,
      "name": "Cleaning",
      "prisoner_id": 2
    },
    {
      "id": 3,
      "name": "Dancing",
      "prisoner_id": 2
    }
  ]
}

```

---

### [POST] Prisoners

#### URL: https://prisoners-bw.herokuapp.com/api/auth/prisoners/

Required in JSON body:

```

{
 "name" : "John Smith",
	"gender" : "Male",
	"canHaveWorkLeave" : true,
	"prison_id" : 2
}
```

Returns:

```
{
     "id": 4,
  "name": "John Smith",
  "gender": "Male",
  "canHaveWorkLeave": 1,
  "prison_id": 2
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
