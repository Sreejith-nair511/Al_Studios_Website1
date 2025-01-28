import { Users, Gamepad, MapPin, Palette } from "lucide-react"

export default function CompanyDashboard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <div className="retro-panel flex flex-col items-center justify-center p-4">
        <Users size={32} className="text-purple-400 mb-2" />
        <h3 className="font-press-start-2p text-lg text-white">Team</h3>
        <p className="text-purple-300 text-2xl font-bold">9</p>
      </div>
      <div className="retro-panel flex flex-col items-center justify-center p-4">
        <Gamepad size={32} className="text-purple-400 mb-2" />
        <h3 className="font-press-start-2p text-lg text-white">Games</h3>
        <p className="text-purple-300 text-2xl font-bold">10</p>
      </div>
      <div className="retro-panel flex flex-col items-center justify-center p-4">
        <MapPin size={32} className="text-purple-400 mb-2" />
        <h3 className="font-press-start-2p text-lg text-white">Made in</h3>
        <p className="text-purple-300 text-xl font-bold">India</p>
      </div>
      <div className="retro-panel flex flex-col items-center justify-center p-4">
        <Palette size={32} className="text-purple-400 mb-2" />
        <h3 className="font-press-start-2p text-lg text-white">Art Support</h3>
        <p className="text-purple-300 text-xl font-bold">Full</p>
      </div>
    </div>
  )
}

