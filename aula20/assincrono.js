const axios = require("axios");

const buscarUsuarioGitHub = async () => {
    let githubUsers = await axios.get('https://api.github.com/users/aluiziocatao');

    console.log(githubUsers)
}

buscarUsuarioGitHub()