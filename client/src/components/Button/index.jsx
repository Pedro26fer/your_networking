import { Button } from "./style";

const ButtonBase = ({ children, blueColor = true, ...rest }) => {
  return (
    <Button blueColor={blueColor} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonBase;
