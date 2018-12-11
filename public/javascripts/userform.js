document.addEventListener('DOMContentLoaded', function() {

  let userId = 16
  let form = document.querySelector('form')

  getOneUser(userId)
  .then(results => {
    console.log(results.data)
    form.name.value = results.data.name
    form.nice.checked = results.data.isNice
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let user = {}
    user.name = form.name.value
    user.isNice = form.nice.checked
    user.id = userId
    updateUser(user)
    .then(results => {
      console.log(results.data)
    })
  })

  let deleteButton = document.querySelector('#deleteButton')
  deleteButton.addEventListener('click', function(event) {
    deleteUser(userId)
    .then(results => {
      console.log(results.data)
    })
  })

})
