'use client'

import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../style/Nav.css'

export default function Component() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div className='relative hide-default-cursor overflow-hidden bg-gray-100 pt-16'>
      {/* Custom Cursor */}
      <div
        className='pointer-events-none fixed left-0 top-0 z-50 h-12 w-12 rounded-full bg-purple-400 mix-blend-difference transition-transform duration-100 ease-out'
        style={{
          transform: `translate(${cursorPosition.x - 24}px, ${
            cursorPosition.y - 24
          }px)`,
        }}
      />

      {/* Main Content */}
      <div className='flex flex-col justify-center items-center'>
        <h1 className='mb-8 text-center text-3xl font-bold'>
          Let&apos;s collaborate together on that amazing idea/project
        </h1>

        {/* Marquee Section */}
        <div className='w-full overflow-hidden bg-purple-500 py-4'>
          <div className='flex animate-marquee whitespace-nowrap text-white'>
            {Array(4)
              .fill([
                <IconWrapper key='react'>React</IconWrapper>,
                <IconWrapper key='vue'>Framer</IconWrapper>,
                <IconWrapper key='angular'>Wix</IconWrapper>,
                <IconWrapper key='svelte'>NextJs</IconWrapper>,
                <IconWrapper key='figma'>Figma</IconWrapper>,
              ])
              .flat()
              .map((label, index) => (
                <span
                  key={index}
                  className='flex items-center justify-center text-xl font-semibold'>
                  {label}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function IconWrapper({ children }) {
  return <div className='mx-8 flex items-center justify-center'>{children}</div>
}

IconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
