import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function EngineerCV() {
  return (
    <div className="max-w-[210mm] mx-auto p-4 bg-white text-gray-800">
      <header className="mb-3">
        <h1 className="text-2xl font-bold mb-0.5">German Lungo</h1>
        <h2 className="text-lg text-gray-600 mb-1">Senior Game Developer</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          <Link href="/" className="flex items-center gap-1 text-blue-600 hover:underline">
            View portfolio
          </Link>
          <a href="mailto:g.lungo.m@gmail.com" className="flex items-center gap-1">
            <Mail className="h-3 w-3" />
            g.lungo.m@gmail.com
          </a>
          <a href="tel:+59899818577" className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            +598 99 818577
          </a>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            Montevideo, Uruguay
          </span>
        </div>
      </header>

      <section className="mb-3">
        <div className="border border-gray-300 bg-gray-50 p-2 rounded text-xs">
          <p>
            Generalist developer, experienced in development for all platforms, with deep knowledge in Unity and C++,
            experienced in live services, game-devops and CI/CD pipelines.
            Dedication and curiosity are the traits that best define me, constantly learning and striving for betterment.
          </p>
        </div>
      </section>

      <section className="mb-3">
        <h3 className="text-lg font-semibold mb-1">Experience</h3>
        
        <div className="mb-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm font-medium">Technical Lead - Rocket League (Contractor through Globant)</h4>
            <p className="text-xs text-gray-600">2024 - Present</p>
          </div>
          <ul className="list-disc pl-4 my-0.5 text-xs">
            <li>Systems Architecture, Gameplay Development</li>
            <li>Optimization</li>
            <li>Mentoring</li>
            <li>Live Ops</li>
          </ul>
          <p className="text-xs">
            <span className="font-medium">Technologies: </span>
            <span className="text-gray-600">C++, Unreal Engine 3</span>
          </p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm font-medium">Senior Game Developer - Synthesis School</h4>
            <p className="text-xs text-gray-600">2023 - 2024</p>
          </div>
          <ul className="list-disc pl-4 my-0.5 text-xs">
            <li>Prototyping, design and execution of multiplayer minigames</li>
            <li>Live Ops</li>
          </ul>
          <p className="text-xs">
            <span className="font-medium">Technologies: </span>
            <span className="text-gray-600">NodeJS, PixiJS, NextJS, Collyseus, Unity</span>
          </p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm font-medium">Senior Game Developer - The Sandbox</h4>
            <p className="text-xs text-gray-600">2022 - 2023</p>
          </div>
          <ul className="list-disc pl-4 my-0.5 text-xs">
            <li>Game Engine development</li>
            <li>Tool Development</li>
            <li>Maintenance and improvement of CI/CD pipelines</li>
            <li>Build Engineering</li>
          </ul>
          <p className="text-xs">
            <span className="font-medium">Technologies: </span>
            <span className="text-gray-600">NodeJS, Unity DOTS, AWS, Jenkins, Github Actions</span>
          </p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm font-medium">Senior Game Developer - Ironhide Games</h4>
            <p className="text-xs text-gray-600">2020 - 2022</p>
          </div>
          <ul className="list-disc pl-4 my-0.5 text-xs">
            <li>Gameplay engine development</li>
            <li>UI Development</li>
          </ul>
          <p className="text-xs">
            <span className="font-medium">Technologies: </span>
            <span className="text-gray-600">C++, cocos2dx</span>
          </p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm font-medium">Semi-Senior Game Developer - EA SPORTS (Contractor through Globant)</h4>
            <p className="text-xs text-gray-600">2018 - 2020</p>
          </div>
          <ul className="list-disc pl-4 my-0.5 text-xs">
            <li>Gameplay development (EA SPORTS)</li>
          </ul>
          <p className="text-xs">
            <span className="font-medium">Technologies: </span>
            <span className="text-gray-600">C++, Unity</span>
          </p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm font-medium">Game Developer - Batovi Games</h4>
            <p className="text-xs text-gray-600">2016 - 2018</p>
          </div>
          <ul className="list-disc pl-4 my-0.5 text-xs">
            <li>Gameplay Development</li>
          </ul>
          <p className="text-xs">
            <span className="font-medium">Technologies: </span>
            <span className="text-gray-600">C++</span>
          </p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm font-medium">Product Executive - Antel</h4>
            <p className="text-xs text-gray-600">2014 - 2018</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-1">Education</h3>
        <div className="mb-1">
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm font-medium">Game Development and Design</h4>
            <p className="text-xs text-gray-600">2015-2017</p>
          </div>
          <p className="text-xs text-gray-600">A+ Montevideo, Uruguay</p>
        </div>
        <div>
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm font-medium">Electrical Engineering</h4>
            <p className="text-xs text-gray-600">2011-2014</p>
          </div>
          <p className="text-xs text-gray-600">University of the Republic, Montevideo, Uruguay (Unfinished Studies)</p>
        </div>
      </section>
    </div>
  )
}
