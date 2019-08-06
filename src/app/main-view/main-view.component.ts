import {Component, OnInit} from '@angular/core';
import {CatogeryServiceService} from "../service/catogery-service.service";
import {Catogery} from "../dto/catogery";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  Catogeries: Catogery[] = [];
  primeVideoArray: Catogery[] = [];
  musicArray: Catogery[] = [];
  digitalmusicArray: Catogery[] = [];
  kindleStoreArray: Catogery[] = [];
  artsandcraftArray: Catogery[] = [];
  automotiveArray: Catogery[] = [];
  babyArray: Catogery[] = [];
  beautyandpersonalArray: Catogery[] = [];
  booksArray: Catogery[] = [];
  computerArray: Catogery[] = [];
  electronicArray: Catogery[] = [];
  womenfationArray: Catogery[] = [];
  menfationArray: Catogery[] = [];
  girlsfationArray: Catogery[] = [];
  boysfationArray: Catogery[] = [];
  healthandsholderArray: Catogery[] = [];
  homeandkithenArray: Catogery[] = [];
  industrialArray: Catogery[] = [];
  laggageArray: Catogery[] = [];
  moviesArray: Catogery[] = [];
  petArray: Catogery[] = [];
  softwareArray: Catogery[] = [];
  sportArray: Catogery[] = [];
  toolsArray: Catogery[] = [];
  toysArray: Catogery[] = [];
  videoArray: Catogery[] = [];
  dealsArray: Catogery[] = [];
  echoArray: Catogery[] = [];
  fiertabletArray: Catogery[] = [];
  fiertvArray: Catogery[] = [];
  appstoreArray: Catogery[] = [];
  smarthomeArray: Catogery[] = [];
  amazanphysicalArray: Catogery[] = [];

  constructor(private catogeryService: CatogeryServiceService) {
  }

  private seperation(cat: Catogery[]) {
    let x = 0;
    while (x < cat.length) {
      if (cat[x].departmentId == "D1000") {
        this.primeVideoArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1001") {
        this.musicArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1002") {
        this.digitalmusicArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1004") {
        this.kindleStoreArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1005") {
        this.artsandcraftArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1006") {
        this.automotiveArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1007") {
        this.babyArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1008") {
        this.beautyandpersonalArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1009") {
        this.booksArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1010") {
        this.computerArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1011") {
        this.electronicArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1012") {
        this.womenfationArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1013") {
        this.menfationArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1014") {
        this.girlsfationArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1015") {
        this.boysfationArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1016") {
        this.healthandsholderArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1017") {
        this.homeandkithenArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1018") {
        this.industrialArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1019") {
        this.laggageArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1020") {
        this.moviesArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1021") {
        this.petArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1022") {
        this.softwareArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1023") {
        this.sportArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1024") {
        this.toolsArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1025") {
        this.toysArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1026") {
        this.videoArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1027") {
        this.dealsArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1028") {
        this.echoArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1029") {
        this.fiertabletArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1030") {
        this.fiertvArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1031") {
        this.appstoreArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1032") {
        this.smarthomeArray.push(cat[x]);
      } else if (cat[x].departmentId == "D1033") {
        this.amazanphysicalArray.push(cat[x]);
      }
      x++;
    }
  }

  ngOnInit() {
    this.catogeryService.getAllCatogeries().subscribe(catogeries => {
      this.Catogeries = catogeries;
      console.log(this.Catogeries);
      this.seperation(this.Catogeries);
    });
  }


}
