import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }

  //spinner type - https://github.danielcardoso.net/load-awesome/animations.html
  //replace " " with "-"

  ngOnInit() {
    //this.spinner.show();
    //setTimeout(() => {
    //  this.spinner.hide();
    //}, 2000);
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  startSpinner() {
    this.spinner.show();
  }
}
