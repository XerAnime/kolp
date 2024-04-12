import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectMongo from "@/utils/mongoose";
import WatchList from "@/models/watchlist";

export async function GET(request: NextRequest) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "You must be login!" }, { status: 401 });
  }

  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const statusParams = searchParams.get("status");
  const typeParams = searchParams.get("type");

  await connectMongo();

  try {
    const query: any = {
      userId: session?.user?.email,
    };

    if (statusParams) {
      query.status = statusParams;
    }

    if (typeParams) {
      query.type = typeParams;
    }

    const result = await WatchList.find(query).sort({
      updatedAt: "desc",
    });

    return NextResponse.json(JSON.parse(JSON.stringify(result)));
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
