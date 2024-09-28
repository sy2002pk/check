import React, { useState } from 'react';
import Character1 from '../../assets/images/CHARACTER/Character 1.png'; // Thay đường dẫn chính xác
import Character2 from '../../assets/images/CHARACTER/Character 2.png'; // Thay đường dẫn chính xác
import Character3 from '../../assets/images/CHARACTER/Character 3.png'; // Thay đường dẫn chính xác

const CharacterImage = ({ characterImage, title, quote, description, isExpanded, toggleImageSize }) => {
  return (
    <div
      onClick={toggleImageSize}
      className={`relative transition-all duration-1000 ease-in-out cursor-pointer 
        ${isExpanded ? 'w-full h-screen' : 'w-[200px] h-[530px]'} ${isExpanded ? 'z-50' : ''}`}
    >
      <img
        src={characterImage}
        alt={title}
        className="z-50 object-cover w-full h-full rounded-[25px] p-1 bg-custom-gradient"
      />
      {/* Chỉ hiển thị overlay khi hình ảnh phóng to */}
      <div
        className={`absolute bottom-0 left-0 w-full p-8 bg-black bg-opacity-60 text-white transform transition-transform duration-700 ease-in-out 
          ${isExpanded ? 'translate-x-0' : '-translate-x-full opacity-0 pointer-events-none'}`}
      >
        <div className="max-w-lg text-left text-[#fff]">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-2 text-xl font-valorant">"{quote}"</p>
          <p className="mt-4 text-base">{description}</p>
        </div>
      </div>

      {/* Nút quay lại khi ảnh phóng to */}
      {isExpanded && (
        <div className="absolute text-white top-4 left-4">
          <button
            onClick={toggleImageSize}
            className="px-4 py-2 text-gray-900 bg-white rounded shadow-lg hover:bg-gray-100"
          >
            Quay lại
          </button>
        </div>
      )}
    </div>
  );
};

const CharacterGallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const toggleImageSize = (imageIndex) => {
    setExpandedImage(expandedImage === imageIndex ? null : imageIndex);
  };

  return (
    <div className="z-50 flex items-center justify-center min-h-screen gap-8 bg-gray-900">
      {expandedImage === null || expandedImage === 1 ? (
        <CharacterImage
          characterImage={Character1}
          title="Character 1"
          quote="There is a Monster"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at facilisis urna nulla facilisi."
          isExpanded={expandedImage === 1}
          toggleImageSize={() => toggleImageSize(1)}
        />
      ) : null}

      {expandedImage === null || expandedImage === 2 ? (
        <CharacterImage
          characterImage={Character2}
          title="Character 2"
          quote="There is a Monster"
          description="Suspendisse potenti. Phasellus euismod felis nec ullamcorper suscipit. Integer at egestas ligula."
          isExpanded={expandedImage === 2}
          toggleImageSize={() => toggleImageSize(2)}
        />
      ) : null}

      {expandedImage === null || expandedImage === 3 ? (
        <CharacterImage
          characterImage={Character3}
          title="Character 3"
          quote="There is a Monster"
          description="Vivamus maximus turpis at nisi pretium, non vestibulum nisi placerat. Etiam nec lectus vel orci feugiat feugiat."
          isExpanded={expandedImage === 3}
          toggleImageSize={() => toggleImageSize(3)}
        />
      ) : null}
    </div>
  );
};

export default CharacterGallery;
