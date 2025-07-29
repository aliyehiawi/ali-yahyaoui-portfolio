'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AnimatedContactSection() {
  const mountRef = useRef(null);
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const THREE = window.THREE;
    const container = mountRef.current;
    const { clientWidth: width, clientHeight: height } = container;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(3, 3, 3);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    scene.add(new THREE.GridHelper(10, 10, 0x222222, 0x222222));

    const boxGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });
    const cube = new THREE.Mesh(boxGeo, cubeMat);
    scene.add(cube);

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

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

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
    <section id="animated-contact" className="relative h-screen overflow-visible bg-black">
      <div ref={mountRef} className="absolute inset-0" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 overflow-visible">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 py-1 gradient-text leading-snug">
          {t('contact.cta.heading')}
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl">
          {t('contact.cta.subheading')}
        </p>

        {/* Contact Form */}
        {!submitted ? (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              
              const formData = new FormData(e.target);
              
              try {
                const response = await fetch('https://formspree.io/f/mblynvld', {
                  method: 'POST',
                  body: formData,
                  headers: {
                    'Accept': 'application/json'
                  }
                });
                
                if (response.ok) {
                  setSubmitted(true);
                } else {
                  console.error('Form submission failed');
                  alert('There was an error submitting the form. Please try again.');
                }
              } catch (error) {
                console.error('Form submission error:', error);
                alert('There was an error submitting the form. Please try again.');
              } finally {
                setIsSubmitting(false);
              }
            }}
            className="flex flex-col gap-4 w-full max-w-md text-left"
          >
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your name"
              aria-label="Your name"
              className="rounded-md px-4 py-3 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your email"
              aria-label="Your email"
              className="rounded-md px-4 py-3 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              id="message"
              required
              placeholder="Your message"
              rows={5}
              aria-label="Your message"
              className="rounded-md px-4 py-3 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 px-6 py-3 rounded-xl text-white font-bold shadow-lg hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('contact.cta.sending') : t('contact.cta.button')}
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-semibold mt-6">{t('contact.cta.thankyou')}</p>
        )}

        {/* Email directly option */}
        {!submitted && (
          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-3">{t('contact.or')}</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ali.yehiawii@gmail.com&su=Hello from your portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <i className="fas fa-envelope mr-2"></i>
              {t('contact.emailDirectly')}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
