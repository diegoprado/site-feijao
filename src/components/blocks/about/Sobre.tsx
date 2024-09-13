import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// CUSTOM DATA
import { aboutList2 } from 'data/about';

interface SobreProps {
  id: string;
  title: string;
  text: string[];
  lead?: string;
  inverted?: boolean;
}

export default function Sobre({ id, title, lead, text, inverted }: SobreProps) {
  return (
    <div
      className={`row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center flex ${
        inverted ? 'flex-row-reverse' : ''
      }`}
      id={id}
    >
      <div className='col-lg-6 position-relative order-lg-2'>
        <Tiles5 />
      </div>

      <div className='col-lg-6'>
        <h2 className='display-4 mb-3'>{title}</h2>

        {lead && <p className='lead fs-lg'>{lead}</p>}

        {text.map((text, i) => (
          <p key={i} className='mb-6'>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
