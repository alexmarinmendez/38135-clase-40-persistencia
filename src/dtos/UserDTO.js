export default class UserDTO {
    constructor(user) {
        this.full_name = `${user.first_name} ${user.last_name}`
        this.seniority = user.seniory
        this.languages = user.stack
    }
}