alert("Hello World")


function fibonacci(n){
  const arr [0,1];
  if (n<2) return 1;
  for (var i = 2; i<n; i++){
    arr[i]=arr[i-1]+arr[i-2];
  }
}

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  </head>
  <body>
    <div class="w3-container">
      <p id="first-ptag">Hello, World!</p>
      <p><input type="number" id="user-input"></input></p>
      <p><button class="w3-button w3-black" onclick="askForName()">Hello</button></p>
      <p><a href="index.html">Go Home</a></p>
    </div>
    <script src="main.js"></script>
  </body>
</html>
