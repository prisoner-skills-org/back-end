
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("prisoners_skills")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("prisoners_skills").insert([
        { prisoner_id: 1, skills_id: 1 },
        { prisoner_id: 1, skills_id: 2 },
        { prisoner_id: 2, skills_id: 3 },
        { prisoner_id: 2, skills_id: 1 },
        { prisoner_id: 2, skills_id: 2 }
      ]);
    });
};
