import React, { useEffect, useState } from "react"

interface ProgressBarProps {
  timeout?: number
}

export default function ProgressBar({ timeout }: ProgressBarProps) {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId)
          return 100
        }

        return prevProgress + 10
      })
    }, timeout || 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='h-1 w-full rounded-full bg-gray-200'>
      <div
        className='bg-slate-500'
        style={{
          width: `${progress}%`,
          height: "100%",
          transition: "width 0.5s ease-in-out",
        }}
      />
    </div>
  )
}
