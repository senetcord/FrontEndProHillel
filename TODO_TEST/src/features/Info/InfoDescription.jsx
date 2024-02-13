import { Box } from "@mui/material";

const InfoDescription = () => {
  return (
    <Box
      maxWidth={"80%"}
      m={"15px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"15px"}
    >
      <h2 style={{ color: "#000104" }}>
        1. Write your Todo items here, it requires at least 1 symbol!
      </h2>
      <h2 style={{ color: "#ff8025" }}>
        2. To add your Todo item press this button or Enter on your keyboard.
      </h2>
      <h2 style={{ color: "#f0e953" }}>
        3. Here you have your items, you are able to mark them as completed,
        after that they automatically will go down the list.
      </h2>
      <h2 style={{ color: "#4a9b61" }}>
        4. Also you can delete a specific Todo item that you want.
      </h2>
      <h2 style={{ color: "#bd3a4a" }}>
        5. There is a counter of how many Todo items you have.
      </h2>
      <h2 style={{ color: "#a6826a" }}>
        6. This button deletes every Todo item you have!
      </h2>
      <h2 style={{ color: "#e5b3d6" }}>
        7. This search input filters items by letters.
      </h2>
    </Box>
  );
};
export default InfoDescription;
