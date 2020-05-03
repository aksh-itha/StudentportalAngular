import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Student } from './student';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudentService{
    constructor(private _httpService:Http){}
     
    getAllStudents():Observable<Student[]>{
        return this._httpService.get("http://localhost:8081/students")
        .map((response:Response)=> response.json())
        .catch(this.handleError);

    }

    private handleError(error : Response){
        return Observable.throw(error);
        
    }
    addStudent(student : Student){
        let body=JSON.stringify(student);
        let headers=new Headers({'Content-type': 'application/json'});
        let options=new RequestOptions({headers:headers});
        return this._httpService.post("http://localhost:8081/students",student,options)

    }
}