const errorMessages = {
    "auth/claims-too-large": "Payload size too big",
    "auth/email-already-exists": "Email is already in use",
    "auth/email-already-in-use":"Email is already in use",
    "auth/invalid-login-credentials":"Invalid email or password",
    "auth/id-token-expired": "ID token has expired",
    "auth/id-token-revoked": "ID token has been revoked",
    "auth/insufficient-permission": "Insufficient permissions",
    "auth/internal-error": "Internal server error",
    "auth/invalid-argument": "Invalid argument",
    "auth/invalid-claims": "Invalid custom claims",
    "auth/invalid-continue-uri": "Invalid continue URL",
    "auth/invalid-creation-time": "Invalid creation time",
    "auth/invalid-credential": "Invalid credential",
    "auth/invalid-disabled-field": "Invalid 'disabled' value",
    "auth/invalid-display-name": "Invalid display name",
    "auth/invalid-dynamic-link-domain": "Unconfigured dynamic link domain",
    "auth/invalid-email": "Invalid email address",
    "auth/invalid-email-verified": "Invalid 'emailVerified' value",
    "auth/invalid-hash-algorithm": "Invalid hash algorithm",
    "auth/invalid-hash-block-size": "Invalid hash block size",
    "auth/invalid-hash-derived-key-length": "Invalid hash key length",
    "auth/invalid-hash-key": "Invalid hash key",
    "auth/invalid-hash-memory-cost": "Invalid hash memory cost",
    "auth/invalid-hash-parallelization": "Invalid hash parallelization",
    "auth/invalid-hash-rounds": "Invalid hash rounds",
    "auth/invalid-hash-salt-separator": "Invalid salt separator",
    "auth/invalid-id-token": "Invalid ID token",
    "auth/invalid-last-sign-in-time": "Invalid last sign-in time",
    "auth/invalid-page-token": "Invalid page token",
    "auth/invalid-password": "Invalid password",
    "auth/invalid-password-hash": "Invalid password hash",
    "auth/invalid-password-salt": "Invalid password salt",
    "auth/invalid-phone-number": "Invalid phone number",
    "auth/invalid-photo-url": "Invalid photo URL",
    "auth/invalid-provider-data": "Invalid provider data",
    "auth/invalid-provider-id": "Invalid provider ID",
    "auth/invalid-oauth-responsetype": "Invalid OAuth response type",
    "auth/invalid-session-cookie-duration": "Invalid session cookie duration",
    "auth/invalid-uid": "Invalid user ID",
    "auth/invalid-user-import": "Invalid user import",
    "auth/maximum-user-count-exceeded": "Exceeded maximum user import limit",
    "auth/missing-android-pkg-name": "Missing Android Package Name",
    "auth/missing-continue-uri": "Missing continue URL",
    "auth/missing-hash-algorithm": "Missing hash algorithm",
    "auth/missing-ios-bundle-id": "Missing iOS Bundle ID",
    "auth/missing-uid": "Missing user ID",
    "auth/missing-oauth-client-secret": "Missing OAuth client secret",
    "auth/operation-not-allowed": "Operation not allowed",
    "auth/phone-number-already-exists": "Phone number is already in use",
    "auth/project-not-found": "Firebase project not found",
    "auth/reserved-claims": "Reserved custom claims",
    "auth/session-cookie-expired": "Session cookie expired",
    "auth/session-cookie-revoked": "Session cookie revoked",
    "auth/too-many-requests": "Exceeded request limit",
    "auth/uid-already-exists": "User ID is already in use",
    "auth/unauthorized-continue-uri": "Unauthorized continue URL"
};


export const getAuthError = (code)=>{
    return errorMessages[code];
};