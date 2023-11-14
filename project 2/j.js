(function(){
  const form = document.querySelector("#message-form")
   form.addEventListener('submit' ,function(e){
          e.preventDefault()
          const message = document.querySelector('#message')
          const feedback = document.querySelector('.feedback')
          const messageC = document.querySelector('.message-content')

          if (message.value === '') {
               feedback.classList.add('show')
               setTimeout(function(){
              feedback.classList.remove('show')
               },80000)
          }else{
            messageC.textContent= message.value;
            message.value = ''
          }
   })

})()