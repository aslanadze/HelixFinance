export interface ActionCallbacksType {
    loadingText?: string | string[];
    onSuccess?: () => void;
    onError?: () => void;
    isCompleted?: boolean;
}