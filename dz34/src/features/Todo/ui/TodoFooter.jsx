import { Box, Button, IconButton, InputBase, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

const TodoFooter = () => {
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
        Count: 6
      </Box>

      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>

      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          height: "60px",
          width: "550px",
        }}
      >
        <InputBase
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
