exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('equipment').del()
      .then(function () {
        // Inserts seed entries
        return knex('equipment').insert([
          {
            id: 1,
            park_name: "Wash Park",
            equipment_available_1: "pull-up bars",
            equipment_available_2: "park bench",
            equipment_available_3: "playground with jungle gym",
            equipment_available_4: "Running Trails",
            equipment_available_5: "",
            equipment_available_6: "",
            equipment_available_7: "",
            equipment_available_8: "",
            equipment_available_9: "",
            equipment_available_10: "",
            source: "Graham Carssow"
            },
            {
            id: 2,
            park_name: "Prairie Meadows Park",
            equipment_available_1: "park bench",
            equipment_available_2: "jungle gym",
            equipment_available_3: "Running trails",
            equipment_available_4: "",
            equipment_available_5: "",
            equipment_available_6: "",
            equipment_available_7: "",
            equipment_available_8: "",
            equipment_available_9: "",
            equipment_available_10: "",
            source: "Graham Carssow"
            },  

        ]).then(() => knex.raw('ALTER SEQUENCE equipment_id_seq RESTART WITH 3;'));
      });
  };