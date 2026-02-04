"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Model(props: any) {
    const { scene } = useGLTF("/assets/logo.glb");
    const modelRef = useRef<THREE.Group>(null);
    const { viewport } = useThree();

    useFrame((state) => {
        if (modelRef.current) {
            // Get scroll position normalized (0 to 1 approx)
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const docHeight = document.body.scrollHeight;
            const scrollProgress = scrollY / (docHeight - viewportHeight);

            // Responsive Scale: smaller on mobile (viewport.width < 5 is approx <768px)
            const isMobile = viewport.width < 5;
            const baseScale = isMobile ? 1.8 : 3.5;

            // Gentle floating animation (Time based)
            const time = state.clock.elapsedTime;
            const floatY = Math.sin(time * 0.5) * 0.2;

            // Parallax Position: Move down slightly as user scrolls to "follow"
            const parallaxY = -scrollProgress * 2;

            // Parallax Rotation: Rotate fully as user scrolls
            // "Rotate it from left to right one side" -> Adding 90 degrees (PI/2) to the previous PI
            const baseRotation = Math.PI + (Math.PI / 2);
            const rotateY = baseRotation + (scrollProgress * Math.PI * 8);

            // "Absorbed by the next block" effect
            // As scroll progresses, scale down slightly and create a "mixing" feel
            const scaleEffect = Math.max(0, baseScale - (scrollProgress * 3)); // Shrinks as it scrolls

            // Combine transformations
            // "Hidden behind letters" -> Moved UP by 0.5 to clear the text below
            // "Take out the bouncing effect" -> Removed floatY
            // Mobile: Move up slightly more (0.8) to clear text
            const baseY = isMobile ? 0.8 : 0.5;
            modelRef.current.position.y = parallaxY + baseY;
            modelRef.current.rotation.y = rotateY;

            // "Make it look a little up" -> Fixed negative X rotation (tilting back) instead of sine wave
            modelRef.current.rotation.x = -0.1;

            // Apply scale explicitly here if not using prop
            modelRef.current.scale.setScalar(scaleEffect);
        }
    });

    return (
        <group ref={modelRef} {...props} dispose={null}>
            {/* Initial scale handled in useFrame now for dynamic effect */}
            <primitive object={scene} />
        </group>
    );
}

useGLTF.preload("/assets/logo.glb");
