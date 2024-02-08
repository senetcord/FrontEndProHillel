import InfoEntity from "../../entities/Info/InfoEntity";
import DescriptionInfo from "../../features/Info/DescriptionInfo";
import InfoBlock from "../../features/Info/InfoBlock";
import InfoImg from "../../features/Info/InfoImg";

const InfoWidget = () => {
  return (
    <InfoEntity>
      <DescriptionInfo>
        <InfoImg />

        <InfoBlock>Todo List with filtering ability.</InfoBlock>
        <InfoBlock>
          To add an item write the todo-item in the input and click on arrow
          symbol.
        </InfoBlock>
        <InfoBlock>
          You can check items, those items that are checked go to the bottom of
          the list
        </InfoBlock>
        <InfoBlock>
          In the footer you have counter that shows overall amount of your
          todo-items. Delete button, that clears up the entire list. And the
          search bar, that filters your todo-list according to first letters.
        </InfoBlock>
      </DescriptionInfo>
    </InfoEntity>
  );
};
export default InfoWidget;
