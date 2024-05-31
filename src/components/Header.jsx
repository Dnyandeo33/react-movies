import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header className="mx-auto w-full h-32 bg-[#264653] flex justify-center items-center">
      <h1 className="text-[3rem] sm:text-[6rem] text-[#fefae0] font-bold">
        {title}
      </h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
