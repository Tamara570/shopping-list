function newItem() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const itemAdded = $('#shopping-list-entry').val();
  $('.shopping-list').append(`<li>
        <span class="shopping-item">${itemAdded}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
  $('#shopping-list-entry').val("");
  });
}

function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('.shopping-item').toggleClass('shopping-item_checked');
  });
}

function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
}

function addNewItem() {
  newItem();
  checkItem();
  deleteItem();
}

$(addNewItem);