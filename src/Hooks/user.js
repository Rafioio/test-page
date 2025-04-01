import{ useQuery, useMutation } from "@tanstack/react-query"
import { GetUsers,CreateUsers, UpdateUsers, DeleteUsers} from "../Services/api/endpoints"

export function useCreateUser({
    onSuccess = () => {},
    onError = () => {},
} = {}) {
    return useMutation({
        mutationFn: 
        CreateUsers,
        onSuccess,
        onError,
    });
}

export function useGetUser({
    onSuccess = () => {},
    onError = () => {},
} = {}) {
    return useQuery({ queryKey: ["usuarios"],
        queryFn: GetUsers,
        onSuccess, 
        onError
    });
}

export function useUpdateUser({
    onSuccess = () => {},
    onError = () => {},
} = {}) {
    return useMutation({ mutationFn: UpdateUsers, onSuccess, onError});
}

export function useDeleteUser({
    onSuccess = () => {},
    onError = () => {},
} = {}) {
    return useMutation({ mutationFn: DeleteUsers, onSuccess, onError});
}


