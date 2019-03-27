import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  roomLabel: number;
  adultsLabel: number;
  childrenLabel: number;
  valDifference: number;
  countDifference: number;
  roomDecrement = true;
  ngOnInit() {
    this.roomLabel = 1;
    this.adultsLabel = 2;
    this.childrenLabel = 0;
  }
  //Incrementing the room count
  roomPlus() {
    if (this.roomLabel > 1) {
      this.roomDecrement = false;
    }

    if (this.roomLabel < 5) {
      if (this.adultsLabel <= this.roomLabel) {
        this.roomLabel = this.roomLabel + 1;
        this.adultsLabel = this.adultsLabel + 1;
      }
      else
        this.roomLabel = this.roomLabel + 1;
    }
    else if (this.roomLabel >= 5) {
      alert("Maximum number of rooms can be 5 only")
    }
  }
  //Decrement the room count
  roomMinus() {
    if (this.roomLabel == 1) {
      this.roomDecrement = true;
    }
    if ((this.adultsLabel + this.childrenLabel) < this.roomLabel) {
      alert("Number of persons should be greater than or equal to number of rooms")
    }
    else if (this.roomLabel > 1) {
      if (((this.roomLabel - 1) * 4) < (this.adultsLabel + this.childrenLabel)) {
        this.valDifference = (this.adultsLabel + this.childrenLabel) - ((this.roomLabel - 1) * 4);
        if (this.childrenLabel) {
          if (this.childrenLabel >= this.valDifference) {
            this.childrenLabel = this.childrenLabel - this.valDifference;
          }
          else if (this.childrenLabel < this.valDifference) {
            this.countDifference = this.valDifference - this.childrenLabel;
            this.childrenLabel = this.childrenLabel - this.childrenLabel;

            if (this.adultsLabel) {
              if (this.adultsLabel >= this.countDifference) {
                this.adultsLabel = this.adultsLabel - this.countDifference;
              }
              else if (this.adultsLabel < this.countDifference) {
                this.adultsLabel = this.adultsLabel - this.adultsLabel;
              }
            }
          }
        }
        else if (this.adultsLabel) {
          if (this.adultsLabel >= this.valDifference) {
            this.adultsLabel = this.adultsLabel - this.valDifference;
          }
          else if (this.adultsLabel < this.valDifference) {
            this.adultsLabel = this.adultsLabel - this.adultsLabel;
          }
        }
      }
      this.roomLabel--;
    }

  }
  //Incresing the count of adults
  adultsPlus() {
    var rooms = this.roomLabel;
    var adults = this.adultsLabel;
    var children = this.childrenLabel;
   
    if (((adults + children) / rooms) >= 4) {
      alert("Maximum number of persons in one room is 4")
    }
    else
      this.adultsLabel++;
  }
  //Decrementing the count of adults
  adultsMinus() {

    if ((this.adultsLabel + this.childrenLabel) <= this.roomLabel) {
      alert("Number of persons should be greater than or equal to number of rooms")
    }
    else if (this.adultsLabel > 1) {
      this.adultsLabel--;
    }
  }

  //Increasing the count of children
  childrenPlus() {
    var rooms = this.roomLabel;
    var adults = this.adultsLabel;
    var children = this.childrenLabel;
    if (children < 4) {
      if (((adults + children) / rooms) < 4) {
        this.childrenLabel++;
      }
      else
        alert("Maximum number of persons in one room is 4")
    }
    if (children >= 4) {
      if (this.roomLabel == 1) {
        alert("Maximum number of persons in one room is 4")
      }
      else if (((adults + children) / rooms) >= 4) {
        alert("Maximum number of persons in one room is 4")
      }
      else if (((adults + children) / rooms) < 4)
        this.childrenLabel++;
    }
  }
  //Decrementing the count of children
  childrenMinus() {
    if ((this.adultsLabel + this.childrenLabel) <= this.roomLabel) {
      alert("Number of persons should be greater than or equal to number of rooms")
    }
    else if (this.childrenLabel >= 1) {
      this.childrenLabel--;
    }
  }
}

