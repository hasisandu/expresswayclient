import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-result-view',
  templateUrl: './item-result-view.component.html',
  styleUrls: ['./item-result-view.component.css']
})
export class ItemResultViewComponent implements OnInit {

  tempcatname;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.tempcatname = params.get("name");
    });
  }

}
