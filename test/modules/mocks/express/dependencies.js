let mocks = () => {
};

mocks.bodyParserCase = [
    {
        name: 'body-parser',
        instance: require('body-parser').json()
    }
];

mocks.twoDependencies = [
    {
        name: 'body-parser',
        instance: require('body-parser').json()
    },
    {
        name: 'cors',
        instance: require('cors')()
    }
];


module.exports = mocks;