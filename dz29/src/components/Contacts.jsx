import SVGS from "../data/svgs";
import SvgIcon from "./SvgIcon";

const Contacts = () => {
  return (
    <div className="max-w-screen-lg mx-auto sm:px-0 px-3">
      <h1 className="text-5xl text-center">Contacts:</h1>
      <div className="flex sm:justify-between mt-10 flex-wrap gap-2 justify-center">
        <SvgIcon path={SVGS.GIT} name="GitHub" link="https://github.com/" />
        <SvgIcon
          path={SVGS.TELEGRAM}
          name="Telegram"
          link="https://web.telegram.org/a/"
        />
        <SvgIcon
          path={SVGS.LINKEDIN}
          name="Linkedin"
          link="https://www.linkedin.com/feed/"
        />
        <SvgIcon
          path={SVGS.DISCORD}
          name="Discord"
          link="https://discord.com/"
        />
      </div>
    </div>
  );
};
export default Contacts;
