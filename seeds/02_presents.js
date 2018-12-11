exports.seed = function(knex, Promise) {

 return knex('presents').del()
   .then(function () {
     return knex('presents').insert([
       {id: 1, description:'piano', recipient: 1 },
       {id: 2, description:'bike', recipient: 1},
       {id: 3, description:'rc car', recipient: 2},
       {id: 4, description:'ipad mini', recipient: 2}
     ])
   })
   .then(() => {
     return knex.raw(
       "SELECT setval('presents_id_seq', (SELECT MAX(id) FROM presents));"
     )
   })
}
