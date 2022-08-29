const res = require("express/lib/response");
const userControlers = require("./games.controllers");

//A.GET--Ver todos los juegos
const getAll=(req,res)=>{
    const data= userControlers.getAllGame()
    return res.status(200).json({items:data.length,games:data})
}


//B.POST--REGISTRAR juego
const register = (req, res) => {
  // {
  //     "name": "spiderman",
  //     "plataform": "play",
  //     "description": "Juego de spiderman"
  //   }

//   {
//     "name": "mario",
//     "plataform": "switch",
//     "description": "Juego de mario"
//   }
  const data = req.body;

  if (!data) {
    return res.status(400).json({ message: "Faltan datos" });
  } else if (!data.name || !data.plataform || !data.description) {
    return res.status(400).json({ message: "Faltan campos por completar" });
  } else {
    const response = userControlers.createGame(data);
    return res.status(201).json({
      message: `Usuario creado con el id siguiente: ${response.id}`,
      user: response,
    });
  }
};

//C.PUT--EDITAR  juego

const edit= (req,res)=>{
    const id= req.params.id
    const data=req.body

    if(
        !data.name||
        !data.plataform||
        !data.description
    ){
        return res.status(400).json({
            message:'Todos los campos deben de estar llenos'
        }
      )
    }
    else{
        const response=userControlers.editGameById(id,data)
        return res.status(200).json({
            message:'Usuario editado con exito',
            game: response
        })
    }

}


//D.DELETE--Eliminar un juego

// {
// "id": ""
// }

const deleteById=(req,res)=>{
const id=req.params.id
const data=userControlers.deleteGame(id)


    if(data){
        return res.status(204).json()
    }
    else{
        return res.status(401).json({message:'Id invalido'})
    }

}



module.exports = {
    getAll,
  register,
  deleteById,
  edit
};
