var APIConfig = {
    development: 'https://localhost:7195',
    domain: 'local:7195/'
}

export default APIConfig[process.env.NODE_ENV]