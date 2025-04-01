import{ useMutation } from "@tanstack/react-query"
import { LoginUsers } from "../Services/api/endpoints"

export function useLoginUsers({
    onSuccess = () => {},
    onError = () => {},
} = {}) {
    return useMutation({
        mutationFn: 
        LoginUsers,
        onSuccess,
        onError,
    });
}