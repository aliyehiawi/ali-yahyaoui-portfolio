import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Background3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
      wireframe: true
    });

    const cubes = [];
    for (let i = 0; i < 15; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 50
      );
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      );
      const scale = Math.random() * 0.5 + 0.5;
      cube.scale.set(scale, scale, scale);
      cubes.push(cube);
      scene.add(cube);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xf8fafc,
      transparent: true,
      opacity: 0.8
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      cubes.forEach((cube) => {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.01;
        cube.position.z += 0.05;
        if (cube.position.z > 10) cube.position.z = -20;
      });

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (container?.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="threejs-bg"
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] opacity-15"
    />
  );
};

export default Background3D;
