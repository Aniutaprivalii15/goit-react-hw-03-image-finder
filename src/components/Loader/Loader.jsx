import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Dna
        visible={true}
        height="80"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{ margin: '0 auto', marginTop: '300px' }}
        wrapperClass="dna-wrapper"
      />
    </>
  );
};