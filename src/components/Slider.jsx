import  { useEffect } from "react"
import Glide from "@glidejs/glide"
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import '../style/Fxstyle.css';

export default function CarouselIndicatorsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      <div className='w-[95%] lg:w-[95%] mx-auto space-y-16'>
        {/*<!-- Component: Carousel with indicators inside --> */}
        <div className='reveal2'>
          <p className='md:text-4xl text-3xl font-bold text-teal-900 text-center'>
            Awards and Recognition
          </p>
        </div>

        <div className='glide-02 relative w-full'>
          {/*    <!-- Slides --> */}
          <div className='overflow-hidden' data-glide-el='track'>
            <ul
              className='whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d]
           [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0'>
              <li className='w-full  frame'>
                <div className='bg-red-500'>
                  <img
                    src={img1}
                    className='m-auto max-h-full w-full max-w-full'
                  />
                </div>
              </li>
              <li className='w-full  frame'>
                <img
                  src={img2}
                  className='m-auto max-h-full w-full max-w-full'
                />
              </li>
              <li className='w-full  frame'>
                <img
                  src={img3}
                  className='m-auto max-h-full w-full max-w-full'
                />
              </li>
              <li className='w-full  frame'>
                <img
                  src={img4}
                  className='m-auto max-h-full w-full max-w-full'
                />
              </li>
            </ul>
          </div>
          {/*    <!-- Indicators --> */}
          <div
            className='absolute bottom-0 flex w-full items-center justify-center gap-2'
            data-glide-el='controls[nav]'>
            <button
              className='group p-4'
              data-glide-dir='=0'
              aria-label='goto slide 1'>
              <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
            </button>
            <button
              className='group p-4'
              data-glide-dir='=1'
              aria-label='goto slide 2'>
              <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
            </button>
            <button
              className='group p-4'
              data-glide-dir='=2'
              aria-label='goto slide 3'>
              <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
            </button>
            <button
              className='group p-4'
              data-glide-dir='=3'
              aria-label='goto slide 4'>
              <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
            </button>
          </div>
        </div>
      </div>
      {/*<!-- End Carousel with indicators inside --> */}
    </>
  )
}
