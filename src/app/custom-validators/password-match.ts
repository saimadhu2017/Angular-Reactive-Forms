import { FormGroup } from "@angular/forms";

export function passwordMatcher(controlName:string,compControlName:string){
    return(
        (formGroup:FormGroup)=>{
            
            const password=formGroup.controls[controlName];
            const compPassword=formGroup.controls[compControlName];

            if(password.value!==compPassword.value){
                compPassword.setErrors({mustMatch:true});
            }else{
                compPassword.setErrors(null);
            }

        }
    );
}