// window.onload = function () {
//     var url = document.location.href,
//         params = url.split('?')[1].split('&'),
//         data = {}, tmp;
//     for (var i = 0, l = params.length; i < l; i++) {
//          tmp = params[i].split('=');
//          data[tmp[0]] = tmp[1];
//     }
//     document.getElementById('consignor_name').innerHTML = data.consignor;
//     // document.getElementById('test').innerHTML = data.name;
// }

window.onload = function() {


  var arr = JSON.parse(localStorage.getItem("arr"));
  document.getElementById("consignor_name").innerHTML = arr[0].bold().toUpperCase();
  document.getElementById("gst").innerHTML = arr[1].bold().toUpperCase();
  document.getElementById("owners_risk").innerHTML = arr[2].bold().toUpperCase();
  document.getElementById("challan").innerHTML = arr[3].bold().toUpperCase();
  document.getElementById("Invoice").innerHTML = arr[4].bold().toUpperCase();
  document.getElementById("Insurance").innerHTML = arr[5].bold().toUpperCase();
  document.getElementById("Dates").innerHTML = arr[6].bold().toUpperCase();
  document.getElementById("LR").innerHTML = arr[7].bold().toUpperCase();
  document.getElementById("consignee_name").innerHTML = arr[8].bold().toUpperCase();
  document.getElementById("GST_Consignee").innerHTML = arr[9].bold().toUpperCase();
  document.getElementById("insurance_consignment").innerHTML = arr[10].bold().toUpperCase();
  document.getElementById("Company").innerHTML = arr[11].bold().toUpperCase();
  document.getElementById("policy").innerHTML = arr[12].bold().toUpperCase();
  document.getElementById("amount").innerHTML = arr[13].bold().toUpperCase();
  document.getElementById("dates").innerHTML = arr[14].bold().toUpperCase();
  document.getElementById("Truck").innerHTML = arr[15].bold().toUpperCase();
  document.getElementById("Owner").innerHTML = arr[16].bold().toUpperCase();
  document.getElementById("Chassis").innerHTML = arr[17].bold().toUpperCase();
  document.getElementById("DL_Number").innerHTML = arr[18].bold().toUpperCase();
  document.getElementById("Driver").innerHTML = arr[19].bold().toUpperCase();
  document.getElementById("RTO").innerHTML = arr[20].bold().toUpperCase();
  document.getElementById("Engine").innerHTML = arr[21].bold().toUpperCase();
  document.getElementById("origin").innerHTML = arr[22].bold().toUpperCase();
  document.getElementById("destination").innerHTML = arr[23].bold().toUpperCase();
  document.getElementById("description").innerHTML = arr[24].bold().toUpperCase();
  document.getElementById("weight").innerHTML = arr[25].bold().toUpperCase();
  document.getElementById("delivery").innerHTML = arr[26].bold().toUpperCase();
  document.getElementById("rate").innerHTML = arr[27].bold().toUpperCase();
  document.getElementById("Value").innerHTML = arr[28].bold().toUpperCase();
  document.getElementById("freight").innerHTML = arr[29];
  document.getElementById("st_charge").innerHTML = arr[30];
  document.getElementById("opr_charge").innerHTML = arr[31];
  document.getElementById("lu_charge").innerHTML = arr[32];
  document.getElementById("risk_charge").innerHTML = arr[33];
  document.getElementById("total").innerHTML = arr[34];
  document.getElementById("address1").innerHTML = arr[35].bold().toUpperCase();
  document.getElementById("address2").innerHTML = arr[36].bold().toUpperCase();
  document.getElementById("city").innerHTML = (arr[37]+','+ arr[38] + ','+arr[39] + ',' + arr[40]).bold().toUpperCase();

  document.getElementById("address1_1").innerHTML = arr[41].bold().toUpperCase();
  document.getElementById("address2_1").innerHTML = arr[42].bold().toUpperCase();
  document.getElementById("city_1").innerHTML = (arr[43]+','+ arr[44] + ','+arr[45] + ',' + arr[46]).bold().toUpperCase();

  // document.getElementById("state").innerHTML = arr[38];
  // document.getElementById("zip").innerHTML = arr[39];
  // document.getElementById("country").innerHTML = arr[40];
  localStorage.clear();
}

function myFunction() {
    window.print();
}
