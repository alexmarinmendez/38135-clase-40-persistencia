import UserDTO from "../dtos/UserDTO.js"
import UsersService from "../services/usersService.js"
const usersService = new UsersService()

const getUsers = async(req, res) => {
    let result = await usersService.getUsers()
    let resultsDTO = result.map(item => new UserDTO(item))
    res.send(resultsDTO)
}

const saveUser = async(req, res) => {
    let user = req.body
    let result = await usersService.addUser(user)
    res.send(new UserDTO(result))
}

export default {
    saveUser,
    getUsers
}