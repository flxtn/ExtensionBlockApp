import { useSessionQuery } from "@/entities/session";
import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { ADMIN_URL } from "@/shared/constants";
import { createTab } from "@/shared/lib/chrome";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLogo } from "@/shared/ui/ui-logo";

export function HomePage() {

  return (
    <div className="p-10 flex flex-col gap-4">
      <UiLogo />
      <ToggleBlockingButton />
      <UiButton variant="secondary" onClick={() => createTab(ADMIN_URL)}>
        Manage Extension
      </UiButton>
    </div>
  );
}


