import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClosestRoommatesService {
  private closestRoommates: any ;

  constructor() { }

  setClosestRoommates(data: any): void {
    this.closestRoommates = data;
  }

  getClosestRoommates(): any {
    return this.closestRoommates;
  }
}