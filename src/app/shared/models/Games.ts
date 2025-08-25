import { Tag } from "./Tag";

export class Games{
  id!:number; 
  name!:string;
  price!:number;
  tags?:Tag[];
  favorite?:boolean = false;
  stars?:number;
  imageUrl!:string;
  releaseDate!:string;
  description?:string;
}