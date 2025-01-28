"use client"

import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export default function Map() {
  useEffect(() => {
    const map = L.map("map").setView([13.0078, 77.703], 15)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    const customIcon = L.icon({
      iconUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20same1%20-xPI9ee8bVo7NWJWutvbt7215gr5sel.png",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    })

    L.marker([13.0078, 77.703], { icon: customIcon }).addTo(map).bindPopup("AL Studios HQ").openPopup()

    return () => map.remove()
  }, [])

  return <div id="map" className="w-full h-[400px] rounded-lg overflow-hidden" />
}

