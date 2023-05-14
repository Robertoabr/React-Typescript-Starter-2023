import testImage from '../../images/Logo-Test.png';
import testSvg from '../../images/testSvg.svg';
import { useUser } from '../../hooks/useUser/useUser';

export const Base = () => {
  const { data: user, isLoading } = useUser();

  console.log('user in base', user);

  if (isLoading || !user) return null;
  return (
    <>
      <h1>
        {`React Typescript App - NODE_ENV: ${process.env.NODE_ENV} PROCESS_NAME ${process.env.name} ,  USER: ${user}`}
      </h1>
      <img src={testImage} alt="Logo" width="300" height="200"></img>
      <img src={testSvg} alt="Logo" width="300"></img>
    </>
  );
};
