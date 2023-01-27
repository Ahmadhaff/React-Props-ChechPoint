import React from "react";
//import PropTypes from 'prop-types';

const MyInfos = (props) => {
  return (
    <div>
      {props.fullName}

      {props.age}

      {props.bio}

      {props.profession}
    </div>
  );
};
//MyInfos.defaultProps={fullName:"No Name Exists"};
//MyInfos.propTypes={age:PropTypes.string}
export default MyInfos;
