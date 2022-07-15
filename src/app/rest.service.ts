import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from './Result';
import { Teacher } from './teacher/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  url: string="http://localhost:3000/Result";

  getTeachers(){
    return this.http.get<Teacher[]>("http://localhost:3000/Teacher");
  }
  getResults(){
    return this.http.get<Result[]>(this.url);
  }
  deleteResult(id:number){
    return this.http.delete(this.url+'/'+id);
  }
  addResult(data:any){
    return this.http.post(this.url,data).subscribe(
      (result)=>{
        console.warn("result",result)
      }
    );
  }

  getResult(id:number){
    return this.http.get(this.url+'/'+id);
  }

  updateResult(id:number,data:any){
    return this.http.put(this.url+'/'+id,data);
  }

}
