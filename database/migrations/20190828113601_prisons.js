exports.up = function(knex) {
  return knex.schema.createTable("prisons", prisons => {
    prisons.increments();

    prisons
      .string("name", 255)
      .notNullable()
      .unique();

    prisons
    .string("address", 255).notNullable();

  prisons
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("prisons");
};
