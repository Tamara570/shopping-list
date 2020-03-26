/*Notes for the Shopping List challenge
jQuery methods that may be  useful
.submit() - The submit event is sent to an element when the user is attempting to submit a form. It can only be          attached to <form> elements. Forms can be submitted          either by clicking an explicit <input type="submit">,        <input type="image">, or <button type="submit">, or by       pressing Enter when certain form elements have focus.
event.preventDefault() - using this prevents the browser from doing the default action. within this context, it       will prevent the browser from refreshing the page when we    hit submit. instead we just want the browser to add the      items to the list. this would be used in combination with    the .submit method in this project.
.toggleClass() - if an element in the matched set of elements already has the class, then it is removed; if an    element does not have the class, then it is added. this      method may end up being used when we click the 'check'       button. when the button is clicked, we'll want to change     the class of the listed item from 'shopping-item' to         'shopping-item_checked'.
.closest() - will come back to this one...*/

function newItem() {
    $( "#js-shopping-list-form" ).submit(function( event ) {
      $(".shopping-list").append($('<li>', {
          text: $('#shopping-list-entry').val()
      }))
      this.push({id: shopping-item, name: itemName, checked: false});
      event.preventDefault();
  })
  }
  const updateList = '.shopping-list';
      updateList
  
  function checkedForListItem(itemId) {
    if (item.id === itemId) {
      return item.checked = !item.checked;
    }
  }
  /*$( '#shopping-item-toggle' ).toggleClass(function() {
    if ( $( this ).is( "event.currentTarget" ) ) {
      return !item.checked;
    } else {
      return item.checked;
    }
  });*/
  
  
  function getItemIdFromElement(item) {
    return $(item)
      .closest('li') // this is to grab the ID of the list item above it.
      .data('item.id');
  }
  
  function itemsClicked() {
    $('.shopping-list').on('click', `.shopping-item-toggle`, event => {
      if (item.id === itemId) {
       return !item.checked;
      }
    });
  }
  
  
  function deleteTheItem() {
    $('.shopping-list').on('click', `.shopping-item-delete`, event => {
      $('.shopping-item').remove();
    });
  }
  
  function handleShoppingList() {
    newItem();
    itemsClicked();
    deleteTheItem();
  }
  
  $(handleShoppingList);
  