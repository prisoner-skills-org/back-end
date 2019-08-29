exports.up = function(knex) {
  return knex.schema.createTable("skills", skills => {
    skills.increments();

    skills
      .string("name", 255)
      .notNullable()

    skills
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
  return knex.schema.dropTableIfExists("skills");
};