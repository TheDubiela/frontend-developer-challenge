function showMore() {
	console.log(page);
	getJSON();
	var line3 = document.getElementById("line3");
	var line4 = document.getElementById("line4");
	var p9 = document.getElementById("p9");
	var p10 = document.getElementById("p10");
	var p11 = document.getElementById("p11");
	var p12 = document.getElementById("p12");
	var p13 = document.getElementById("p13");
	var p14 = document.getElementById("p14");
	var p15 = document.getElementById("p15");
	var p16 = document.getElementById("p16");
	showElement(line3, true);
	showElement(line4, true);
	showElement(p9, true);
	showElement(p10, true);
	showElement(p11, true);
	showElement(p12, true);
	showElement(p13, true);
	showElement(p14, true);
	showElement(p15, true);
	showElement(p16, true);
}

function hidden(){
	var line3 = document.getElementById("line3");
	var line4 = document.getElementById("line4");
	var p9 = document.getElementById("p9");
	var p10 = document.getElementById("p10");
	var p11 = document.getElementById("p11");
	var p12 = document.getElementById("p12");
	var p13 = document.getElementById("p13");
	var p14 = document.getElementById("p14");
	var p15 = document.getElementById("p15");
	var p16 = document.getElementById("p16");
	showElement(line3, false);
	showElement(line4, false);
	showElement(p9, false);
	showElement(p10, false);
	showElement(p11, false);
	showElement(p12, false);
	showElement(p13, false);
	showElement(p14, false);
	showElement(p15, false);
	showElement(p16, false);
}

var showElement = function(el, display) {
  el.style.display = display ? '' : 'none';
};

const api_url ="https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=";
var page = 1;
async function getJSON(){
	const response = await fetch(api_url+page.toString);
	const data = await response.json();
	const obj = data.products;
	var Dimg = document.getElementsByName("img");
	var Dname = document.getElementsByName("name");
	var Ddesc = document.getElementsByName("desc");
	var Dfrom = document.getElementsByName("from");
	var Dto = document.getElementsByName("to");
	var Dor = document.getElementsByName("or");
	console.log(obj);
	for(var i=0 ; i<8 ;i++){
		var j=i;
		if(page != 1){
			j+=8;
		}
		Dimg[j].src = obj[i].image;
		Dname[j].textContent = obj[i].name;
		Ddesc[j].textContent = obj[i].description;
		Dfrom[j].textContent = "R$ "+obj[i].oldPrice;
		Dto[j].textContent = "R$ "+obj[i].price;
		Dor[j].textContent = obj[i].installments.count+"x RS"+obj[i].installments.value;
	}
	page++;
}