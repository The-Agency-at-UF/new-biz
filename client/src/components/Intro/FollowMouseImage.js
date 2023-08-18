import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FollowMouseImage = ({img}) => {
    const containerRef = useRef(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // Plane Set-Up
    const planeGeometry = new THREE.PlaneGeometry(11, 6);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/Users/stephaniestelzer/Desktop/Business-Deck-Website/client/src/Images/Logo.png')

    const material = new THREE.MeshStandardMaterial({map: texture})
    planeMaterial.material = material

    useEffect(() => {
        if (containerRef.current) {
            camera.position.z = 5;

            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current.appendChild(renderer.domElement);

            scene.add(planeMesh);

            const renderScene = () => {
                // cube.rotation.x += 0.01;
                // cube.rotation.y += 0.01;
                renderer.render(scene, camera);
                requestAnimationFrame(renderScene);
            };

            renderScene();

            return () => {
                renderer.dispose();
            };
        }
    }, []);

    return <div ref={containerRef} />;
};

export default FollowMouseImage;
