
const codebutton = document.getElementById("Code");
codebutton.addEventListener('click', () => {
    
    let entex1 = document.getElementById("entex1").value;
    let offset = document.getElementById("offset").value;
      
    if(parseInt(offset)<1){ 

         document.getElementById("error").innerHTML =  "Debe ingresar un valor positivo de movimientos";
    } else {
        
       document.getElementById("result1").innerHTML= cipher.encode(offset,entex1);   

    }
})

const decodebutton = document.getElementById("Decode");
decodebutton.addEventListener('click', () => {
    
    let entex1 = document.getElementById("entex1").value;
    let offset = document.getElementById("offset").value;
    
    if(parseInt(offset)<1){ 
        
        document.getElementById("error").innerHTML =  "Debe ingresar un valor positivo de movimientos";
    } else {
        document.getElementById("result1").innerHTML= cipher.decode(offset,entex1);  
    }
})

/*function startc2(){
   
    document.getElementById("Start").style.display = "none";
    document.getElementById("Ingreso").style.display = "block";

}
function startc3(){

    document.getElementById("Ingreso").style.display = "none";
    document.getElementById("Datos").style.display = "block";

    let name1 = document.getElementById("name").value;
    

    let email1 = document.getElementById("email").value;
   
}*/
