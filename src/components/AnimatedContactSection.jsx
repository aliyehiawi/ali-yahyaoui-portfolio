'use client';

import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function AnimatedContactSection() {
  const mountRef = useRef(null);
  const { t } = useTranslation();
  const mailto = 'mailto:ali.yehiawii@gmail.com';

  useEffect(() => {
    const THREE = window.THREE;
    const container = mountRef.current;
    const { clientWidth: width, clientHeight: height } = container;

    // ─── SETUP ────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(3, 3, 3);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ─── LIGHT ─────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    // ─── GRID ──────────────────────────────────────────────
    scene.add(new THREE.GridHelper(10, 10, 0x222222, 0x222222));

    // ─── WIREFRAME CUBE ───────────────────────────────────
    const boxGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });
    const cube = new THREE.Mesh(boxGeo, cubeMat);
    scene.add(cube);

    // ─── PARTICLES “SNOW” ─────────────────────────────────
    const count = 800;
    const partGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    partGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const partMat = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xf8fafc,
      transparent: true,
      opacity: 0.8,
    });
    scene.add(new THREE.Points(partGeo, partMat));

    // ─── ANIMATION LOOP ───────────────────────────────────
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.01;
      const scale = 1 + 0.05 * Math.sin(Date.now() * 0.002);
      cube.scale.set(scale, scale, scale);
      scene.children
        .filter((o) => o.type === 'Points')
        .forEach((pts) => (pts.rotation.y += 0.0005));
      renderer.render(scene, camera);
    };
    animate();

    // ─── HANDLE RESIZE ───────────────────────────────────
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // ─── CLEANUP ──────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      container.removeChild(renderer.domElement);
      boxGeo.dispose();
      cubeMat.dispose();
      partGeo.dispose();
      partMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="animated-contact"
      className="relative h-screen overflow-visible bg-black"
    >
      {/* three.js canvas */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 overflow-visible">
        <h2
          className="
            text-4xl md:text-5xl font-bold text-white mb-4
            gradient-text leading-snug
          "
        >
          {t('contact.cta.heading')}
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl">
          {t('contact.cta.subheading')}
        </p>

        {/* → the NEW neon-gradient 3D button */}
        <button
          onClick={() => (window.location.href = mailto)}
          className="
            relative inline-block px-10 py-4
            rounded-xl font-bold text-white
            bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600
            bg-[length:200%_200%] animate-gradient-x
            shadow-lg shadow-blue-500/50
            border-2 border-transparent
            focus:outline-none focus:ring-4 focus:ring-blue-400/40
            transform transition-all duration-300
            [perspective:800px] hover:rotate-x-3 hover:rotate-y-3 hover:scale-105
            hover:shadow-2xl hover:shadow-blue-500/75
            hover:animate-glow-pulse
          "
        >
          {t('contact.cta.button')}
        </button>
      </div>
    </section>
  );
}
