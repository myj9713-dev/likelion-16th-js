import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

interface Props {
  liked?: boolean
  likes: number
  setLikes: React.Dispatch<React.SetStateAction<number>>
}

export default function LikeButton({
  liked: initialLiked = false,
  likes,
  setLikes,
}: Props) {
  const dirtyRef = useRef(false)
  const ringRef = useRef(null)
  const countRef = useRef(null)
  const iconRef = useRef(null)

  const [liked, setLiked] = useState(initialLiked)

  const handleClick = () => {
    if (!dirtyRef.current) dirtyRef.current = true
    if (setLikes) setLikes(liked ? likes - 1 : likes + 1)
    setLiked(!liked)
  }

  // 부수 효과 (리액트 렌더링 외적인 것들: 애니메이션)
  useEffect(() => {
    
    if (dirtyRef.current) {
      const ring = ringRef.current
      const count = countRef.current
      const icon = iconRef.current
      
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.3 } })

      // GSAP 애니메이션
      gsap.set(ring, {
        display: liked ? 'block' : 'none',
      })

      tl.set(ring, { scale: 1, opacity: 1 })
        .set(count, { yPercent: 0 })
        .to(
          icon,
          {
            scale: 1.25,
            repeat: 1,
            yoyo: true,
          },
          '<',
        )
        .to(
          count,
          {
            yPercent: -300,
            repeat: 1,
            yoyo: true,
          },
          '<',
        )
        .to(ring, { scale: 4, opacity: 0 }, '<')
    }


  }, [liked, likes])

  return (
    <button
      type="button"
      className={`like-button ${liked ? 'like-button--active' : ''}`}
      onClick={handleClick}
    >
      <span ref={ringRef} className="like-button__ring" />
      <span className="like-button__text sr-only">{`${likes} Likes`}</span>
      <HeartIcon ref={iconRef} />
      <span ref={countRef} className="like-button__count" aria-hidden="true">
        {likes}
      </span>
    </button>
  )
}

function HeartIcon({ ref }: { ref: React.RefObject<HTMLOrSVGElement> }) {
  return (
    <svg
      ref={ref}
      className="like-button__icon"
      viewBox="0 0 512 512"
      title="heart"
    >
      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
    </svg>
  )
}
