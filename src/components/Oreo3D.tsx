import { Component, useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface OreoModelProps {
  explode: number; // 0..1
}

const SHELL_RADIUS = 1.4;
const SHELL_HEIGHT = 0.3;

class CanvasErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function makeTopTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // deep dark cocoa base
  const grad = ctx.createRadialGradient(512, 512, 100, 512, 512, 500);
  grad.addColorStop(0, '#2a1810');
  grad.addColorStop(0.7, '#1a0e08');
  grad.addColorStop(1, '#0d0705');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1024);

  // cocoa grain noise
  for (let i = 0; i < 20000; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const v = Math.random() * 50;
    ctx.fillStyle = `rgba(${v + 30},${v + 15},${v + 5},${Math.random() * 0.5})`;
    ctx.fillRect(x, y, 2, 2);
  }

  // outer embossed border ring
  ctx.strokeStyle = 'rgba(90, 60, 35, 0.7)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(512, 512, 470, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(70, 45, 25, 0.5)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(512, 512, 440, 0, Math.PI * 2);
  ctx.stroke();

  // scalloped edge pattern
  ctx.fillStyle = 'rgba(80, 50, 28, 0.6)';
  for (let a = 0; a < 360; a += 7.5) {
    const rad = (a * Math.PI) / 180;
    ctx.beginPath();
    ctx.arc(512 + Math.cos(rad) * 490, 512 + Math.sin(rad) * 490, 8, 0, Math.PI * 2);
    ctx.fill();
  }

  // concentric embossed rings (the classic Oreo pattern)
  ctx.strokeStyle = 'rgba(100, 65, 38, 0.5)';
  ctx.lineWidth = 4;
  for (let r = 100; r < 420; r += 35) {
    ctx.beginPath();
    ctx.arc(512, 512, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // radial grid lines from center
  ctx.strokeStyle = 'rgba(85, 55, 30, 0.45)';
  ctx.lineWidth = 3;
  for (let a = 0; a < 360; a += 22.5) {
    const rad = (a * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(512, 512);
    ctx.lineTo(512 + Math.cos(rad) * 440, 512 + Math.sin(rad) * 440);
    ctx.stroke();
  }

  // center emblem — flower/rosette pattern
  ctx.fillStyle = 'rgba(110, 75, 45, 0.6)';
  for (let i = 0; i < 16; i++) {
    const a = (i * Math.PI) / 8;
    ctx.beginPath();
    ctx.ellipse(512 + Math.cos(a) * 60, 512 + Math.sin(a) * 60, 18, 10, a, 0, Math.PI * 2);
    ctx.fill();
  }
  // center dot
  ctx.beginPath();
  ctx.arc(512, 512, 28, 0, Math.PI * 2);
  ctx.fill();

  // inner ring around emblem
  ctx.strokeStyle = 'rgba(95, 62, 36, 0.5)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(512, 512, 95, 0, Math.PI * 2);
  ctx.stroke();

  // small decorative dots between rings
  ctx.fillStyle = 'rgba(90, 58, 32, 0.5)';
  for (let r = 140; r < 420; r += 35) {
    for (let a = 0; a < 360; a += 45) {
      const rad = (a * Math.PI) / 180;
      ctx.beginPath();
      ctx.arc(512 + Math.cos(rad) * r, 512 + Math.sin(rad) * r, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  return tex;
}

function makeBumpTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 512, 512);

  // heavy grain
  for (let i = 0; i < 15000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const v = Math.floor(Math.random() * 160);
    ctx.fillStyle = `rgb(${v},${v},${v})`;
    ctx.fillRect(x, y, 2, 2);
  }

  // ring bumps (darker = deeper)
  ctx.strokeStyle = 'rgb(30,30,30)';
  ctx.lineWidth = 4;
  for (let r = 50; r < 230; r += 18) {
    ctx.beginPath();
    ctx.arc(256, 256, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // radial line bumps
  ctx.strokeStyle = 'rgb(40,40,40)';
  ctx.lineWidth = 2;
  for (let a = 0; a < 360; a += 22.5) {
    const rad = (a * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(256, 256);
    ctx.lineTo(256 + Math.cos(rad) * 230, 256 + Math.sin(rad) * 230);
    ctx.stroke();
  }

  // center bump
  ctx.fillStyle = 'rgb(20,20,20)';
  ctx.beginPath();
  ctx.arc(256, 256, 16, 0, Math.PI * 2);
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  return tex;
}

function makeSideTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  // dark cocoa gradient
  const grad = ctx.createLinearGradient(0, 0, 0, 64);
  grad.addColorStop(0, '#1a0e08');
  grad.addColorStop(0.5, '#2a1810');
  grad.addColorStop(1, '#1a0e08');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 64);

  // grain
  for (let i = 0; i < 5000; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 64;
    const v = Math.random() * 40;
    ctx.fillStyle = `rgba(${v + 25},${v + 12},${v + 3},0.5)`;
    ctx.fillRect(x, y, 1, 1);
  }

  // vertical ridges
  ctx.strokeStyle = 'rgba(60, 38, 20, 0.4)';
  ctx.lineWidth = 1;
  for (let x = 0; x < 256; x += 6) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 64);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.repeat.x = 8;
  tex.anisotropy = 8;
  return tex;
}

function CocoaShell({ position, isTop }: { position: [number, number, number]; isTop: boolean }) {
  const topTexture = useMemo(() => makeTopTexture(), []);
  const bumpTexture = useMemo(() => makeBumpTexture(), []);
  const sideTexture = useMemo(() => makeSideTexture(), []);

  // cylinder geometry material groups: [side, top, bottom]
  const sideMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: sideTexture,
        bumpMap: bumpTexture,
        bumpScale: 0.06,
        color: '#2a1810',
        roughness: 0.7,
        metalness: 0.1,
      }),
    [sideTexture, bumpTexture],
  );

  const capMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: topTexture,
        bumpMap: bumpTexture,
        bumpScale: 0.12,
        color: '#ffffff',
        roughness: 0.6,
        metalness: 0.05,
      }),
    [topTexture, bumpTexture],
  );

  // For the bottom shell, flip the texture so the pattern faces outward
  const bottomCapMaterial = useMemo(() => {
    const mat = capMaterial.clone();
    mat.map = topTexture.clone();
    mat.map.needsUpdate = true;
    mat.map.center.set(0.5, 0.5);
    mat.map.rotation = Math.PI; // rotate 180deg
    return mat;
  }, [capMaterial, topTexture]);

  const materials = isTop
    ? [sideMaterial, capMaterial, sideMaterial]
    : [sideMaterial, sideMaterial, bottomCapMaterial];

  return (
    <mesh position={position} castShadow receiveShadow material={materials}>
      <cylinderGeometry args={[SHELL_RADIUS, SHELL_RADIUS, SHELL_HEIGHT, 96, 1, false]} />
    </mesh>
  );
}

