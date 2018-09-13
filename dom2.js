let wrapper = document.createElement('div');
    wrapper.id = "wrapperId";
    document.body.appendChild(wrapper);
   
    if(button1.clicked === true){
      generateFunction();
    } else if(button2.clicked === true){
      generate2Function();
    }



  function generateFunction() {
    countriesNames(); 
  }

  function generate2Function() {
    countriesNames2(); 
  }

function randomHexaNumberGenerator(num){
let result = "#";
for(let i = 0; i < 6; i++){
result += Math.floor(Math.random() * 16).toString(16);
}
return result;
}


  const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
	,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
function countriesNames(){
let newArray = [];
let inputText = document.querySelector('#Search').value.toUpperCase();

newArray = countries.filter((country) => country.startsWith(inputText));
wrapper.innerHTML = "";
newArray.forEach((element) => {
  const singleDiv = document.createElement('div');
  singleDiv.id = "loopDiv";
  singleDiv.textContent =  element.toUpperCase();
  singleDiv.style.backgroundColor = randomHexaNumberGenerator();
  wrapper.appendChild(singleDiv);
   });
} 

function countriesNames2(){
let newArray = [];
let inputText = document.querySelector('#Search').value;
newArray = countries.filter((country) => country.includes(inputText));
wrapper.innerHTML = "";
newArray.forEach((element) => {
  const singleDiv = document.createElement('div');
  singleDiv.id = "loopDiv2";
  singleDiv.textContent =  element.toUpperCase();
  singleDiv.style.backgroundColor = randomHexaNumberGenerator();
  wrapper.appendChild(singleDiv);
   });
} 
console.log(wrapper.firstChild);