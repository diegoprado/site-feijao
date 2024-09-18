import { Fragment } from 'react';

type TilesProps = {
  images?: string[];
};

export default function Tiles5({ images }: TilesProps) {
  return (
    <Fragment>
      <div
        className='shape bg-dot primary rellax w-16 h-20 top-[1rem] left-[4.5rem] xl:top-[3rem] xl:left-[5.5rem]'
        // style={{ top: '3rem', left: '5.5rem' }}
      />

      <div className='overlap-grid overlap-grid-2 max-w-[100%]'>
        {images
          ?.slice()
          .reverse()
          .map((item, i) => (
            <div
              className={`item !w-full ${i === 0 ? 'hidden lg:block' : ''}`}
              key={item + i}
            >
              <div
                className='w-[400px] h-[400px] xl:w-[350px] xl:h-[350px] 2xl:w-[450px] 2xl:h-[450px] rounded shadow-md max-w-full'
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
