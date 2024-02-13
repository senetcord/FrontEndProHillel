import { Box, Button, IconButton, InputBase, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setItemsAsyncAction } from "../../../shared/Saga/asyncActions";
import { initialState } from "../slices/todoSlice";

const TodoFooter = ({ handleChange }) => {
  const data = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  function handleClearAll() {
    dispatch(setItemsAsyncAction(initialState));
  }

  const getDataLoading = useSelector(
    (state) => state.todo.loaders.getDataLoading
  );
  const addItemLoading = useSelector(
    (state) => state.todo.loaders.addItemLoading
  );

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "25px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "12px",
          backgroundColor: "rgba(0, 0, 0, 0.15)",
          borderRadius: "30px",
        }}
      >
        Count: {data.length}
      </Box>

      <Button
        onClick={handleClearAll}
        variant="contained"
        startIcon={<DeleteIcon />}
        disabled={getDataLoading || addItemLoading}
      >
        CLEAR ALL
      </Button>

      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          height: "60px",
          width: "550px",
          "@media (max-width: 600px)": {
            width: "200px",
          },
        }}
      >
        <InputBase
          onChange={handleChange}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search here..."
          inputProps={{ "aria-label": "Search here..." }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};
export default TodoFooter;
