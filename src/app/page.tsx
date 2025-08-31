"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-6">
          {/* 3D Preview */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              3D Preview
            </h3>

            <Link
              href="/preview/3d"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Open
            </Link>
          </div>

          {/* AR Preview */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              AR Preview
            </h3>
            <Link
              href="/preview/ar"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Open
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
