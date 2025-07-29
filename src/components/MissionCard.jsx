import { ArrowRight, CalendarIcon, HeartIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const MissionCard = ({ mission, onDetailsClick, isFavorite, onToggleFavorite }) => {
  const { missionName, missionYear, missionImage, agency, agencyLogo } = mission

  return (
    <motion.div
      className='w-[280px] md:w-[320px] h-auto border border-white/50 p-6 flex flex-col items-center gap-4 rounded-xl bg-black/50 hover:bg-black/90'
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className='text-white/90 font-semibold text-xl'>{missionName}</h2>
      <img
        src={missionImage}
        alt={missionName}
        className='w-[160px] h-[140px] rounded-xl object-cover shadow-lg'
      />
      <div className='text-white flex items-center gap-2 text-sm'>
        <CalendarIcon size={20} />
        <span>{missionYear}</span>
      </div>
      <div className='flex items-center gap-2'>
        <img src={agencyLogo} alt={`${agency} logo`} className='w-7 h-7' />
        <p className='font-semibold text-white text-sm select-none'>{agency}</p>
      </div>
      <div className='flex flex-row gap-4 mt-2 w-full justify-center'>
        <button
          onClick={onDetailsClick}
          className='w-[140px] flex items-center gap-2 px-6 py-2 rounded-full border border-white/50 text-white hover:bg-white/20 transition duration-300 ease-in-out font-medium hover:cursor-pointer'
        >
          <p className='text-sm'>Details</p>
          <ArrowRight size={16} className='relative top-[1px]' />
        </button>

        <button
          onClick={onToggleFavorite}
          className={`w-[140px] flex items-center gap-2 px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out font-medium hover:cursor-pointer ${
            isFavorite ? 'bg-white text-black hover:bg-white/70' : 'bg-white text-black hover:bg-white/70'
          }`}
        >
          <p className='text-sm'>
            {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
          </p>
          <HeartIcon
            size={16}
            className={`relative top-[1px] ${isFavorite ? 'fill-current text-black' : ''}`}
          />
        </button>
      </div>
    </motion.div>
  )
}

export default MissionCard
