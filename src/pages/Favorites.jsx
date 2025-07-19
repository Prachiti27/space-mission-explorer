import React, { useState, useEffect } from 'react'
import MissionCard from '../components/MissionCard'
import { motion } from 'framer-motion'
import MissionModal from '../components/MissionModal'
import missions from '../assets/assets.js'

const FAVORITES_KEY = 'favoriteMissions'

const Favorites = () => {
  const [selectedMission, setSelectedMission] = useState(null)
  const [favorites, setFavorites] = useState([]) // array of missionIds

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
    setFavorites(storedFavs)
  }, [])

  // Filter missions to only show favorites
  const favoriteMissions = missions.filter(mission =>
    favorites.includes(mission.missionId)
  )

  const openModal = (mission) => {
    setSelectedMission(mission)
  }

  const closeModal = () => {
    setSelectedMission(null)
  }

  // Optional: allow removing from favorites here too
  const toggleFavorite = (missionId) => {
    const updatedFavs = favorites.filter(id => id !== missionId)
    setFavorites(updatedFavs)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavs))
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
          Your Favorite Space Missions
        </motion.h1>
        <motion.p
          className='text-white/70 text-lg max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Here's the list of space missions you have added to your favorites.
        </motion.p>
      </div>

      {favoriteMissions.length === 0 ? (
        <p className='text-center text-gray-400 text-lg'>You have no favorite missions yet.</p>
      ) : (
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
          {favoriteMissions.map((mission) => (
            <MissionCard
              key={mission.missionId}
              mission={mission}
              onDetailsClick={() => openModal(mission)}
              isFavorite={true}
              onToggleFavorite={() => toggleFavorite(mission.missionId)}
            />
          ))}
        </motion.div>
      )}

      <MissionModal
        mission={selectedMission}
        isOpen={!!selectedMission}
        onClose={closeModal}
      />
    </section>
  )
}

export default Favorites
