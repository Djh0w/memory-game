const input = document.querySelector('.login__input')
const button = document.querySelector('.login__button')
const form = document.querySelector('.login-form')

const validadeInput = ({ target }) => {
   /*console.log(event.target.value)
   event = recupera o target (tag input)
   target = tag do input
   value = valor da tag input*/
   if (target.value.length > 2) {
        button.removeAttribute('disabled')  
        return      
   } 
        
   button.setAttribute('disabled', '')
}

const handleSubmit = (event) => {
    event.preventDefault()
    /*Local Storage e o local do browser onde salvam informacoes
     recebe dois parametros, chave e valor do input */
    localStorage.setItem('player', input.value)
    window.location = 'pages/game.html'
}

input.addEventListener('input', validadeInput)
form.addEventListener('submit', handleSubmit)

