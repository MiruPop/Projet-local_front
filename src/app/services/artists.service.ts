import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { Artist } from "../models/artist.model";

@Injectable({
    providedIn: 'root'
})
export class ArtistsService {

    artists: Artist[] = [
        {
            id: 1,
            nom: 'Malodepaname',
            activite: 'collages',
            description: 'Malodepaname est Dyonisienne. De part son enfance et son parcours, ' +
                'l’image a toujours fait partie de sa vie, et le collage s’est avéré une suite logique. ' +
                'Elle récupère toutes sortes de papiers, photos, journaux, affiches, papier-peint… ' +
                'Et les découpes, les détournes, les assembles. Au fil du temps, une galerie de portraits ' +
                '(mais pas que) à vu le jour. avec un prénom à chaque fois, comme pour les rendre plus vivants. ' +
                'Un univers assez féminin, décliné sur différents objets selon son envie de l’accrocher' +
                'ou de l’emporter avec soi.',
            imageUrl: 'https://i.postimg.cc/0N5RX4T2/malo-elodie.jpg',
            email: 'malodepaname@gmail.com',
            webLink: 'https://www.etsy.com/fr/shop/malodepaname',
            facebookLink: 'https://www.facebook.com/malodepaname/',
            instagramLink: '@malodepaname'
        },
        {
            id: 2,
            nom: 'Unica Séries',
            activite: 'sérigraphie',
            description: 'Unica Series est un atelier de création et sérigraphie qui imagine une multitude d\'objets, vêtements,' +
                ' tableaux, affiches... en série limitée. Les sérigraphies d\'Antoine Petit, aux couleurs vives et acidulées,' +
                ' sur des pochettes et autres couvre-livres, attirent immédiatement le regard. ' +
                '« J’aime travailler sur des objets usuels : toiles de transat, abat-jours, hamac… Comme il est plus facile de' +
                ' vendre un objet peint qu’un tableau, alors je fais des tableaux sur des objets. »' +
                ' Antoine donne régulièrement des cours individuels dans son atelier et organise des démonstration pour le public de tous âges.',
            imageUrl: '/assets/images/unica_Antoine.jpg',
            email: 'aantoinepetit@gmail.com',
            webLink: 'https://i.postimg.cc/K4P0rZQc/unica-Antoine.jpg',
            facebookLink: 'https://www.facebook.com/unicaserigraphie',
            instagramLink: '@unicaseries'
        },
        {
            id: 3,
            nom: 'De carton et d\'étoiles',
            activite: 'objets impertinents',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium '+
            'consequatur quasi, praesentium et quis id corporis fuga. Deserunt dolorum error, cupiditate laboriosam'+
            ' earum laborum recusandae alias distinctio impedit vel.',
            imageUrl: 'https://i.postimg.cc/66mxQzDy/carton.jpg',
            email: 'aantoinepetit@gmail.com',
            webLink: 'https://unica-series-blog.tumblr.com/',
            facebookLink: 'https://www.facebook.com/unicaserigraphie',
            instagramLink: '@unicaseries'
        }
    ]

    getAllArtists(): Artist[] {
        return this.artists;
    }

    getArtistById(id: number): Observable<Artist> {
        const artist = this.artists.find(artist => artist.id === id);
        return of(artist);
    }

    // getArtistById(id: number): Artist {
    //     const artist = this.artists.find(artist => artist.id === id);
    //     if (!artist) {
    //         throw new Error('Artist not found !');
    //     } else {
    //         return artist;
    //     }
    // }
}