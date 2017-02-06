var appState = {
    items: [
      { entry: 'apples', status: true},
      { entry: 'oranges', status: false}
    ]
};

var addItem = function(appState, item) {
    appState.items.push({ entry: item, status: false});
};
var deleteItem = function(appState, position) {
    appState.items.splice(position, 1);
};
var checkItem = function(appState, position) {
  appState.items[position].status = !appState.items[position].status;
}

//the render function takes in "the appState object" and the DOM 'element ' where it will be placed

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(indexItem, i) {
      var toggleHtml = "";
      if (indexItem.status) {toggleHtml = "shopping-item__checked"};
        return '<li>' +
            '<span class="shopping-item js-shopping-item '+ toggleHtml + '"> ' + indexItem.entry + ' </span>' +
            '<div class="shopping-item-controls">' +
            '<button id="' + i + '" class="shopping-item-toggle css-toggle-button">' +
            '<span class="button-label">check</span>' +
            '</button>' +
            '<button id="' + i + '" class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>' +
            '</li>';
    });
    element.html(itemsHTML);

};

$(function() {
    renderList(appState, $('.shopping-list'));

    $('.shopping-list-add').submit(function(event) {
        event.preventDefault();
        addItem(appState, $('.shopping-list-add-input').val());
        renderList(appState, $('.shopping-list'));
        this.reset();

    });
    $('ul').on('click', '.shopping-item-delete', function(event) {
        deleteItem(appState, parseInt(event.currentTarget.id));
        renderList(appState, $('.shopping-list'));
    });
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        checkItem(appState, parseInt(event.currentTarget.id));
        renderList(appState, $('.shopping-list'));
    });
});
