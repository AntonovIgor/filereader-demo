(function() { 
    
    var TYPES_OF_IMAGES = {
       'GIF': '',
       'JPEG': '',
       'PNG': ''  
    };

    var previewImageContainer = document.querySelector('.preview-image');
    var uploadImagesControl = document.querySelector('.input-upload-image');    
    
    uploadImagesControl.addEventListener('change', onChangeInputFiles);

    function onChangeInputFiles(evt) {
        for (var i = 0; i < this.files.length; i++) {
            showPreviewImage(this.files[i]);
        }
    }
   
    function showPreviewImage(imageFile) {
        var fileRegExp = new RegExp('^image/(' + Object.keys(TYPES_OF_IMAGES).join('|').replace('\+', '\\+') + ')$', 'i');

        if (!fileRegExp.test(imageFile.type)) {
            console.log('Изображение не поддерживается');
            return;
        }        
        
        var fileReader = new FileReader();    
        fileReader.addEventListener('load', displayImageViaFileRader)
        fileReader.readAsDataURL(imageFile);
    }

     function displayImageViaFileRader(evt) {
        var uploadImage = document.createElement('img');                      
        previewImageContainer.appendChild(uploadImage);       
        uploadImage.src = evt.target.result;
     } 

})();