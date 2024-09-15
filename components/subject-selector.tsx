'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { BookOpen } from 'lucide-react'

const subjects = [
  'Math',
  'Science',
  'English',
  'History',
  'Geography',
  'Physics',
  'Chemistry',
  'Biology',
  'Literature',
  'Computer Science'
]

export function SubjectSelector() {
  const [currentSubject, setCurrentSubject] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSubjectChange = (subject: any) => {
    setCurrentSubject(subject)
    setIsOpen(false)
    // Communicate with HomeHero
    window.dispatchEvent(new CustomEvent('subjectChange', { detail: subject }))
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 left-[calc(0%+1.5rem)] rounded-full"
        >
          <BookOpen className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[20vh]">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-4 p-4">
            {subjects.map(subject => (
              <Button
                key={subject}
                variant={currentSubject === subject ? 'default' : 'outline'}
                onClick={() => handleSubjectChange(subject)}
                className="flex-shrink-0"
              >
                {subject}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
