import brainwave from "../assets/brainwave.svg"

const Header = () => {
  return (
    <div
      className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border border-n-6 lg:bg-n-8/90 lg lg-backdrop-blur-sm">
      <div  className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
      </div>
      <a>
        <img src={brainwave} width={190} height={40} alt="brainwave" />
      </a>
    </div>
  );
};

export default Header;