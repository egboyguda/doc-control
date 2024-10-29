// cloudinaryUploader.ts
import cloudinary from "./cloudinary";

interface UploadResult {
  url: string;
  secure_url: string;
  public_id: string;
  [key: string]: any; // Add other properties you expect from Cloudinary
}

export async function uploadFileToCloudinary(
  buffer: Uint8Array
): Promise<UploadResult> {
  const upload = await new Promise<UploadResult>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result as UploadResult); // Assert the result to be of UploadResult type
      })
      .end(buffer);
  });

  return upload; // Returns the Cloudinary upload result
}
