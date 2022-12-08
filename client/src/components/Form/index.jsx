import { Form } from "./style";

const FormBase = ({ children, modalForm=false , ...rest }) => {
  return <Form {...rest}>{children}</Form>;
};

export default FormBase;
