import Image from "next/image";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md sticky top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 hover:opacity-95 transition">
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/images/singapore-logo.jpg"
                alt="Government Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl text-red-700 leading-tight">
                Ministry of Health
                <br />
                Singapore
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-gray-700 font-medium text-sm">
            <div className="hidden md:flex space-x-6">
              {["Home", "Updates", "Resources", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-red-600 hover:underline underline-offset-4 transition duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
            <Search className="w-6 h-6 cursor-pointer text-gray-700 hover:text-red-600" />
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="px-6 pt-28 pb-16 flex flex-col justify-center items-center max-w-3xl mx-auto">
        <section className="bg-white shadow-lg rounded-lg p-6 sm:p-10 w-full">
          {/* Official Notice */}
          <p className="text-gray-800 text-xl leading-relaxed mb-6">
            Due to the escalating situation regarding COVID-19, the Ministry of Health has mandated the temporary closure of all higher education institutions across Singapore. This directive is aimed at ensuring public safety and reducing the transmission of the virus.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Students are advised to stay updated through their university portals and follow official guidelines provided by the health ministry.
          </p>

          {/* International Students Section */}
          <h2 className="text-xl font-semibold text-red-700 mt-8 mb-4">Instructions for International Students</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Arrange return travel to your home country as soon as possible.</li>
            <li>Notify your academic department about your departure.</li>
            <li>Follow local quarantine regulations upon return.</li>
          </ul>

          {/* Health Guidelines Section */}
          <h2 className="text-xl font-semibold text-red-700 mt-10 mb-4">Health & Safety Guidelines</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Always wear a mask in public areas.</li>
            <li>Maintain at least 1-meter social distance.</li>
            <li>Wash your hands frequently with soap.</li>
            <li>Avoid non-essential travel and gatherings.</li>
          </ul>

          {/* Footer Info */}
          <div className="flex items-center space-x-4 mt-10">
            <div>
              <p className="text-sm text-gray-500 font-semibold">Date:</p>
              <p className="text-gray-700 text-base">28 May 2025</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-6 italic">
            Source: Ministry of Health, Singapore — official website
          </p>
        </section>
      </main>
    </div>
  );
}
