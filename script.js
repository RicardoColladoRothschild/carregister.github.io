function Auto(maker,model,year){
    this.maker = maker;
    this.model = model;
    this.year = year;
}

let AutosSaved = [];
let maker;
let model;
let year;
function saveACar(){
    maker = document.getElementById("maker").value;
    model = document.getElementById("model").value;
    year = document.getElementById("year").value;
    let vehNew = new Auto(maker,model,year);
    AutosSaved.push(vehNew);
}
function showMe(){
    alert(AutosSaved);
}
