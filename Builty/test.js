function tosubmit() {

  var consignor_name = document.getElementById("consignor_name").value;
  var address1 = document.getElementById("address1").value;
  var address2 = document.getElementById("address2").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var country = document.getElementById("country").value;
  var gst = document.getElementById("gst").value;
  var owners_risk = document.getElementById("owners_risk").value;
  var challan = document.getElementById("challan").value;
  var Invoice = document.getElementById("Invoice").value;
  var Insurance = document.getElementById("Insurance").value;
  var Dates = document.getElementById("Dates").value;
  var LR = document.getElementById("LR").value;
  var consignee_name = document.getElementById("consignee_name").value;
  var address1_1 = document.getElementById("address1_1").value;
  var address2_1 = document.getElementById("address2_1").value;
  var city_1 = document.getElementById("city_1").value;
  var state_1 = document.getElementById("state_1").value;
  var zip_1 = document.getElementById("zip_1").value;
  var country_1 = document.getElementById("country_1").value;
  var GST_Consignee = document.getElementById("GST_Consignee").value;
  var insurance_consignment = document.getElementById("insurance_consignment").value;
  var Company = document.getElementById("Company").value;
  var policy = document.getElementById("policy").value;
  var amount = document.getElementById("amount").value;
  var dates = document.getElementById("dates").value;
  var Truck = document.getElementById("Truck").value;
  var Owner = document.getElementById("Owner").value;
  var Chassis = document.getElementById("Chassis").value;
  var DL_Number = document.getElementById("DL_Number").value;
  var Driver = document.getElementById("Driver").value;
  var RTO = document.getElementById("RTO").value;
  var Engine = document.getElementById("Engine").value;
  var origin = document.getElementById("origin").value;
  var destination = document.getElementById("destination").value;
  var description = document.getElementById("description").value;
  var weight = document.getElementById("weight").value;
  var delivery = document.getElementById("delivery").value;
  var rate = document.getElementById("rate").value;
  var Value = document.getElementById("Value").value;
  // var freight = document.getElementById("freight").value;
  var freight = parseFloat(weight) * parseFloat(rate);
  var st_charge = document.getElementById("st_charge").value;
  var opr_charge = document.getElementById("opr_charge").value;
  var lu_charge = document.getElementById("lu_charge").value;
  var risk_charge = document.getElementById("risk_charge").value;
  // var total = document.getElementById("total").value;
  var total = parseFloat(freight)-parseFloat(st_charge)+parseFloat(opr_charge)+parseFloat(lu_charge)+parseFloat(risk_charge);
  var array = [consignor_name,
gst,
owners_risk,
challan,
Invoice,
Insurance,
Dates,
LR,
consignee_name,
GST_Consignee,
insurance_consignment,
Company,
policy,
amount,
dates,
Truck,
Owner,
Chassis,
DL_Number,
Driver,
RTO,
Engine,
origin,
destination,
description,
weight,
delivery,
rate,
Value,
freight,
st_charge,
opr_charge,
lu_charge,
risk_charge,
total,
address1,
address2,
city,
state,
zip,
country,
address1_1,
address2_1,
city_1,
state_1,
zip_1,
country_1];
  localStorage.setItem("arr",JSON.stringify(array));
return true;
}
