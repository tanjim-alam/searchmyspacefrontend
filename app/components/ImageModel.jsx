import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ImageModel({currViewImage}) {
  return (
    <div>
      <dialog id="imageModel" className="modal">
        <div className="px-10">
        <div className="modal-box1 px-4">
          <form method="dialog">
            <button className="btn z-50 btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button className="bg-white cursor-pointer text-black shadow-lg rounded-full p-2 text-2xl font-bold">
              <IoIosArrowBack />
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button className="bg-white cursor-pointer text-black shadow-lg rounded-full p-2 text-2xl font-bold">
              <IoIosArrowForward />
            </button>
          </div>
          <img
            src={currViewImage || "https://superadmin.homes247.in/images/uploadPropertyImgs/1632735762-1627705458-Artboard%201%20copy%2026-100%20cover%20image.jpg"}
            alt=""
          />
        </div>
        </div>
      </dialog>
    </div>
  );
}

export default ImageModel;
