const SplashLoader = ({ progress = 0 }) => (
  <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary'>
    <span className='canvas-loader' />
    <p className='mt-10 text-sm font-bold uppercase tracking-widest text-secondary'>
      Loading portfolio
    </p>
    <p className='mt-4 text-2xl font-bold text-white'>{Math.round(progress)}%</p>
  </div>
);

export default SplashLoader;
