exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('equipment').del()
      .then(function () {
        // Inserts seed entries
        return knex('equipment').insert([
          {
            id: 1,
            park_name: "Wash Park",
            equipment_available_1: "Pull-up bars",
            equipment_available_2: "Park bench",
            equipment_available_3: "Playground with jungle gym",
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
            equipment_available_1: "Park bench",
            equipment_available_2: "Jungle gym",
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
            {
            id: 3,  
            park_name: "Prairie Meadows Park",
            equipment_available_1: "Park bench",
            equipment_available_2: "Jungle gym",
            equipment_available_3: "Running trails",
            equipment_available_4: "Climbing Wall",
            equipment_available_5: "",
            equipment_available_6: "",
            equipment_available_7: "",
            equipment_available_8: "",
            equipment_available_9: "",
            equipment_available_10: "",
            source: "Graham Carssow"
            },
            {
              id: 4,  
              park_name: "Central Park",
              equipment_available_1: "Park bench",
              equipment_available_2: "Jungle gym",
              equipment_available_3: "Running trails",
              equipment_available_4: "Hills for Sprints",
              equipment_available_5: "Soccer Field",
              equipment_available_6: "",
              equipment_available_7: "",
              equipment_available_8: "",
              equipment_available_9: "",
              equipment_available_10: "",
              source: "Graham Carssow"
              }
        ]).then(() => knex.raw('ALTER SEQUENCE equipment_id_seq RESTART WITH 5;'));
      });
  };