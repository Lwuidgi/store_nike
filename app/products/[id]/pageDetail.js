"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Air Max 1",
    description: "Confort ultime avec la technologie Air Max au feminin.",
    price: "210 €",
    image: "/images/chaussure-air-max-1.jpg",
  },
  {
    id: 2,
    title: "Air Max 2",
    description: "Confort ultime avec la technologie Air Max au masculin.",
    price: "210 €",
    image: "/images/chaussure-air-max-2.jpg",
  },
];

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
        <p className="text-lg font-bold mt-4">{product.price}</p>
        <button
          onClick={() => alert("Product added to cart")}
          className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}
