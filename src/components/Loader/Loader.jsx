import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.gridLoader}>
      <Grid visible={true} height="80" width="80" color="#286FF0" ariaLabel="grid-loading" />
    </div>
  );
};

export default Loader;
