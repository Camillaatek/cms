module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a3852765495bcf244142341da8b6ed2'),
  },
});
