/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('id')
    table.integer('videoGames_id').references('videoGames.id')
    table.date('date_posted').defaultTo(knex.fn.now())
    table.string('comment')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('comments')
}
