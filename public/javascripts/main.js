document.addEventListener('DOMContentLoaded', function() {

  let ul = document.querySelector('ul')

  getAllUsers()
  .then((results) => {
    for (let i = 0; i < results.data.length; i++) {
      let li = document.createElement('li')
      li.innerText = `${results.data[i].name},
      ${results.data[i].isNice}`
      ul.appendChild(li)
    }
  })

  let form = document.querySelector('form')
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    let user = {}
    user.name = event.target.name.value
    user.isNice = event.target.nice.checked
    createNewUser(user)
    .then(results => {
      console.log(results.data)
    })
  })

  let deleteButton = document.querySelector('#deleteButton')
  deleteButton.addEventListener('click', function(event) {
    deleteUser(17)
    .then(results => {
      console.log(results.data)
    })
  })

})
