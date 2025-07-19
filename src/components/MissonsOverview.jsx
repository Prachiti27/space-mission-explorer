import React, { useState } from 'react'
import MissionCard from '../components/MissionCard'
import { Link } from 'react-router-dom'
import missions from '../assets/assets.js'
import MissionModal from './MissionModal.jsx'

const MissionsOverview = () => {
    const [selectedMission, setSelectedMission] = useState(null)

    const previewMissions = missions.slice(0, 3)

    const openModal = (mission) => {
        setSelectedMission(mission)
    }

    const closeModal = () => {
        setSelectedMission(null)
    }

    return (
        <section
            className="relative text-white py-8 px-6 shadow-lg w-full bg-black"
        >
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold mb-3'>Featured Space Missions</h2>
                <Link
                    to='/missions'
                    className='text-sm text-blue-400 hover:text-blue-600 font-semibold transition'
                >
                    Explore Missions &rarr;
                </Link>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center'>
                {previewMissions.map((mission) => (
                    <MissionCard
                        key={mission.missionId}
                        mission={mission}
                        onDetailsClick={() => openModal(mission)}
                    />
                ))}
            </div>

            <MissionModal mission={selectedMission} isOpen={!!selectedMission} onClose={closeModal} />
        </section>
    )
}

export default MissionsOverview
