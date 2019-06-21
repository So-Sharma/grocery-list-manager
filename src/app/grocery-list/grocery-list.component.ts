import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
  FormGroupDirective
} from "@angular/forms";
import { NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { GroceriesService } from "../groceries/groceries.service";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-grocery-list",
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.css"]
})
export class GroceryListComponent implements OnInit {
  item: {
    id: number;
    name: string;
    qty: number;
    strike: false;
  };

  items = [];
  groceryForm: FormGroup;
  name: AbstractControl;

  errors: {
    name: string;
    qty: {};
  };

  autoList: any[];
  filteredOptions: Observable<any[]>;

  @ViewChild(FormGroupDirective, { static: false })
  formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private groceries: GroceriesService
  ) {
    this.groceryForm = this.formBuilder.group({});

    this.groceryForm = this.formBuilder.group({
      name: ["", Validators.required],
      qty: [
        ,
        Validators.compose([Validators.pattern("^[0-9]+$"), Validators.min(1)])
      ],
      id: []
      //}, { updateOn: 'blur' });
    });

    this.name = this.groceryForm.controls["name"];
  }


  ngOnInit() {
    this.autoList = this.groceries.getGroceryList();
    this.filteredOptions = this.groceryForm.get("name").valueChanges.pipe(
      startWith(""),
      map(value => this.filterAutoList(value))
    );
    this.errors = { name: "", qty: {} };
  }


  // This function is for filtering the grocery autocomplete options
  private filterAutoList(value: string): any[] {
    if (value != null && value != "") {
      const filterValue = value.toLowerCase();
      var options = this.autoList.filter(function(option) {
        return option.name.toLowerCase().indexOf(filterValue) > -1;
      });
      return options;
    } else {
      return this.autoList;
    }
  }


  // This function is for increasing the quantity by 1
  addQty() {
    var num = this.groceryForm.get("qty").value;
    if (!isNaN(Number(num))) {
      this.groceryForm.controls["qty"].setValue(+num + 1);
    }
  }


  // This function is for decreasing the quantity by 1
  subtractQty() {
    var num = this.groceryForm.get("qty").value;
    if (!isNaN(Number(num))) {
      this.groceryForm.controls["qty"].setValue(num - 1);
    }
  }

  // This function is for adding a grocery item. If the item is new, a new item is created else
  // existing item is updated
  onAddItem() {
    if (!this.groceryForm.invalid) {
      if (this.groceryForm.get("id").value == null) {
        this.item = {
          id: new Date().getTime(),
          name: this.groceryForm.get("name").value,
          qty: this.groceryForm.get("qty").value,
          strike: false
        };
        this.items.push(this.item);
      } else {
        var currId = this.groceryForm.get("id").value;
        for (var i = 0; i < this.items.length; i++) {
          if (currId == this.items[i].id) {
            this.items[i].name = this.groceryForm.get("name").value;
            this.items[i].qty = this.groceryForm.get("qty").value;
            break;
          }
        }
      }

      setTimeout(() => this.formGroupDirective.resetForm(), 0);
      this.groceryForm.reset();
    } else {
      this.getErrorMessage();
    }
  }


  // This function is for editing a grocery item
  onEdit(item) {
    this.groceryForm.controls["name"].setValue(item.name);
    this.groceryForm.controls["qty"].setValue(item.qty);
    this.groceryForm.controls["id"].setValue(item.id);
  }


  // This function is for deleting a grocery item
  onDelete(item) {
    for (var i = 0; i < this.items.length; i++) {
      if (item.id == this.items[i].id) {
        this.items.splice(i, 1);
        break;
      }
    }
  }


  // This function is for striking a grocery item as complete/done
  onStrike(item) {
    for (var i = 0; i < this.items.length; i++) {
      if (item.id == this.items[i].id) {
        if (this.items[i].strike) {
          this.items[i].strike = false;
        } else {
          this.items[i].strike = true;
        }
        break;
      }
    }
  }

  
  // This function adds error messages related to form fields to be displayed to the user
  getErrorMessage() {
    this.errors = { name: "", qty: {} };

    if (this.groceryForm.get("name").hasError("required")) {
      this.errors.name = "Please add a grocery item";
    }
    if (this.groceryForm.get("qty").hasError("pattern")) {
      var type = "pattern";
      this.errors.qty[type] = {};
      this.errors.qty["pattern"] = "Quantity can only be a positive number";
    }
    if (this.groceryForm.get("qty").hasError("min")) {
      this.errors.qty["min"] = "Quantity should be more than 0";
    }
  }
}
