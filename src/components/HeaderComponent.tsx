import logo from "../assets/investment-calculator-logo.png";
const HeaderComponent = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default HeaderComponent;
