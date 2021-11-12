import React from 'react';
import LockImage from './LockImage';
import ProfileImage from './ProfileImage';

const Card = () => (
  <div className="w-1/2 lg:flex">
    <div
      className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style={{
        backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')",
      }}
      title="Woman holding a mug"
    ></div>
    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-sm text-grey-dark flex items-center">
          <LockImage />
          Members only
        </p>
        <div className="text-black font-bold text-xl mb-2">
          Can coffee make you a better developer?
        </div>
        <p className="text-grey-darker text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="flex items-center">
        <ProfileImage />
        <div className="text-sm">
          <p className="font-medium text-gray-600 leading-none">
            Jason Stewart
          </p>
          <p className="text-gray-500">May 5</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
