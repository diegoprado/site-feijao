import SocialLinks from 'components/reuseable/SocialLinks';

export default function Footer15() {
  return (
    <footer className='bg-[#BE1E2E]'>
      <div className='container pt-13 pb-7'>
        <div className='d-md-flex align-items-center justify-content-between'>
          <p className='mb-2 mb-lg-0 text-white'>
            © 2024 João Feijão. Todos os direitos reservados.
          </p>
          <SocialLinks className='nav social social-muted mb-0 text-md-end text-white' />
        </div>
      </div>
    </footer>
  );
}
