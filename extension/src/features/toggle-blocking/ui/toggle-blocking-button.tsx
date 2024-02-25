import { UiButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export function ToggleBlockingButton() {
  const {isBlockingEnabled, ToggleBlocking, isReady} = useToggleBlocking();

  if (!isReady) {
    return null
  }

  return (
    <UiButton onClick={ToggleBlocking} variant={isBlockingEnabled ? "outlined" : "primary"}>
      {isBlockingEnabled ? "Disable blocking" : "Enable Blocking"}
    </UiButton>
  );
}
