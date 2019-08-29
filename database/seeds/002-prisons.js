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
          user_id: 1
        },
        {
          name: "Arlington County Jail",
          address: "1435 N Courthouse Rd, Arlington, VA 22201",
          user_id: 2
        },
        {
          name: "DeKalb County Jail",
          address: "4425 Memorial Dr, Decatur, GA 30032",
          user_id: 3
        },
        {
          name: "Cobb County Jail",
          address: "1877 County Services Pkwy, Marietta, GA 30008",
          user_id: 4
        }
      ]);
    });
};
