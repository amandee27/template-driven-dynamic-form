import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private jsonArray:any=[];
  private arry:any=[];
 
  fileToUpload: File = null;
  

  ngOnInit() {  
  
  }


  onFileChanged(event) {

    this.fileToUpload = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.fileToUpload, "UTF-8");
    fileReader.onload = () => {
     this.jsonArray=JSON.parse(fileReader.result as string);
     console.log(this.jsonArray);
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  onSubmit(form: NgForm){
    for(let elem of this.arry){
      console.log("key :"+elem);
    }
    form.reset();
  }
  
}
