export async function GET() {
  const data = { name: "sandy", surname: "Yadav" };

  return Response.json({ data });
}
