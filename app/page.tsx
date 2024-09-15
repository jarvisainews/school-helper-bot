import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { AI } from './actions'
import { HomeHero } from '@/components/home-hero'
import { SubjectSelector } from '@/components/subject-selector'

export const maxDuration = 60
export default async function Home() {
  const id = generateId()

  return (
    <div className="relative min-h-screen">
      <div className="px-8 sm:px-12 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4"></div>
      <HomeHero />
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <Chat id={id} />
      </AI>
      <SubjectSelector />
    </div>
  )
}
