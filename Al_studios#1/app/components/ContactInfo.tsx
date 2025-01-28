import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="retro-panel flex flex-col items-center p-6">
        <Phone size={32} className="text-purple-400 mb-4" />
        <h3 className="font-press-start-2p text-lg text-white mb-2">Phone</h3>
        <p className="text-purple-300">+91 1234567890</p>
      </div>

      <div className="retro-panel flex flex-col items-center p-6">
        <Mail size={32} className="text-purple-400 mb-4" />
        <h3 className="font-press-start-2p text-lg text-white mb-2">Email</h3>
        <p className="text-purple-300">contact@alstudios.com</p>
      </div>

      <div className="retro-panel flex flex-col items-center p-6">
        <MapPin size={32} className="text-purple-400 mb-4" />
        <h3 className="font-press-start-2p text-lg text-white mb-2">Address</h3>
        <p className="text-purple-300 text-center">
          KR Puram, Bangalore
          <br />
          PIN: 560037
        </p>
      </div>
    </div>
  )
}

