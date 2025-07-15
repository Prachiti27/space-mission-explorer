import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/heroImage.jpeg'
import { motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}

const Hero = () => {

    const navigate = useNavigate()
    const MotionNavLink = motion(NavLink)

    return (
        <div className='relative flex h-screen flex-col bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='absolute inset-0 z-0 bg-black/40'></div>
            <motion.nav
                className='relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between p-6'
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className='text-2xl font-bold text-white/90' variants={itemVariants} onClick={()=>navigate('/')}>
                    SpaceXplor
                </motion.div>

                <div className='hidden items-center gap-16 md:flex'>
                    <MotionNavLink to='/missions' className="text-xl text-white font-normal hover:text-gray-300" variants={itemVariants}>
                        Missions
                    </MotionNavLink>
                    <MotionNavLink to='/favorite-missions' className="text-xl text-white font-normal hover:text-gray-300" variants={itemVariants}>
                        Favorites
                    </MotionNavLink>
                    <MotionNavLink to='/about' className="text-xl text-white font-normal hover:text-gray-300" variants={itemVariants}>
                        About
                    </MotionNavLink>
                </div>
            </motion.nav>

            <main className='relative z-10 flex flex-grow flex-col items-center justify-center text-center'>
                <motion.div
                    className='flex flex-col items-center gap-6 px-4'
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1 
                        className='text-4xl font-bold tracking-wider text-white md:text-6xl'
                        variants={itemVariants}
                    >
                        SPACE MISSION EXPLORER
                    </motion.h1>
                    <motion.p
                        className='max-w-xl text-base text-gray-200 md:text-lg'
                        variants={itemVariants}
                    >
                        Explore Humanity's Greatest Space Missions
                    </motion.p>
                    <motion.p
                        className='max-w-2xl text-sm text-gray-300 md:text-base'
                        variants={itemVariants}
                    >
                        Search, browse, and learn about historic and upcoming space launches worldwide.
                    </motion.p>
                    <motion.button
                        className='mt-6 flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-200'
                        variants={itemVariants}
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}
                        onClick={()=>navigate('/missions')}
                    >
                        Explore Missions <ArrowRight/>
                    </motion.button>
                </motion.div>
            </main>
        </div>
    )
}

export default Hero
