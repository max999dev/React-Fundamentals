const Welcome = (props) => {
  console.log(`props`, props);
  return <h2>Welcome to {props.name}!</h2>;
  
};

export default Welcome;
