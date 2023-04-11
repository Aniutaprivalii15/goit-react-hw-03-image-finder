import { Dna } from 'react-loader-spinner';
// import css from './Loader.module.css';

// export const Loader = () => (
//   <div className={css.Loader}>
//     <Dna
//       visible={true}
//       height="80"
//       width="180"
//       ariaLabel="dna-loading"
//       wrapperStyle={{margin: '0 auto', marginTop: '200px'}}
//       wrapperClass="dna-wrapper"
//     />
//   </div>
// );

export const Loader = () => {
  return (
    <>
      <Dna
        visible={true}
        height="80"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{ margin: '0 auto', marginTop: '300px' }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#5c5c5c"
      />
    </>
  );
};