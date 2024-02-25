import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";

export function SignOutButton() {
  const { signOut } = useSignOut();
  return (
    <UiButton variant="secondary" onClick={() => signOut({})}>
      Sign Out
    </UiButton>
  );
}
