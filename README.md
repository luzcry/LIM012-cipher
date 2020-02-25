Cifrado Cesar: <br>

Una revista digital dirigida a jóvenes que busca impulsar su número de visitas con un juego de cifrado por motivo del mes del amor y la amistad. <br>

feedback recibido: <br>
-Al primer prototipo le faltaba el valor "offset" (coach) <br>
-Cambiar el orden del input y las instrucciones (coach) <br>
-Adaptar el diseño a la web (compañera) <br>
-Investigar sobre propiedades flex wrap y minmax para adaptar la página.(compañera) <br>
-Usar throw new error en vez de return error (coach) <br>
-Modificar el Try que estaba envolviendo mis funciones y colocar condicionales para los casos de error en el test(coach)<br>

Prototipo de baja fidelidad hecho en papel <br>

![caeser-cipher](https://luzcry.github.io/LIM012-cipher/src/iconos/prototipo1.jpg)

Prototipo hecho en inVision <br>

![caeser-cipher](https://luzcry.github.io/LIM012-cipher/src/iconos/prototipo2.png)

Sprint CheckOut: <br>
En el primer sprint hice un prototipo en invision que traduje en HTML usando selectores de CSS. En mi index.js coloqué la funcionalidad de los botones y definí que elementos irian en la ventana de resultados. En cipher.js definí las constantes encode y decode, consta de las variables que las componen (encode: myStringCipher, cipherFormula, newChar; decode: myDecode, decodeFormula, newChar), un bucle for para recorrer el arreglo, una variable para captar el codigo ASCII, aplicarle una formula, devolver el número del caracter cifrado para insertar todo en la variable de resultados. Al momento funciona un cifrado en letras mayúsculas y una condicional if que reconoce si el usuario coloca espacios en el texto.

Planeación del sprint 2 <br>
¿Qué falta? <br>
-Condición letras minúsculas <br>
-Condición caracteres especiales <br>
-Condición si el offset es negativo <br>
-Ajustar pantalla <br>
-Conocer sobre los test <br>
-Pasar mas del 70% de los test. <br>

Sprint checkout 2 <br>
-Lista la condición letras minusculas <br>
-Lista la condición caracteres especiales <br>
-Cambios en el css <br>
-Estudié sobre los test <br>
-Logré pasar los 11 test con una cobertura de 81% en branch, funciones 100%, stmts 89,90% y lineas 97.83% <br>
-Hice una serie de condiciones con try-catch para cuando el usuario coloca null, vacío o 0 se muestre un typeerror en el test <br>

¿Qué falta del proyecto? <br>
-Hacker edition de offset negativo <br>

<!-- ¿Cómo me sentí?
Me sentí increíble esta semana, todos los días me ponía una meta puntual y al final del día me sentía satisfecha con mi avance porque cumplía con lo que me había propuesto, dentro de laboratoria siento que me enriquecí mucho con los proyectos de mi squad y con las formas distintas de abarcar un problema que mostraron en sus demos y en la feria los demás grupos-->

<!--¿Qué siento que puedo mejorar?
Me gustaría mejorar mi manejo del tiempo, medir la cantidad de horas que debo dedicarle a cada caso en particular, también me gustaría ser mas asertiva a la hora de elegir las prioridades del trabajo, en esta ocasión siento que me enfoqué primero en lo que sabía que podía hacer con relativa facilidad (como HTML, CSS, DOM), huyendole o mirando con cierto temor a la funcionalidad javascript, que es donde sentía que tenía menos dominio, considero que debo afrontar el reto en el próximo proyecto con más convicción, tambien buscaré pedir mas feedback asi no sea por una duda, solo para avanzar en la mejor dirección -->

Investigación UX: <br>
Explicar quiénes son los usuarios y los objetivos en relación con el producto. <br>
Explicar cómo el producto soluciona los problemas/necesidades de dichos usuarios. <br>
Los usuarios son personas de 12 años en adelante, que se interesan en tener conocimientos de cultura general mediante la lectura de artículos en una revista digital que fomenta la ciencia entre los mas jóvenes, con motivo del mes del amor y la amistad esta revista quería implementar en su web un juego que les mostrara de manera didáctica uno de los cifrados mas sencillos y antiguos y que, por medio de los botones de compartir, se pudiera captar nuevos lectores del contenido de la pagina. <br>
El producto satisface los requerimientos del usuario ya que es una web que muestra dos opciones de cifrado y descifrado con sus respectivas instrucciones, unos espacios para colocar el numero de desplazamiento del mensaje, el texto a cifrar/descifrar y un botón que activa el resultado y finalmente unos cuadros vacíos donde aparece el texto cifrado/descifrado al presionar el botón. <br>

Imagen final del proyecto <br>

![caeser-cipher](https://luzcry.github.io/LIM012-cipher/src/iconos/FINAL.png) <br>

Test realizados el 21/02/2020 <br>
![caeser-cipher](https://luzcry.github.io/LIM012-cipher/src/iconos/wii1.png) <br>
![caeser-cipher](https://luzcry.github.io/LIM012-cipher/src/iconos/wii2.png)
