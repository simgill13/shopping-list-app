var appState = {
    items: []
};






var addItem = function(appState, item, number) {
    appState.items.push({ entry: item, status: false , value: number});
};



//the render function takes in "the appState object" and the DOM 'element ' where it will be placed

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(indexItem) {
        return '<li>' +
            '<span class="shopping-item js-shopping-item"> ' + indexItem.entry + ' </span>' +
            '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>' +
            '</li>';
    });
    element.html(itemsHTML);
    
};

$(function() {
    $('.shopping-list-add').submit(function(event) {
        event.preventDefault();
        addItem(appState, $('.shopping-list-add-input').val());
        renderList(appState, $('.shopping-list'));
        // deleteItem(appState);
    });


    $('.shopping-item-delete').click(function(event) {
        var deleteClick = event.target;
        if (deleteClick.className == "shopping-item-delete") {
            deleteItem(appState, parseInt(deleteClick.parentNode.id));
        }

    });

});




function deleteItem(appState, position) {
    appState.items.splice(position, 1);
}


























