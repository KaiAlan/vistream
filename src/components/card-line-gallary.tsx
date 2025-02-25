'use client'

import { useRouter } from "next/navigation";

const data = [
    {
        src: "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
        name: "Epoch",
        description: "Tycho",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png",
        name: "Awake",
        description: "Tycho",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg",
        name: "Dive",
        description: "Tycho",
    },
]

const CardGallery = () => {
  const router = useRouter()

  const handleClick = (link: string) => {
    router.push(`/video/${link}`)
  }
  return (
      <div>
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold text-gray-200 mb-5">
          Made for you
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {data.map((item, index) => (
            <div key={index} className="group hover:bg-gray-900 shadow-lg rounded p-3 hover:scale-105 hover:-translate-y-10 ease-in-out duration-700">
            <div className="group relative">
              <img
                className="w-full md:w-72 block rounded"
                src={item.src}
                alt={item.name}
              />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>

                <button
                onClick={() => handleClick(item.name)}
                className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
                </button>

                <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-5 group/edit invisible group-hover:visible">
              <span className="text-white group-hover/edit:text-lg">{item.name}</span>
              <p className="text-gray-400 group-hover/edit:bg-opacity-100">{item.description}</p>
            </div>
          </div>
          ))}
        </section>
      </div>
  );
};

export default CardGallery;
