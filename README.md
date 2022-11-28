# Proyecto WishList
 
 
## Descripción

El proyecto consiste en la creación de una lista de tareas pendientes utilizando react.
 
En dicha lista se han implementado funciones para modificar el estado de las tareas, crear nuevas tareas, modificar tareas ya existentes y reorganizarse a gusto del usuario.

## Objetivos
- [x] Incluir alguna imagen en la cabecera a modo de logo de la aplicación.
- [x] Mostrar una lista de deseos con un checkbox que permita marcar el deseo como completado. Una vez marcado el deseo debe mostrarse diferente al resto, por ejemplo tachando el texto.
- [x] Permitir añadir deseos nuevos simplemente pulsando la tecla intro en el campo de texto.
- [x] Añadir un botón que también sirva para añadir el texto del nuevo deseo a la lista.
- [x] Almacenar deseos en el almacenamiento local del navegador y recuperarlos automáticamente al abrir la aplicación.
- [x] Eliminar un deseo concreto de la lista.
- [x] Editar un deseo concreto de la lista, mediante la edición en línea del texto, mediante un modal, etc.
- [x] Reordenar los deseos de la lista, arrastrando los deseos, mediante iconos para subir o bajar el deseo, etc.
- [x] Buscar deseos, la lista se filtrará mostrando sólo los que correspondan con la búsqueda. Incluir algún proceso para eliminar esa búsqueda y que vuelvan a aparecer todos los deseos.

## Instalación
* Para poder instalar el programa se ha de descargar el repositorio de [github](https://github.com/josang1567/wishlist)
* Una vez descargado se debe de descargar la carpeta node modules
* Finalmente para probar el programa se usara la siguiente linea de comando:
 
```
  npm run start
```

## Manual de uso:

#### Inicio
La primera vez que se accede a la aplicacion se creara una lista de tareas por defecto la cual se guardara en la memoria local del ordenador

#### Añadir tareas
Para añadir tareas hay que introducir el texto descriptivo de la tarea en la barra de busqueda y pulsar el boton de añadir o la tecla enter y 
tras añadirse se debe pulsar el botón de guardado:

![Nuevo](https://user-images.githubusercontent.com/60347715/204242598-af9dae44-1f2d-48e2-87df-0c1d097ee580.gif)


#### Editar tareas
Para editar tareas existen dos metodos:
* Editar estado:
Para editar el estado de una tarea solamente hay que clicar encima de ella y se modificara su estado, mostrandose o quitandose una barra entre el texto:

![editar estado](https://user-images.githubusercontent.com/60347715/204242614-9baa5389-e852-4e22-a75a-94b353110be4.gif)

* Editar texto:
Para editar el texto de una tarea se debe pulsar el icono de la llave inglesa, el cual mostrara un modal que contiene el texto de la tarea:

![editar texto](https://user-images.githubusercontent.com/60347715/204242621-1dbdd846-e886-4551-ad4c-a3e4306a6308.gif)

#### Buscar tareas
Para poder buscar una tarea se debe usar la barra de busqueda la cual permite buscar tareas en concreto o tareas que contengan la palabra introducida:

![buscar](https://user-images.githubusercontent.com/60347715/204242638-ab0485c5-5e32-4302-a1d9-c4c0f13e2e6f.gif)

#### Borrar tareas
Para poder borrar una tarea se debe pulsar el boton con el icono de la goma de borrar y guardar los cambios:

![borrar](https://user-images.githubusercontent.com/60347715/204242649-20630aff-cb9d-4378-8ffd-2e4c3511f9b7.gif)

#### Ordenar tareas
Para ordenar las tareas simplemente hay que arrastrar la tarea elegida a la posicion deseada:

![ordenar](https://user-images.githubusercontent.com/60347715/204242670-3f24b564-e33a-443e-bdc3-794492ea2178.gif)


## Funciones implementadas

 
### -Crear

La función OnNewWish recibe el texto del input de creacion, genera un id nuevo, crea una nueva tarea y la guarda en la lista de tareas.
    
```
    onNewWish={(newWish) => {
          // console.log("Elemento de la lista añadido");
          setWishes([...wishes, newWish]);
        }} 
```


### -Editar

Existen dos funciones que permiten editar un elemento de la lista:
* OnUpdateWish: Esta función permite modificar el estado de una tarea de la lista true o false para determinar su progreso mediante el clickado del elemento que se
   quiere modificar.
                        
```
  onUpdateWish={(updatedWish) => {
      // opcion 2
      const updatedWishes = [...wishes];
      const modifyWish = updatedWishes.find(
        (wish) => wish.id === updatedWish.id,
      );
      modifyWish.text = updatedWish.text;
      modifyWish.done = updatedWish.done;
      setWishes(updatedWishes);
      // console.log(`cambio en lista: ${wishes}`);
  }}
```
* OnModifiedWish: Esta funcion recibe tanto el id del elemento a modificar como el nuevo texto, hace una busqueda entre los elementos de la tabla y modifica el 
  el texto anterior por el nuevo, guardandolo automaticamente en la memoria el cambio.

```
  onModifiedWish={(idEdit, idText) => {
      if (idText !== '') {
        console.log(`${idEdit}  ${idText}`);
        const updatedWishes = [...wishes];
        const modifyWish = updatedWishes.find(
        (wish) => wish.id === idEdit,
      );
      modifyWish.text = idText;

      setWishes(updatedWishes);
      localStorage.setItem('wishes', JSON.stringify(wishes));
      } else {
      console.log('En blanco');
    }
  }}
```


### -Borrar

La función de guardado recibe el id de uno de los elementos de la lista y mediante la funcíon filter busca dentro de la lista el id guardado y lo expulsa.
   
```
  onRemoveWish={(idBorrado) => {
      const filterWishes = wishes.filter((wish) => wish.id !== idBorrado);
      setWishes(filterWishes);
  }}
 ```


### -Ordenar

Utilizando DragDropContext se puede modificar la posición de los elementos de la lista a tiempo real, permitiendo ordenar a gusto del usuario las tareas.
   
```
  <DragDropContext
    onDragEnd={(result) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }
      if (
        source.index === destination.index
        && source.droppableId === destination.droppableId
      ) {
        return;
      }
      setWishes((prevWishes) => reorder(prevWishes, source.index, destination.index));
    }}
  >
  //contenido arrastrable
  </DragDropContext>
     
```


### -Guardado

Finalmente la función de guardado permite guardar los cambios a la lista en la memoria interna del dispositivo, permitiendo ver las tareas y cambios realizados en la lista en distintos momentos.
```
  onWishesSave={() => {
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }}
```
  


## -Autores

[Jose angel](https://github.com/josang1567)

## Licensia

Este proyecto tiene la licencia  GNU GENERAL PUBLIC LICENSE - consulte el archivo LICENSE.md para obtener más información

## -Codigos relacionados

* [Modal](https://www.youtube.com/watch?v=yYMRuqTIkmM&t=650s&ab_channel=FalconMasters)
* [Drag and drop](https://www.youtube.com/watch?v=bZsMWorjtFI&ab_channel=YoelvisMulen%7Bcode%7D)
* [React icons](https://www.youtube.com/watch?v=ADlm8_7K-IE&t=180s&ab_channel=UFOACADEMY)

