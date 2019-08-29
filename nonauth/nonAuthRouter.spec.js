const request = require("supertest");
const server = require("../api/server");

//test 1
describe("POST /register", () => {
  it("returns JSON", () => {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: "admin1",
        password: "admin1"
      })
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });
});


  // test 2
  describe("POST /login", () => {
    it("returns status 401 unauthorized", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          username: "nope",
          password: "noooope"
        })
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    });

    //test 3
    it("returns status 200 authorized", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          username: "admin1",
          password: "pass1"
        })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
