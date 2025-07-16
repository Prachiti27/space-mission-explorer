import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const faqData = [
  {
    question: 'What is SpaceXplor?',
    answer: 'SpaceXplor is a platform that helps you explore information about space missions from agencies worldwide.'
  },
  {
    question: 'Can I save missions I like?',
    answer: 'Yes! You can mark missions as favorites and view them in one place.'
  },
  {
    question: 'Do I need an account to use SpaceXplor?',
    answer: 'No account is required — you can browse freely. (If you add login later, this can change.)'
  },
  {
    question: 'Who is SpaceXplor for?',
    answer: 'Anyone curious about space — from students and enthusiasts to professionals.'
  }
]

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <motion.div
      layout
      className='rounded-2xl bg-white/5 p-6 shadow-lg backdrop-blur-md border border-white/10'
      onClick={toggleOpen}
      initial={{ borderRadius: 24 }}
    >
      <motion.div
        layout
        className='flex items-center justify-between cursor-pointer'
      >
        <h3 className='text-lg font-medium text-white'>{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-6 w-6 text-neutral-400" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <p className='text-neutral-300'>{answer}</p>
            </motion.div>
          )
        }
      </AnimatePresence>
    </motion.div>
  )
}

const About = () => {

  const navigate = useNavigate()

  return (
    <div className='min-h-screen w-full bg-black text-white flex items-center justify-center p-4 sm:p-6 lg:p-8'>
      <div className='w-full max-w-4xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            About SpaceXplor
          </h1>
          <p className='text-xs md:text-sm text-neutral-300 max-w-3xl mx-auto'>
            SpaceXplor is a platform to discover and explore space missions from around the world. Our goal is to make information about humanity’s space endeavors accessible and beautifully presented.
          </p>
        </motion.div>

        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Frequently Asked Questions
          </h2>
        </div>

        <motion.div
          className='space-y-4'
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaqItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <motion.button
                className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 text-white font-semibold rounded-full text-md border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={()=>navigate('/missions')}
            >
                Explore Missions <ArrowRight className="h-5 w-5" />
            </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default About
