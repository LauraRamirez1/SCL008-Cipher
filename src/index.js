 const codebutton = document.getElementById("Code");
    codebutton.addEventListener('click', () => {
    
        let entex1 = (document.getElementById("entex1").value).toUpperCase();
        let offset = document.getElementById("offset").value;
      
        if(parseInt(offset)<1){ 

            document.getElementById("error").innerHTML =  "Debe ingresar un valor positivo de movimientos";
        } else {
            
            document.getElementById("result1").innerHTML= cipher.encode(offset,entex1);  
            document.getElementById("error").innerHTML =  "";  
        }
    })
    
const decodebutton = document.getElementById("Decode");
    decodebutton.addEventListener('click', () => {
    
        let entex1 = (document.getElementById("entex1").value).toUpperCase();
        let offset = document.getElementById("offset").value;
        
        if(parseInt(offset)<1){ 
        
            document.getElementById("error").innerHTML =  "Debe ingresar un valor positivo de movimientos";
        } else { 
             document.getElementById("result1").innerHTML= cipher.decode(offset,entex1);
             document.getElementById("error").innerHTML =  ""; 
            }  
        })

const limpiarbutton = document.getElementById("Limpiar");
    limpiarbutton.addEventListener('click', () => {
        document.getElementById("result1").innerHTML= "";   
        document.getElementById("error").innerHTML =  ""; 
        })

const start1button = document.getElementById("Start1");
start1button.addEventListener('click', () => {
    document.getElementById("Start").style.display = "none";
    document.getElementById("Datos").style.display = "block";
})
