//  "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import products from "../data/products";  // Chemin relatif au fichier de données

// // const products = [
// //   {
// //     id: 1,
// //     title: "Nike Air Max Plus Male",
// //     description: "Confort ultime avec la technologie Air Max.",
// //     price: 210,
// //     image: "/images/chaussure-air-max-plus-drift-pour-Mmd3rd.png",
// //   },
// //   {
// //     id: 2,
// //     title: "Nike Air max Plus Lucia",
// //     description: "Classique intemporel avec un style moderne.",
// //     price: 210,
// //     image: "/images/chaussure-air-max-plus-pour-ado-HTm9RS.png",
// //   },
// // ];

// export default function Home() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartItems(storedCartItems);
//   }, []);

//   const addToCart = (product) => {
//     // Vérifie si le produit existe déjà dans le panier
//     const existingProduct = cartItems.find((item) => item.id === product.id);
//     let updatedCartItems;
//     if (existingProduct) {
//       // Si le produit existe déjà, augmente sa quantité
//       updatedCartItems = cartItems.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//     } else {
//       // Si le produit n'existe pas, ajoute-le avec une quantité initiale de 1
//       updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
//     }
//     setCartItems(updatedCartItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Met à jour le stockage local
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-100">
//       {/* Header */}
//       <header className="w-full max-w-5xl flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
//         <h1 className="text-2xl font-bold">Nike Store</h1>
//         <div className="relative">
//         <Link href="/cart" className="relative">
//           <ShoppingCartIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1">
//               {cartItems.length}
//             </span>
//           )}
//         </Link>


//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1">
//               {cartItems.reduce((acc, item) => acc + item.quantity, 0)} {/* Affiche le nombre total d'articles */}
//               </span>
//           )}
//         </div>
//       </header>

//       {/* Product List */}
//       <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//             <Link href={`/products/${product.id}`}>  {/* Lien vers la page de détails du produit */}
//               <Image src={product.image} alt={product.title} width={300} height={200} className="object-cover rounded-md" />
//               <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
//               <p className="text-gray-600 mt-2">{product.description}</p>
//               <p className="text-lg font-bold mt-2">{product.price} €</p>
//             </Link>

//             <button
//               onClick={() => addToCart(product)}
//               className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
//             >
//               Ajouter au Panier
//             </button>
//           </div>
//         ))}
//       </section>

//       {/* Footer */}
//       <footer className="w-full max-w-5xl mt-8 p-4 bg-white shadow-md rounded-lg text-center">
//         <p className="text-gray-700">© 2024 Nike Store</p>
//       </footer>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import products from "app/data/products";  // Chemin relatif au fichier de données

export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    let updatedCartItems;
    if (existingProduct) {
      updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-100">
      <header className="w-full max-w-5xl flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold">Nike Store</h1>
        <div className="relative">
          <Link href="/cart" className="relative">
            <ShoppingCartIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </header>

      <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link href={`/products/${product.id}`}>
              <Image src={product.image} alt={product.title} width={300} height={200} className="object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold mt-2">{product.price} €</p>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Ajouter au Panier
            </button>
          </div>
        ))}
      </section>

      <footer className="w-full max-w-5xl mt-8 p-4 bg-white shadow-md rounded-lg text-center">
        <p className="text-gray-700">© 2024 Nike Store</p>
      </footer>
    </main>
  );
}
