exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("skills")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("skills").insert([
        {
          skill: "Interior painting",
          prisoner_id: 1
        },
        {
          skill: "Cleaning",
          prisoner_id: 2
        }
      ]);
    });
};
