import { Loader } from 'lucide-react'
import ReactPlayer from 'react-player'
import { useStore, useZustandCurrentLesson } from '../zustand-store'

export function Video() {
  const { currentLesson } = useZustandCurrentLesson()
  const { isLoading, next } = useStore((state) => ({
    isLoading: state.isLoading,
    next: state.next,
  }))

  function handlePlayNext() {
    next()
  }

  return (
    <div className="w-full bg-zinc-500 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
        />
      )}
    </div>
  )
}
