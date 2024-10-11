import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export default function Award() {
  return (
    <div className="space-y-16">
      <div className="reveal2">
        <p className="md:text-4xl text-2xl font-bold text-teal-900 text-center">
          Awards and Recognition
        </p>
      </div>
      <div
        className="w-[97%] lg:w-[95%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16"
      >
        <div className="w-full reveal2 hover-effect frame">
          <img src={img1} className="w-full h-64 object-cover framed-image" alt="Award 1" />
        </div>
        <div className="w-full reveal4 hover-effect frame">
          <img src={img2} className="w-full h-64 object-cover framed-image" alt="Award 2" />
        </div>
        <div className="w-full reveal3 hover-effect frame">
          <img src={img3} className="w-full h-64 object-cover framed-image" alt="Award 3" />
        </div>
        <div className="w-full reveal2 hover-effect frame">
          <img src={img4} className="w-full h-64 object-cover framed-image" alt="Award 4" />
        </div>
      </div>
    </div>
  );
}
