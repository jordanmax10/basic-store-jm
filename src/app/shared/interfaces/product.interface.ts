// // PRIMERA API
// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   creationAt: string; // Puedes usar Date si prefieres manejar fechas
//   updatedAt: string; // Puedes usar Date si prefieres manejar fechas
//   category: Category;
// }

// export interface Category {
//   id: number;
//   name: string;
//   image: string;
//   creationAt: string; // Puedes usar Date si prefieres manejar fechas
//   updatedAt: string; // Puedes usar Date si prefieres manejar fechas
// }


// SEGUNDA API

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


export interface ProductItemCart{
  product: Product; //Producto
  quantity: number; //Cantidad de productos
}