# TopicosTelematicaGrupo6

IP del despliegue en Google Cloud (Kubernetes): http://34.66.209.168/
DNS con la IP: http://topicosgrupo6.ml

# Integrantes:

- Andres Felipe Villada Montoya - avillada@eafit.edu.co
- Diego Andres Giraldo Gomez - dgiral58@eafit.edu.co
- Santiago Ortiz Cano - sortizc1@eafit.edu.co

# Roles:

- Andres:
Encargado directo de brindarle seguridad al proyecto, aplicando tecnicas que ayuden a la disminución, supresión o eliminación del riesgo posibles ataques o fallos tales que puedan comprometer tanto la integridad ya sea de la aplicación, los usuarios y principalmente los datos. Encargado de implementar y acoplar al modelo de negocio un mecanismo de registro e inicio de sesión con todas las garantías de seguridad requeridas además de un modelo de base de datos que soportára esta lógica.

- Diego:
Encargado de brindarle una completa disponibilidad al proyecto, manipulando la arquitectura y distribución de capas. Es el encargado de montar el proyecto sobre una infraestructura la cual sea lo menos sensible a fallos posible, ademas de tener la capacidad de poder recuperarse ante un eventual fallo o sobrecarga del sistema, ya sea creando múltiples instancias del servidor dinamicamente o con tecnologías de control de fallos.

- Santiago:
Encargado del performance de la aplicación, aplicando las mejores prácticas en desarrollo, arquitectura y planeación del proyecto intentando elevar al máximo tanto la confiabilidad, velocidad y capacidad del proyecto. Es ademas su tarea, la optimizaron de las funcionalidades del proyecto aplicando técnicas de operaciones asincrónicas e intentando reestructurar la arquitectura inicial para lograr un mínimo de operaciones complejas, redundantes y de acceso a las otras capas.
 
 # Requisitos:
 
- Seguridad:
La información debe estar totalmente segura tanto la entregada por la capa de visualización como la almacenada en la base de datos; La aplicación debe poder ser lo suficientemente modular para que de ser comprometida una de las capas, no transmita este fallo a las demás; La aplicación debe poder ser resistente a ataques a servicios web (SQL Injection, Man in the midle, Cross origin, etc.); Cualquier fallo tanto provocado como interno en la aplicación, no debe comprometer la información de ningún tipo.

- Disponibilidad:
La aplicación debe ser resistente a cualquier eventual fallo, debe poder ser capaz de auto gestionar su disponibilidad y carga. La aplicación debe poder recuperarse en caso de ser afectada por algún fallo ya sea en una de sus capas o en el mismo servidor; La persistencia de los datos debe poder ser lo suficientemente independiente del modelo, que pueda ser utilizada por diferentes instancias de la aplicación.

- Rendimiento:
La aplicación debe ser lo suficientemente rápida en sus respuestas para garantizar una fluidez y dinamismo en la misma. La aplicación debe poder ser capaz de soportar con el mismo ritmo de ejecución el triple de la carga habitual del sistema. La aplicación debe ser lo suficientemente optima, para hacer la menor cantidad de operaciones de interacción de capas sin afectar su rendimiento en el modulo responsable.

# Rediseño de la aplicación (Proyecto 1):

- Seguridad:
La aplicacion pasa de no tener ningun tipo de proteccion pudiendo cualquier usuario sin registarse el poder manipular sin ningun tipo de restriccion todas las funcionalidades a tener un sistema de gestion de usuarios, dandole la posibilidad unicamente a cada usuario registrado la manipulación de sus publicaciones. El sistema pasa de no tener ningun soporte de usuarios a tener un modelo de base de datos respaldando dicha funcionalidad ademas de no guardar ningun tipo de contraseña en texto plano, en ves de éso, se almacena con un cifrado de 128 bits tipo hash en el momento del registro y se confirma su identidad haciendo comparacion directa entre la cadena y el hash evitando la captura de informacion sensible en caso verse comprometida . El sistema pasa de ser totalmente vulnerable a ataques de Cross origin, DOS y Man in the midle a ser servido directamente desde un servidor de depliegue "waitress" en ves del servidor por defecto del framework, ésto, ya que este nuevo servidor configurará la cola de peticiones y distribuirá de manera segura las peticiones evitando errores provocados. Se le añaden ademas validaciones de registros aplicando politicas de contraseñas y demás.

- Disponibilidad:

- Rendimiento:
La aplicacion contenia una gran cantidad de llamados a la base de datos. lo que provocaba una sobre carga al servidor y una rapida caida en situaciones donde era alta la demanda, ademas de tener una gran cantidad de variables que aparte de sobrecargar el cache, eran variables repetidas que contenian igual tipo de variable, ademas de no poseer llamados asincronos , lo que provocaba mayor lentitud en cada solicitud que el usuario queria crear , aparte , se redujo el area de renderizado, esto apoyado por la parte de seguridad, que al no estar logueado, varios componentes para comentar y crear foros no son mostrados reduciendo la carga y siendo agil al mostrar algo a usuario, por otro lado se eliminaron componentes o informacion basura que solo provocaban que los recursos pesaran mas y por ende fuera mas demorado la carga.






