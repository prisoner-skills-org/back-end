exports.up = function(knex) {
  return knex.schema.createTable("prisoners", prisoners => {
    prisoners.increments();

    prisoners
      .string("name", 255)
      .notNullable()
      .unique();

    prisoners.string("gender", 255).notNullable();

    prisoners.boolean("canHaveWorkLeave").defaultTo(false);

    prisoners
      .integer("prison_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("prisons")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("prisoners");
};
