var i=0;
function increment() {
  i+=1;
}
var x,y,z;
function addfield() {

  var container = document.getElementsByClassName("col-33");

  var detail = document.createElement("input");
  detail.type = "text";
  detail.name = "detail"+i;
  detail.placeholder = "Enter the purchased date or method";
  detail.id = "detail"+i;
  container[0].appendChild(detail);

  var bags = document.createElement("input");
  bags.type = "text";
  bags.name = "bags"+i;
  bags.placeholder = "Enter the number of bags";
  bags.id = "bags"+i;
  container[1].appendChild(bags);

  var weight = document.createElement("input");
  weight.type = "text";
  weight.name = "weight"+i;
  weight.placeholder = "Enter the weight";
  weight.id = "weight"+i;
  container[2].appendChild(weight);


  increment();
  // container.add(input);
  // container.appendChild(document.createElement("br"));
  // alert(i);
}


function tosubmit() {
  var fname = document.getElementById("fname").value;
  var place = document.getElementById("place").value;
  var method = document.getElementById("method").value;
  var description = document.getElementById("description").value;
  var detail = document.getElementById("detail").value;
  var weight = document.getElementById("weight").value;
  var bags = document.getElementById("bags").value;
  var period = document.getElementById("period").value;
  var destination = document.getElementById("destination").value;
  var method_transportation = document.getElementById("method_transportation").value;
  var route = document.getElementById("route").value;
  var trading = document.getElementById("trading").value;
  var location = document.getElementById("location").value;
  var date = document.getElementById("date").value;
  var gst = document.getElementById("gst").value;
  var truck = document.getElementById("truck").value;
  var array = [fname,
place,
method,
description,
detail,
period,
destination,
method_transportation,
route,
trading,
location,
date,
weight,
bags,
gst,
truck,
i]
for ( j=0;j<i;j++) {
  x = document.getElementById("detail"+j).value;
  y = document.getElementById("bags"+j).value;
  z = document.getElementById("weight"+j).value;
  array.push(x);
  array.push(y);
  array.push(z);
  // alert(x);
}

  // alert(array[17]);
  localStorage.setItem("arr",JSON.stringify(array));
  return true;

}
