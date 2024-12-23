import Image from 'next/image';
import product from "@/images/earpiece.jpg"

export default function ProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={product}
        alt="Product"
        width={400}
        height={300}
        className="w-full h-79 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Wireless Headphones</h3>
        <p className="text-sm text-gray-600 mt-1">
          Experience high-quality sound with noise cancellation.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">$199</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
