/* eslint-disable react/prop-types */
import React, { memo } from 'react';

// const styles = {
//   header: {
//     backgroundColor: 'green',
//   },
// };

const Header = ({ user }) => <div>{user && user.name}</div>;

export default memo(Header);
