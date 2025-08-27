import { Tag } from "./Tag";

export class Games{
  gameId!:number; 
  gameName!:string;
  gamePrice!:number;
  tags?:Tag[];
  favorite?:boolean = false;
  gameImageUrl!:string;
  releaseDate!:string;
  description?:string;
}