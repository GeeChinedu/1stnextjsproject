import { NextResponse } from "next/server"
import connect from "@/utils/db"; // connects to our db
import Post from "@/models/Post";

export const GET = async (request ) =>{

try {
  
  await connect();

  const posts = await Post.Find(); // this will fetch all posts 
  return new NextResponse(posts, {status: 200});

} catch (error) {
  return new NextResponse("Database error", {status: 500});
  
} 

};



