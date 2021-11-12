import tw, { css } from 'twin.macro';

export const TwHeading = tw.h1`font-bold text-2xl my-3 mx-6`;

// Cloning and styling an existing input
export const RedHeading = tw(TwHeading)`text-red-500`;

// Sass styles can also be applied to components
const hoverStyles = css`
  &:hover {
    border-color: black;
    ${tw`text-gray-400 border-b`}
  }
`;

export const SassHeading = ({ children }) => (
  <TwHeading css={[hoverStyles]} children={children} />
);

export const GeocitiesHeading = ({ children, uglyBackground }) => (
  <TwHeading
    css={[tw`text-indigo-400`, uglyBackground && tw`bg-green-800`]}
    children={children}
  />
);
