export const logErrorAndStatus = (error: Error | string): number | null => {
    if(error && process.env.NODE_ENV === 'development'){
        console.error(error);
    }
  return 400;
};
