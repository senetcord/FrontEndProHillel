import InfoEntity from "../../entities/Info/InfoEntity";
import InfoDescription from "../../features/Info/InfoDescription";
import InfoPicture from "../../features/Info/InfoPicture";
import InfoTitle from "../../features/Info/InfoTitle";

const InfoWidget = () => {
  return (
    <InfoEntity>
      <InfoTitle />
      <InfoPicture />
      <InfoDescription />
    </InfoEntity>
  );
};
export default InfoWidget;
