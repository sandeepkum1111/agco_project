export interface Comic{
    id:number,
    name:string,
    genre:string,
    excerpt:string,
    writtenby:string,
    publisher:string,
}

export interface ComicModel{
    list:Comic[],
    comicobj:Comic,
    errormessage:string
}