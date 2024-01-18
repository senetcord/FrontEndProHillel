import SVGS from "../data/svgs";
import SvgIcon from "./SvgIcon";

const Contacts = () => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <h1 className="text-5xl text-center">Contacts:</h1>
      <div className="flex justify-between mt-10 flex-wrap gap-2">
        <SvgIcon path={SVGS.GIT} name="GitHub" link="#" />
        <SvgIcon path={SVGS.TELEGRAM} name="Telegram" link="#" />
        <SvgIcon path={SVGS.LINKEDIN} name="Linkedin" link="#" />
        <SvgIcon path={SVGS.DISCORD} name="Discord" link="#" />
      </div>
    </div>
  );
};
export default Contacts;
