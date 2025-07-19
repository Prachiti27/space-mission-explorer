import React, { useState, useEffect } from 'react'
import MissionCard from '../components/MissionCard'
import { motion } from 'framer-motion'
import MissionModal from '../components/MissionModal'
import missions from '../assets/assets.js'

const FAVORITES_KEY = 'favoriteMissions'

const Missions = () => {
  const [selectedMission, setSelectedMission] = useState(null)
  const [favorites, setFavorites] = useState([]) // store array of missionIds

  // Load favorites from localStorage once on mount
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
    setFavorites(storedFavs)
  }, [])

  // Update localStorage when favorites change
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  const openModal = (mission) => {
    setSelectedMission(mission)
  }

  const closeModal = () => {
    setSelectedMission(null)
  }

  const toggleFavorite = (missionId) => {
    if (favorites.includes(missionId)) {
      // Remove from favorites
      setFavorites(favorites.filter(id => id !== missionId))
    } else {
      // Add to favorites
      setFavorites([...favorites, missionId])
    }
  }

  return (
    <section className='w-full min-h-screen bg-[#0b0b0b] text-white py-16 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto text-center mb-12'>
        <motion.h1
          className='text-4xl md:text-5xl font-bold mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Space Missions Archive
        </motion.h1>
        <motion.p
          className='text-white/70 text-lg max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Dive into the history of iconic space missions conducted by top space agencies.
        </motion.p>
      </div>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {missions.map((mission) => (
          <MissionCard
            key={mission.missionId}
            mission={mission}
            onDetailsClick={() => openModal(mission)}
            isFavorite={favorites.includes(mission.missionId)}
            onToggleFavorite={() => toggleFavorite(mission.missionId)}
          />
        ))}
      </motion.div>

      <MissionModal
        mission={selectedMission}
        isOpen={!!selectedMission}
        onClose={closeModal}
      />
    </section>
  )
}

export default Missions
