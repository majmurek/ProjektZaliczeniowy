import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  backToShop() {
     this.router.navigate(['shop', 'catalog']);
  }

}
