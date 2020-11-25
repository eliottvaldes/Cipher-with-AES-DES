

function valcla1(){
    var vcla1="";
    var vcla1=document.getElementById("clave").value;
    var varch=document.getElementById("archivoc").value;
    if(varch.length<5){
        console.log("Archivo invalido");
        swal ( "Error" ,  "Ingresa un archivo para poder llevar acabo una acción" ,  "error" );    
    }else if(varch.length>5){
        if (vcla1.length==8 || vcla1.length==16 || vcla1.length==32){                
            askci();

        }else{
            console.log("Clave invalida");
            swal ( "Error" ,  "Longitud de clave no válida. Recuerda que la longitud de la clave debe ser de 8, 16 o 32 caracteres" ,  "error" );
        }
    }    
}
function valcla2(){
    var vcla1="";
    var vcla1=document.getElementById("clave").value;
    var varch=document.getElementById("archivoc").value;
    if(varch.length<5){
        console.log("Archivo invalido");
        swal ( "Error" ,  "Ingresa un archivo para poder llevar acabo una acción" ,  "error" );    
    }else if(varch.length>5){
        if (vcla1.length==8 || vcla1.length==16 || vcla1.length==32){
            askdes();
        }else{
            console.log("Clave invalida");
            swal ( "Error" ,  "Longitud de clave no válida. Recuerda que la longitud de la clave debe ser de 8, 16 o 32 caracteres" ,  "error" );
        }
    }
}

function cifrar(){
var cadena = document.getElementById("archivoc").value;
var clave =  document.getElementById("clave").value
var cifrado = CryptoJS.AES.encrypt(cadena, clave);
document.getElementById('ci').value = cifrado;
document.getElementById("cci").innerHTML = cifrado;
localStorage.setItem("cifra", cifrado);
localStorage.setItem("cifrado", cifrado);
    
var pshw= document.getElementById('pshw');
pshw.innerHTML  = `<div class="animate__animated animate__backInUp animate__delay-2s">
                    <button class="btn btn-danger" id="create">Crear archivo cifrado</button><br>
                    <a download="cifrado.txt" id="downloadlink" style="display: none">Descargar</a>
                </div> `;
}

function descifrar(){
//nuestras variables
    var cadena = document.getElementById("archivoc").value;
    var clave =  document.getElementById("clave").value
    var descifrado = CryptoJS.AES.decrypt(cadena, clave);
    var deshow=descifrado.toString(CryptoJS.enc.Utf8);
    document.getElementById("cdes").innerHTML = deshow;
    localStorage.setItem("descifrado", deshow);

pshw.innerHTML  = `<div class="animate__animated animate__backInUp animate__delay-2s">
                <button class="btn btn-danger" id="create">Crear archivo decifrado</button><br>
                <a download="descifrado.txt" id="downloadlink" style="display: none">Descargar</a>
                </div>`;
}

function fci () {
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
    var yeah= localStorage.getItem("cifrado");
    //console.log("El mensaje cifrado es: ",yeah);
    create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';             
    },false);
    
}
function reload(){
    location.reload();
    alert("esta es una prueba");
}
function fdes () {
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
    var yeah2= localStorage.getItem("descifrado");
    //console.log("El mensaje decifrado es: ",yeah2);
    create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';            
    }, false);
}

function askci(){
    swal({
    title: "¿Esta seguro de querer cifrar tu archivo?",
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
                cifrar();
                fci();
                //window.location = "fileuploaf.html";
                    
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

function askdes(){
    swal({
    title: "Estas por decifrar el contenido de este archivo",
    text: "Recuerda que si no ingresas la clave correcta el archivo no se descifrará",
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
                descifrar();
                fdes();                    
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
