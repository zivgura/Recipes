import { createContext, useMemo, useState, useCallback } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { clearStoredAccessToken, getStoredAccessToken, storeAccessToken } from "../lib/driveAuthStorage.js";

export const DriveAuthContext = createContext({
  accessToken: null,
  requestLogin: () => {},
  logout: () => {},
});

export function DriveAuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(() => getStoredAccessToken());

  const login = useGoogleLogin({
    // User must be invited on the Drive file/folder; this scope reads only what they can open in Drive.
    scope: "https://www.googleapis.com/auth/drive.readonly",
    onSuccess: (res) => {
      storeAccessToken(res);
      setAccessToken(res.access_token);
    },
  });

  const requestLogin = useCallback(() => {
    login();
  }, [login]);

  const logout = useCallback(() => {
    clearStoredAccessToken();
    setAccessToken(null);
  }, []);

  const value = useMemo(
    () => ({
      accessToken,
      requestLogin,
      logout,
    }),
    [accessToken, requestLogin, logout]
  );

  return <DriveAuthContext.Provider value={value}>{children}</DriveAuthContext.Provider>;
}
