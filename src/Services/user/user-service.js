const userService = {
    login(email, password) {
        if (email === "diegoguilherme.passos@gmail.com" && password === "1234") {
            return true
        } else {
            return false
        }
    }
}

export default userService;