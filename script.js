$(document).ready(function(){
    $("#comm").validate({

            rules:{
        
                name:{
                   required:true,
                   maxlength:15
                }, 

                emailf:{
                   required:true
                }
            
            },
            messages:{
                name:{
                  required:"Enter your name",
                  
                },
                emailf:{
                    required:"Enter your Email",
                    
                }
             }
    })
})

