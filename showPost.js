
var button = document.querySelector('#app form button')
var searchId = document.querySelector('#app form input')
var content = document.querySelector('#result main #sct1')
var content2 = document.querySelector('#result main #sct2')


button.addEventListener('click', search)

function search (event) {
    event.preventDefault()

    var id = searchId.value



    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function (response) {

            content.innerHTML = ''
            content2.innerHTML = ''
            createLine(response.data.title)
            createLine2(response.data.body)
            
        })
        .catch(function (error) {
            content.innerHTML = ''
            content2.innerHTML = ''
            createLine('Ops, algo deu errado!')
        })
    
}

function createLine(text) {
    var line = document.createElement ('p')
    var text = document.createTextNode(text)

    line.appendChild(text)
    content.appendChild(line)
}
function createLine2(text) {
    var line = document.createElement ('p')
    var text = document.createTextNode(text)

    line.appendChild(text)
    content2.appendChild(line)
}
