
const homeRoute = (req, res) => {
    res.send("Stephen");
}

const samRoute = (req, res) => {
    res.send("Sam");
}


module.exports = {
    homeRoute,
    samRoute
}