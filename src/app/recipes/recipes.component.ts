import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  Image1: string =
  'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg';
  Image2: string ='https://www.allrecipes.com/thmb/xHBuon0awT1mhSciCN_r_qe1KQQ=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/20144-banana-banana-bread-mfs-60-bddcb8e0caac452386de52f6fecf33db.jpg'
watchProperty: boolean = false;
movieDescroption =
  'Spider-Man: Far From Home is a 2019 American superhero film based on the Marvel Comics character Spider-Man...';

constructor() {}

ngOnInit(): void {}

showDetails() {
  alert(this.movieDescroption);
}

}
