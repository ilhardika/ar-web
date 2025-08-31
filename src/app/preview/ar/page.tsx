"use client";

import Link from "next/link";
import { ModelViewer } from "../../../components/ModelViewer";

export default function PreviewAR() {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">AR Preview</h1>
          <Link
            href="/"
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            Kembali
          </Link>
        </div>

        {/* Model Container */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Starbucks Disposable Cup
          </h2>

          {/* AR Model Viewer */}
          <div className="mb-4">
            <ModelViewer
              src="/ar-files/starbucks_disposable_cup.glb"
              iosSrc="/ar-files/Starbucks_Disposable_Cup.usdz"
              alt="Starbucks Disposable Cup 3D Model"
              ar={true}
              autoRotate={true}
              cameraControls={true}
              height="400px"
              className="rounded border"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
