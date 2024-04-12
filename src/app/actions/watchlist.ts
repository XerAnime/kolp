"use server";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import connectMongo from "@/utils/mongoose";
import WatchList from "@/models/watchlist";

export async function createWatchList(prevState: any, formData: FormData) {
  const session = await getServerSession();

  if (!session) {
    return { message: "login" };
  }

  try {
    await connectMongo();
    await WatchList.create({
      userId: session?.user?.email,
      listId: formData.get("listId"),
      title: formData.get("title"),
      image: formData.get("image"),
      type: formData.get("type"),
      episode: formData.get("episode"),
      episodeId: formData.get("episodeId"),
      status: formData.get("status"),
    });

    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}

export async function editWatchList(prevState: any, formData: FormData) {
  const session = await getServerSession();

  if (!session) {
    return { message: "login" };
  }

  try {
    await connectMongo();

    const result = await WatchList.findOneAndUpdate(
      {
        listId: formData.get("listId"),
        userId: session?.user?.email,
      },
      {
        status: formData.get("newStatus"),
      },
      { new: true }
    );

    console.log(formData.get("listId"));

    revalidatePath("/watchlist");

    return { message: JSON.parse(JSON.stringify(result)) };
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}
