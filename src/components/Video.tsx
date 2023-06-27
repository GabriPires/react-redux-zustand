import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store'
import { next } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()

  const currentLesson = useAppSelector((state) => {
    const currentLesson =
      state.player.course.modules[state.player.currentModuleIndex].lessons[
        state.player.currentLessonIndex
      ]
    return currentLesson
  })

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-500 aspect-video">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
      />
    </div>
  )
}
