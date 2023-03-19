
    function submitform(){

        let returnedValue = validateForm();
        console.log("my returned value" , returnedValue)
        if(returnedValue === true){
            alert("Successful Submission");
        }
        
    }

   function validateForm(){
      var form = document.forms["myForm"];
         if(form["name"].value =="" || form["name"].value == null) {
           alert("Name must be filled out")
           return false;
        }
      
         if(form["email"].value =="" || form["name"].value == null) {
           alert("Email address must be filled out")
           return false;
      }

     
         if(form["pnumber"]. value =="" || form["pnumber"].value ==null){
            alert("Phone number must be filled out")
            return false;
         }

      
         if(form["gender"].value =="" ||form["gender"].value == null ){
            alert("Gender must be filled out")
            return false;
         }

      
         if(form["password"].value =="" ||form["password"].value == null ){
            alert("Paasword must be filled out")
            return false;
         }

      return true;
   } 