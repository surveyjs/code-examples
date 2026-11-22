import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export function FormCompleted({ data, onReset }: { data: unknown; onReset: () => void }) {
  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Alert severity="success">Thank you. Your intake form has been submitted.</Alert>
      <pre data-testid="result" style={{ whiteSpace: "pre-wrap", fontSize: 12 }}>
        {JSON.stringify(data, null, 2)}
      </pre>
      <Button variant="outlined" onClick={onReset} sx={{ alignSelf: "flex-start" }}>
        Start over
      </Button>
    </Stack>
  );
}
