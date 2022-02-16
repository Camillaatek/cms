module.exports = ({ env }) => ({
    url: env('https://strapima3ca.herokuapp.com/'),
    proxy: true,
    app: {
        keys: env.array('APP_KEYS', ['yourkey1', 'yourkey2']),
    },
});