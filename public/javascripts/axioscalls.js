function getAllUsers(){
  return axios.get('/users')
}

function createNewUser(user){
  return axios.post('/users', user)
}

function deleteUser(userId){
  return axios.delete(`/users/${userId}`)
}
