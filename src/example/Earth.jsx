'use client'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import createGlobe from 'cobe'
// import { cn } from '@/lib/utils'

const Earth = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    let width = 0
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    
    window.addEventListener('resize', onResize)
    onResize()
    
    let phi = 0

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [
        // longitude latitude
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003
      },
    })

    return () => {
      globe.destroy()
    }
  }, [theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor])

  return (
    <div
      className={(
        'w-[97%] lg:w-[95%]  mx-auto flex items-center justify-center z-[10] ',
        className
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
            aspectRatio: '1',
            opacity: "-3",
        }}
      />
    </div>
  )
}

Earth.propTypes = {
  className: PropTypes.string,
  theta: PropTypes.number,
  dark: PropTypes.number,
  scale: PropTypes.number,
  diffuse: PropTypes.number,
  mapSamples: PropTypes.number,
  mapBrightness: PropTypes.number,
  baseColor: PropTypes.arrayOf(PropTypes.number),
  markerColor: PropTypes.arrayOf(PropTypes.number),
  glowColor: PropTypes.arrayOf(PropTypes.number),
}

Earth.defaultProps = {
  theta: 0.25,
  dark: 1,
  scale: 1.1,
  diffuse: 1.2,
  mapSamples: 40000,
  mapBrightness: 6,
  baseColor: [0.4, 0.6509, 1],
  markerColor: [1, 0, 0],
  glowColor: [0.2745, 0.5765, 0.898],
}

export default Earth
