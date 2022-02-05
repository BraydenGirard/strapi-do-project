module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7f2c949c8a2c73a63bf95e1bf601fa1b'),
  },
});
