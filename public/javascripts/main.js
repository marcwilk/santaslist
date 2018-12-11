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

})
