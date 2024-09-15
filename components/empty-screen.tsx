import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'What are congruent triangles?',
    message: 'What are congruent triangles?'
  },
  {
    heading: 'Show an example of Pythagorean theorem for a Right triangle.',
    message: 'Show an example of Pythagorean theorem for a Right triangle.'
  },
  {
    heading:
      "How would I find the length of a triangle's side using Euclidean geometry?",
    message:
      "How would I find the length of a triangle's side using Euclidean geometry?"
  },
  {
    heading:
      'How can I tell the difference between a Translation, Rotation, and Reflection?',
    message:
      'How can I tell the difference between a Translation, Rotation, and Reflection?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
