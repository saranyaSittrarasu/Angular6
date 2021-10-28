import{NgForm,FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
export class Customer
{
    CustomerCode:string="";
CustomerName:string="";
  CustomerAmount: number = 0;

  //Validation code
formCustomerGroup:FormGroup=null;
constructor(){
    var _builder=new FormBuilder();
    this.formCustomerGroup=_builder.group({});
    this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));
    // customer code control
    //Required, 4 letter numeric
    var validationcollection=[];
    validationcollection.push(Validators.required);
    validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))

    this.formCustomerGroup.
    addControl("CustomerCodeControl",
     new FormControl('',Validators.compose(validationcollection)))

};
}
