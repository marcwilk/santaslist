function getAllUsers(){
  return axios.get('/users')
}

function createNewUser(user){
  return axios.post('/users', user)
}

function deleteUser(userId){
  return axios.delete(`/users/${userId}`)
}

function getOneUser(userId){
  return axios.get(`/users/${userId}`)
}

function updateUser(user){
  return axios.patch(`/users/${user.id}`, user)
}
