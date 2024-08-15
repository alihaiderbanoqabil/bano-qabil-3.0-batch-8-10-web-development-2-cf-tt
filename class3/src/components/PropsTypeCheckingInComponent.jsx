import React from 'react'
import PropTypes from 'prop-types';

// const PropsTypeCheckingInComponent = ({ name, age, isAdult, hobbies, info, add }) => {
const PropsTypeCheckingInComponent = (props) => {
  const { name, age, isAdult, hobbies, info, add } = props
  console.log({ name, age, isAdult, hobbies, info, add });
  // console.log(typeof JSON.stringify(props));

  return (
    <div>PropsTypeCheckingInComponent

      <pre>{JSON.stringify({ name, age, isAdult, hobbies, info, add }, null, 8)}</pre>
    </div>
  )
}

export default PropsTypeCheckingInComponent

PropsTypeCheckingInComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdult: PropTypes.bool,
  hobbies: PropTypes.array,
  info: PropTypes.object,
  add: PropTypes.func,
  node: PropTypes.node,
  optionalObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
  }),
}