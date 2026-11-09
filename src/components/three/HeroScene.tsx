'use client';

import { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Points, PointMaterial, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function WireframeTerrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const accent = useThemeAccent();
  const terrainPos = useRef(0);

  const geom = useMemo(() => {
    const g = new THREE.PlaneGeometry(8, 8, 48, 48);
    const pos = g.attributes.position as THREE.BufferAttribute;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const n =
        Math.sin(v.x * 0.6) * Math.cos(v.y * 0.6) * 0.42 +
        Math.sin(v.x * 1.4 + 0.6) * 0.14 +
        Math.cos(v.y * 1.2) * 0.12;
      pos.setZ(i, n);
    }
    g.computeVertexNormals();
    return g;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const scroll = typeof window !== 'undefined'
      ? Math.min(window.scrollY / window.innerHeight, 1.2)
      : 0;
    terrainPos.current += (scroll - terrainPos.current) * 0.04;
    meshRef.current.rotation.x = -Math.PI / 2 + Math.sin(t * 0.18) * 0.04 + terrainPos.current * 0.35;
    meshRef.current.rotation.z = Math.sin(t * 0.12) * 0.02 + terrainPos.current * 0.08;
    meshRef.current.position.z = -terrainPos.current * 0.6;
  });

  return (
    <mesh ref={meshRef} geometry={geom} position={[0, -1.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshBasicMaterial color={accent} wireframe transparent opacity={0.22} />
    </mesh>
  );
}

function ParticleField({ count = 220 }) {
  const positions = useMemo(() => {
    const rand = mulberry32(20260712);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rand() - 0.5) * 12;
      arr[i * 3 + 1] = (rand() - 0.5) * 6;
      arr[i * 3 + 2] = (rand() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  const scrollOffset = useRef(0);

  useFrame((state) => {
    if (!ref.current) return;
    const scroll = typeof window !== 'undefined'
      ? Math.min(window.scrollY / window.innerHeight, 1.2)
      : 0;
    scrollOffset.current += (scroll - scrollOffset.current) * 0.03;
    ref.current.rotation.y = state.clock.elapsedTime * 0.025 + scrollOffset.current * 0.5;
    ref.current.rotation.x = scrollOffset.current * 0.12;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1 - scrollOffset.current * 0.3;
    ref.current.position.z = scrollOffset.current * 0.8;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#B2F3FF" size={0.035} sizeAttenuation depthWrite={false} opacity={0.7} />
    </Points>
  );
}

function GlassSculptures() {
  const accent = useThemeAccent();

  return (
    <>
      <Float speed={1.2} rotationIntensity={1.4} floatIntensity={1.2}>
        <mesh position={[2.2, 0.4, -1.2]}>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.25} metalness={0.7} roughness={0.25} wireframe />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={1.6} floatIntensity={1.5}>
        <mesh position={[-2.4, 0.7, -1.6]}>
          <octahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial color="#FFFFFF" emissive={accent} emissiveIntensity={0.15} metalness={0.9} roughness={0.15} />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[1.4, 1.4, -2.2]} scale={0.32}>
          <torusGeometry args={[1, 0.36, 16, 32]} />
          <meshStandardMaterial color="#7C6CFF" emissive="#7C6CFF" emissiveIntensity={0.35} metalness={0.85} roughness={0.2} />
        </mesh>
      </Float>
    </>
  );
}

function ScrollCamera() {
  useFrame((state) => {
    const scroll = typeof window !== 'undefined'
      ? Math.min(window.scrollY / window.innerHeight, 1.4)
      : 0;
    const t = state.clock.elapsedTime;
    const breathe = Math.sin(t * 0.3) * 0.03;
    state.camera.position.set(
      Math.sin(scroll * 1.2) * 0.3 + breathe * 0.5,
      0.8 - scroll * 0.7 + breathe,
      5 + scroll * 2.2,
    );
    state.camera.lookAt(
      Math.sin(scroll * 0.8) * 0.15,
      -scroll * 0.12,
      0,
    );
  });
  return null;
}

function useThemeAccent(): string {
  const [accent, setAccent] = useState('#68D7FF');
  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const val = getComputedStyle(root).getPropertyValue('--accent').trim();
      if (val) setAccent(val);
    };
    update();
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => mo.disconnect();
  }, []);
  return accent;
}

function SceneFog() {
  const theme = useThemeColor();
  useThree(({ scene }) => {
    scene.fog = new THREE.Fog(theme, 4, 12);
  });
  return null;
}

function useThemeColor(): string {
  const [color, setColor] = useState('#050505');
  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const val = getComputedStyle(root).getPropertyValue('--background').trim();
      if (val) setColor(val);
    };
    update();
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => mo.disconnect();
  }, []);
  return color;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.8, 5], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <SceneFog />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 2]} intensity={0.8} color="#68D7FF" />
        <directionalLight position={[-3, -2, -1]} intensity={0.4} color="#7C6CFF" />
        <WireframeTerrain />
        <GlassSculptures />
        <ParticleField count={220} />
        <Sparkles count={60} scale={[10, 6, 6]} size={1.5} speed={0.4} color="#B2F3FF" opacity={0.6} />
        <Environment preset="night" />
        <ScrollCamera />
      </Suspense>
    </Canvas>
  );
}
