const errorMessages = {
    "storage/unknown": "Unknown error",
    "storage/object-not-found": "Object not found",
    "storage/bucket-not-found": "Bucket not found",
    "storage/project-not-found": "Project not found",
    "storage/quota-exceeded": "Quota exceeded",
    "storage/unauthenticated": "Unauthenticated user",
    "storage/unauthorized": "Unauthorized access",
    "storage/retry-limit-exceeded": "Retry limit exceeded",
    "storage/invalid-checksum": "Invalid checksum",
    "storage/canceled": "Operation canceled",
    "storage/invalid-event-name": "Invalid event name",
    "storage/invalid-url": "Invalid URL",
    "storage/invalid-argument": "Invalid argument",
    "storage/no-default-bucket": "No default bucket",
    "storage/forbidden": "Forbidden",
    "storage/invalid-prefix": "Invalid prefix",
    "storage/app-deleted": "App deleted",
    "storage/app-not-authorized": "App not authorized",
    "storage/app-not-found": "App not found",
    "storage/object-not-in-bucket": "Object not in bucket",
};

export const getStorageError = (code)=>{
    return errorMessages[code];
};