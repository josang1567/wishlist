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


#### Editar tareas

#### Borrar tareas

#### Ordenar tareas

## Funciones implementadas

 
### -Crear

La función crear permite añadir un nuevo elemento a la lista de tareas poniéndolo automáticamente en la posición final de la lista.
    
```
    onNewWish={(newWish) => {
          // console.log("Elemento de la lista añadido");
          setWishes([...wishes, newWish]);
        }} 
```


### -Editar

Existen dos funciones que permiten editar un elemento de la lista:
* OnUpdateWish: Esta función permite modificar el estado de una tarea de la lista true o false para determinar su progreso.
                        
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
* OnModifiedWish: Esta función despliega un modal el cual nos permitirá editar el texto de la tarea.

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

Esta función permite eliminar un deseo de la lista.
   
```
  onRemoveWish={(idBorrado) => {
      const filterWishes = wishes.filter((wish) => wish.id !== idBorrado);
      setWishes(filterWishes);
  }}
 ```


### -Ordenar

Esta función permite ordenar los elementos de la lista usando el ratón del ordenador, con el cual se podrá arrastrar el elemento a la posición deseada.
   
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


## -Codigos relacionados

* [Modal](https://www.youtube.com/watch?v=yYMRuqTIkmM&t=650s&ab_channel=FalconMasters)
* [Drag and drop](https://www.youtube.com/watch?v=bZsMWorjtFI&ab_channel=YoelvisMulen%7Bcode%7D)
* [React icons](https://www.youtube.com/watch?v=ADlm8_7K-IE&t=180s&ab_channel=UFOACADEMY)

