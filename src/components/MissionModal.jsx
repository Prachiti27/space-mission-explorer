import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: { y: '-50px', opacity: 0 },
  visible: { y: '0', opacity: 1, transition: { duration: 0.3 } },
  exit: { y: '-50px', opacity: 0 },
}

const MissionModal = ({ mission, isOpen, onClose }) => {
  if (!isOpen || !mission) return null

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4'
        variants={backdrop}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <motion.div
          onClick={e => e.stopPropagation()}
          className='relative bg-[#1a1a1a] text-white rounded-xl shadow-xl max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]'
          variants={modal}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <button
            className='absolute top-4 right-4 text-white hover:text-red-500 transition'
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className='flex flex-col md:flex-row gap-6'>
            <img
              src={mission.missionImage}
              alt={mission.missionName}
              className='w-full md:w-1/2 h-64 object-cover rounded-lg'
            />
            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl font-bold'>{mission.missionName}</h2>
              <p className='text-sm text-gray-400'>{mission.missionYear}</p>
              <div className='flex items-center gap-2'>
                <img src={mission.agencyLogo} alt='agency logo' className='h-6' />
                <span className='font-semibold'>{mission.agency}</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src={mission.countryFlag} alt='country flag' className='h-5' />
                <span>{mission.country}</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium mt-2 w-fit ${
                  mission.missionStatus === 'success'
                    ? 'bg-green-600'
                    : mission.missionStatus === 'failure'
                    ? 'bg-red-600'
                    : 'bg-yellow-600'
                }`}
              >
                {mission.missionStatus.toUpperCase()}
              </span>
              <p className='mt-4 text-sm text-gray-300'>{mission.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MissionModal
