import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const organColors: Record<string, string> = {
  brain: '#7aa2ff',
  heart: '#f06d6d',
  lungs: '#7fe5c6',
  liver: '#f8a34b',
  kidneys: '#d68bff',
  stomach: '#82d2ff',
  intestines: '#c8f06d',
  skeleton: '#efefef',
  muscles: '#d5ad7d',
};

export function ThreeAnatomy({ selectedOrgan }: { selectedOrgan: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0d1320');

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
    camera.position.set(0, 1, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountRef.current.clientWidth, 360);
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0x7db3ff, 2.2, 100);
    pointLight.position.set(4, 4, 8);
    scene.add(pointLight);

    const torso = new THREE.Group();
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xdfe7f6, roughness: 0.7, metalness: 0.15 });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(1.6, 4.2, 8, 16), bodyMaterial);
    body.rotation.z = Math.PI / 2;
    torso.add(body);

    const organs: { name: string; mesh: THREE.Mesh; baseScale: number }[] = [];

    const makeSphere = (name: string, position: [number, number, number], color: string, scale: number) => {
      const material = new THREE.MeshStandardMaterial({ color, emissive: name === selectedOrgan ? 0x7aa2ff : 0x000000, roughness: 0.5 });
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), material);
      mesh.position.set(...position);
      mesh.scale.setScalar(scale);
      torso.add(mesh);
      organs.push({ name, mesh, baseScale: scale });
      return mesh;
    };

    makeSphere('brain', [0, 2.8, 0.4], organColors.brain, 0.9);
    makeSphere('heart', [0, 0.4, 0.7], organColors.heart, 0.9);
    makeSphere('lungs', [-0.8, 0.6, 0.8], organColors.lungs, 0.8);
    makeSphere('lungs', [0.8, 0.6, 0.8], organColors.lungs, 0.8);
    makeSphere('liver', [-1.2, -1.3, 0.3], organColors.liver, 1.0);
    makeSphere('kidneys', [-0.2, -2.0, 0.5], organColors.kidneys, 0.7);
    makeSphere('kidneys', [0.8, -2.0, 0.5], organColors.kidneys, 0.7);
    makeSphere('stomach', [1.2, -1.3, 0.4], organColors.stomach, 0.9);
    makeSphere('intestines', [0, -3.1, 0.4], organColors.intestines, 1.1);

    const skeletonMaterial = new THREE.MeshBasicMaterial({ color: 0xf4f4f4, wireframe: true });
    const skeleton = new THREE.Mesh(new THREE.IcosahedronGeometry(2.4, 1), skeletonMaterial);
    skeleton.scale.set(1.3, 1.8, 0.9);
    skeleton.visible = true;
    torso.add(skeleton);

    scene.add(torso);

    let frameId = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      torso.rotation.y += 0.008;
      torso.rotation.x = Math.sin(Date.now() * 0.001) * 0.08;

      organs.forEach(({ name, mesh, baseScale }) => {
        const isSelected = name === selectedOrgan;
        const pulse = isSelected ? 1 + Math.sin(Date.now() * 0.009) * 0.12 : 1;
        mesh.scale.setScalar(baseScale * pulse);
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      renderer.setSize(width, 360);
      camera.aspect = width / 360;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, [selectedOrgan]);

  return <div ref={mountRef} className="three-anatomy-canvas" />;
}
