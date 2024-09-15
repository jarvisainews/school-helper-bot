'use client'
import React, { useEffect, useRef, useState } from 'react'

const EyeFollowingSVG = () => {
  const svgRef = useRef(null)
  const leftEyeRef = useRef(null)
  const rightEyeRef = useRef(null)
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    const svg = svgRef.current as any
    const leftEye = leftEyeRef.current as any
    const rightEye = rightEyeRef.current as any

    let animationFrameId: any

    const handleMouseMove = (event: any) => {
      if (!svg || !leftEye || !rightEye) return

      const svgRect = svg.getBoundingClientRect()
      const centerX = svgRect.left + svgRect.width / 2
      const centerY = svgRect.top + svgRect.height / 2

      const mouseX = event.clientX
      const mouseY = event.clientY

      const angle = Math.atan2(mouseY - centerY, mouseX - centerX)
      const distance = Math.hypot(mouseX - centerX, mouseY - centerY) / 15

      const leftEyeX = 127.60524134500726 + Math.cos(angle) * distance - 20
      const leftEyeY = 111.83988696573545 + Math.sin(angle) * distance
      const rightEyeX = 174.40524134500728 + Math.cos(angle) * distance - 20
      const rightEyeY = 111.83988696573545 + Math.sin(angle) * distance

      const updateEyePosition = () => {
        leftEye.setAttribute('cx', leftEyeX)
        leftEye.setAttribute('cy', leftEyeY)
        rightEye.setAttribute('cx', rightEyeX)
        rightEye.setAttribute('cy', rightEyeY)
      }

      animationFrameId = requestAnimationFrame(updateEyePosition)
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Blinking effect
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 200) // Duration of blink
    }, 5000) // Blink every 5 seconds

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clearInterval(blinkInterval)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        fill="currentColor"
        viewBox="0 0 256 256"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <circle cx="128" cy="128" r="128" fill="#222"></circle>
        <ellipse
          ref={leftEyeRef}
          cx="127.60524134500726"
          cy="111.83988696573545"
          rx="18"
          ry={isBlinking ? '1' : '18'}
          fill="white"
          className="transition-all duration-300 ease-out"
        ></ellipse>
        <ellipse
          ref={rightEyeRef}
          cx="174.40524134500728"
          cy="111.83988696573545"
          rx="18"
          ry={isBlinking ? '1' : '18'}
          fill="white"
          className="transition-all duration-300 ease-out"
        ></ellipse>
      </svg>
    </div>
  )
}

export default EyeFollowingSVG
