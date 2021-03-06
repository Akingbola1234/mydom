//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);

//console.log(document.domain);

//Accessing document URL
//console.log(document.URL);

//Accessing Web Page Title
//console.log(document.title);

//Accessing Elements in the Head Tag
//console.log(document.head);

//Accessing Elements in the Body Tag
//console.log(document.body);

//Accessin all Elements in the DOM as an Array
//console.log(document.all);

//Changing Items using Selector and document.all index
// Note that this is not the best way.
//document.all[14].textContent = 'Testing Items';

//Accessing Forms on the Page
//console.log(document.forms);

//Accessing the Amount of Forms on the DOM
//This will show the amount of forms on the page
//console.log(document.forms.length);

//Accessing the links on the Page
//console.log(document.links);

//Acceessing Images in the DOM
//console.log(document.images);

//Various Selectors
// 1 getElementById

//console.log(document.getElementById('header-title'));

//let headerTitle = document.getElementById('header-title');
//let header = document.getElementById('main-header');
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Hello World';

//note: textContent and innerText properties are kinda similar but the difference is that innerText pays attention to stylings while textContent doesn't

//headerTitle.innerHTML = '<h3>What\'s Popping</h3>';
//innerHTML property add an HTML element into the element with the ID it doesn't change the element to a new one.

//Style Changes
//header.style.borderBottom = 'solid 3px #000';


//Various Selector
// 2 getElementsByClassName

//let items = document.getElementsByClassName('list-group-item');
// This will console log all the elements with the class name 'list-group-item' in the console as an array and each can be accessed with index
//items[items.length - 3].style.color = 'black';
//items[items.length - 2].style.color = 'green';
//items[items.length - 1].style.color = 'red';
//items[items.length - 1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let x = 0; x < items.length; x++) {
//     items[x].style.backgroundColor = '#f4f4f4'
// }

//Various Selectors
// 3 getElementsByTagName

//let li = document.getElementsByTagName('li');
//This selector works basically the same way as the others but this time we use tagname and not classname and id.

//Various Selectors

// 4 querySelector

//let mainheader = document.querySelector('#main-header');
//mainheader.style.borderBottom = '4px solid #ccc';

//using input

//let input = document.querySelector('input');
//input.value = ''

//let submit = document.querySelector('input[type="submit"]')
//submit.value = 'SEND';

//Using Css :last-child selector to select and style html element

//let lastItem = document.querySelector('.list-group-item:last-child')
//lastItem.style.color = 'blue'

//Using CSS :nth-child selector to select and style HTML element

//let secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral'

//We can make items content editable
// for (i = 0; i < items.length; i++) {
//     items[i].contentEditable = true;
// }

//Various Selectors

// 5 querySelectorAll

//let titles = document.querySelectorAll('.title');
//console.log(titles);

//Stylying only the odd

// let odd = document.querySelectorAll('li:nth-child(odd)')
// for (let j = 0; j < odd.length; j++) {
//     odd[j].style.backgroundColor = '#f4f4f4'
// }

// let even = document.querySelectorAll('li:nth-child(even)')
// for (let k = 0; k < even.length; k++) {
//     even[k].style.backgroundColor = '#ccc'
// }

//TRAVERSING THE DOM
//Querying the parentNode, childrenNode and Sibling Node

//parentNode
//let itemList = document.querySelector('#items')
//parentNode
//console.log(itemList.parentNode)
//itemList.parentNode.style.backgroundColor = '#f4f4f4'
//console.log(itemList.parentNode.parentNode)
//parentElement
//parentElement and parentNode are basically the same thing
//console.log(itemList.parentElement)

//childNode
//console.log(itemList.childNodes)

//children
//console.log(itemList.children);

// itemList.children[1].style.backgroundColor = 'yellow';
// for (let m = 0; m < itemList.children.length; m++) {
//     itemList.children[m].style.backgroundColor = 'yellow'
// }

//Selecting with firstChild property, though this might mostly not be needed
//console.log(itemList.firstChild)

//Selecting with firstElementChild property, this is more useful and Easy to use to firstChild property
//console.log(itemList.firstElementChild)

//Selecting with lastChild property is the same as selecting with firstChild property the difference is that lastChild selects the last element and firstChild selects the first Element

//console.log(itemList.lastChild)

