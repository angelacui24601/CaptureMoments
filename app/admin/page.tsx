"use client";

// Admin page — basic/unstyled by design.
// Provides a simple interface for uploading images to Cloudinary.
// Requires CLOUDINARY_* env variables set in .env.local.

import { useState, useRef } from "react";

interface UploadedImage {
  url: string;
  publicId: string;
  uploadedAt: string;
}

export default function AdminPage() {
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = fileInputRef.current?.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");

      setUploadedImages((prev) => [
        {
          url: data.url,
          publicId: data.publicId,
          uploadedAt: new Date().toLocaleString(),
        },
        ...prev,
      ]);

      // Reset file input after successful upload
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace", maxWidth: "900px" }}>
      <h1>Admin — Image Upload</h1>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Upload portfolio images to Cloudinary. Make sure{" "}
        <code>.env.local</code> is configured with your credentials.
      </p>

      {/* Upload form */}
      <form onSubmit={handleUpload} style={{ marginBottom: "1rem" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <label htmlFor="file-upload">
            <strong>Select image:</strong>
          </label>
          <br />
          <input
            id="file-upload"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            required
            style={{ marginTop: "0.4rem" }}
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          style={{ padding: "0.5rem 1.25rem", cursor: uploading ? "not-allowed" : "pointer" }}
        >
          {uploading ? "Uploading…" : "Upload to Cloudinary"}
        </button>
      </form>

      {/* Error feedback */}
      {error && (
        <p style={{ color: "red", marginBottom: "1rem" }}>Error: {error}</p>
      )}

      {/* Table of uploaded images */}
      {uploadedImages.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h2>
            Uploaded Images ({uploadedImages.length})
          </h2>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              marginTop: "0.75rem",
              fontSize: "0.85rem",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid #ccc", textAlign: "left" }}>
                <th style={{ padding: "0.5rem" }}>Preview</th>
                <th style={{ padding: "0.5rem" }}>Cloudinary URL</th>
                <th style={{ padding: "0.5rem" }}>Uploaded At</th>
              </tr>
            </thead>
            <tbody>
              {uploadedImages.map((img) => (
                <tr key={img.publicId} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "0.5rem" }}>
                    {/* Using a plain <img> here intentionally — admin-only, no SEO concerns */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.url}
                      alt="Uploaded preview"
                      style={{ width: 80, height: 60, objectFit: "cover", display: "block" }}
                    />
                  </td>
                  <td style={{ padding: "0.5rem", wordBreak: "break-all" }}>
                    <a href={img.url} target="_blank" rel="noopener noreferrer">
                      {img.url}
                    </a>
                  </td>
                  <td style={{ padding: "0.5rem", whiteSpace: "nowrap" }}>
                    {img.uploadedAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
