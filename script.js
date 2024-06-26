function addNewWe(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");   
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    
    weOb.insertBefore(newNode, weAddButtonOb)
    }
    
    function addNewAq(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");   
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode, aqAddButtonOb)
    }
    
    function addNewec(){
        let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("ecField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("placeholder","Enter here");   
        let ecOb = document.getElementById("ec");
        let ecAddButtonOb = document.getElementById("ecAddButton");
        
        ecOb.insertBefore(newNode, ecAddButtonOb)
        }
    
    function generateCV(){
    let nameField = document.getElementById("nameField").value;
    document.getElementById("nameT").innerHTML = nameField;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;
    
    document.getElementById("nameT2").innerHTML = nameField;
    
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("gtT").innerHTML = document.getElementById("gtField").value;
    document.getElementById("lkT").innerHTML = document.getElementById("lkField").value;
    
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    
    let wes = document.getElementsByClassName("weField");
    console.log("Number of elements with class 'weField':", wes.length);
    let str = '';
    for (let e of wes) {
        console.log("Value of element:", e.value);
        str = str + `<li> ${e.value} </li>`;
    }
    console.log("Resulting HTML string:", str);
    
    document.getElementById("weT").innerHTML = str;
    
    
    let aqs = document.getElementsByClassName("aqField");
    let str1 = '';
    for (let f of aqs) {
        console.log("Value of element:", f.value);
        str1 = str1 + `<li> ${f.value} </li>`;
    }
    console.log("Resulting HTML string:", str1);
    
    document.getElementById("aqT").innerHTML = str1;
    
    
    let ecs = document.getElementsByClassName("ecField");
    let str2 = '';
    for (let g of ecs) {
        console.log("Value of element:", g.value);
        str2 = str2 + `<li> ${g.value} </li>`;
    }
    console.log("Resulting HTML string:", str2);
    
    document.getElementById("ecT").innerHTML = str2;
    
    let file = document.getElementById("imgField").files[0]
     console.log(file);     
    
     let reader = new FileReader()
     reader.readAsDataURL(file);
     console.log(reader.result);
    
     reader.onloadend = function (){
        document.getElementById('imgT').src = reader.result;
     }
    
    
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('template').style.display = 'block';
    
    } 
    
    function printCV(){
        window.print();
    }