//Selecting with lastElementChild property is the same as selecting with firstElementChild property the difference is that lastElementChild selects the last element and firstElementChild selects the first Element
//console.log(itemList.lastElementChild)
//Selecting with Sibling
//nextSibling
//console.log(itemList.nextSibling);
//nextSibling will give us a Node List Collection in the console it is adviceable to use nextElementSibling

//nextElementSibling
//console.log(itemList.nextElementSibling)

//previousSibling
//console.log(itemList.previousSibling)
//previousElementSibling
//console.log(itemList.previousElementSibling)
//itemList.previousElementSibling.style.color = "green";


//console.log(itemList.nextElementSibling = document.createElement('div'))

//Creating DOM Element from JavaScript and Inserting them.

//createElement Method

//let newDiv = document.createElement('div');
//Add Class
//newDiv.className = 'Hello'

//Add Id
//newDiv.id = 'Hello1'

//Add Attribute
//newDiv.setAttribute('title', 'Hello Div')

//Create TextNode, we have only added title attribute to the div created as well as an id, no text content is inside yet, to do this we have to create a textNode

//let newDivText = document.createTextNode('Hello World')
//After Creating the TextNode the Next thing is to append it to the div using the appenChild() method
//newDiv.appendChild(newDivText);
//If we want to insert this Div into the DOM we need to figure out where we want it to be in the DOM

// let container = document.querySelector("header .container")
// let h1 = document.querySelector("header h1")

// container.insertBefore(newDiv, h1)

// console.log(newDiv);

//Testing Creating Element and Inserting it.
// let add = () => {
//     let newItems = document.querySelector("#items")
//     let newItem = document.createElement('li')
//     newItem.className = 'list-group-item'
//     let newItemText = document.createTextNode("Item 4")
//     newItem.appendChild(newItemText)
//     newItem.style.backgroundColor = 'yellow'
//     let lastItem = newItems.lastElementChild

//     newItems.insertBefore(newItem, lastItem)
// }



//Adding Events Using just the function method
//The first way
//let button = document.getElementById('button').addEventListener('click', function(j) {
//console.log(document.querySelector('#items').children[0].innerHTML = "Not Item 1")
//     let myItems = document.querySelector('#items').children
//     for (let q = 0; q < myItems.length; q++) {
//         if (j.ctrlKey == true) {
//             myItems[q].innerHTML = "Not an Item"
//         } else {
//             return myItems
//         }
//     }
// })

//Adding Events Using the Named funtion
// let show = () => {
//     let inputForm = document.querySelector(".form-control").value
//     alert("I Submitted " + inputForm)
// }
// let inputButton = document.getElementById('btn').addEventListener('click', show);

//Adding Event Parameters
//let eventIng = (e) => {
//console.log(e.view.chrome)
//Working on the Key Event, trying to change Elements based on the key pressed down while clicking on the button
//let output = document.getElementById('output')
//let content = document.createTextNode('The list of Classes used in this Elements are ' + e.target.classList + '')
//output.appendChild(content)
//if the altKey is pressed down while clicking the button the content changes to capital letter
//     if (e.altKey == true) {
//         output.style.textTransform = "uppercase"
//     } else {
//         output.style.textTransform = "normalise"
//     }

// }
//let btn = document.getElementById('btn-btn').addEventListener('click', eventIng)

//let runEvents = (y) => {
//console.log('Event Type:' + y.type)
//output.innerHTML = '<h3>MouseX: ' + y.offsetX + '</h3>' + '<h3>MouseY: ' + y.offsetY + '</h3>'
//box.style.background = "rgb(" + y.offsetX + ", " + y.offsetY + ", 40)"
//}
//let newBtn = document.getElementById('btn-btn-btn')

//Mouse events

//Click
//newBtn.addEventListener('click', runEvents)

//Double Click
//newBtn.addEventListener('dblclick', runEvents)

//Mouse Down
//newBtn.addEventListener('mousedown', runEvents)

//Mouse Up
//newBtn.addEventListener('mouseup', runEvents)

//Other Types Of Events but not with the button

//let box = document.getElementById("box")

//Mouse Enter Event
//box.addEventListener('mouseenter', runEvents)

//Mouse Leave Event
//box.addEventListener('mouseleave', runEvents)

//Mouse Over Event
//box.addEventListener('mouseover', runEvents)

//Mouse Out Event
//box.addEventListener('mouseout', runEvents)

//Mouse Move Event
//box.addEventListener('mousemove', runEvents)


//Input Events
//KeyDown Event

