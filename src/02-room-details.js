/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 *///return room where dinos are if they are there else return error message 

function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  let dinoInRoom;// place holder

  const dinoName = dinosaurs.find(dinoName => dinoName.name === dinosaurName);//find method to find name of dino & compare to param
  if (dinoName === undefined) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`;
  }
  for (let dinoRoom of rooms) {
    for (let dino of dinosaurs) {
      if (dino.name === dinosaurName && dinoRoom.dinosaurs.includes(dino.dinosaurId)) {
        dinoInRoom = dinoRoom.name;
        return dinoInRoom;
      }
    }
  }
  if (dinoInRoom === undefined) {
    return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
  }

}




/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */
//return array of strings 
//EacH string is name of room connected to input room
//if no roomid return error message 
function getConnectedRoomNamesById(rooms, id) {
  let roomNames = [];
  let roomByName = {};

  for (let room of rooms) {
    roomByName[room.roomId] = room.name;//assigning key value to my empty obj

  }
  if (roomByName[id] === undefined) {//id isnst in obj return unfound
    return `Room with ID of '${id}' could not be found.`;
  }
  let foundRoom = rooms.find(roomsI => roomsI.roomId === id);//
  for (let room of foundRoom.connectsTo) {
    if (roomByName[room] === undefined) {
      return `Room with ID of 'incorrect-id' could not be found.`;
    }
    roomNames.push(roomByName[room]);
  }
  return roomNames;
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
