const errorMessages = {
    "cancelled": "The operation was cancelled",
    "deadline-exceeded": "The operation deadline was exceeded",
    "not-found": "The requested document or resource was not found",
    "already-exists": "The document or resource already exists and should not be overwritten",
    "permission-denied": "The operation was denied due to insufficient permissions",
    "resource-exhausted": "Resource has been exhausted, such as too many requests in a short period",
    "failed-precondition": "The operation failed due to a precondition check, such as an outdated document",
    "aborted": "The operation was aborted",
    "out-of-range": "The request is out of range, such as a query bound not valid",
    "unimplemented": "The operation is not implemented or supported",
    "internal": "An internal error occurred while processing the operation",
    "unavailable": "The service is currently unavailable, and the operation cannot be performed",
    "data-loss": "Unrecoverable data loss or corruption occurred during the operation",
    "unauthenticated": "The operation is unauthenticated and requires authentication",
    "invalid-argument": "An invalid argument was provided to the operation",
};

export const getFirestoreError = (code)=>{
    return errorMessages[code];
};