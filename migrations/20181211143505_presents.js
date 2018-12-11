'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('presents', (table) => {
    table.increments()
    table.string('description').notNullable()
    table.integer('recipient').unsigned()
    table.foreign('recipient').references('users.id')
    table.timestamps(true, true)
  }
)}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('presents')
}
