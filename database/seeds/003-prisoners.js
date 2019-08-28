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
        }
      ]);
    });
};
