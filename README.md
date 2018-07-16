# Data Dashboard

Mira el proyecto AQUÍ >>>>> https://elment9.github.io/lim-2018-05-bc-core-pm-datadashboard/src/assets/

## 1. Cliente
Laboratoria Lima

## 2. Usuarix

Training managers (TMs) de Laboratoria. Son las personas encargadas de analizar
 y evaluar el avance de las alumnas de Laboratoria, para que así puedan preparar una estrategia adecuada para mejorar su aprendizaje. 

## 3. Definición del problema

Este proyecto busca crear una interfaz que permita que las training managers 
puedan visualizar y usar la data del progreso de las alumnas con respecto al
LMS (Learning Management System) de Laboratoria. 

## 4. Diseño del producto

### 4.1. Entrevistas

  Antes de definir el 'contenido necesario' se realizaron tres entrevistas a la TM de Laboratoria Lima. 

  ### 4.1.1.Preguntas

#### Primera entrevista (Sketch)

  **Motivaciones:** Identificando metas y motivaciones (¿Qué les importa a tus usuarios o  qué los motiva?)
  ¿Cuáles son tus metas como T.M.?

  **Frustraciones:** Identificando frustraciones (¿Que frustra a tus usuarios?

  ¿Cómo T.M. tienes alguna necesidad que no está siendo satisfecha? (Perspectiva no digital).

  **Interacciones:** Interacción entre negocio y usuario (Ambiente: Dashboard)

  ¿Qué es interesante acerca de la manera en que tú (como T.M.) interactúas con el Data Dashboard actual?

  **RESPUESTA**

  * Alejandra indicó que actualemente no cuenta con una interfaz gráfica que le permita ver la data de las alumnas en el LMS. Solo cuenta con una especie de excel. Esto le dificulta ver el avance de las alumnas y en consecuencia, implementa estrategias para mejorar el aprendizaje de ellas.  

#### Segunda entrevista (Prototipo 1)
* ¿Qué contenido es más importante para ti?
* ¿Qué dispositivos usas para observar esta información?
* ¿Qué no te agrada de esta aplicación?
* ¿Qué mejorarías?

**CONCLUSIONES:**
* Priorizar el avance de los ejercicios.
* Crear un iUsa solo laptop, pero le agradaría ver los datos en un dispositivo móvil. 
* Implementar la opciónd de squads, ya que le parece útil.
* Eliminar select sede y generación, ya que resulta redundante. Colocar solo sede.
* Desarrollar opción para usar distintos tipos de gráficos y otra forma de seleccionar squad. 

### ARQUETIPO DE USUARIO (Persona UX)
![artboard 1 3x-100](https://user-images.githubusercontent.com/34355830/42785908-ba3a696a-8919-11e8-95a8-c67f26b8ca27.jpg)


### 4.2. Contenido necesario

Esta lista se elaboró en base a lo mencionado por la TM en las entrevistas realizadas. Es importante aclarar, que no se han habilitado todas las opciones en este proyecto, por temas de tiempo. No obstante, lo mostramos como solución al problema planteado.

#### A. General

Pestaña que contiene la estadística general de las alumnas en cuanto a Ejercicios, lecturas y quizzes. Esta pestaña puede filtrar de acuerdo a cohort que el o la TM solicite.
Lo ideal es que cuado el usuario ingrese muestre, de manera predefinida, los datos de la sede a la que pertenece. 


Posee siguientes criterios de filtrado:

#### a.1. Sede y Cohort
  * Lima 2018 pre core
  * CDMX 2018 pre core
  * GDL 2018 pre core
  * SPL pre core
  * SCL pre core 

#### a.2. Turno
  * Mañana
  * Tarde

#### a.3. Muestra
  * Cantidad de alumnas
  * Total de cursos

#### B. Alumnas

 Pestaña que muestra el desempeño de las estudiantes. Brinda más opciones de filtrado y brinda la opción de ver la data de de cada usuario por separado. 

  Contiene los siguientes criterios de filtrado:

#### b.1. Filtrado por

  * Completitud total
  * Ejercicios
  * Lecturas
  * Quizzes

#### b.2. Ordenar en

  * Descendente
  * Ascendente

#### C. Curso

 Ofrece detalles sobre cursos (unidades, avance)

#### D.Squad (contenido brinda valor agregado)

 Como su nombre lo dice, ofrece la posibilidad de organizar a las alumnas por squads. Dado que los equipos cambian constantemente, no se han asignado grupos de forma predeterminada, el usuario podrá organizarlos dándole un número(de equipo) a cada alumna.Por ejemplo: Asignan a Ana y Juana con el número 2, y María y Luisa número 1. Al hacer clic en 'ver resultados' aparecerán dos cuadros: estadísticas del squad 1 y 2.


### 4.3. Contenido como valor agregado

* Ver el progreso de un grupo de alumnas (SQUAD).
*  Seleccionar periodo de trabajo (calendario).
* Exportar  informe en PDF

## 7. Prototipado

### Primer prototipo: Sketching

En primera instancia, se creó un prototipo en papel. Este contenía las funciones básicas mencionadas
en la lista. Después de la entrevista con Ale, se quitaron algunas funciones y se organizaron mejor
otras.

![1](https://user-images.githubusercontent.com/39272944/41488837-571c84fe-70b3-11e8-9cd1-a4d2e13f79ad.jpg)
![2](https://user-images.githubusercontent.com/39272944/41488814-47c446ae-70b3-11e8-9b34-b6b6a087b9b7.jpg)
![3](https://user-images.githubusercontent.com/39272944/41488815-47e488ba-70b3-11e8-93ce-2e54e9ae479e.jpg)


### Segundo Prototipo

Posteriormente, se realizó el segundo prototipo en Figma. Este tiene fidelidad media y cuenta 
cierto dinamismo, que simula la interación con el usuario.

Pueden ver el **PROTOTIPO DINÁMICO** en Marvel [**AQUÍ**](https://marvelapp.com/177cdbf6/screen/44209192)

### Prototipo de alta fidelidad

Este prototipo se desarrolló con las recomendaciones dadas por Alejandra. Pueden ver el **PROTOTIPO DINÁMICO** en Marvel [**AQUÍ**](https://marvelapp.com/3jd5hc3/screen/45119589)

Datos generales (salón)
![**Gral**](https://user-images.githubusercontent.com/39272944/42144750-783e9a10-7d82-11e8-8774-4ae119b6fdf7.png)

Estudiantes
![**Estudiantes**](https://user-images.githubusercontent.com/39272944/42144359-390e8d48-7d80-11e8-9bf3-9a1b1a84d97f.png)

Estudiantes ordenadas por completitud
![Estudiantes 2](https://user-images.githubusercontent.com/39272944/42144411-82c6e4f8-7d80-11e8-9b58-74e033095622.png)

Vista a data individual
![**Estudiantes 3**](https://user-images.githubusercontent.com/39272944/42144427-92a0ab98-7d80-11e8-93d1-0cfda2415263.png)

Seleccionando squad
![**Squad**](https://user-images.githubusercontent.com/39272944/42144442-a7a22972-7d80-11e8-9bda-a5f825303592.png)

Resultado: data por squad
![**Resultado squad**](https://user-images.githubusercontent.com/39272944/42144450-b5fcb74e-7d80-11e8-9dbd-56dfdd44b33e.png)

## 5. Desarrollo del producto

Para entender a plenitud el proyecto(funciones y procesos) se graficó el flujo que se muestra a continuación:

![mendoza y silva _ flujo funciones](https://user-images.githubusercontent.com/39272944/41561243-f9b8a17c-730e-11e8-81cb-75d921d16891.jpg)

## 6. Proyecto Final

![Proceso](![Alt Text](https://media.giphy.com/media/xiqhozf3nkYikCZIv2/giphy.gif)



