const database = require('./knex_config')

module.exports = {

listEquipment() {
    return database('equipment')
},

readEquipment(id){
    return database("equipment").select().where("id", id).first();
},

createEquipment(equipment){
    return database("equipment")
    .insert(equipment)
    .returning("*")
    .then(record => record[0]);
},

updateEquipment(id, wod){
    return database("equipment")
    .update(equipment)
    .where("id", id)
    .returning("*")
    .then(record => record[0]);
},

deleteEquipment(id){
    return database("equipment").delete().where("id", id);
},

};



