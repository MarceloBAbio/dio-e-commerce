import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements 
OnInit {
  livros: any;
  booksService: BookService;

  constructor(  bookService: BookService) {

    this.booksService = bookService;

    // this.booksService = new BooksService();
   }

  ngOnInit(): void {

    this.livros = this.booksService.getBook().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))
  }

}
