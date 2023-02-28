const env:string=import.meta.env.VITE_APP_ENV

export const BASE_URL:string|undefined = {
    dev: "https://api.devserver.com/base/url",
    prod: "https://api.prodserver.com/base/url",
    test: "https://api.testserver.com/base/url",
}[env]

const FILE_BASE_URL:string|undefined = {
    dev: "https://file.devserver.com/templete/",
    prod: "https://file.prodserver.com/templete/",
    test: "https://file.testserver.com/templete/",
}[env];
