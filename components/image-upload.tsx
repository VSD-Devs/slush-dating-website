"use client";

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Crop } from 'lucide-react';
import ReactCrop, { Crop as CropType, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  aspectRatio?: number;
}

export default function ImageUpload({ value, onChange, aspectRatio = 16 / 9 }: ImageUploadProps) {
  const [preview, setPreview] = useState(value);
  const [loading, setLoading] = useState(false);
  const [isCropping, setIsCropping] = useState(false);
  const [crop, setCrop] = useState<CropType>({
    unit: '%',
    width: 100,
    height: (100 / aspectRatio),
    x: 0,
    y: 0
  });
  const [tempImage, setTempImage] = useState<string>('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File is too large. Maximum size is 10MB.');
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Only image files are allowed.');
      return;
    }

    // Create a temporary preview URL
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setTempImage(reader.result);
        setIsCropping(true);
      }
    };
    reader.onerror = () => {
      alert('Error reading file. Please try again.');
    };
    reader.readAsDataURL(file);
  }, []);

  const uploadImage = async (croppedBlob: Blob) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', croppedBlob, 'cropped-image.jpg');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      setPreview(data.url);
      onChange(data.url);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
      setIsCropping(false);
    }
  };

  const getCroppedImg = async (sourceImage: string, cropData: PixelCrop): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = sourceImage;
      
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('No 2d context'));
          return;
        }

        // Calculate the actual pixel values from percentages
        const pixelCrop = {
          x: (cropData.x * image.naturalWidth) / 100,
          y: (cropData.y * image.naturalHeight) / 100,
          width: (cropData.width * image.naturalWidth) / 100,
          height: (cropData.height * image.naturalHeight) / 100,
        };

        // Set output size - maintain aspect ratio but limit max dimensions
        let outputWidth = pixelCrop.width;
        let outputHeight = pixelCrop.height;
        
        const maxWidth = 1200;
        const maxHeight = maxWidth / aspectRatio;

        if (outputWidth > maxWidth) {
          outputWidth = maxWidth;
          outputHeight = (pixelCrop.height * maxWidth) / pixelCrop.width;
        }

        if (outputHeight > maxHeight) {
          outputHeight = maxHeight;
          outputWidth = (pixelCrop.width * maxHeight) / pixelCrop.height;
        }

        // Set canvas dimensions
        canvas.width = outputWidth;
        canvas.height = outputHeight;

        // Fill with white background
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        try {
          // Draw the cropped image
          ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            outputWidth,
            outputHeight
          );

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to create blob'));
                return;
              }
              resolve(blob);
            },
            'image/jpeg',
            0.92  // Increased quality slightly
          );
        } catch (error) {
          console.error('Error during image processing:', error);
          reject(error);
        }
      };

      image.onerror = () => {
        reject(new Error('Failed to load image'));
      };
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 1,
  });

  const handleCropComplete = async () => {
    if (!tempImage) return;
    
    try {
      setLoading(true);
      const croppedBlob = await getCroppedImg(tempImage, crop as PixelCrop);
      await uploadImage(croppedBlob);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Error processing image. Please try again with a different image.');
      setIsCropping(false);
    } finally {
      setLoading(false);
    }
  };

  const removeImage = () => {
    setPreview('');
    onChange('');
  };

  if (isCropping && tempImage) {
    return (
      <div className="space-y-4">
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-50">
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            aspect={aspectRatio}
            className="max-h-[600px]"
          >
            <img
              src={tempImage}
              alt="Crop preview"
              className="max-h-[600px] mx-auto"
            />
          </ReactCrop>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsCropping(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={handleCropComplete}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Crop & Upload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {preview ? (
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
          <img
            src={preview}
            alt="Preview"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={() => {
                setTempImage(preview);
                setIsCropping(true);
              }}
              className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              <Crop className="w-4 h-4" />
            </button>
            <button
              onClick={removeImage}
              className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`w-full aspect-[16/9] border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer
            ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500 hover:bg-gray-50'}
            ${loading ? 'opacity-50 cursor-wait' : ''}`}
        >
          <input {...getInputProps()} />
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500 text-center px-4">
            {isDragActive
              ? "Drop the image here"
              : "Drag 'n' drop an image here, or click to select"}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Recommended size: 1200×675px (16:9)
          </p>
        </div>
      )}
    </div>
  );
} 