document.addEventListener('deviceready', onDeviceReady, false);

coonsole.log("");

function onDeviceReady() {
    let btnTirarFoto = document.getElementById("btnTirarFoto");
	btnTirarFoto.addEventListener('click', tirarFoto);
	
}

function tirarFoto(){
	if (!navigator.camera){
		alert("Erro o plugin cordova não foi instalado");
	}
	
	    var options =   {   quality: 50,
		                    destinationType: Camera.DestinationType.DATA_URL,
                            encodingType: Camera.EncodingType.JPEG,
                            mediaType: Camera.MediaType.PICTURE,
							saveToPhotoAlbum: true,
                            sourceType: 1,
                            encodingType: 0
		                }  					
	    let options2 = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            allowEdit: true,
            saveToPhotoAlbum: true,
            cameraDirection: 1,
            sourceType: Camera.PictureSourceType.CAMERA
        };
		
		
		navigator.camera.getPicture(
		function(imgData){
			var imgHtmlTag = document.getElementById("imgHtmlTag");
			imgHtmlTag.src = "data:image/jpeg;base64,"+imgData;
		}, 
		function(err){
			alert(err);
		}, options);
		
	
}