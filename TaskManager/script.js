//script for Current Displaying Date
//displaying Date
let date = new Date();

let DisplayDate = [];

DisplayDate[0] = "JAN";
DisplayDate[1] = "FEB";
DisplayDate[2] = "MAR";
DisplayDate[3] = "APR";
DisplayDate[4] = "MAY";
DisplayDate[5] = "JUN";
DisplayDate[6] = "JUL";
DisplayDate[7] = "AUG";
DisplayDate[8] = "SEP";
DisplayDate[9] = "OCT";
DisplayDate[10] = "NOV";
DisplayDate[11] = "DEC";

console.log(date.getDate());
let Month = DisplayDate[date.getMonth()];
console.log(Month);
console.log(date.getFullYear());

document.getElementById("Displaying_Today_Date").textContent =
  date.getDate() + " " + Month + " " + date.getFullYear();

//appending items in a ul list

function addingElement() {
  let inputField = document.getElementById("txt1").value;
  console.log(inputField)

  //empty field
  if (inputField === " ") {
    alert("please fill the field");
  } else {
    let creatingNode = document.createElement("li");
    let TextNodeElement = document.createTextNode(inputField);
    creatingNode.appendChild(TextNodeElement);
    console.log(creatingNode);

    //inserting span tag heart
    let creatingSpan = document.createElement("span");
    let spanInside_i_element = document.createElement("i");
    spanInside_i_element.setAttribute("class", "fa fa-angellist");
    spanInside_i_element.classList.add("like");

    creatingSpan.classList.add("heartbtn");

    creatingSpan.appendChild(spanInside_i_element);
    creatingNode.appendChild(creatingSpan);

    console.log(creatingSpan);

    //inserting delete button inside element
    let Deletebutton = document.createElement("span");
    let spn2 = document.createTextNode("Delete");
    Deletebutton.setAttribute("id", "closeBtn");
    Deletebutton.appendChild(spn2);
    creatingNode.appendChild(Deletebutton);
    console.log(Deletebutton);
    document
      .getElementById("ul_list")
      .appendChild(creatingNode)
      .classList.add("f2");
    document
      .getElementById("ul_list")
      .appendChild(creatingNode)
      .classList.add("lists");
    document.getElementById("txt1").value = " ";

    //close button
    closeB();

    //Toggle button
    toggle();
  }
}
/*******************
 * close function
 */

function closeB() {
  let closebtn = document.querySelectorAll("#closeBtn");

  closebtn.forEach(function (closebtn) {
    closebtn.addEventListener("click", function () {
      closebtn.parentNode.remove();
    });
  });
}
closeB();

/**************************
 * toggle function
 */

function toggle() {
  let btn = document.getElementById("btn");

  let likebtns = document.querySelectorAll(".like");

  likebtns.forEach(function (likebtns) {
    likebtns.addEventListener("click", function () {
      likebtns.classList.toggle("add");
    });
  });
}
toggle();

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let inputField = document.getElementById("txt1").value;
  if (inputField === "") {
    alert("please fill the field");
  } else {
    addingElement();
  }
});

function myFunction(event) {
  let inputfield = document.getElementById("txt1").value;
  var x = event.which === 13 || event.keyCode === 13;
  if (inputfield === "") {
    alert("please fill the field");
  } else if (x) {
    addingElement();
  }
}