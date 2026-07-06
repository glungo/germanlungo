"use client"

import { Calendar, Users } from "lucide-react"
import Image from "next/image"

import RL1 from "../../../public/assets/RL1.webp"
import RL2 from "../../../public/assets/RL2.webp"
import RL3 from "../../../public/assets/RL3.jpg"
import Synth1 from "../../../public/assets/Synth.png"
import Synth2 from "../../../public/assets/Synth2.jpg"
import Synth3 from "../../../public/assets/Synth3.jpg"
import Sandbox1 from "../../../public/assets/Sandbox.jpg"
import Sandbox2 from "../../../public/assets/Sandbox2.jpg"
import Junkworld1 from "../../../public/assets/Junkworld.jpg"
import Junkworld2 from "../../../public/assets/Junkworld2.jpg"
import NBA1 from "../../../public/assets/NBA.jpg"
import NBA2 from "../../../public/assets/NBA2.jpg"
import Batovi1 from "../../../public/assets/Batovi.png"
import Batovi2 from "../../../public/assets/Batovi2.jpg"
import Batovi4 from "../../../public/assets/Batovi4.png"

const largeImageWrapper =
  "bg-white p-2 rounded-xl shadow-lg w-[600px] h-[336px] print:w-[240px] print:h-[134px]"
const mediumImageWrapper =
  "bg-white p-2 rounded-xl shadow-lg w-[480px] h-[272px] print:w-[200px] print:h-[120px]"

