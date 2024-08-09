export function GET(request) {
    return new Response(`Hello from ${process.env.POSTGRES_HOST}`);
}