// let itemInput = document.querySelector('input[type="text"]')
// let form = document.querySelector('form')
// let myInput = document.querySelector('#myinput')
// let myBtn = document.querySelector('#btn')
// let keyDown = (k) => {
//     console.log('Event Type:' + k.type)
//     myInput.innerHTML = '<h3>' + k.target.value + '</h3>'
// }
// itemInput.addEventListener('keydown', keyDown)

//KeyUp Event

//itemInput.addEventListener('keyup', keyDown)

//Key Press Event
//itemInput.addEventListener('keypress', keyDown)

//Other Events Attached to Input field
//Focus
//let focus = () => {
//myBtn.removeAttribute('disabled')
//}
//itemInput.addEventListener('focus', focus)

//Blur
//let blur = () => {
//myBtn.setAttribute('disabled', 'disabled')
//}
//itemInput.addEventListener('blur', blur)

//Cut Event

//itemInput.addEventListener('cut', keyDown)

//Paste Event

//itemInput.addEventListener('paste', keyDown)

//Input Event

//itemInput.addEventListener('input', keyDown)

//Change Event for Selecting

//let select = document.querySelector("select")
//let selectFunc = (t) => {
//console.log(t.target.value)
//}
//select.addEventListener('change', selectFunc)

//Submit Event
//Note we need to prevent the form from performing the normal way it performs before the Submit event can work
//let formBtn = document.querySelector("#form-btn")
// let formFunc = (f) => {
//     f.preventDefault()
//     console.log("Event Type: " + f.type)
//     for (let b = 0; b < f.target.length; b++) {
//         console.log(f.target[b].value)
//     }

// }
// form.addEventListener('submit', formFunc)




//BEGINING OF THE FINAL DOM PROJECT
//LET'S GO!!!!!

//(i)   Firstly, In this final Project we want to be able to add a New Item through the form and that will take an event (submit event)

let form = document.getElementById("addForm")
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")

//Creating the addItem Function
//Passed in event object (e)
let addItem = (e) => {
        e.preventDefault()
            //After Preventing the Normal behaviour of the form

        //Let's get the Value of the Input
        let newItem = document.getElementById("item").value

        //After having this we need to Create a New <li></li> inside the list and add it with the value gotten from the newItem input
        //Creating New <li></li> Element
        let newLi = document.createElement('li')
            //Adding A class name to it
        newLi.className = 'list-group-item'
            //Append the Text value coming from the input to the <li></li>Element
            //Add Text Node with input Value
        newLi.appendChild(document.createTextNode(newItem))
            //Note: At this point the Button is missing because we are yet to create the button
            //Let's Create that 
        let newBtn = document.createElement('button')
            //Add Classes to newBtn 
        newBtn.className = "btn btn-danger btn-sm float-right delete"
            //Add X to the innerHTML of the button
        newBtn.innerHTML = "X"
            //Append newBtn to the li
        newLi.appendChild(newBtn)
            //Now Let's Add the newLi to the ItemList
        itemList.appendChild(newLi)
    }
    //Creating the Form Submit Event
form.addEventListener('submit', addItem)
    //Creating the removeItem Function
    //Pass in the event object (e)
let removeItem = (e) => {
        if (e.target.classList.contains('delete'))
        //Added a Simple Confirmation
            if (confirm('Are you sure?')) {
            //Created this variable to be able to select the current parentElement clicked to avoid some issues
            let li = e.target.parentElement
                //Then remove the child of the current element selected
            itemList.removeChild(li)
        }
    }
    //Creating the Delete Event
itemList.addEventListener('click', removeItem)

//Creating filterItems Function
let filterItems = (e) => {
        //Convert text to lowercase
        let text = e.target.value.toLowerCase()
            //Select all elements in the itemList
        let allItems = itemList.getElementsByTagName('li')
            //note at this point if allItems is console logged we have an HTML collection and we need to convert it to an array
            //Converting allItems to an Array
        Array.from(allItems).forEach(function(item) {
            let itemName = item.firstChild.textContent
                //Comparing the Item Name to what is inputed in the Search Box
            if (itemName.toLowerCase().indexOf(text) != -1) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })


    }
    //Creating Filter Event
filter.addEventListener('keyup', filterItems)

// let icon = document.getElementById('icon')

// let change = (e) => {
//     e.preventDefault()
//     icon.className = 'fas fa-times'
// }
// icon.addEventListener('mouseover', change)

// let back = (e) => {
//     e.preventDefault()
//     icon.className = 'fas fa-bars'
// }
// icon.addEventListener('mouseout', back)