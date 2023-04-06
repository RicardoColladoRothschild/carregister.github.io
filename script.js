function Auto(maker,model,year){
    this.maker = maker;
    this.model = model;
    this.year = year;
}

let AutoSaved = [];

let maker;
let model;
let year;
let vehNew;
function saveACar(){
    maker = document.getElementById("maker").value;
    model = document.getElementById("model").value;
    year = document.getElementById("year").value;
    vehNew = new Auto(maker,model,year);
  
    AutoSaved.push(vehNew);
    alert("Car Was Added");
    
}

function showMe(){
    let allVehicule = "";
    while(AutoSaved.length > 0){
        let currentObject = AutoSaved.shift();
        
        allVehicule += currentObject.maker + "| " + currentObject.model + "| " + currentObject.year + "\n";
    }
    alert(allVehicule);
}
