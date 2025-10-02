import Button from "@mui/material/Button";

function SignButtons() {
  return (
    <div className="flex gap-2">
      <Button
        variant="contained"
        sx={{
          bgcolor: "#f50057",
        }}
      >
        Create
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#ff4081",
          color: "white",
          borderWidth: "2px",
        }}
      >
        Cancel
      </Button>
    </div>
  );
}

export default SignButtons;
