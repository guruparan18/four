export class Movie {
//    _id : number;
/*
    id : number;
    name : string;
    displayName : string;
    displayShortLine: string;
    actors: string;
    director: string;
    poster_url: string;
*/
    constructor(
    public id : string,
    public name : string,
    public displayName : string,
    public displayShortLine: string,
    public actors: string,
    public director: string,
    public poster_url: string,
    public trailer_url: string,
    public tags: string
    ){};
};