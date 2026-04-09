import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    // 🔥 FORCE TEST
    return Response.json({ success: true, step: "DB connected" });

  } catch (error) {
    console.error("🔥 REAL ERROR:", error);

    return Response.json(
      {
        error: "Failed to check admin status",
        details: error.message || error.toString(), // 👈 IMPORTANT
      },
      { status: 500 }
    );
  }
}