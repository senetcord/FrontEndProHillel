import HeaderEntity from "../../entities/Header/HeaderEntity";
import Link from "../../features/Header/Link";
import Links from "../../features/Header/Links";
import Title from "../../features/Header/Title";

const HeaderWidget = ({ titleText }) => {
  return (
    <HeaderEntity>
      <Title>{titleText}</Title>
      <Links>
        <Link text={"HOME"} to={"/"} />
        <Link text={"INFO"} to={"/info"} />
      </Links>
    </HeaderEntity>
  );
};
export default HeaderWidget;
