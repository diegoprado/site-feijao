import { Fragment } from 'react';

type TilesProps = {
  images: string[];
};

export default function Tiles5({ images }: TilesProps) {
  return (
    <Fragment>
      <div
        className='shape bg-dot primary rellax w-16 h-20'
        style={{ top: '3rem', left: '5.5rem' }}
      />

      <div className='overlap-grid overlap-grid-2'>
        {images.map((item, i) => (
          <div
            className={`item ${i > 0 ? 'hidden md:block' : ''}`}
            key={item + i}
          >
            {/* <figure className='rounded shadow'>
              <img
                key={i}
                src={item}
                // srcSet={`/img/photos/${item}@2x.jpg 2x`}
                alt={item}
              />
            </figure> */}
            <div
              className='w-[450px] h-[300px] md:h-[450px] rounded shadow-md max-w-full'
              style={{
                background: `url(${item})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
}
