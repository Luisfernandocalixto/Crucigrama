// elements of DOM =>   id="modal"
document.addEventListener('DOMContentLoaded', function(){
    
    (function () {
        var cancelButton = document.getElementById("cancel");
        var favDialog = document.getElementById("favDialog");
                
        // Form cancel button closes the dialog box
        cancelButton.addEventListener("click", function () {
            favDialog.close();
        });
    })();
    
});


