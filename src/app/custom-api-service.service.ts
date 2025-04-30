import { Injectable } from '@angular/core';
declare var window: any;


@Injectable({
  providedIn: 'root'
})
export class CustomApiService {

  constructor() { }

  getFavoriteFruits(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      try {
        window.CustomApi.get((data: any) => {
          console.log(data,"http response")
          resolve(data);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
