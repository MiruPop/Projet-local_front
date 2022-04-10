import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProductsService {

    products : Product[] = [
        {
          id : 1,
          title : "Jade",
          subtitle : "Cadre, 30x40 cm",
          description : "Realisé d’après une création de collage originale. Imprimé sur papier fine art william Turner en série limitée",
          category : "Décoration",
          artist : "Malodepaname",
          price : 35.0,
          quantity : 3,
          imageURL : "https://i.etsystatic.com/7711299/r/il/62362a/2903864812/il_794xN.2903864812_1zsg.jpg"
        },
        {
          id : 2,
          title : "Dora",
          subtitle : "Badge, 56 mm",
          description : "Realisé d’après une création de collage originale.",
          category : "Bijoux",
          artist : "Malodepaname",
          price : 4.0,
          quantity : 10,
          imageURL : "https://i.etsystatic.com/7711299/r/il/2197af/1365403972/il_794xN.1365403972_3nxu.jpg"
        },
        {
          id : 3,
          title : "Smile",
          subtitle : "Housse de coussin, 45x45 cm",
          description : "Realisé d’après une création de collage originale. Imprimé sur cotton 100%.",
          category : "Décoration",
          artist : "Malodepaname",
          price : 35.0,
          quantity : 10,
          imageURL : "https://i.etsystatic.com/7711299/r/il/4eec08/2206354387/il_794xN.2206354387_ifkv.jpg"
        },
        {
          id : 4,
          title : "Angèle",
          subtitle : "Trousse, 21x14 cm",
          description : "Realisé d’après une création de collage originale. Imprimé sur cotton 100%.",
          category : "Divers",
          artist : "Malodepaname",
          price : 19.0,
          quantity : 8,
          imageURL : "https://i.etsystatic.com/7711299/r/il/b79d0e/3385153005/il_794xN.3385153005_6qao.jpg"
        }
      ];

      getAllProducts(): Product[] {
          return this.products;
      }

      getProductById(id:number) :Observable<Product> {
        const product = this.products.find(product => product.id === id);
          return of(product);
      }
  }