import ReactPlayer from 'react-player'
import { useAppSelector } from '../store'

export function Video() {
  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })
  return (
    <div className="w-full bg-zinc-500 aspect-video">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
        width="100%"
        height="100%"
        controls
      />
    </div>
  )
}
