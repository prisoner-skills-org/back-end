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
          prisoner_id: 1
        },
        {
          name: "Structural Engineering",
          prisoner_id: 2
        },
        {
          name: "Kitchen Chef",
          prisoner_id: 2
        },
        {
          name: "Dish Washer",
          prisoner_id: 3
        },
        {
          name: "Laundry",
          prisoner_id: 3
        },
        {
          name: "Spanish Translator",
          prisoner_id: 4
        },
        {
          name: "Electrical Engineer",
          prisoner_id: 4
        },
        {
          name: "Interior painting",
          prisoner_id: 5
        },
        {
          name: "Cleaning",
          prisoner_id: 5
        },
        {
          name: "Structural Engineering",
          prisoner_id: 6
        },
        {
          name: "Kitchen Chef",
          prisoner_id: 6
        }
      ]);
    });
};
