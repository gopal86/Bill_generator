window.onload = function() {

  var container = document.getElementsByClassName("col-33");

  var arr = JSON.parse(localStorage.getItem("arr"));
  // alert(arr);
  document.getElementById("fname").innerHTML = arr[0].bold();
  document.getElementById("place").innerHTML = arr[1].bold();
  document.getElementById("method").innerHTML = arr[2].bold();
  document.getElementById("description").innerHTML = arr[3].bold();
  document.getElementById("detail").innerHTML = arr[4].bold();
  document.getElementById("period").innerHTML = arr[5].bold();
  document.getElementById("destination").innerHTML = arr[6].bold();
  document.getElementById("method_transportation").innerHTML = arr[7].bold();
  document.getElementById("route").innerHTML = arr[8].bold();
  document.getElementById("trading").innerHTML = arr[9].bold();
  document.getElementById("location").innerHTML = arr[10].bold();
  document.getElementById("date").innerHTML = arr[11].bold();
  document.getElementById("weight").innerHTML = arr[12].bold();
  document.getElementById("bags").innerHTML = arr[13].bold();
  document.getElementById("gst").innerHTML = arr[14].bold();
  document.getElementById("truck").innerHTML = arr[15].bold();

  var number = arr[16];

  for (i=0;i<number;i++)
  {
    var x = document.createElement("P");
    var bold = document.createElement("b");
    var p = document.createTextNode(arr[17+3*i]);
    bold.appendChild(p);
    x.appendChild(bold);
    container[0].appendChild(x);

    var y = document.createElement("P");
    var bold1 = document.createElement("b");
    var q = document.createTextNode(arr[18+3*i]);
    bold1.appendChild(q);
    y.appendChild(bold1);
    container[1].appendChild(y);

    var z = document.createElement("P");
    var bold2 = document.createElement("b");
    var r = document.createTextNode(arr[19+3*i]);
    bold2.appendChild(r);
    z.appendChild(bold2);
    container[2].appendChild(z);

  }
  localStorage.clear();
}

function myFunction() {
    window.print();
}
