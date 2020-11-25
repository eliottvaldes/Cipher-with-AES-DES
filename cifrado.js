//MOSTRAR LONGITUD DE CLAVE   
function yei() {
    var vcla1=document.getElementById("clave").value;
    var disval= document.getElementById('yei');
    var count8=8-vcla1.length;
    var count16=16-vcla1.length;
    var count32=32-vcla1.length;
    if(vcla1.length==8 || vcla1.length==16 || vcla1.length==32){
        disval.innerHTML  = `<p><h6 class="text-success"> Clave Válida </h6></p><br>`;
    }else{
        if(vcla1.length<8){
            disval.innerHTML  = `<p><h6 class="text-warning">Clave Inválida te faltan ` +count8+ ` digitos para una clave de 8 caracteres</h6> </p><br>`;    
        }else
        if(vcla1.length>8 && vcla1.length<16){
            disval.innerHTML  = `<p><h6 class="text-warning">Clave Inválida te faltan ` +count16+ ` digitos para una clave de 16 caracteres</h6> </p><br>`;    
        }else
        if(vcla1.length>16 && vcla1.length<32){
            disval.innerHTML  = `<p><h6 class="text-warning">Clave Inválida te faltan ` +count32+ ` digitos para una clave de 32 caracteres</h6> </p><br>`;    
        }                            
    }
}                                 
//CIFRAR CON DES
function cifrarDES(){    
    var cadena = document.getElementById("archivoc").value;
    var clave =  document.getElementById("clave").value
    var key = CryptoJS.MD5(clave).toString();
    var cifrado = CryptoJS.TripleDES.encrypt(cadena, key).toString();
    document.getElementById('ci').value = cifrado;
    document.getElementById("cci").innerHTML = cifrado;
    localStorage.setItem("cifraDES", cifrado);
    localStorage.setItem("cifradoDES", cifrado);        
    var pshw= document.getElementById('pshw');
    pshw.innerHTML  = `<div class="animate__animated animate__backInUp">
                        <button class="btn btn-danger" id="create">Crear archivo cifrado</button><br><br>
                        <a download="cifradoDES.txt" id="downloadlink" style="display: none">Descargar</a>
                    </div> `;
}    
//DESCIFRAR CON DES
function descifrarDES(){
    var cadena = document.getElementById("archivoc").value;
    var clave =  document.getElementById("clave").value
    var key = CryptoJS.MD5(clave).toString();
    var descifrado = CryptoJS.TripleDES.decrypt(cadena, key);
    var deshow=descifrado.toString(CryptoJS.enc.Utf8);
    console.log(deshow);        
    document.getElementById("cdes").innerHTML = deshow;
    localStorage.setItem("descifradoDES", deshow);    
    pshw.innerHTML  = `<div class="animate__animated animate__backInUp">
                <button class="btn btn-danger" id="create">Crear archivo decifrado</button><br><br>
                <a download="descifradoDES.txt" id="downloadlink" style="display: none">Descargar</a>
                </div>`;
}
//CIFRAR CON AES
function cifrarAES(){
    var cadena = document.getElementById("archivoc").value;
    var clave =  document.getElementById("clave").value
    var cifrado = CryptoJS.AES.encrypt(cadena, clave);
    document.getElementById('ci').value = cifrado;
    document.getElementById("cci").innerHTML = cifrado;
    localStorage.setItem("cifraAES", cifrado);
    localStorage.setItem("cifradoAES", cifrado);    
    var pshw= document.getElementById('pshw');
    pshw.innerHTML  = `<div class="animate__animated animate__backInUp">
                        <button class="btn btn-danger" id="create">Crear archivo cifrado</button><br><br>
                        <a download="cifradoAES.txt" id="downloadlink" style="display: none">Descargar</a>
                    </div> `;
}
//DESCIFRAR CON AES
function descifrarAES(){
    var cadena = document.getElementById("archivoc").value;
    var clave =  document.getElementById("clave").value
    var descifrado = CryptoJS.AES.decrypt(cadena, clave);
    var deshow=descifrado.toString(CryptoJS.enc.Utf8);
    document.getElementById("cdes").innerHTML = deshow;
    localStorage.setItem("descifradoAES", deshow);
    pshw.innerHTML  = `<div class="animate__animated animate__backInUp">
                    <button class="btn btn-danger" id="create">Crear archivo decifrado</button><br><br>
                    <a download="descifradoAES.txt" id="downloadlink" style="display: none">Descargar</a>
                    </div>`;
}
//VALIDAR CAMPOS PARA CIFRAR
function valCipher(){
    var vcla1="";
    var vcla1=document.getElementById("clave").value;
    var varch=document.getElementById("archivoc").value;
    var tipocifrado= document.getElementById('tcifrado').value;
    if(varch.length<5){
        console.log("Archivo invalido");
        swal ( "Error" ,  "Ingresa un archivo para poder llevar acabo una acción" ,  "error" );    
    }else if(varch.length>5){
        if (vcla1.length==8 || vcla1.length==16 || vcla1.length==32){               
            if(tipocifrado=='AES'){
                console.log('Se va a cifrar con AES');
                askciAES();
            }else if (tipocifrado=='DES'){
            console.log('Se va a cifrar con DES');
                askciDES();
            }                                                 
        }else{
            console.log("Clave invalida");
            swal ( "Error" ,  "Longitud de clave no válida. Recuerda que la longitud de la clave debe ser de 8, 16 o 32 caracteres" ,  "error" );
        }
    }    
}
//VALIDAR CAMPOS PARA DESCIFRAR
function valDecipher(){
    var vcla1="";    
    var vcla1=document.getElementById("clave").value;
    var varch=document.getElementById("archivoc").value;
    var tipocifrado= document.getElementById('tcifrado').value;
    if(varch.length<5){
        console.log("Archivo invalido");
        swal ( "Error" ,  "Ingresa un archivo para poder llevar acabo una acción" ,  "error" );    
    }else if(varch.length>5){
        if (vcla1.length==8 || vcla1.length==16 || vcla1.length==32){            
            if(tipocifrado=='AES'){
                console.log('Se va a descifrar con AES');
                askdesAES();
            }else if (tipocifrado=='DES'){
                askdesDES();
            }                                    
        }else{
            console.log("Clave invalida");
            swal ( "Error" ,  "Longitud de clave no válida. Recuerda que la longitud de la clave debe ser de 8, 16 o 32 caracteres" ,  "error" );
        }
    }
}
//CREAR ARCHIVO CIFRADO
function fciArch () {
    var textFile = null,
    makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
    };
    var create = document.getElementById('create'),
    textbox = document.getElementById('cci');
    //var yeah= localStorage.getItem("cifrado");
    //console.log("El mensaje cifrado es: ",yeah);
    create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';             
    },false);
    
}
//CREAR ARCHIVO DESCIFRADO
function fdeArch () {
    var textFile = null,
    makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
    };
    var create = document.getElementById('create'),
    textbox = document.getElementById('cdes');
    //var yeah2= localStorage.getItem("descifrado");
    //console.log("El mensaje decifrado es: ",yeah2);
    create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';            
    }, false);
}
//CONFIRMACIÓN DE CIFRADO CON AES
function askciAES(){
    swal({
    title: "¿Esta seguro de querer cifrar tu archivo por medio de el algoritmo AES?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
        jQuery(function(){
            swal({ title: "¡Archivo cifrado con exito!",
            text: "uwu",
            icon: "success",
            button: "Aceptar"
            }).then(function() {
                cifrarAES();
                fciArch();
                //window.location = "index.html";
                    
            });
        }); 
    } else {
        swal({
            title: "Proceso detenido unu",
                icon: "warning",
                buttons: "Aceptar unu",
                dangerMode: true,
        });
    }
    });
}
//CONFIRMACIÓN DE DESCIFRADO CON AES
function askdesAES(){
    swal({
    title: "Estas por decifrar el contenido de este archivo por medio de el algoritmo AES",
    text: "Recuerda que si no ingresas la clave correcta el archivo no se va a descifrar correctamente",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
        jQuery(function(){
            swal({ 
            title: "¡Archivo descifrado exitosamente!",
            text: "uwu",
            icon: "success",
            button: "Aceptar"
            }).then(function() {
                descifrarAES();
                fdeArch();                    
            });
        }); 
    } else {
        swal({
            title: "Proceso detenido unu",
                icon: "warning",
                buttons: "Aceptar unu",
                dangerMode: true,
        });
    }
    });
}
//CONFIRMACIÓN DE CIFRADO CON DES
function askciDES(){
    swal({
    title: "¿Esta seguro de querer cifrar tu archivo por medio de el algoritmo DES?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
        jQuery(function(){
            swal({ title: "¡Archivo cifrado con exito!",
            text: "uwu",
            icon: "success",
            button: "Aceptar"
            }).then(function() {
                cifrarDES();
                fciArch();
                //window.location = "index.html";
                    
            });
        }); 
    } else {
        swal({
            title: "Proceso detenido unu",
                icon: "warning",
                buttons: "Aceptar unu",
                dangerMode: true,
        });
    }
    });
}
//CONFIRMACIÓN DE DESCIFRADO CON DES
function askdesDES(){
    swal({
    title: "Estas por decifrar el contenido de este archivo por medio de el algoritmo DES",
    text: "Recuerda que si no ingresas la clave correcta el archivo no se va a descifrar correctamente",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
        jQuery(function(){
            swal({ 
            title: "¡Archivo descifrado exitosamente!",
            text: "uwu",
            icon: "success",
            button: "Aceptar"
            }).then(function() {
                descifrarDES();
                fdeArch();                    
            });
        }); 
    } else {
        swal({
            title: "Proceso detenido unu",
                icon: "warning",
                buttons: "Aceptar unu",
                dangerMode: true,
        });
    }
    });
}
