import React, { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { toast } from "react-hot-toast";
import { db } from "./../../../configs"; import { CarImages } from "./../../../configs/schema";
function UploadImage({ triggerUploadImage }) {
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!triggerUploadImage) {
      console.warn("No listing ID found for upload");
    }
  }, [triggerUploadImage]);

  // Called when user selects files
  const onFileSelected = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    if (!triggerUploadImage) {
      toast.error("Please create a listing before uploading images");
      return;
    }

    setIsUploading(true);
    const cloudinaryUrls = [];

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "car_listing_upload"); // ✅ change
        // You can rename YOUR_CLOUD_NAME
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dxwcjxm9x/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) throw new Error("Cloudinary upload failed");

        const data = await response.json();
        cloudinaryUrls.push(data.secure_url);
      }

      // ✅ Save images in DB for this listing
      const imageRecords = cloudinaryUrls.map((url) => ({
        carListingId: triggerUploadImage,
        imageUrl: url,
      }));

      await db.insert(CarImages).values(imageRecords);

      // ✅ Update UI
      const updatedUrls = [...uploadedUrls, ...cloudinaryUrls];
      setUploadedUrls(updatedUrls);

      toast.success("Images uploaded & saved successfully");
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = async (index) => {
    const urlToRemove = uploadedUrls[index];
    const newUrls = uploadedUrls.filter((_, i) => i !== index);
    setUploadedUrls(newUrls);

    try {
      // Optionally: also remove from DB
      await db
        .delete(CarImages)
        .where(CarImages.imageUrl.eq(urlToRemove))
        .execute();

      toast.success("Image removed successfully");
    } catch (error) {
      console.error("Failed to remove image:", error);
    }
  };

  return (
    <div className="p-4">
      <label htmlFor="upload-input" className="block mb-2 font-semibold">
        Upload Images
      </label>

      <input
        id="upload-input"
        type="file"
        multiple
        accept="image/*"
        onChange={onFileSelected}
        disabled={isUploading}
        className="mb-4"
      />

      {isUploading && (
        <p className="text-sm text-gray-500 mb-2">Uploading images...</p>
      )}

      <div className="grid grid-cols-3 gap-3">
        {uploadedUrls.map((url, index) => (
          <div key={index} className="relative">
            <img
              src={url}
              alt="Uploaded"
              className="rounded shadow-md w-full h-32 object-cover"
            />
            <IoMdCloseCircle
              className="absolute top-1 right-1 text-red-500 cursor-pointer"
              onClick={() => removeImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadImage;
