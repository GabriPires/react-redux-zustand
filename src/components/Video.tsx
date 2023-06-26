import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className="w-full bg-zinc-500 aspect-video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=J3qhXUXCmYM"
        width="100%"
        height="100%"
        controls
      />
    </div>
  )
}
