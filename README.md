# Prisoner Skills - Back-End

---

## API Documentation

#### NON-AUTH ENDPOINTS

| Links                                   | Endpoints            |
| --------------------------------------- | -------------------- |
| [POST Registration](#post-registration) | `/api/auth/register` |
| [POST Login](#post-login)               | `/api/auth/login`    |

### [POST] Registration

#### URL:

Payload: an object with the following, email is required for login.

```
{
	"username": "janedoe@gmail.com",
	"password": "DoePass"
}
```

Returns: an object with user id, username, password, and email. Password will be hashed, ignore it 😄

```
{
    "id": 1,
    "username": "janedoe@gmail.com",
    "password": "hashed"
}
```

### [POST] Login

#### URL:

Payload: an object with the following, email is optional.

```
{
	"username": "janedoe@gmail.com",
	"password": "DoePass"
}
```

Returns: an object with a message and authentication token. Save this token to local storage(or similar), this token will be required for all CRUD requests below.

```
{
    "message": "Welcome Jane!",
    "token": "keeping it secret!"
}
```

---

---

#### AUTH ENDPOINTS

#### All Endpoints below require a token!

| Links                                             | Endpoints           |
| ------------------------------------------------- | ------------------- |
| [GET All Prisoners](#get-prisoners)               | `/api/prisoners`    |
| [GET Prisoner by ID](#get-prisoner-by-id)         | `/api/users/:id`    |
| [GET Prisons](#get-prisons)                       | `/api/prisons`      |
| [GET Prisons by ID](#get-prisons-log-by-id)       | `/api/prisons/:id`  |
| [GET Skills](#get-skills)                         | `/api/skills`       |
| [GET Skills by ID](#get-skills-by-id)             | `/api/skills/:id`   |
| [POST Skills](#post-skills)                       | `/api/skills`       |
| [POST Prisoners](#post-prisoners)                 | `/api/prisoners`    |
| [POST Prisons](#post-prisons)                     | `/api/prisons`      |
| [PUT Skills(Update) By ID](#put-skills-by-id)     | `/api/skills/:id`   |
| [PUT Prisoner(Update) By ID](#put-prisoner-by-id) | `/api/prisoner/:id` |
| [PUT Prisons(Update) By ID](#put-prisons-by-id)   | `/api/prisons/:id`  |
| [DEL Skills By ID](#del-skills-by-id)             | `/api/skills/:id`   |
| [DEL Prisoner by ID](#del-prisoner-by-id)         | `/api/prisoner/:id` |
| [DEL Prison by ID](#del-prison-by-id)             | `/api/prison/:id`   |

### [GET] Prisons

#### URL:

```
[
	{
		id: integer,
		username: string,
		address: string,
		name: string
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
	id: integer,
	address: string,
	name: string,
	prisoners: [
		{
			id: integer,
			name: string,
			canHaveWorkLeave: boolean //0 - false, 1 - true
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
	username: string,
	address: string,
	name: string,
	password: string
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

### [GET] Prisoners

#### URL:

```
[
	{
		id: integer,
		name: string,
		prison_id: integer,
		canHaveWorkLeave: boolean //0 - false, 1 - true
	},
	.
	.
	.
]
```

---

### [GET] Prisoners By ID

#### URL:

```
{
	id: integer,
	name: string,
	prison_id: integer,
	canHaveWorkLeave: boolean //0 - false, 1 - true
	skills: [
		{
			id: integer,
			name: string
		},
		.
		.
		.
	]
}
```

---

### [POST] Prisoners

#### URL:

```
{
	name: string,
	prison_id: integer
}
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
   {
	name: string,
	prison_id: integer,
	canHaveWorkLeave: boolean // true or false
}
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

### [GET] Skills

#### URL:

```
[
	{
		id: integer,
		name: string
	},
	.
	.
	.
]
```

### [GET] Skills By ID

#### URL:

```
{
	id: integer,
	name: string
}
```

### [POST] Skills By ID

#### URL:

```
{
	name: string,
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

### [DEL] Skills by ID

#### URL:

Returns: 1 means true

```
{
    "removed": 1
}
```

---
