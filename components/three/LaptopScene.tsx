"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function Laptop() {
  const group = useRef<THREE.Group>(null);

  const colors = useMemo(
    () => ({
      base: new THREE.Color("#14131a"),
      edge: new THREE.Color("#ffffff"),
      glow: new THREE.Color("#6623ad"),
      glow2: new THREE.Color("#7a3bd1"),
      screen: new THREE.Color("#0b1020"),
      cyan: new THREE.Color("#22d3ee"),
      lime: new THREE.Color("#a3e635"),
    }),
    []
  );

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * 0.35 + Math.sin(t * 0.4) * 0.25,
      0.08
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouse.y * 0.18 + Math.sin(t * 0.35) * 0.08,
      0.08
    );
  });

  return (
    <group ref={group} position={[0, 0.05, 0]}>
      {/* base */}
      <mesh position={[0, -0.36, 0]}>
        <boxGeometry args={[2.2, 0.18, 1.5]} />
        <meshStandardMaterial color={colors.base} metalness={0.55} roughness={0.3} />
      </mesh>

      {/* keyboard glow bar */}
      <mesh position={[0, -0.25, 0.55]}>
        <boxGeometry args={[2.0, 0.02, 0.05]} />
        <meshStandardMaterial
          color={colors.glow}
          emissive={colors.glow}
          emissiveIntensity={1.1}
        />
      </mesh>

      {/* hinge */}
      <mesh position={[0, -0.25, -0.65]}>
        <cylinderGeometry args={[0.05, 0.05, 2.05, 32]} />
        <meshStandardMaterial color={colors.edge} opacity={0.22} transparent />
      </mesh>

      {/* screen */}
      <group position={[0, 0.55, -0.65]} rotation={[-0.95, 0, 0]}>
        <mesh>
          <boxGeometry args={[2.15, 1.4, 0.08]} />
          <meshStandardMaterial color={colors.base} metalness={0.5} roughness={0.28} />
        </mesh>

        {/* main screen panel */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[1.95, 1.18]} />
          <meshStandardMaterial
            color={colors.screen}
            emissive={colors.glow2}
            emissiveIntensity={0.45}
            roughness={0.2}
            metalness={0.08}
          />
        </mesh>

        {/* UI stripes */}
        <mesh position={[-0.55, 0.35, 0.065]}>
          <planeGeometry args={[0.8, 0.08]} />
          <meshStandardMaterial emissive={colors.glow} emissiveIntensity={0.9} />
        </mesh>
        <mesh position={[0.35, 0.12, 0.065]}>
          <planeGeometry args={[0.6, 0.06]} />
          <meshStandardMaterial emissive={colors.cyan} emissiveIntensity={0.7} />
        </mesh>
        <mesh position={[-0.1, -0.2, 0.065]}>
          <planeGeometry args={[1.1, 0.05]} />
          <meshStandardMaterial emissive={colors.lime} emissiveIntensity={0.25} />
        </mesh>
      </group>
    </group>
  );
}

export default function LaptopScene() {
  return (
    <div className="relative h-[380px] w-full md:h-[520px]">
      <Canvas camera={{ position: [0, 1.1, 4.2], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 3, 2]} intensity={1.2} />
        <Float speed={1.2} rotationIntensity={0.55} floatIntensity={0.65}>
          <Laptop />
        </Float>
        <ContactShadows opacity={0.25} scale={9} blur={2.6} far={6} />
        <Environment preset="city" />
      </Canvas>

      {/* glass frame overlay (matches your light theme) */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-border bg-card/30" />
      <div className="pointer-events-none absolute -inset-10 rounded-[2.25rem] blur-3xl opacity-70 bg-[radial-gradient(circle_at_40%_30%,rgba(102,35,173,0.18),transparent_55%)]" />
    </div>
  );
}
