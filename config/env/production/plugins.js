module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_APIKEY'),
      },
      settings: {
        defaultFrom: env('SENDGRID_DEFAULT_FROM'),
        defaultReplyTo: env('SENDGRID_DEFAULT_REPLYTO'),
      },
    }
  },
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
        bucketName: env('BUCKET_NAME'),
        publicFiles: true,
        uniform: false,
        serviceAccount: env.json('BUCKET_BASE_SERVICE_ACCOUNT'),// replace `{}` with your serviceAccount JSON object
        baseUrl: env('BUCKET_BASE_URL'),
        basePath: env('BUCKET_BASE_PATH'),
      },
    },
  },
});
