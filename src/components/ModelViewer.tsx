"use client";

import { useEffect, useRef } from "react";

interface ModelViewerProps {
  src: string;
  iosSrc?: string;
  alt: string;
  ar?: boolean;
  autoRotate?: boolean;
  cameraControls?: boolean;
  width?: string;
  height?: string;
  className?: string;
}

export function ModelViewer({
  src,
  iosSrc,
  alt,
  ar = true,
  autoRotate = true,
  cameraControls = true,
  width = "100%",
  height = "400px",
  className = "",
}: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadModelViewer = async () => {
      // Dynamically import model-viewer
      await import("@google/model-viewer");

      if (containerRef.current) {
        // Create model-viewer element
        const modelViewer = document.createElement("model-viewer");
        modelViewer.setAttribute("src", src);
        if (iosSrc) {
          modelViewer.setAttribute("ios-src", iosSrc);
        }
        modelViewer.setAttribute("alt", alt);
        modelViewer.setAttribute("ar", ar.toString());
        modelViewer.setAttribute("ar-modes", "webxr scene-viewer quick-look");
        modelViewer.setAttribute("auto-rotate", autoRotate.toString());
        modelViewer.setAttribute("camera-controls", cameraControls.toString());
        modelViewer.setAttribute("loading", "eager");
        modelViewer.setAttribute("reveal", "auto");
        modelViewer.setAttribute("shadow-intensity", "1");
        modelViewer.setAttribute("environment-image", "neutral");
        modelViewer.style.width = width;
        modelViewer.style.height = height;
        modelViewer.className = className;

        // Add AR button
        const arButton = document.createElement("div");
        arButton.setAttribute("slot", "ar-button");
        arButton.className =
          "ar-button bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 cursor-pointer";
        arButton.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
          View in AR
        `;

        // Add loading poster
        const poster = document.createElement("div");
        poster.setAttribute("slot", "poster");
        poster.className =
          "loading-pulse bg-gray-200 w-full h-full flex items-center justify-center";
        poster.innerHTML = `
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">Loading 3D model...</p>
          </div>
        `;

        modelViewer.appendChild(arButton);
        modelViewer.appendChild(poster);

        // Clear container and add model viewer
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(modelViewer);
      }
    };

    loadModelViewer();
  }, [
    src,
    iosSrc,
    alt,
    ar,
    autoRotate,
    cameraControls,
    width,
    height,
    className,
  ]);

  return (
    <div ref={containerRef} className="model-viewer-container">
      {/* Fallback content while loading */}
      <div
        className="bg-gray-200 w-full flex items-center justify-center rounded-lg"
        style={{ height }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading 3D model...</p>
        </div>
      </div>
    </div>
  );
}
