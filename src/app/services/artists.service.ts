import { Artist } from "../models/artist.model",

@Injectable({
    providedIn: 'root'
})
export class ArtistsService {

    artists: Artist[] = [
        {
            id: 1,
            nom: 'Malodepaname',
            activite: 'collages',
            description: 'Malodepaname est Dyonisienne. De part son enfance et son parcours, '+
            'l’image a toujours fait partie de sa vie, et le collage s’est avéré une suite logique. '+
            'Elle récupère toutes sortes de papiers, photos, journaux, affiches, papier-peint… '+
            'Et les découpes, les détournes, les assembles. Au fil du temps, une galerie de portraits '+
            '(mais pas que) à vu le jour. avec un prénom à chaque fois, comme pour les rendre plus vivants. '+
            'Un univers assez féminin, décliné sur différents objets selon son envie de l’accrocher'+
            'ou de l’emporter avec soi.',
            imageUrl: 'https://i.pinimg.com/280x280_RS/79/93/81/799381e76f3479b53ce23592e3a3c021.jpg',
            email: 'malodepaname@gmail.com',
            webLink: 'https://www.etsy.com/fr/shop/malodepaname',
            facebookLink: 'https://www.facebook.com/malodepaname/',
            instagramLink: '@malodepaname'
        },
        {
            id: 2,
            nom: 'Unica Séries',
            activite: 'sérigraphie',
            description: 'Unica Series est un atelier de création et sérigraphie qui imagine une multitude d\'objets, vêtements,'+
            ' tableaux, affiches... en série limitée. Les sérigraphies d\'Antoine Petit, aux couleurs vives et acidulées,'+
            ' sur des pochettes et autres couvre-livres, attirent immédiatement le regard. '+
            '« J’aime travailler sur des objets usuels : toiles de transat, abat-jours, hamac… Comme il est plus facile de'+
            ' vendre un objet peint qu’un tableau, alors je fais des tableaux sur des objets. »'+
            ' Antoine donne régulièrement des cours individuels dans son atelier et organise des démonstration pour le public de tous âges.',
            imageUrl: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.18172-8/964065_10201186004360263_1831850626_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=4j64GBQWRaoAX9KZFJI&_nc_ht=scontent-cdg2-1.xx&oh=00_AT8adQ2MI0ciBCCmJuaK5dRok_eDYxSr8fP2xCpf4vg_8A&oe=627704FD',
            email: 'aantoinepetit@gmail.com',
            webLink: 'https://unica-series-blog.tumblr.com/',
            facebookLink: 'https://www.facebook.com/unicaserigraphie',
            instagramLink: '@unicaseries'
        }
    ]
}