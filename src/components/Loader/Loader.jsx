import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = ({ loading }) => (
  <div>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#2196f3"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClassName=""
      visible={loading && true}
    />
  </div>
);
Loader.propTypes = {
  loading: PropTypes.bool,
};