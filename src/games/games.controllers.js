const uuid = require("uuid");
const gameDB = [
    {
            "id": "1234",
             "name": "halo",
             "plataform": "xbox",
            "description": "Juego del jefe maestro"
          }

];

// A.GET--Ver todos los juegos

const getAllGame = () => {
    return gameDB;
  };

//B.POST--Crear o registrar juego
const createGame = (data) => {
  const newGame = {
    id: uuid.v4(),
    name: data.name,
    plataform: data.plataform,
    description: data.description,
  };
  gameDB.push(newGame);
  return newGame;
};


//C.PUT--Editar juego o crear juego
const editGameById = (id,data)=>{
    const index = gameDB.findIndex(item=>item.id===id)
    if (index !== -1) {
        gameDB[index]={
            id:id,
            name:data.name,
            plataform:data.plataform,
            description:data.description
        }
        return gameDB[index]
      } else {
        return createGame(data)
      } 
}



//D.DELETE--Eliminar un juego
const deleteGame=(id)=>{
    const index = gameDB.findIndex(item=>item.id===id)

    if (index !== -1) {
        gameDB.splice(index, 1)
        return true
      } else {
        return false
      } 

    //   return index !==-1
}



module.exports = {
  createGame,
  getAllGame,
  deleteGame,
  editGameById
};
