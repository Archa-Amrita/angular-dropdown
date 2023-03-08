import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-rexroth-web-ui-toolkit';
  num = 33;

  ngOnInit(): void {

    //Set Progress in percentage as second Argument
    $('.component-progress').componentProgressbar('setProgress', this.num);
    $('.module-header').moduleHeader();
    $('.module-header-navigation').moduleHeaderNavigation();

  }

  addTen(){
    console.log("I am click")
    this.num +=10;

    if (this.num > 100){
      this.num = 100;
    }
    $('.component-progress').componentProgressbar('setProgress', this.num);

  }

  reset(){
    this.num = 0;
    $('.component-progress').componentProgressbar('setProgress', this.num);


  }

}
