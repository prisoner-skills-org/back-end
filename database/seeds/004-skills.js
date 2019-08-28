exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("skills")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("skills").insert([
        {
          name: "Interior painting",
          prisoner_id: 1
        },
        {
          name: "Cleaning",
          prisoner_id: 2
        }
      ]);
    });
};
