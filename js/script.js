function newItem(){

  //javascript
  //1. Adding a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if ($('#input').val() === '') {
      alert("Task must not be empty!")
    } else {
      $('#list').append(li);
      $('#input').val('')
    }

   //2. Crossing out an item from the list of items:

    li.on('dblclick', function crossOut() {
      li.toggleClass('strike')
    });

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

     crossOutButton.on("click", deleteListItem);
     function deleteListItem(){
        li.remove();
      }

   // 4. Reordering the items:
     $('#list').sortable();
  }
