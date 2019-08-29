exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "admin1",
          password: "pass1"
        },
        {
          username: "admin2",
          password: "pass2"
        },
        {
          username: "admin3",
          password: "pass3"
        },
        {
          username: "admin4",
          password: "pass4"
        }
      ]);
    });
};
