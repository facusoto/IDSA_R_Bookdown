# Diseño y construcción de un almacén de datos

## Antecedentes

Las organizaciones en general y las empresas en particular vienen generando crecientes volúmenes de datos, desde los tiempos en que las buenas prácticas ponían foco **especialmente** en asegurar el ahorro de espacio de almacenamiento ya que en aquél entonces los precios del espacio de almacenamiento eran prohibitivamente caros y se buscaba reducir la cantidad de datos y aumentar la eficiencia mediante el úso de las formas normales.

El cambio en los precios de almacenamiento y el creciente enfoque en el análisis de los datos vieron consigo un cambio en la forma de almacenar los datos, pasando de una organización utilizando sistemas transaccionales como CRM y LRP al Data warehouse. Esto trajo consigo un enfoque de **desnormalización** en los datos a almacenar, lo que quiere decir que mantuvo la redundancia de datos que son de grán valor para su análisis.

>Los sistemas transaccionales suelen guardar la última versión de la información correspondiente, en muchos casos se "pisan" los datos que pueden ser relevantes.
>Por ejemplo, puede suceder que se registre que un cliente no tiene deuda, pero no se almacene información sobre si pagó en tiempo y forma, si pagó con retraso o si se le condonó la deuda por motivos impositivos.
>Esto no ocurre con el DW ya que, desde esta perspectiva, la historia del cliente es importante y es por ello que se almacenan los datos de forma redundante.

En el pasado, las empresas solían acumular la información de sus sistemas transaccionales en bases de datos relacionales y sin preocuparse demasiado por cómo se almacenaba la información. Esto resultaba en problemas a la hora de extraer información útil para la empresa, ya que la extracción de masiva de datos podía poner en riezgo las operaciónes cotidianas debido a sus exigencias en términos de recursos computacionales.

>Extraer datos masivos para analizar en los sistemas transaccionales implicaba el úso de muchos recursos, realizar esta tarea podía generar problemas de rendimiento en **toda** la plataforma!

Debido a esto era común que se recomiende que los datos a analizar se movieran a un almacenamiento independiente, con ello agilizamos el análisis y evitamos interrupciones o problemas en las operaciones diarias.

Además, los operadores de los sistemas transaccionales se enfocaban en que el negocio siguiera su curso sin interrupciones, y no siempre prestaban la atención necesaria a la calidad de la información que introducían en los sistemas.

Estos problemas se traducían en datos incompletos, información en campos equivocados, y otras estructuras horizontales que dificultaban la tarea analítica. En resumen, el problema radicaba en la falta de una estructura de datos adecuada y en la falta de atención a la calidad de la información ingresada.

Resulta decepcionantemente común encontrarse con fenómenos del tipo:

> "Ah, antes del 2000 guardábamos el código postal en el campo observaciones"
> "No, la localidad recién está normalizada desde el 2003, antes era un campo libre y para los clientes ya conocidos se dejaba en blanco"

Muchos esfuerzos de análisis se estrellaron contra estos problemas. La lección duramente aprendida es que antes de aplicar las herramientas analíticas es preciso preparar los datos.
Lo que quiere decir que primero hay que eliminar los patrones de ruido, esas inconsistencias de las que hablamos.

## Resumiendo

Las principales diferencias entre los sistemas transaccionales y los almacenes de datos son la velocidad, el espacio en disco y el propósito de uso.
Los sistemas transaccionales están diseñados para realizar operaciones como insert, delete y update lo más rápido posible. 
Por su parte el DW está optimizado para ejecutar select masivos mucho más rápidamente a costa del espacio en disco que se utiliza. Además, es importante mantener el registro no modificable de todos los hechos guardados en él, en lugar de actualizar los datos se recomienda agregarlo nuevamente modificado.



|             Aplicación transaccional (OLTP)              |                       DW                       |
|:--------------------------------------------------------:|:----------------------------------------------:|
|                     3ra forma normal                     |      2da forma normal para cada dimensión      |
| Modelo de datos complicado y eficiente en almacenamiento |      Modelo de datos simple y redundante       |
|                  Se pierden los cambios                  | No se registran cambios, se agrega información |
|               Optimizado para la operación               |           Optimizado para la lectura           |

## Arquitectura de un almacén de datos

A pesar de lo mencionado anteriormente, es importante aclarar que los almacenes de datos (o DW) no necesariamente representan una diferencia para el usuario final u operador, ya que en la mayoría de los casos, el sistema OLTP (o sistema transaccional) continúa siendo utilizado como fuente de datos; a su vez el DW almacena de forma redundante la información del OLTP con el objetivo de análisis y consulta de datos.

Entonces, un almacén de datos se integra por:

- Fuentes OLTP
- ETL
- Repositorio
- Gestor de consultas
- Herramientas de usuario final

Las <u>aplicaciones OLTP</u>, como los ERP, CRM, SCM, son sistemas de procesamiento transaccional en línea que son esenciales para las operaciones de las organizaciones. Sin embargo, utilizar OLTP como almacén de datos es inconveniente debido a que las bases de datos relacionales que soportan nuestras aplicaciones están optimizadas para la rapidez con las que resuelven las transacciones operativas, pero no son adecuadas para realizar consultas masivas.

Para evitar este problema, el almacén de datos utiliza un <u>repositorio</u> en el que se guarda una copia de los datos y una <u>aplicación de ETL</u> que se encarga de extraer, transformar y cargar los datos del entorno operativo (OLTP) en el repositorio. La transformación incluye la limpieza de los datos.

El repositorio está optimizado para la lectura y es el núcleo del almacén de datos. El <u>Gestor de consultas</u> se encarga de tomar las peticiones de los usuarios finales y resolverlas consultando el repositorio. Finalmente, la <u>herramienta de usuario</u> final permite a los usuarios obtener distintas vistas de los datos sin tener que preocuparse por cómo están guardados.
