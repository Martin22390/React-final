

Proyecto final:
Fonzi App.

Descripción:
Trabajo Final React.

La descripción del proyecto:
Creacion de una Appweb con React-Vite, simulando una E-Commers con creacion de arden de compra y una BD en FireBase.

Cómo levantar el proyecto
Para levantar el proyecto se debe ejecutar los siguientes comandos:

npm install
npm start
Para el correcto funcionamiento, es necesario tener seteadas las variables de entorno en el archivo .env. Las variables son:

VITE_API_KEY: la API key de Firebase.
VITE_AUTH_DOMAIN: el dominio de autenticación de Firebase.
VITE_PROJECT_ID: el ID del proyecto de Firebase.
VITE_STORAGE_BUCKET: el bucket de almacenamiento de Firebase.
VITE_MESSAGING_SENDER_ID: el ID del sender de Firebase.
VITE_APP_ID: el ID de la aplicación de Firebase.

Componentes:

CartWidget:
Me muestra la cantidad de articulos en el carrito

Checkout:
Me permite finalizar la compra y crear la orden de compra final

ItemDetail:
Me brinda los datos de cada articulo.

ItemDetailContainer:
Toma los articulos de la BD

ItemList:
Brinda la lista de todos los articulos con los detalles pedidos.

CartProvider:
Me brinda los datos el carrito de compras, segun cantidades, toma valores para agregar al carrito para realizar clear al finalizar la compra,etc.

Navbar:
Encontramos el titulo de la pagina, los distintos articulos en su categoria, el carwidget y el boton de finalizar compra.

Demo:
Video explicativo adjunto.