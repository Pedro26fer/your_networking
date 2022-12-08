import { Header } from "./style";

const HeaderBase = ({ children, atHome = false }) => {
  return <Header>{children}</Header>;
};

export default HeaderBase;
