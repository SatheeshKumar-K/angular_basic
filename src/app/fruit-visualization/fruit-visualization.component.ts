import { Component, OnInit } from '@angular/core';
import { CustomApiService } from '../custom-api-service.service';

export interface Fruit {
  fruit: string;
  count: number;
}

@Component({
  selector: 'app-fruit-visualization',
  templateUrl: './fruit-visualization.component.html',
  styleUrls: ['./fruit-visualization.component.css']
})
export class FruitVisualizationComponent implements OnInit {
  fruitData: any[] = [];
  fruitCounts: any = {};
  selectedFruit: string = '';
  sortedFruits: Fruit[] = []; 
  isLoading: boolean = true;

  constructor(private customApiService: CustomApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      const data = await this.customApiService.getFavoriteFruits();
      this.fruitData = data;
      console.log(data)
      this.aggregateFruitCounts();
      this.sortedFruits = this.sortFruitsByPopularity();
      this.isLoading = false;
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  aggregateFruitCounts(): void {
    this.fruitCounts = this.fruitData.reduce((acc: any, person: any) => {
      if (!acc[person.favoriteFruit]) {
        acc[person.favoriteFruit] = 0;
      }
      acc[person.favoriteFruit]++;
      return acc;
    }, {});
    console.log(this.fruitCounts,"fruitCounts")
  }

  sortFruitsByPopularity(): Fruit[] {  
    return Object.entries(this.fruitCounts)
      .map(([fruit, count]) => ({ fruit, count: count as number }))  
      .sort((a: Fruit, b: Fruit) => b.count - a.count); 
  }

  onBarClick(fruit: string): void {
    this.selectedFruit = fruit;
    console.log(`Fruit selected: ${fruit}, ${this.fruitCounts[fruit]}`);
  }

  filterListByFruit(fruit: string): any[] {
    return this.fruitData.filter(person => person.favoriteFruit === fruit);
  }
}