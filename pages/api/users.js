export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify([
        {
            nama :"deni",
            email :"deni@gmail" 
        },
        {
            nama:"saputra",
            email :"saputra@gmail"
        },
        {
            nama:"taufik",
            email :"taufik@gmail"
        }
    ]))
    
}