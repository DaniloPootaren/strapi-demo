module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '763d067519340d62e72aac5848709467'),
  },
});
