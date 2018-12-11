function getAllUsers(){
  return axios.get('/users')
}

function createNewUser(user){
  return axios.post('/users', user)
}