export default function PortfolioContent() {
  return (
    <div className="max-w-[420mm] mx-auto p-8 bg-white text-gray-800 space-y-12 print:p-2 print:max-w-none print:mx-0">
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          @page {
            size: A4;
            margin: 0.5in;
          }
          
          body {
            font-size: 12px;
          }
          
          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
          
          .print\\:scale-90 {
            transform: scale(0.85);
            transform-origin: top left;
          }
        }
      `}</style>
      
      <div className="print:scale-90">
        <header className="text-center mb-4 print:mb-2">
          <h1 className="text-3xl font-bold mb-1 print:text-2xl print:mb-0">Portfolio - German Lungo</h1>
          <p className="text-lg text-gray-600 print:text-sm">(2016-2026)</p>
          <p className="text-base text-gray-500 mt-1 print:text-xs print:mt-0">Game Development Journey</p>
        </header>

        {/* Rocket League */}
        <section className="mb-8 print:mb-4 print:break-inside-avoid">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl print:shadow-none print:p-2">
            <div className="text-center mb-4 print:mb-2">
              <h2 className="text-2xl font-bold mb-2 print:text-lg print:mb-1">Technical Lead - Rocket League</h2>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-600 mb-3 print:gap-2 print:mb-1 print:text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  2024 - Present
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  Globant (Contractor)
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 print:gap-2 print:mb-2">
              <div className={largeImageWrapper}>
                <Image 
                  src={RL1}
                  alt="Rocket League gameplay screenshot 1"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
              <div className={largeImageWrapper}>
                <Image 
                  src={RL2}
                  alt="Rocket League gameplay screenshot 2"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
              <div className={largeImageWrapper}>
                <Image 
                  src={RL3}
                  alt="Rocket League gameplay screenshot 3"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700 mb-3 text-sm print:text-xs print:mb-1">
                Leading systems architecture and gameplay development for one of the world's most popular competitive games.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left print:gap-1">
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Systems Architecture & Performance Optimization</li>
                  <li>Live Operations & Feature Development</li>
                </ul>
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Cross-functional Team Leadership</li>
                  <li>Unreal Engine 3 & C++ Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Synthesis School */}
        <section className="mb-8 print:mb-4 print:break-inside-avoid">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-xl print:shadow-none print:p-2">
            <div className="text-center mb-6 print:mb-2">
              <h2 className="text-3xl font-bold mb-2 print:text-lg print:mb-1">Lead Game Developer - Synthesis School</h2>
              <div className="flex justify-center items-center gap-6 text-base text-gray-600 mb-4 print:gap-2 print:mb-1 print:text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  2023 - 2024
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 print:gap-2 print:mb-2">
              <div className={largeImageWrapper}>
                <Image 
                  src={Synth1}
                  alt="Synthesis educational minigames interface 1"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
              <div className={largeImageWrapper}>
                <Image 
                  src={Synth2}
                  alt="Synthesis educational minigames interface 2"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
              <div className={largeImageWrapper}>
                <Image 
                  src={Synth3}
                  alt="Synthesis educational minigames interface 3"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700 mb-3 text-sm print:text-xs print:mb-1">
                Designed and developed educational multiplayer minigames for virtual learning environments.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left print:gap-1">
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Multiplayer Game Prototyping & Design</li>
                  <li>Educational Game Mechanics</li>
                </ul>
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Real-time Collaborative Systems</li>
                  <li>Full-stack Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Sandbox */}
        <section className="mb-8 print:mb-4 print:break-inside-avoid">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl print:shadow-none print:p-2">
            <div className="text-center mb-6 print:mb-2">
              <h2 className="text-3xl font-bold mb-2 print:text-lg print:mb-1">Senior Game Developer - The Sandbox</h2>
              <div className="flex justify-center items-center gap-6 text-base text-gray-600 mb-4 print:gap-2 print:mb-1 print:text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  2022 - 2023
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 print:gap-2 print:mb-2">
              <div className={largeImageWrapper}>
                <Image 
                  src={Sandbox1}
                  alt="The Sandbox game development tools 1"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
              <div className={largeImageWrapper}>
                <Image 
                  src={Sandbox2}
                  alt="The Sandbox game development tools 2"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700 mb-3 text-sm print:text-xs print:mb-1">
                Developed core engine systems and developer tools for the blockchain-based virtual world platform.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left print:gap-1">
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Game Engine Development (Unity DOTS)</li>
                  <li>Developer Tools & Build Engineering</li>
                </ul>
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>AWS Infrastructure & CI/CD Pipelines</li>
                  <li>Blockchain Integration & NFT Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ironhide Games */}
        <section className="mb-8 print:mb-4 print:break-inside-avoid">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl print:shadow-none print:p-2">
            <div className="text-center mb-6 print:mb-2">
              <h2 className="text-3xl font-bold mb-2 print:text-lg print:mb-1">Senior Game Developer - Ironhide Games</h2>
              <div className="flex justify-center items-center gap-6 text-base text-gray-600 mb-4 print:gap-2 print:mb-1 print:text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  2020 - 2022
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 print:gap-2 print:mb-2">
              <div className={largeImageWrapper}>
                <Image 
                  src={Junkworld1}
                  alt="Junkworld game screenshot 1"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
              <div className={largeImageWrapper}>
                <Image 
                  src={Junkworld2}
                  alt="Junkworld game screenshot 2"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700 mb-3 text-sm print:text-xs print:mb-1">
                Developed gameplay engine systems for a new IP for Apple Arcade, Junkworld.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left print:gap-1">
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Gameplay Engine Development (C++)</li>
                  <li>Mobile Game Optimization</li>
                </ul>
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>UI/UX Implementation</li>
                  <li>Cross-platform Development (cocos2dx)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Globant */}
        <section className="mb-8 print:mb-4 print:break-inside-avoid">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-xl print:shadow-none print:p-2">
            <div className="text-center mb-6 print:mb-2">
              <h2 className="text-3xl font-bold mb-2 print:text-lg print:mb-1">Semi-Senior Game Developer - Globant</h2>
              <div className="flex justify-center items-center gap-6 text-base text-gray-600 mb-4 print:gap-2 print:mb-1 print:text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  2018 - 2020
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 print:gap-2 print:mb-2">
              <div className={largeImageWrapper}>
                <Image 
                  src={NBA1}
                  alt="NBA EA SPORTS project screenshot 1"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
              <div className={largeImageWrapper}>
                <Image 
                  src={NBA2}
                  alt="NBA EA SPORTS project screenshot 2"
                  width={600}
                  height={336}
                  className="rounded object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700 mb-3 text-sm print:text-xs print:mb-1">
                Worked on emergent gameplay systems for EA SPORTS titles.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left print:gap-1">
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Gameplay Systems Development (C++)</li>
                </ul>
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Custom Engine Development (Ignite Fork)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Batovi Games */}
        <section className="mb-8 print:mb-4 print:break-inside-avoid">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-xl print:shadow-none print:p-2">
            <div className="text-center mb-6 print:mb-2">
              <h2 className="text-3xl font-bold mb-2 print:text-lg print:mb-1">Game Developer - Batovi Games</h2>
              <div className="flex justify-center items-center gap-6 text-base text-gray-600 mb-4 print:gap-2 print:mb-1 print:text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  2016 - 2018
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 print:gap-2 print:mb-2">
              <div className={mediumImageWrapper}>
                <Image 
                  src={Batovi1}
                  alt="Batovi Games project screenshot 1"
                  width={480}
                  height={272}
                  className="rounded object-cover w-full h-full"
                />
              </div>
              <div className={mediumImageWrapper}>
                <Image 
                  src={Batovi2}
                  alt="Batovi Games project screenshot 2"
                  width={480}
                  height={272}
                  className="rounded object-cover w-full h-full"
                />
              </div>
              <div className={mediumImageWrapper}>
                <Image 
                  src={Batovi4}
                  alt="Batovi Games project screenshot 4"
                  width={480}
                  height={272}
                  className="rounded object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700 mb-3 text-sm print:text-xs print:mb-1">
                Started my professional game development journey creating gameplay systems and mechanics.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left print:gap-1">
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Gameplay Development & Mechanics</li>
                  <li>C++ Engine Programming</li>
                </ul>
                <ul className="list-disc pl-3 text-xs space-y-1 print:space-y-0">
                  <li>Game Logic Implementation</li>
                  <li>Foundation in Game Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center mt-8 pt-4 border-t border-gray-200 print:mt-4 print:pt-2">
          <p className="text-gray-600 text-sm print:text-xs">
            9 years of game development experience across multiple platforms and genres
          </p>
          <p className="text-xs text-gray-500 mt-1 print:mt-0">
            From indie mobile games to AAA titles and cutting-edge VR experiences
          </p>
        </footer>
      </div>
    </div>
  )
}
