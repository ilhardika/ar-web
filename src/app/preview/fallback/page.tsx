"use client";

import Link from "next/link";

export default function ARFallback() {
  const handleiOSARLaunch = () => {
    const link = document.createElement("a");
    link.href = "/ar-files/Starbucks_Disposable_Cup.usdz";
    link.rel = "ar";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">AR Fallback</h1>
            <div className="flex gap-4">
              <Link
                href="/preview/ar"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Back to AR
              </Link>
              <Link
                href="/"
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Alternative AR Options
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose your preferred method to view the 3D model
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* iOS AR Quick Look */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-blue-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    iOS AR Quick Look
                  </h3>
                  <p className="text-blue-600 mb-4">
                    For iPhone and iPad users
                  </p>
                  <button
                    onClick={handleiOSARLaunch}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Launch iOS AR
                  </button>
                </div>
              </div>

              {/* Direct Download */}
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-green-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Download Model
                  </h3>
                  <p className="text-green-600 mb-4">
                    Use with your preferred AR app
                  </p>
                  <div className="space-y-2">
                    <a
                      href="/ar-files/starbucks_disposable_cup.glb"
                      download
                      className="block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      Download GLB
                    </a>
                    <a
                      href="/ar-files/Starbucks_Disposable_Cup.usdz"
                      download
                      className="block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      Download USDZ
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg text-left">
              <h3 className="font-semibold text-gray-800 mb-4">
                Instructions by Device:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    iOS Devices:
                  </h4>
                  <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                    <li>Tap &quot;Launch iOS AR&quot; button</li>
                    <li>Wait for AR Quick Look to open</li>
                    <li>Point camera at flat surface</li>
                    <li>Tap to place model</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    Android Devices:
                  </h4>
                  <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                    <li>Download the GLB file</li>
                    <li>Open with AR-compatible app</li>
                    <li>Or use Google&apos;s Scene Viewer</li>
                    <li>Follow app-specific instructions</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
