import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectMongo from "@/utils/mongoose";
import WatchList from "@/models/watchlist";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "You must be login!" }, { status: 401 });
  }

  const id = params.id;

  await connectMongo();

  try {
    const result = await WatchList.findOne({
      listId: id,
      userId: session?.user?.email,
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "You must be login!" }, { status: 401 });
  }

  const id = params.id;

  await connectMongo();

  const result = await WatchList.findOneAndDelete({
    listId: id,
    userId: session?.user?.email,
  });

  return NextResponse.json(result);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "You must be login!" }, { status: 401 });
  }

  const body = await request.json();

  const id = params.id;

  await connectMongo();

  const result = await WatchList.findOneAndUpdate(
    {
      listId: id,
      userId: session?.user?.email,
    },
    body,
    { new: true }
  );

  return NextResponse.json(result);
}
