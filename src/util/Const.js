const PAGE_ROUTE  = {
    LOGIN: "LOGIN",
    SIGNUP: "SIGNUP",
    MAINBOARD: "MAINBOARD",
}

const HTTP = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",

    // --- 2xx Success ---
    STATUS_OK: 200,
    STATUS_CREATED: 201,
    STATUS_ACCEPTED: 202,
    
    // --- 4xx Client Error ---
    STATUS_BAD_REQUEST: 400,
    STATUS_UNAUTHORIZED: 401,
    STATUS_NOT_FOUND: 404,
    
    SERVER_URL: "http://localhost:8081",
    BASIC_TOKEN_PREFIX: "Bearer ",
}

const MediaType = {
    JSON: "application/json",
    HAL_JSON: "application/hal+json",
    HTML: "text/html",
}


export { PAGE_ROUTE, HTTP, MediaType};