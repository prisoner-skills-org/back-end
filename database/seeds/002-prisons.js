exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("prisons")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("prisons").insert([
        {
          name: "DC Central Detention Facility",
          address: "1901 D St SE, Washington, DC 20003",
          user_id: 2
        },
        {
          name: "Arlington County Jail",
          address: "1435 N Courthouse Rd, Arlington, VA 22201",
          user_id: 3
        }
      ]);
    });
};
