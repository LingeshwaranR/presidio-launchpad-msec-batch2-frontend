export default function decodeJwt(token: string) {
    const payload = token.split('.')[1];
    const decoded = atob(payload); // or use Buffer.from(payload, 'base64') in Node
    return JSON.parse(decoded);
}