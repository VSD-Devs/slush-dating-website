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
    unit: 'px',
    width: 1200,
    height: 675,
    x: 0,
    y: 0
  });
  const [tempImage, setTempImage] = useState<string>('');
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

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
        // Create an image to get dimensions
        const img = new Image();
        img.onload = () => {
          setImageSize({ width: img.width, height: img.height });
          
          // Set initial crop based on image dimensions
          const cropWidth = Math.min(img.width, 1200);
          const cropHeight = cropWidth / aspectRatio;
          
          setCrop({
            unit: 'px',
            width: cropWidth,
            height: cropHeight,
            x: (img.width - cropWidth) / 2,
            y: (img.height - cropHeight) / 2
          });
          
          setTempImage(reader.result as string);
          setIsCropping(true);
        };
        img.src = reader.result;
      }
    };
    reader.onerror = () => {
      alert('Error reading file. Please try again.');
    };
    reader.readAsDataURL(file);
  }, [aspectRatio]);

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
      alert('Failed to upload image. Please try again.');
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

        // Set canvas dimensions to desired output size
        canvas.width = 1200;
        canvas.height = 675;

        // Fill with white background
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the cropped image
        ctx.drawImage(
          image,
          cropData.x,
          cropData.y,
          cropData.width,
          cropData.height,
          0,
          0,
          1200,
          675
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
          0.95  // High quality
        );
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
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCrop(c)}
            aspect={aspectRatio}
            minWidth={400}
          >
            <img
              src={tempImage}
              alt="Crop preview"
              style={{ maxHeight: '600px', width: 'auto', margin: '0 auto' }}
            />
          </ReactCrop>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Drag to adjust the crop area. The image will be saved at 1200×675px.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIsCropping(false)}
              disabled={loading}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCropComplete}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? 'Processing...' : 'Crop & Upload'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (preview) {
    return (
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-50">
        <img
          src={preview}
          alt="Preview"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            type="button"
            onClick={() => {
              setTempImage(preview);
              setIsCropping(true);
            }}
            className="p-1.5 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
            title="Recrop image"
          >
            <Crop className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={removeImage}
            className="p-1.5 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`
        w-full aspect-[16/9] rounded-lg border-2 border-dashed
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}
        hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer
        flex flex-col items-center justify-center p-6 text-center
      `}
    >
      <input {...getInputProps()} />
      <Upload className="w-8 h-8 text-gray-400 mb-4" />
      <p className="text-sm text-gray-600">
        {isDragActive ? (
          'Drop the image here...'
        ) : (
          'Drag & drop an image here, or click to select'
        )}
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Recommended size: 1200×675px (16:9)
      </p>
    </div>
  );
} 