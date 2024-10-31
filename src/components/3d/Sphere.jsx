import './Squares.css'
function AnimatedSquares() {
  return (
    <div className='white'>
      <div className='squares'>
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className={`square square-${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default AnimatedSquares