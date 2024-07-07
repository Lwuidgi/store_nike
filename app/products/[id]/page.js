// // "use client";  // Indique que ce fichier utilise le rendering côté client

// import { useRouter } from "next/router";  // Importation de useRouter pour la navigation
// import Image from "next/image";  // Importation de Image pour gérer les images
// import Link from "next/link";  // Importation de Link pour les liens de navigation
// import { useState, useEffect } from "react";  // Importation des hooks useState et useEffect

// // Données des produits
// const products = [
//   {
//     id: 1,
//     title: "Nike Air Max Plus Male",
//     description: "Confort ultime avec la technologie Air Max.",
//     price: 210,  // Prix en tant que nombre
//     image: "/images/chaussure-air-max-plus-drift-pour-Mmd3rd.png",
//   },
//   {
//     id: 2,
//     title: "Nike Air max Plus Lucia",
//     description: "Classique intemporel avec un style moderne.",
//     price: 210,  // Prix en tant que nombre
//     image: "/images/chaussure-air-max-plus-pour-ado-HTm9RS.png",
//   },
// ];

// export default function ProductDetail() {
//   const router = useRouter();  // Initialisation du router
//   const { id } = router.query;  // Extraction de l'ID du produit depuis l'URL
//   const [product, setProduct] = useState(null);  // Initialisation de l'état pour le produit

//   useEffect(() => {
//     if (id) {
//       const foundProduct = products.find((p) => p.id === parseInt(id));  // Recherche du produit par ID
//       setProduct(foundProduct);  // Mise à jour de l'état avec le produit trouvé
//     }
//   }, [id]);  // Déclenchement de l'effet lorsqu'ID change

//   if (!product) {
//     return <p>Loading...</p>;  // Affichage du texte de chargement si le produit n'est pas encore chargé
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
//         <Image
//           src={product.image}
//           alt={product.title}
//           width={500}
//           height={400}
//           className="object-cover rounded-md"
//         />
//         <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
//         <p className="text-gray-600 mt-2">{product.description}</p>
//         <p className="text-lg font-bold mt-4">{product.price} €</p>
//         <button
//           onClick={() => alert("Product added to cart")}  // Placeholder pour l'ajout au panier
//           className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
//         >
//           Ajouter au Panier
//         </button>
//       </div>
//       <div className="mt-4 text-center">
//         <Link href="/" className="text-blue-600 hover:underline">
//           Retour à l'accueil
//         </Link>
//       </div>
//     </main>
//   );
// }

"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import products from "app/data/products";  

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={400}
          className="object-cover rounded-md"
        />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-bold mt-4">{product.price} €</p>
        <button
          onClick={() => alert("Produit ajouté au panier")}
          className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Ajouter au Panier
        </button>
      </div>
      <div className="mt-4 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
