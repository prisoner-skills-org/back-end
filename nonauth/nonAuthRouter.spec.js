const request = require("supertest");
const server = require("../api/server");

// REG

describe("POST /register", () => {
  it("successfully registers + returns JSON", () => {
    return request(server)
      .post("/api/register")
      .send({
        username: "admin44",
        password: "pass44"
      })
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });
});

describe("POST /register", () => {
  it("returns 500", () => {
    return request(server)
      .post("/api/register")
      .send({
        username: "admin1",
        password: "pass1"
      })
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
});

// LOGIN

describe("POST /login", () => {
  it("returns 401 unauthorized", () => {
    return request(server)
      .post("/api/login")
      .send({
        username: "nope",
        password: "noooope"
      })
      .then(res => {
        expect(res.status).toBe(401);
      });
  });
});

describe("POST /login", () => {
  it("successful login", () => {
    return request(server)
      .post("/api/login")
      .send({
        username: "admin5",
        password: "pass5"
      })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

// GET USERS

describe("GET /users", () => {
  it("returns 404", () => {
    return request(server)
      .post("/api/users")
      .send({
        username: "nope",
        password: "noooope"
      })
      .then(res => {
        expect(res.status).toBe(404);
      });
  });
});

describe("GET /users", () => {
  it("returns text/html", () => {
    return request(server)
      .post("/api/users")
      .send({
        username: "admin5",
        password: "pass5"
      })
      .then(res => {
        expect(res.type).toMatch("text/html");
      });
  });
});

// GET PRISONS

describe("GET /prisons", () => {
  it("returns 404", () => {
    return request(server)
      .post("/api/prisons")
      .send({
        username: "nope",
        password: "noooope"
      })
      .then(res => {
        expect(res.status).toBe(404);
      });
  });
});

describe("GET /prisons", () => {
  it("returns text/html", () => {
    return request(server)
      .post("/api/prisons")
      .send({
        id: 1,
        name: "DC Central Detention Facility",
        address: "1901 D St SE, Washington, DC 20003",
        user_id: 1
      })
      .then(res => {
        expect(res.type).toMatch("text/html");
      });
  });
});

// GET PRISONERS

describe("GET /prisoners", () => {
  it("returns 404", () => {
    return request(server)
      .post("/api/prisoners")
      .send({
        id: 12,
        name: "Nope",
        gender: "Nope",
        canHaveWorkLeave: 1,
        prison_id: 1
      })
      .then(res => {
        expect(res.status).toBe(404);
      });
  });
});

describe("GET /prisoners", () => {
  it("returns text/html", () => {
    return request(server)
      .post("/api/prisoners")
      .send({
        id: 1,
        name: "Billy Bob",
        gender: "Male",
        canHaveWorkLeave: 1,
        prison_id: 1
      })
      .then(res => {
        expect(res.type).toMatch("text/html");
      });
  });
});

// GET SKILLS

describe("GET /skills", () => {
  it("returns 404", () => {
    return request(server)
      .post("/api/skills")
      .send({
        id: 13,
        name: "Interior painfdfdting",
        prisoner_id: 1
      })
      .then(res => {
        expect(res.status).toBe(404);
      });
  });
});

describe("GET /skills", () => {
  it("returns text/html", () => {
    return request(server)
      .post("/api/prisoners")
      .send({
        id: 1,
        name: "Interior painting",
        prisoner_id: 1
      })
      .then(res => {
        expect(res.type).toMatch("text/html");
      });
  });
});

// POST PRISON

describe("POST /prison", () => {
  it("successfully registers a prison", () => {
    return request(server)
      .post("/api/prison")
      .send({
        name: "United States Penitentiary Atlanta",
        address: "601 McDonough Blvd SE, Atlanta, GA 30315",
        user_id: "5"
      })
      .then(res => {
        expect(res.type).toMatch("text/html");
      });
  });
});

describe("POST /prison", () => {
  it("returns 500", () => {
    return request(server)
      .post("/api/register")
      .send({
        name: "United States Penitentiary Atlanta",
        address: "601 McDonough Blvd SE, Atlanta, GA 30315",
        user_id: "5"
      })
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
});

// POST PRISONERS

describe("POST /prisoners", () => {
  it("successfully registers a prisoner", () => {
    return request(server)
      .post("/api/prisoners")
      .send({
        name: "Jennifer Halloway",
        gender: "Female",
        canHaveWorkLeave: true,
        prison_id: 2
      })
      .then(res => {
        expect(res.type).toMatch("text/html");
      });
  });
});

describe("POST /prisoners", () => {
  it("returns 500", () => {
    return request(server)
      .post("/api/register")
      .send({
        name: "Jennifer Halloway",
        gender: "Female",
        canHaveWorkLeave: true,
        prison_id: 2
      })
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
});

// POST SKILLS

describe("POST /skills", () => {
  it("successfully registers a skill to a prisoner", () => {
    return request(server)
      .post("/api/skills")
      .send({
        name: "Structural Engineering",
        prisoner_id: "3"
      })
      .then(res => {
        expect(res.type).toMatch("text/html");
      });
  });
});

describe("POST /skills", () => {
  it("returns 500", () => {
    return request(server)
      .post("/api/register")
      .send({
        name: "Structural Engineering",
        prisoner_id: "3"
      })
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
});
