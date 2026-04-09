import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    // TEMP TEST (remove later)
    return Response.json({ success: true, message: "Admin API working" });

  } catch (error) {
    console.error("ADMIN CHECK ERROR:", error);
    return Response.json(
      { error: error.message || "Failed to check admin status" },
      { status: 500 }
    );
  }
}