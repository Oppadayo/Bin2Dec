function convert(){ 
    const binario = document.getElementById('binario').value;
   

    if( binario === ''){
        return alert('Por favor, digite um número binário! Ex.: 110011');        
    }
    binario.split('').map(bin => {
        if(bin !== '0' && bin !== '1'){
            return alert('Por favor, digite um número binário! Ex.: 110011');        
        }
    });  
    
    const decimal = parseInt(binario, 2);
    document.getElementById('decimal').value = decimal;
    return true;
}