import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { Notes } from "@/lib/database/models/notes.model";

export async function GET() {
  const headerRequest = headers();
  const userId = headerRequest.get("userId");
  Notes.find({ userId })
    .then((notes) => {
      return NextResponse.json({ notes });
    })
    .catch((err) => {
      return NextResponse.json({ error: "Failed to retrieve todos" });
    });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);

    const newNote = new Notes({
      title: "hi",
      description: "hi",
      userId: "hi",
    });

    newNote
      .save()
      .then((savedNote) => {
        return NextResponse.json({ savedNote });
      })
      .catch((err) => {
        return NextResponse.json({ error: "Failed to create a new todo" });
      });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create a new todo" });
  }
}
