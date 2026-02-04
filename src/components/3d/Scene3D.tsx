
"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

export default function Scene3D() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-white/50">
            <Canvas className="w-full h-full">
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />

                {/* Lights fitting the Blue/White aesthetic */}
                <ambientLight intensity={0.8} color="#ffffff" />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1.5}
                    color="#3581bb"
                />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#46a7ca" />

                <Suspense fallback={null}>
                    <Model position={[0, 0, 0]} />
                    <Environment preset="city" />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enableRotate={false} /* Disabled manual rotation for parallax focus */
                    enablePan={false}
                />
            </Canvas>
        </div>
    );
}
