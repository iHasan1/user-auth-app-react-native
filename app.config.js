import "dotenv/config";

export default ({ config }) => {
  return {
    ...config,
    extra: {
      apiKey: process.env.FIREBASE_API_KEY,
    },
  };
};
