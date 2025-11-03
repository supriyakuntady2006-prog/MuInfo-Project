import React, {useRef, useEffect} from 'react'

export default function Camera({onCapture}){
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(()=>{
    async function start(){
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}, audio: false})
        if (videoRef.current) videoRef.current.srcObject = stream
      } catch (err) {
        console.error('Camera permission error', err)
      }
    }
    start()
    return ()=>{
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks()
        tracks.forEach(t => t.stop())
      }
    }
  }, [])

  const handleCapture = () => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0)
    const dataUrl = canvas.toDataURL('image/jpeg', 0.9)
    if (onCapture) onCapture(dataUrl)
  }

  return (
    <div className="camera">
      <video ref={videoRef} autoPlay playsInline muted style={{width: '100%', maxWidth: 480}} />
      <div style={{marginTop: 8}}>
        <button onClick={handleCapture}>Capture</button>
      </div>
      <canvas ref={canvasRef} style={{display:'none'}} />
    </div>
  )
}
