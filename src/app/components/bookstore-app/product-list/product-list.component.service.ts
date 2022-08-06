import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "./model/Book";
import { VirtualTimeScheduler } from "rxjs";

@Injectable
export class BookService(
    private url = 'https:localhost:44382/api/bookstore';

    httpOptions={
        headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    constructor: any(private http:HttpClient){};

    getBook(){
        return this.http.get(this.url);
    }
)

