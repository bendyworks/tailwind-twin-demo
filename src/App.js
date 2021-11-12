import Card from './Card';
import TwinCard from './TwinCard/TwinCard';

import {
  GeocitiesHeading,
  TwHeading,
  RedHeading,
  SassHeading,
} from './Headings';

function App() {
  return (
    <div>
      <h1 className="font-bold text-2xl my-3 mx-6">Tailwind Card Demo</h1>
      <div className="my-6 mx-6 flex flex-col justify-center">
        <Card />
        <div className="my-6"></div>
        <TwinCard />
      </div>
      <hr className="my-24 border border-t border-gray-600" />
      <TwHeading>Show Me a Heading!</TwHeading>
      <RedHeading>This is a cloned heading changing the text color</RedHeading>
      <SassHeading>
        This mixes Sass styles into the TwHeading component
      </SassHeading>
      <GeocitiesHeading>This is a retro 90's heading</GeocitiesHeading>
      <GeocitiesHeading uglyBackground>
        This is a 90's retro heading with a gross background
      </GeocitiesHeading>
    </div>
  );
}

export default App;
