import { Component, OnInit } from '@angular/core';
import { faCar, faHome, faCrutch, faBuilding, faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  faCar = faCar
  faHome = faHome
  faCrutch = faCrutch
  faBuilding = faBuilding
  faUserAlt = faUserAlt
  ngOnInit(): void {
  }

}
