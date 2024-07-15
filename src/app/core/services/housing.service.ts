import { Injectable, NgModule } from '@angular/core';
import { HousingLocation } from '../../shared/interfaces/housing-location.interface';
import { DATA_HOUSE } from '../../shared/constants';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    // const data = await fetch(this.url);
    // return (await data.json()) ?? [];
    return (await DATA_HOUSE.locations) ?? [];
  }
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    // const data = await fetch(this.url);
    // const locations = (await data.json()) ?? [];
    const locations = DATA_HOUSE.locations;
    const result = locations.find(
      (location: HousingLocation) => location.id === id
    );
    return result;
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }

  async addHousingLocation(location: HousingLocation): Promise<void> {
    // const data = await fetch(this.url, {
    //   method: 'POST',
    //   body
    DATA_HOUSE.locations.push(location);
  }
}
