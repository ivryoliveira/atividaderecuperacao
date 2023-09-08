<head> 

    <meta charset="UTF-8"> 

    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

  

    <title>Login</title> 

  

    <link rel="stylesheet" href="style.css"> 

  

</head> 

  

<body> 

<main> 

    

<div> 

   <form > 

 <h1>Login</h1> 

 <input type="email" placeholder="email" id="email"> 

 <input type="password" placeholder="senha" id="senha"> 

    <button type="button" onclick="login()">Login</button> 

   </form> 

  

  

</div> 

  

  

</main> 

  

  

  

  

  

    <script src="script.js"></script> 

</body>
const email = document.getElementById('email') 

const senha = document.getElementById('senha') 

  

function login() { 

    if(email.value == 'admin@email.com' && senha.value == '1234') { 

        alert('Login feito com sucesso') 

    } else { 

        alert('Login ou senha incorretos') 

    } 

} 