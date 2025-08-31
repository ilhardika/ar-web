"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load model-viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/model-viewer/4.1.0/model-viewer.min.js";
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handle3DPreview = () => {
    setShowModal(true);
  };

  const handleARPreview = () => {
    setIsLoading(true);

    // Check if we're on localhost (development)
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    // Check device and launch appropriate AR
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      // iOS - AR Quick Look
      const link = document.createElement("a");
      link.href = "/ar-files/office_desk.usdz";
      link.rel = "ar";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (/Android/.test(navigator.userAgent)) {
      // Android - Scene Viewer
      if (isLocalhost) {
        // Show info for localhost
        alert(
          "⚠️ AR Preview on Android requires HTTPS deployment.\n\nFor testing:\n1. Deploy to Vercel/Netlify\n2. Or use the 3D modal and click 'View in AR' button"
        );
      } else {
        const sceneViewerUrl = `https://arvr.google.com/scene-viewer/1.0?file=${window.location.origin}/ar-files/office_desk.glb`;
        window.open(sceneViewerUrl, "_blank");
      }
    } else {
      // Desktop - Show fallback info
      alert(
        " AR Preview requires a mobile device with AR support.\n\n• iOS: Safari with AR Quick Look\n• Android: Chrome with ARCore\n\nTry the 3D Preview instead!"
      );
    }

    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          See Our Product in 3D & AR
        </h1>
        <p className="text-gray-600 mb-8">Office Desk</p>

        {/* Main Buttons */}
        <div className="space-y-4">
          <button
            onClick={handle3DPreview}
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center gap-3"
          >
            3D Preview
          </button>

          <button
            onClick={handleARPreview}
            disabled={isLoading}
            className="w-full bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "AR Preview"}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          3D Preview: Rotate & zoom in browser
          <br />
          AR Preview: Best viewed on mobile device (iOS/Android)
          <br />
          <span className="text-orange-600">
            ⚠️ AR requires HTTPS for Android
          </span>
        </p>
      </div>

      {/* 3D Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-black">3D Preview</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Model Viewer */}
            <div className="p-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <model-viewer
                      src="/ar-files/office_desk.glb"
                      ios-src="/ar-files/office_desk.usdz"
                      alt="Office Desk"
                      ar
                      ar-modes="webxr scene-viewer quick-look"
                      auto-rotate
                      camera-controls
                      style="width: 100%; height: 400px;"
                      loading="eager"
                      reveal="auto"
                      shadow-intensity="1"
                      environment-image="neutral"
                      exposure="1"
                      tone-mapping="commerce"
                    >
                      <div slot="poster" style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">
                        <div style="text-align: center;">
                          <div style="border: 2px solid #2563eb; border-top: 2px solid transparent; border-radius: 50%; width: 48px; height: 48px; animation: spin 1s linear infinite; margin: 0 auto 16px;"></div>
                          <p style="color: #6b7280;">Loading 3D model...</p>
                        </div>
                      </div>
                      
                      <button
                        slot="ar-button"
                        style="position: absolute; bottom: 16px; right: 16px; background: #059669; color: white; padding: 8px 16px; border-radius: 8px; border: none; cursor: pointer;"
                      >
                        📱 View in AR
                      </button>
                    </model-viewer>
                    <style>
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                    </style>
                  `,
                }}
              />

              <div className="text-center text-sm text-gray-500 mt-2">
                Drag to rotate • Scroll to zoom • Click &quot;View in AR&quot;
                for AR mode
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
