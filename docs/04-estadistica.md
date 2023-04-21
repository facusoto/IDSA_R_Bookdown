# Elementos de probabilidad y estadística - Parte 2

<div class="warning">
<p>Este curso no incluye una introducción sistemática a los conceptos fundamentales de probabilidad y estadística. Te planteamos que si no te sientes cómodo con la parte práctica, busca información adicional en un texto formal de matemáticas o consultalo al profesor.
Si ya tienes formación formal en probabilidad y estadística, este repaso no es necesario.</p>
</div>

## Distribuciones de probabilidad

En el capítulo anterior vimos lo que era la probabilidad, que es la medida de la posibilidad de que un evento ocurra en un conjunto de eventos posibles y que se expresa en valores que van desde el 0 hasta el 1. También vimos como los diferentes gráficos pueden representar los datos de distintos modos y facilitar su comprensión.

Para comenzar a hablar de distribuciones de probabilidad primero hablemos nuevamente del histograma, en el siguiente gráfico se muestra como, a medida que la colección de datos aumenta, la cantidad de datos representados va en ascenso.

<img src="images/normal_dist.gif">

>Nota como los datos van en constante crecimiento y como éstos se distribuyen, principalmente, en la zona central.

Esto se trata de un gráfico de *distribuciones de frecuencia*, el histograma puede graficar la frecuencia de los datos al apilar los datos del mismo valor. A partír de la observación de múltiples distribuciones en los datos es como se crearon los modelos de **distribución de probabilidad** que son una contrapartida teórica de estas ya que no solo muestran las veces que ocurrió un determinado evento, sinó que también cuántas veces debería haber ocurrido.

Los matemáticos han descubierto varias distribuciones de probabilidad diferentes, es decir, sabemos que diferentes tipos de datos tenderán a caer naturalmente en una distribución conocida y podemos usarlos para ayudarnos a calcular la probabilidad. A continuación se explicará algunos de ellos de forma intuitiva.


### La distribución uniforme

La distribución uniforme es aquella que posee un número finito o continuo de variables aleatorias en la cual cada resultado posible tiene la misma probabilidad de ocurrir. Un ejemplo con un número finito de posibilidades es el lanzamiento de un dado justo, en el cual existe la misma probabilidad de sacar cualquier numero del 1 al 6, debido a que todas las posibilidades tienen igual probabilidad el gráfico de dispersión es uniforme y se representa de la siguiente manera.

GRÁFICO EN R

### La distribución binomial

La distribución binomial (bi = dos, nominal = categorías) calcula las probabilidades para eventos que solo pueden tener dos resultados posibles (si o no, uno o cero, cara o cruz). Esta distribución modela la probabilidad de que se observe cualquier número de éxitos en un número de observaciones **discreta**.

Un ejemplo de ello es el arrojar una moneda justa, aunque un único lanzamiento no nos dará necesariamente información de las probabilidades, por ello trabajamos con una colección de observaciones.

Supongamos una colección de 10 lanzamientos, ¿Cuantas caras podríamos esperar si cada lado de la moneda es igual? (Cada lado tiene una probabilidad de 0,5), por experiencia o intuición podríamos decir que la cantidad de caras tiende a ser similar a la de cruces pero, ¿Que pasaría si repitieramos el experimento otras 10.000 veces? veríamos entonces como se distribuyen las probabilidades de éxito.

GRÁFICO EN R

### La distribución normal

La distribución normal refleja la probabilidad de que ocurra cualquier valor para una variable **continua**. Ejemplos de variables contínuas son la altura o la edad, donde en una persona puede observarse en cualquier valor a lo largo de un continuo, como tener 35,6 años y medir 174cm.

Si se grafica estas observaciones para una población, la distribución normal te permite ver como se agrupan estos valores alrededor de un valor central (la media) y como se extiende los valores hacia los más altos y los más bajos.

GRAFICO EN R

>La forma de la gráfica parece una campana, donde la mayoría de los datos se encuentran cerca de la media, y conforme se aleja de la media la cantidad disminuye formando una curva simétrica.

La distribución normal es simétrica, por lo que se espera que exista la misma cantidad de observaciones tanto por encima como por debajo de la media, es decir, si la media de la altura de una población se situara en 170cm se espera que el número de personas que se situan en 160cm sea igual a la de 180cm. A pesar de lo que se espera, y como en todas las distribuciones de probabilidad, los datos del mundo real se acercarán a la distribución normal pero casi nunca coincidirán exactamente con esta.

## Estadistica inferencial

En el capítulo anterior ya vimos una introducción a los tipos de estadística, especialmente la estadística descriptiva. Ahora vamos a extender un poco más en la rama inferencial.

A diferencia de la rama descriptiva, que se enfoca en describir y resumir datos a través de las distintas medidas, la estadística inferencial se enfoca en hacer estimaciones o inferenias en base a una muestra de nuestros datos.

Si tomamos de ejemplo un set de datos, como podría ser las compras en una tienda por día, la estadística descriptiva te permitiría resumir y comprender los datos que se poseen; pero la estadística inferencial, por su parte, te permite hacer predicciones sobre el futuro a partír de los que se tiene.

Podría ayudarnos a predecir cuantas ventas tendrá en el futuro nuestra tienda, aunque siempre y cuando nuestro set de datos sea representativo, es decir que poseamos o creemos una muestra de datos que representen correctamente la realidad.
