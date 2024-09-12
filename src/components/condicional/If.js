const If = (props) => {
  if (props.test) {
    return props.children;
  } else {
    return null;
  }
};

export default If;
