import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl, FormGroupDirective } from '@angular/forms';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  item: {
    id: number,
    name: string,
    qty: number,
    strike: false
  }
  
  items = []
  groceryForm: FormGroup;
  name: AbstractControl;

  errors: {
    name: string,
   qty: string
  }

  @ViewChild(FormGroupDirective ,{static:false}) formGroupDirective: FormGroupDirective;

  constructor(private formBuilder: FormBuilder) { 
    this.groceryForm = this.formBuilder.group({})

    this.groceryForm = this.formBuilder.group({
      name: ['', Validators.required],
      qty: [],
      id:[]
    }, { updateOn: 'blur' }); 
    
    this.name = this.groceryForm.controls['name'];
  }

  ngOnInit() {
   
  }

  addQty(){
    this.groceryForm.controls['qty'].setValue(this.groceryForm.get('qty').value + 1); 
  }

  subtractQty(){
    this.groceryForm.controls['qty'].setValue(this.groceryForm.get('qty').value - 1); 
  }  

  onAddItem(){
  
    if (!this.groceryForm.invalid) {
      
      if(this.groceryForm.get('id').value == null){
            this.item = {id: (new Date()).getTime(), 
                        name: this.groceryForm.get('name').value, 
                        qty: this.groceryForm.get('qty').value,
                        strike: false};
            this.items.push(this.item);
            console.log("in Component", this.items);
      }
      else {
        var currId = this.groceryForm.get('id').value;
        for(var i = 0; i < this.items.length; i++){
          if(currId == this.items[i].id){
              this.items[i].name = this.groceryForm.get('name').value;
              this.items[i].qty = this.groceryForm.get('qty').value;
              break;
          }
        } 
 
      }
      
      setTimeout(() => 
      this.formGroupDirective.resetForm(), 0)
      this.groceryForm.reset(); 
      

    }
    else {
      this.getErrorMessage(); 
    }
 
  }

  onEdit(item){
    this.groceryForm.controls['name'].setValue(item.name);
    this.groceryForm.controls['qty'].setValue(item.qty);
    this.groceryForm.controls['id'].setValue(item.id);
  }

  onDelete(item){

    for(var i = 0; i < this.items.length; i++){
      if(item.id == this.items[i].id){
          this.items.splice(i,1);
          break;
      }
    }    
  }

  onStrike(item){
    for(var i = 0;i < this.items.length; i++){
      if(item.id == this.items[i].id){
        if(this.items[i].strike){
          this.items[i].strike = false;
        }
        else{
          this.items[i].strike = true;
        }
        break;
      }
    }
  }

   getErrorMessage(){
    
    this.errors = {name: '', qty: ''};

     if (this.groceryForm.get('name').hasError('required')){
       this.errors.name = 'Please add a grocery item name';
     }
     if (this.groceryForm.get('qty').hasError('number')){
      this.errors.qty = "Quantity can only be a number"
    }  
    //return this.errors;  
  } 

}
