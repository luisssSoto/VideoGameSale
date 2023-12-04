import { Injectable } from '@angular/core';
import { HousingLocation} from './housing-location';
// import { MostDownloaded}

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      title: 'Halo Infinite',
      description: 'Action',
      releaseDate: '2010',
      image: '../assets/halo.jpg',
      rating: 3,
      downloads: 500_000,
      comingSoon: false
    },
    {
      id: 1,
      title: 'Minecraft',
      description: 'Adventure',
      releaseDate: '2011',
      image: '../assets/minecraft.jpg',
      rating: 5,
      downloads: 700_000,
      comingSoon: false
    },
    {
      id: 2,
      title: 'Red Dead Redemption',
      description: 'Action',
      releaseDate: '2024',
      image: '../assets/red-dead-redemption.jpg',
      rating: 3,
      downloads: 0,
      comingSoon: true
    }
      ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getBetterRating(): HousingLocation[] {
    let betterRating = [];
    for (let index = 0; index < this.housingLocationList.length; index++) {
      const element = this.housingLocationList[index];
      if (element.rating >= 4) {
        betterRating.push(element);
      }
    }
    return betterRating;
  }

  getMostDownloaded(): HousingLocation[] {
    let mostDownloaded = [];
    for (let index = 0; index < this.housingLocationList.length; index++) {
      const element = this.housingLocationList[index];
      if(element.downloads > 100){
        mostDownloaded.push(element);
      } 
    }
    return mostDownloaded;
  }

  getComingSoon(): HousingLocation[]{
    let comingSoon = [];
    for (let index = 0; index < this.housingLocationList.length; index++) {
      const element = this.housingLocationList[index];
      if(element.comingSoon === true){
        comingSoon.push(element);
      }
    }
    return comingSoon;
  }

  addingNewOne(title: string, description: string, releaseDate: string, image: string, rating: number, downloads: number, comingSoon: boolean ){
    let id = this.housingLocationList.length;
    let newVideoGame = {id, title, description, releaseDate, image, rating, downloads, comingSoon};
    this.housingLocationList.push(newVideoGame);
    alert(`The videogame: ${title} was added to the library`);
    return this.housingLocationList
    }

  submitRegister(name: string, email: string, password: string, confirmPasword: string){
    alert(`Your register was succesful`)

  }

  submitSignIn(email: string, password: string){
    alert(`Welcome again ${email}, we hope enjoy your visit`)
  }
  
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    alert(`Good choice, we will notify you to this email: ${email} when we have the game in our store: ${firstName} ${lastName}.`);
  }

}
