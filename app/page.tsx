import Image from "next/image";
import { Search } from "lucide-react"; // Assuming you want to use this icon somewhere

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar with sticky positioning */}
      <nav className="w-full bg-white shadow-md sticky top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Ministry Heading */}
          <div className="flex items-center gap-4 hover:opacity-95 transition">
            {/* Responsive logo */}
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

          {/* Navbar links + search icon */}
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
            {/* Search icon on right */}
            <Search className="w-6 h-6 cursor-pointer text-gray-700 hover:text-red-600" />
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <main className="px-6 pt-28 pb-16 flex flex-col justify-center items-center max-w-3xl mx-auto">
        <section className="bg-white shadow-lg rounded-lg p-10 w-full">
          <p className="text-gray-800 text-xl leading-relaxed mb-6">
            All colleges in Singapore are temporarily closed due to the recent spread of COVID-19.
            The government advises all international students to return to their home countries immediately.
          </p>

          <div className="flex items-center space-x-4 mt-8">
        
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
