export async function isConnectedToServer(request: Request): Promise<boolean> {
  try {
    const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
    const url = new URL("/", `http://${host}`);

    fetch(url.toString(), {method: "HEAD"}).then((r) => {
      if (!r.ok) return Promise.reject(r);
    })
    return true;
  } catch (error) {
    return false;
  }
}