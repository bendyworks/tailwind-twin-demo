import tw from 'twin.macro';

export const Wrapper = tw.div`w-1/2 lg:flex`;
export const CardImage = tw.div`h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`;
export const CardContent = tw.div`border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`;
export const CardContainer = tw.p`text-sm text-gray-500 flex items-center`;
export const CardTitle = tw.h1`text-black font-bold text-xl mb-2`;
export const ProfileImageContainer = tw.div`flex items-center text-sm`;
export const Name = tw.p`font-medium text-gray-600 leading-none`;
export const Date = tw.p`text-gray-500`;
export const CardText = tw.p`text-base`;
