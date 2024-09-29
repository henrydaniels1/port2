import  { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// eslint-disable-next-line react/prop-types
const Sphere = ({ color }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      68,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.shadowMap.enabled = true; // Enable shadow maps
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadow

    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Lighting (Ambient and Point Light)
    const ambientLight = new THREE.AmbientLight(0xffffff, 3.5); // Brighter ambient light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2); // Stronger point light
    pointLight.position.set(10, 10, 10);
    pointLight.castShadow = true; // Enable shadows
    pointLight.shadow.mapSize.width = 1024;
    pointLight.shadow.mapSize.height = 1024;
    scene.add(pointLight);

    // Ground Plane for Shadows
    const planeGeometry = new THREE.PlaneGeometry(500, 500);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    plane.position.y = -2.8; // Lower plane to act as a ground
    plane.receiveShadow = true; // Allow plane to receive shadows
    scene.add(plane);

    // Material with dynamic color
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color), // Use dynamic color
      metalness: 1,         // Full metal appearance
      roughness: 0.1,       // Smoother, more reflective
      reflectivity: 1,      // Highly reflective
      clearcoat: 1,         // Reflective clearcoat for shininess
      clearcoatRoughness: 0.05,
    });

    // Sphere Geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true; // Sphere will cast shadows
    scene.add(sphere);

    // Variables for bouncing effect
    let velocity = 0; // Initial velocity
    let positionY = 1; // Start position
    const gravity = 0.0005; // Gravity force
    const bounceFactor = -0.7; // Factor to reduce velocity after bouncing

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Apply gravity
      velocity -= gravity;
      positionY += velocity;

      // Bounce when hitting the ground
      if (positionY < -1.5) {
        positionY = -1.5; // Ground level
        velocity *= bounceFactor; // Reverse direction and reduce velocity
      }

      // Update sphere position
      sphere.position.y = positionY;

      sphere.rotation.x += 0.01; // Keep sphere rotating
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [color]); // Re-run effect when color changes

  return (
    <div
      className="w-80 h-80 rounded-xl bg-gray-300 shadow-2xl mx-auto my-10"
      ref={mountRef}
    ></div>
  );
};

export default Sphere;


