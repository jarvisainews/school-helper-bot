'use client'

import { useState, useEffect } from 'react'
import EyeFollowingSVG from './eye-following-svg'

export function HomeHero() {
  const [currentSubject, setCurrentSubject] = useState('')
  useEffect(() => {
    const handleSubjectChange = (event: any) => {
      setCurrentSubject(event.detail)
    }

    window.addEventListener('subjectChange', handleSubjectChange)

    return () => {
      window.removeEventListener('subjectChange', handleSubjectChange)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <EyeFollowingSVG />
      <div className="flex flex-col items-center justify-center space-y-2">
        <label className="text-3xl md:text-4xl font-semibold text-center">
          Welcome Back, Carter Susi!
        </label>
        <label className="text-sm text-muted-foreground">
          Do you need any help with your {currentSubject} Homework?
        </label>
      </div>
    </div>
  )
}
