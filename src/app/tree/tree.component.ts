import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    myTest();
  }

}
