# Proyecto WishList
 
 
## Descripción

El proyecto consiste en la creación de una lista de tareas pendientes utilizando react.
 
En dicha lista se han implementado funciones para modificar el estado de las tareas, crear nuevas tareas, modificar tareas ya existentes y reorganizarse a gusto del usuario.


## Ejecución del programa

### -Como ejecutar el programa

```
npm run start
```

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
      ....contenido
     </DragDropContext>
     
```


### -Guardado

Finalmente la función de guardado permite guardar los cambios a la lista en la memoria interna del dispositivo, permitiendo ver las tareas y cambios realizados en la lista en distintos momentos.
```
  onWishesSave={() => {
          // console.log("clikeado salvar");
          localStorage.setItem('wishes', JSON.stringify(wishes));
        }}
```
  


## -Autores

[Jose angel](https://github.com/josang1567)


## -Codigos relacionados

* [Modal](https://www.youtube.com/watch?v=yYMRuqTIkmM&t=650s&ab_channel=FalconMasters)
* [Drag and drop](https://www.youtube.com/watch?v=bZsMWorjtFI&ab_channel=YoelvisMulen%7Bcode%7D)
* [React icons](https://www.youtube.com/watch?v=ADlm8_7K-IE&t=180s&ab_channel=UFOACADEMY)

