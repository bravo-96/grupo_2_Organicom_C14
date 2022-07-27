/* $(document).ready(function(){

    function createPreview(file){
        var imgCodified = URL.createObjectURL(file);
        var img = $("<div class='col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12'><div class='image-container'><figure><img src='" + imgCodified + "' alt='Foto del producto'><figcaption><i class='icon-cross'></i></figcaption></figure></div></div>");
        $(img).insertBefore("#imagenes")

    }

    $(document).on("change","#imagenes", function() {

        console.log(this.file);
        var file = this.file;
        var element;
        var supportedImages = ["image/jpeg","image/png","image/gif"];
        var elementsInvalids = false;

        for ( 1 = 0; 1 < file.length; 1++) {
             element = file[1];

             if(supportedImages.indexOf(element.type) != -1){
                createPreview(element);
             }else{
                elementsInvalids = true
             }
            
        }
        if (elementsInvalids) {
            showMenssage("Archivo invalido")
        } else {
            showMenssage("Archivo cargado correctamente")
        }

    });
    
}); */

/* let previsualizarImg = (event) => {

    let imgPreview = new FileReader();
    let id_img = document.getElementById("img-producto-pr");
    
    imgPreview.onload = ()=> {

        if (imgPreview.readyState == 2) {
            id_img.src = imgPreview.result
        } else {
            id_img.src = ("error")
        }

    }
    imgPreview.readAsDataURL(event.target.files[0])
} */