function CreamFilling({ position, scale }: { position: [number, number, number]; scale: number }) {
  return (
    <mesh position={position} scale={[1, scale, 1]} castShadow>
      <cylinderGeometry args={[SHELL_RADIUS * 0.92, SHELL_RADIUS * 0.92, 0.16, 48]} />
      <meshStandardMaterial
        color="#f5ead0"
        roughness={0.95}
        metalness={0}
        emissive="#3a2410"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}

function IngredientCallout({
  position,
  visible,
}: {
  position: [number, number, number];
  visible: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current && visible) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.08;
    }
  });

  if (!visible) return null;

  return (
    <group ref={ref} position={position}>
      <mesh>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#e5b869" emissive="#e5b869" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[position[0] > 0 ? -0.3 : 0.3, 0, 0]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#e5b869" emissive="#e5b869" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

function OreoScene({ explode }: OreoModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  const topY = 0.4 + explode * 1.8;
  const bottomY = -0.4 - explode * 1.8;
  const creamScale = 1 + explode * 0.3;
  const showCallouts = explode > 0.3;

  return (
    <group ref={groupRef}>
      <CocoaShell position={[0, topY, 0]} isTop />
      <CreamFilling position={[0, 0, 0]} scale={creamScale} />
      <CocoaShell position={[0, bottomY, 0]} isTop={false} />

      <IngredientCallout position={[-2.2, 1.4, 0]} visible={showCallouts} />
      <IngredientCallout position={[2.2, 0, 0]} visible={showCallouts} />
      <IngredientCallout position={[-2.2, -1.4, 0]} visible={showCallouts} />
    </group>
  );
}

function FallbackBiscuit() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-8xl animate-float">🍪</div>
    </div>
  );
}

export default function Oreo3D({ explode }: OreoModelProps) {
  return (
    <CanvasErrorBoundary fallback={<FallbackBiscuit />}>
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [0, 0.5, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <spotLight
            position={[5, 8, 5]}
            angle={0.3}
            penumbra={0.8}
            intensity={2.5}
            castShadow
            color="#e5b869"
          />
          <pointLight position={[-4, -2, 3]} intensity={1.2} color="#0088ff" />
          <directionalLight position={[0, 5, 5]} intensity={0.5} color="#fff5e0" />
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
            <OreoScene explode={explode} />
          </Float>
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
}
