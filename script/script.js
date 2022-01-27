 <script>
var imgJackson = document.getElementById("imagen-jackson1");
            imgJackson.onclick = function() {
                var imgJacksonSrc = imgJackson.getAttribute("src");
                if (imgJacksonSrc === "https://www.hola.com/imagenes/biografias/michael-jackson/79629-jackson10.jpg") {
                    imgJackson.setAttribute("src", "https://indiehoy.com/wp-content/uploads/2021/06/michael-jackson.jpg");
                    imgJackson.setAttribute("width", "300px");
                } else {
                    imgJackson.setAttribute("src", "https://www.hola.com/imagenes/biografias/michael-jackson/79629-jackson10.jpg");
                };
            };

            var enterButton = document.getElementById("enter-button");
            var onButtonClicker1 = function() {
                var name = document.getElementById("name").value;
                var mensaje = document.getElementById("mensaje");
                mensaje2 = document.getElementById("mensaje2");
                var texto1;
                var texto2;
                texto1 = "Tú: Michael, canta " + name + " o te despido.";
                texto2 = "Michael Jackson: ¿Qué? Yo no soy tu exclavo. Pero supongo que no hay otra opción.";
                mensaje.textContent = texto1;
                mensaje2.textContent = texto2;
            };
            enterButton.addEventListener("click", onButtonClicker1);

            var logojackson = document.getElementById("logo-jackson");
            var startTime = new Date().getTime();
            var walkTheLogojackson = function() {
                var currTime = new Date().getTime();
                var secondsElapsed = ((currTime - startTime)/1000);
                var newLeft = secondsElapsed * 200;
                logojackson.style.left = newLeft + "px";
                window.requestAnimationFrame(walkTheLogojackson);
            };
            walkTheLogojackson();
</script>
