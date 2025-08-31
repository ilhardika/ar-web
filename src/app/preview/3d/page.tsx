"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import { Suspense } from "react";
import Link from "next/link";

function StarbucksCup() {
  const { scene } = useGLTF("/ar-files/starbucks_disposable_cup.glb");
  return <primitive object={scene} />;
}

export default function Preview3D() {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">3D Preview</h1>
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

          {/* 3D Viewer */}
          <div className="relative w-full h-96 bg-white rounded border">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <Suspense fallback={null}>
                <Environment preset="studio" />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <Center>
                  <StarbucksCup />
                </Center>

                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                  minDistance={2}
                  maxDistance={10}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
