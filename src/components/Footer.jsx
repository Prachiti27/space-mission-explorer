import { RocketIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 w-full border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex flex-row items-center gap-2 justify-center text-2xl font-bold text-white">SpaceXplor <RocketIcon size={"30"} /></div>
                        <p className="text-gray-400 text-base">
                            Explore space missions from around the world.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><a href="/" className="text-base text-gray-400 hover:text-white">Home</a></li>
                                    <li><a href="/missions" className="text-base text-gray-400 hover:text-white">Missions</a></li>
                                    <li><a href="/about" className="text-base text-gray-400 hover:text-white">About</a></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><a href="/about" className="text-base text-gray-400 hover:text-white">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><a href="https://github.com/Prachiti27" target="_blank" className="text-base text-gray-400 hover:text-white">Github</a></li>
                                    <li><a href="https://x.com/prachiti_kitey" target="_blank" className="text-base text-gray-400 hover:text-white">Twitter</a></li>
                                    <li><a href="https://www.linkedin.com/in/prachiti-kitey-24b348281/" target="_blank" className="text-base text-gray-400 hover:text-white">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} SpaceXplor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
