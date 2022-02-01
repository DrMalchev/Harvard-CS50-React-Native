const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var deleteCounter = 0

function newTodo() {
  const todoElement = document.createElement('li')
  todoElement.id = deleteCounter

  const show = document.createElement('p')
  show.className = "show"
  const todoTextBox = document.createElement('input')
  todoTextBox.setAttribute("type", "text");
  todoTextBox.id = "todoTextBox"
  show.append(todoTextBox)
  // submit button
  const okButton = document.createElement('input')
  okButton.setAttribute("type", "button")
  okButton.value = "OK"
  okButton.onclick = function () { addEntry(deleteCounter - 1) }
  document.getElementById('todo-list').append(todoElement)
  show.append(okButton)
  todoElement.append(show)
  deleteCounter = deleteCounter + 1
}

function addEntry(deleteCounter) {

  const spanTodo = document.createElement('span')
  spanTodo.innerHTML = document.getElementById("todoTextBox").value
  //checkbox
  const check = document.createElement('input')
  check.setAttribute("type", "checkbox")
  check.id = 'c' + deleteCounter
  check.onclick = function () { checkEntry(check.id) }
  //delete button
  const delButton = document.createElement('input')
  delButton.setAttribute("type", "button")
  delButton.value = "Delete"
  delButton.id = "delButton"
  delButton.onclick = function () { deleteEntry(deleteCounter, check.id) }
  //attach elements
  var show = document.querySelectorAll('.show')
  var last = show[show.length - 1]
  last.innerHTML = ""
  last.append(check, spanTodo, delButton)
  // increment count
  let currentCount = parseInt(document.getElementById('item-count').innerHTML)
  document.getElementById('item-count').innerHTML = currentCount + 1
  //check
  let currentcheck = parseInt(document.getElementById('unchecked-count').innerHTML)
  if (currentcheck == 0 || currentCount == currentcheck) {
    document.getElementById('unchecked-count').innerHTML = currentcheck + 1
  }
}

function deleteEntry(deleteCounter, checkid) {
  // if checked => update
  console.log(checkid)
  if (document.getElementById(checkid).checked == false) {
    console.log('in')
    getCurrentCheckValue = parseInt(document.getElementById('unchecked-count').innerHTML)
    document.getElementById('unchecked-count').innerHTML = getCurrentCheckValue - 1
  }

  var parent = document.getElementById(deleteCounter)

  document.querySelector('#todo-list').removeChild(parent)
  let currentCount = parseInt(document.getElementById('item-count').innerHTML)
  document.getElementById('item-count').innerHTML = currentCount - 1

}

function checkEntry(id) {
  if (document.getElementById(id).checked == true) {
    getCurrentCheckValue = parseInt(document.getElementById('unchecked-count').innerHTML)
    document.getElementById('unchecked-count').innerHTML = getCurrentCheckValue - 1
  }
  else {
    getCurrentCheckValue = parseInt(document.getElementById('unchecked-count').innerHTML)
    document.getElementById('unchecked-count').innerHTML = getCurrentCheckValue + 1
  }
}