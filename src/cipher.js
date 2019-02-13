window.cipher = {
  encode: (offset, entex1) => {
    let ascii1 =0;
    let ascii2 =0;
    let result ="";
  
 
    for (let i = 0; i < entex1.length; i++) 
    {
        ascii1= entex1.charCodeAt(i);
        
        if(ascii1 >=32 && ascii1 <=  47 || ascii1>= 58 && ascii1<= 64 ||ascii1>=91 && ascii1 <=96 ||ascii1>=123 && ascii1 <=163 ||ascii1>=165 ) 
        {
            ascii2=ascii1
        }
        else if(ascii1 >=48 && ascii1 <=  57)
        {
            ascii2= (ascii1- 48 + parseInt(offset))%10 + 48
        }
        else
        {
             ascii2= (ascii1- 65 + parseInt(offset))%26 + 65
        }
        
        result += String.fromCharCode(ascii2);
    }

    return result;

  },

  
  decode: (offset, entex1) => {
    let ascii1 =0;
    let ascii2 =0;
    let result ="";
     
    for (let i = 0; i < entex1.length; i++) 
    {
        ascii1= entex1.charCodeAt(i);
        
        if(ascii1 >=32 && ascii1 <=  47 || ascii1>= 58 && ascii1<= 64 ||ascii1>=91 && ascii1 <=96 ||ascii1>=123 && ascii1 <=163 ||ascii1>=165 ) 
        {
            ascii2=ascii1
        }
        else if(ascii1 >=48 && ascii1 <=  57)
        {
            ascii2= (ascii1- 57 - parseInt(offset))%10 + 57
        }
        else
        {
             ascii2= (ascii1- 90 - parseInt(offset))%26 + 90
        }
        
        result += String.fromCharCode(ascii2);
    }

    return result;

  }
};
