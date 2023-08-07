import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";


export const GET = async (request) => {
    // console.log("request", request);
    const url = new URL(request.url);
    // console.log("url", url);

    const username = url.searchParams.get("username")
    // console.log("username", username);

    try {
        await connect();

        const posts = await Post.find(username && { username });

        return new NextResponse(JSON.stringify(posts), { status: 200 })

    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}


export const POST = async (request) => {
    // console.log("request", request);
    const body = await request.json();
    // console.log("body", body);

    const newPost = new Post(body);
    // console.log("newPost", newPost);

    try {
        await connect();

        await newPost.save();

        return new NextResponse("Post has been created.", { status: 201 })

    } catch (error) {
        console.log("error here", error);
        return new NextResponse("Database Error", { status: 500 });
    }
}