// elements of DOM =>   id="modal"
document.addEventListener('DOMContentLoaded', function(){
    
    (function () {
        const cancelButton = document.getElementById("cancel");
        const favDialog = document.getElementById("favDialog");
                
        // Form cancel button closes the dialog box
        cancelButton.addEventListener("click", function () {
            favDialog.close();
        });
    })();
    
});


