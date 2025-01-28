import Image from "next/image"

const products = [
  { name: "Retro Console", price: "$199.99", image: "/retro-console.jpg" },
  { name: "Pixel Art T-Shirt", price: "$24.99", image: "/pixel-tshirt.jpg" },
  { name: "8-Bit Mug", price: "$14.99", image: "/8bit-mug.jpg" },
  { name: "Vintage Gaming Poster", price: "$19.99", image: "/vintage-poster.jpg" },
]

export default function Shop() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-press-start-2p mb-8 text-center text-white glow-text">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="retro-panel p-4">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-press-start-2p text-white mb-2">{product.name}</h2>
            <p className="text-purple-300">{product.price}</p>
            <button className="retro-button mt-4 w-full">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

