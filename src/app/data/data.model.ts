export class State{
    id:number;
    value:string;
    text?:string;
}

export class River{
    id:number;
    value:string;
    text?:string;
}

export class image{
    id:number;
    value:string;
    text?:string;
}

export class year{
    id:number;
    value:string;
    text?:string;
}

export class loc{
    id:number;
    lat:number;
    lng:number;
    city?:string;
    state?:string;
    river?:string;
}
export const LOC: loc[] = [
    {
        id:1,
        lat:16.5062,
        lng:80.6480,
        city:'Vijayawada',
        river:'Godavari',
        state:'AP'
//25.5941° N, 85.1376° E
     },
     {
        id:2,
        lat:25.5941,
        lng:85.1376,
        city:'Patna',
        river:'Ganga',
        state:'Bihar'
       // 26.1445° N, 91.7362° E
     },
     {
        id:3,
        lat:26.1445,
        lng:91.7362,
        city:'Guwahati',
        river:'Brahmputra',
        state:'Assam'
       // 26.1445° N, 91.7362° E
     }
    ]


export const YR: year[] = [
    {
        id:1,
        value:'2015'
     },
     {
         id:2,
         value:'2016'
      },
      {
          id:3,
          value:'2017'
       }
    ]

export const IMG: image[] = [
    {
        id:1,
        value:'/assets/images/cm001.png'
     },
     {
        id:2,
        value:'/assets/images/cm001.png'
     }
    ]
export const RIV: River[] = [
    {
        id:1,
        value:'Godavari'
     }]
export const ST: State[] = [
    {
        id:1,
        value:'Kerala'
    
     },
     {
         id:2,
         value:'AP'
      },
      {
          id:3,
          value:'Telangana'
       }

]
export class FormData {
    
    userid: string = '';
    location : string = '';
    description: string = '';
    river: string = '';
    year: string = '';
    state: string = '';


    clear() {
        
        this.userid = '';
        this.location = '';
        this.description = '';
        this.river = '';
        this.year = '';
    
    }
}

