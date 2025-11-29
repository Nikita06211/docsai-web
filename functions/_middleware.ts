export async function onRequest(context: any) {
  // Cloudflare Pages middleware
  return context.next();
}
