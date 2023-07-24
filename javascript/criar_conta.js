function getPassword() {
  // Lista de caracteres que podem ser usados para formar a senha
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ";
  
  // Comprimento da senha gerada
  var passwordLength = 6;
  
  // Variável para armazenar a senha gerada
  var password = "";

  // Loop para gerar cada caractere da senha
  for (var i = 0; i < passwordLength; i++) {
      // Gera um número aleatório entre 0 e o comprimento da lista de caracteres
      var randomNumber = Math.floor(Math.random() * chars.length);
      
      // Adiciona o caractere correspondente ao número aleatório gerado na variável password
      password += chars.substring(randomNumber, randomNumber + 1);
  }

  // Define o valor da senha gerada no elemento HTML com o ID "senha"
  document.getElementById('senha').value = password;
}

// function msenha(){
//   let msenha1 = document.getElementById("senha");
//     if(msenha1.type == "password"){
//       msenha1.type = "text";
//     } else {
//       msenha1.type = "password";
//     } 
//     // if(msenha2.type == "password"){
//     //   msenha2.type = "text";
//     // } else{
//     //   msenha2.type = "password";
//     // }
// }
  // var csenha1 = document.getElementById("senha1")
  // var csenha2 = document.getElementById("senha2")

  // function confirmar(){
  //     if(csenha1.value){
  //         window.alert("Senhas diferentes!")
  //     } else{
  //       window.alert("Senhas iguais")
  //     }
  // }




  const passwordInput = document.getElementById("senha");
  const eyeSvg = document.getElementById("eyeSvg");
  
  function eyeClick() {
      if (passwordInput.type === "password") {
          showPassword();
          
         eyeSvg.classList.add('hide');
      } else {
          hidePassword();
          eyeSvg.classList.remove('hide');
      }
  }
  
  function showPassword() {
      passwordInput.setAttribute("type", "text");
  }
  
  function hidePassword() {
      passwordInput.setAttribute("type", "password");
  }
  
  


  // let container = document.querySelector('field');
  // let input = document.querySelector('password');
  // let icon = document.querySelector('img');

  // icon.addEventListener('click', function(){
  //   container.classList.toggle('visible');
  //   if(container.classList.contains('visible')){
  //     icon.src = '../imagens/eye.png';
  //     input.type = 'text';

  //   } else{
  //     icon.src = '../imagens/hide.png';
  //     input.type = 'password';
  //   }
  // }) 