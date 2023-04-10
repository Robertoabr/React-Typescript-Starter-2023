import './styles.css';
import testImage from './images/Logo-Test.png';
import testSvg from './images/test.svg';

const unused = 2;

export const App = () => {
  return (
    <>
      <h1>
        React Typescript App - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={testImage} alt="Logo" width="300" height="200"></img>
      <img src={testSvg} alt="Logo" width="300"></img>
    </>
  );
};
