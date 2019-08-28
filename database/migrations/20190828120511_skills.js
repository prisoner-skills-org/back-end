exports.up = function(knex) {
  return knex.schema.createTable("skills", skills => {
    skills.increments();

    skills
      .string("skill", 255)
      .notNullable()
      .unique();

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
