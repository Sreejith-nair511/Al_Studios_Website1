import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-pastel-green p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 Game Studio. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

