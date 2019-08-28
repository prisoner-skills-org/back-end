exports.up = function(knex) {
  return knex.schema.createTable("prisoners_skills", prisoners_skills => {
    prisoners_skills.increments();

    prisoners_skills
      .integer("skills_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("skills")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    prisoners_skills
      .integer("prisoner_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("prisoners")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("prisoners_skills");
};
