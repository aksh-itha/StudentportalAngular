import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:Student[];
  student=new Student();
  constructor(private _studentService:StudentService){}

  ngOnInit():void{
    this.getStudents();

  }

  getStudents():void{
   this._studentService.getAllStudents()
   .subscribe((studentData)=>{
     this.students=studentData,
     console.log(studentData)
   },(error)=>{
   console.log(error);
   });
  }
  addStudent():void{
    this._studentService.addStudent(this.student)
    .subscribe((response)=>{console.log(response)},(error)=>{
      console.log(error);
    });

  }
}

