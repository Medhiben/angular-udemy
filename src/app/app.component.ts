import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*styles: [`
  h3 {
    color: dodgerblue;
  }
  `]*/
})
export class AppComponent {
  title = "Livres"; 
  //username = '';
  showSecret = false;
  log = [];
  useStyle = false;
  soccers = [{ name: 'Messi', age: 34, goals: 50 }, { name: 'Ronaldo', age: 37, goals: 40 }, { name: 'Mbappe', age: 23, goals: 56 }];
  colorId: number;
  colorH1: boolean;
  colorI: number;
  colorText: boolean;
  colorLi: boolean;

  onToogleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  displayText() {
    this.useStyle = !this.useStyle;
  }

  displayColor() {
    this.colorH1 = !this.colorH1;
  }

  getSizes() {
    this.colorLi = !this.colorLi;
    if(this.colorLi === true){
      return 40 + 'px';
    }else {
      return 14 + 'px';
    }
  }

  displayColorText() {
    this.colorText = !this.colorText;
    return this.colorText === true ? 'green' : 'white';
  }

  getSize() {
    if (this.colorH1 === true) {
      return 100 + 'px';
    } else {
      return 36 + 'px';
    }
    

  }
}

