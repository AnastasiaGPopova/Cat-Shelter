const configuration = {
    production : {
       PORT: 1234
    },
    development: {

        PORT: 5000
    }
}

module.exports = configuration[process.env.node_ev || "development"]