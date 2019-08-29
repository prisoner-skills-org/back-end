exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("prisoners")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("prisoners").insert([
        {
          name: "Billy Bob",
          gender: "Male",
          canHaveWorkLeave: true,
          prison_id: 1
        },
        {
          name: "Sally Mason",
          gender: "Female",
          canHaveWorkLeave: false,
          prison_id: 2
        },
        {
          name: "Mary Smith",
          gender: "Female",
          canHaveWorkLeave: true,
          prison_id: 3
        },
        {
          name: "Alex Davidson",
          gender: "Male",
          canHaveWorkLeave: true,
          prison_id: 1
        },
        {
          name: "Charle O'Hare",
          gender: "Male",
          canHaveWorkLeave: true,
          prison_id: 2
        },
        {
          name: "Christopher Donald",
          gender: "Male",
          canHaveWorkLeave: false,
          prison_id: 3
        }
      ]);
    });
};
