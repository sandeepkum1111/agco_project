import { ComicModel } from "../Model/Comic.model";

export const ComicState:ComicModel={
    list:[],
    errormessage:'',
    comicobj:{
        id: 0,
        name: "",
        genre: "",
        excerpt: "",
        writtenby: "",
        publisher: "",
    }
}