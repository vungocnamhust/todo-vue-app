# todo-app
## Architecture


## Event flow

### App.vue
> `to-do-form` listens for:
* `todo-added event` emitted by the `onSubmit() method` inside the ToDoForm component when the form is submitted. Result: `addToDo() method` invoked to add new todo item to the ToDoItems array.

> `to-do-item` listens for:
* checkbox-changed event emitted by the checkbox [input] inside the ToDoItem component when it is checked or unchecked. Result: `updateDoneStatus() method` invoked to update done status of associated todo item.
* item-deleted event emitted by the `deleteToDo() method` inside the ToDoItem component when the "Delete" button is pressed. Result: `deleteToDo() method` invoked to delete associated todo item.
* item-edited event emitted by the `itemEdited() method` inside the ToDoItem component when the item-edited event emitted by the `onSubmit() method` inside the ToDoItemEditForm has been successfully listened for. Yes, this is a chain of two different item-edit events! Result: `editToDo() method` invoked to update label of associated todo item.

### ToDoForm.vue
> `form` listens for submit event. 
* Result: `onSubmit() method` is invoked, which checks that the new label is not empty, then emits the todo-added event (which is then listened for inside App.vue, see above), and finally clears the new label [input].

### ToDoItem.vue

> checkbox [input] listens for change event. 
* Result: `checkbox-changed event` emitted when the checkbox is checked/unchecked (which is then listened for inside App.vue; see above).
* [edit-button] listens for click event. Result: toggleToItemEditForm() method is invoked, which toggles this.isEditing to true, which in turn displays the todo item's edit form on re-render.

* [delete-button] listens for click event. Result: `deleteToDo() method` is invoked, which emits the item-deleted event (which is then listened for inside App.vue; see above)

> `to-do-item-edit-form` listens for:
* `item-edited event` emitted by the `onSubmit() method` inside the ToDoItemEditForm component when the form is successfully submitted. Result: `itemEdited() method` is invoked, which emits the item-edited event (which is then listened for inside App.vue, see above), and sets this.isEditing back to false, so that the edit form is no longer shown on re-render.
* `edit-cancelled event` emitted by the `onCancel() method` inside the ToDoItemEditForm component when the "Cancel" button is clicked. Result: `editCancelled() method` is invoked, which sets this.isEditing back to false, so that the edit form is no longer shown on re-render.

### ToDoItemEditForm.vue
> `form` listens for submit event. 
* Result: `onSubmit() method` is invoked, which checks to see if the new label value is not blank, and not the same as the old one, and if so emits the item-edited event (which is then listened for inside ToDoItem.vue, see above).
* [cancel-button] listens for click event. Result: `onCancel() method` is invoked, which emits the edit-cancelled event (which is then listened for inside ToDoItem.vue, see above).

