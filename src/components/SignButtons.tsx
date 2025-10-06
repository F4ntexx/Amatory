import Button from "@mui/material/Button";
function SignButton() {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#f50057",
      }}
      type="submit"
    >
      Send
    </Button>
  );
}

export default SignButton;
