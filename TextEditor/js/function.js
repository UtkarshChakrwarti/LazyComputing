
function JSalert(){
   

    swal({   title: 'insert Some data',   
    text: "Are you sure to proceed?",  
    html: true, 
    type: "warning",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Continue",   
    cancelButtonText: "cancel",   
    closeOnConfirm: false,   
    closeOnCancel: false }, 
    function(isConfirm){   
        if (isConfirm) 
    {  
        document.getElementById('rte').innerHTML+='11' ; 
        swal("Data inserted","11", "success");  
       
        } 
        else {     
            swal("Hurray", "Account is not removed!", "error");   
            } });
}
