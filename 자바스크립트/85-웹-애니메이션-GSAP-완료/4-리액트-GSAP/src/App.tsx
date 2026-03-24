import gsap from 'gsap'
import { useState } from 'react'
import LikeButton from './components/LikeButton'

export default function App() {
  const [likes, setLikes] = useState(() => {
    return Math.floor(gsap.utils.random(10, 90))
  })

  return (
    <LikeButton 
      likes={likes} 
      setLikes={setLikes} 
    />
  )
}
