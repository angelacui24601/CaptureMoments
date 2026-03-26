import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import type { UploadApiResponse } from "cloudinary";

// Configure the Cloudinary SDK from env variables (server-side only).
// Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET in .env.local
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Limit uploads to 10 MB
const MAX_BYTES = 10 * 1024 * 1024;

// POST /api/upload
// Accepts multipart/form-data with a single "file" field.
// Returns { url, publicId } on success.
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }

    // Validate MIME type — accept images only
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files are allowed." },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { error: "File size must be under 10 MB." },
        { status: 400 }
      );
    }

    // Convert Web API File → Node.js Buffer for Cloudinary's upload_stream
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Stream the buffer directly to Cloudinary
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "grad-photos" }, (error, result) => {
          if (error || !result) reject(error ?? new Error("Upload failed"));
          else resolve(result);
        })
        .end(buffer);
    });

    return NextResponse.json({
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch {
    return NextResponse.json(
      { error: "Upload failed. Verify your Cloudinary credentials in .env.local." },
      { status: 500 }
    );
  }
}
