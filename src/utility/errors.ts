import { useAuthStore } from '../stores/authstore';
import { APIHttpStatus } from './types';
// Will log the error to the console if the app is running in development mode.
// Additionally, this function will return the error code if one is found.
// If it is a 401 error then this function will trigger MSAL to sign the user back in.
// Otherwise, it will return null.
export const logErrorAndCheckStatus = (
  error?: Error | string
): number | null => {
  //If is cancel request error comes from axios then return cancel status code
  //This will be true when cancel request of axios
  if (error) return APIHttpStatus.Cancel;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof (error as any)?.response?.status == 'number') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorStatus = (error as any).response.status as number;

    // force users to resign in if we get an unexpected 401 error
    if (errorStatus == APIHttpStatus.Unauthorized) {
      const authStore = useAuthStore();
      authStore.signInRedirect();
    }

    return errorStatus;
  } else {
    return null;
  }
};
