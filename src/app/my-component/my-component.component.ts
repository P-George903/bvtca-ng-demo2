import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  @Input() loggedIn: boolean
  @Output() logOut = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
 logOutEvent(): void{
   this.logOut.emit()
 }
}
