import React from "react";

function Amenities() {
  const amenitiesData = [
    { id: 1, name: "Gymnasium", image: "/gym.svg", alt: "Gymnasium" },
    { id: 2, name: "Swimming Pool", image: "/swm.svg", alt: "Swimming Pool" },
    { id: 3, name: "Yoga Pavilion", image: "/yoga.svg", alt: "Yoga Pavilion" },
    {
      id: 4,
      name: "Video Door Phone",
      image: "/videos.svg",
      alt: "Video Door Phone",
    },
    {
      id: 5,
      name: "Kids Activity Zone",
      image: "/kids.svg",
      alt: "Kids Activity Zone",
    },
    { id: 6, name: "Mini Theater", image: "/mine.svg", alt: "Mini Theater" },
    { id: 7, name: "Aerobics Room", image: "/tennis.svg", alt: "Tennis Court" },
    {
      id: 8,
      name: "Indoor Games Room",
      image: "/chess.svg",
      alt: "Indoor Games Room",
    },
    { id: 9, name: "Club House", image: "/disco-ball.svg", alt: "Club House" },
    { id: 10, name: "Dance/Music", image: "/dance.svg", alt: "Dance/Music" },
    {
      id: 11,
      name: "24/7 CCTV Monitoring",
      image: "/cctv.svg",
      alt: "24/7 CCTV Monitoring",
    },
    { id: 12, name: "Jogging Track", image: "/jog.svg", alt: "Jogging Track" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center w-full gap-3">
      {amenitiesData.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center  h-[110px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-2 rounded-lg hover:border border-black hover:transition-all hover:duration-300"
        >
          <img className="h-[60%] w-full pt-1" src={item.image} alt="" />
          <span className="text-center h-[40%] pt-1 text-sm text-black">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Amenities;
