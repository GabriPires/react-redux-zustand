import { useAppSelector } from '../store'

export function Header() {
  const { currentLesson, currentModule } = useAppSelector((state) => {
    const currentModule =
      state.player.course.modules[state.player.currentModuleIndex]
    const currentLesson = currentModule.lessons[state.player.currentLessonIndex]
    return { currentLesson, currentModule }
  })

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">"{currentModule.title}"</span>
    </div>
  )
}
