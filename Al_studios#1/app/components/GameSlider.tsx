import Image from "next/image"

const games = [
  { name: "Cyber Quest", image: "/placeholder.svg", genre: "Action RPG" },
  { name: "Pixel Warriors", image: "/placeholder.svg", genre: "Fighting" },
  { name: "Retro Racer", image: "/placeholder.svg", genre: "Racing" },
  { name: "Space Explorer", image: "/placeholder.svg", genre: "Adventure" },
  { name: "8-Bit Battles", image: "/placeholder.svg", genre: "Strategy" },
]

export default function GameSlider() {
  return (
    <div className="overflow-hidden my-8">
      <div className="sliding-content flex">
        {[...games, ...games].map((game, index) => (
          <div key={index} className="flex-shrink-0 w-80 mx-4">
            <div className="retro-panel p-4">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.name}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="font-press-start-2p text-lg text-white mb-2">{game.name}</h3>
              <p className="text-purple-300">{game.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

