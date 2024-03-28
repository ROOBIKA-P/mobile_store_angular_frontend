export class Product {
    constructor(public id?: number,
        public brandName?: string,
        public modelName?:string,
        public price?: number,
        public color?:string,
        public quantity:number=1) { 
            
        };
}