import { useResetSetion } from "@/entities/session/queries";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useSignOut() {
  const router = useRouter();
  const resetSession = useResetSetion();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(ROUTES.signIn);
      resetSession()
    },
  });

  return {
    signOut: signOutMutation.mutate,
  };
}
