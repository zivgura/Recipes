const AT_KEY = "rcp_gdrive_at";
const EXP_KEY = "rcp_gdrive_exp";

export function getStoredAccessToken() {
  try {
    const exp = Number(sessionStorage.getItem(EXP_KEY) || 0);
    const at = sessionStorage.getItem(AT_KEY);
    if (!at || Date.now() > exp - 60_000) return null;
    return at;
  } catch {
    return null;
  }
}

/** @param {{ access_token: string, expires_in?: number }} tokenResponse */
export function storeAccessToken(tokenResponse) {
  try {
    const exp = Date.now() + (tokenResponse.expires_in || 3600) * 1000;
    sessionStorage.setItem(AT_KEY, tokenResponse.access_token);
    sessionStorage.setItem(EXP_KEY, String(exp));
  } catch {}
}

export function clearStoredAccessToken() {
  try {
    sessionStorage.removeItem(AT_KEY);
    sessionStorage.removeItem(EXP_KEY);
  } catch {}
}
