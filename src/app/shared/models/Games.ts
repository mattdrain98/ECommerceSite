export class Games{
  id!:number; 
  name!:string;
  price!:number;
  tags?:string[];
  favorite?:boolean = false;
  stars?:number;
  imageUrl!:string;
  releaseDate!:string;
  description?:string;
}