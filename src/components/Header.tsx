import { useCurrentLesson } from '../store/slices/player'

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson()

  if (!currentLesson || !currentModule) return null

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">"{currentModule.title}"</span>
    </div>
  )
}
