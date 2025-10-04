/**
 * SmartStock.AI - Three.js Particle System
 * Creates animated particle background for hero section
 */

class ParticleSystem {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    
    this.init();
  }

  init() {
    // Create scene
    this.scene = new THREE.Scene();
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 50;
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add canvas to container
    const container = document.getElementById('particle-canvas');
    if (container) {
      container.appendChild(this.renderer.domElement);
    }
    
    // Create particles
    this.createParticles();
    
    // Add event listeners
    this.addEventListeners();
    
    // Start animation
    this.animate();
  }

  createParticles() {
    // Adjust particle count based on screen size
    const particleCount = window.innerWidth < 768 ? 800 : 2000;
    
    // Create geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    // Define colors
    const purpleColor = new THREE.Color(0x8B5CF6);
    const cyanColor = new THREE.Color(0x22D3EE);
    
    // Fill arrays with random values
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions
      positions[i3] = (Math.random() - 0.5) * 200;
      positions[i3 + 1] = (Math.random() - 0.5) * 200;
      positions[i3 + 2] = (Math.random() - 0.5) * 200;
      
      // Random colors (purple or cyan)
      const color = Math.random() > 0.5 ? purpleColor : cyanColor;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      // Random sizes (smaller particles)
      sizes[i] = Math.random() * 0.8 + 0.2;
    }
    
    // Set geometry attributes
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create material
    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    // Create points
    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  addEventListeners() {
    // Mouse move for parallax effect
    document.addEventListener('mousemove', (event) => {
      this.mouseX = (event.clientX - this.windowHalfX) * 0.01;
      this.mouseY = (event.clientY - this.windowHalfY) * 0.01;
    });
    
    // Window resize
    window.addEventListener('resize', () => {
      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;
      
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Pause animation when tab is not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseAnimation();
      } else {
        this.resumeAnimation();
      }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    if (!this.particles) return;
    
    const time = Date.now() * 0.001;
    
    // Rotate particles (slower, more subtle)
    this.particles.rotation.y += 0.0002;
    this.particles.rotation.x += 0.0001;
    
    // Animate particle positions
    const positions = this.particles.geometry.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
      // Very subtle floating motion
      positions[i] += Math.sin(time + i * 0.01) * 0.005;
      
      // Gentle wave motion
      positions[i - 1] += Math.cos(time * 0.3 + i * 0.003) * 0.003;
      
      // Z-axis drift for depth
      positions[i + 1] += Math.sin(time * 0.2 + i * 0.002) * 0.002;
    }
    this.particles.geometry.attributes.position.needsUpdate = true;
    
    // Mouse parallax effect
    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (this.mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);
    
    // Render scene
    this.renderer.render(this.scene, this.camera);
  }

  pauseAnimation() {
    // Reduce particle count for performance
    if (this.particles) {
      this.particles.visible = false;
    }
  }

  resumeAnimation() {
    // Restore particle visibility
    if (this.particles) {
      this.particles.visible = true;
    }
  }

  destroy() {
    // Clean up resources
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.particles) {
      this.particles.geometry.dispose();
      this.particles.material.dispose();
    }
  }
}

// Initialize particle system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if Three.js is loaded
  if (typeof THREE !== 'undefined') {
    new ParticleSystem();
  } else {
    console.error('Three.js not loaded. Particle system cannot be initialized.');
  }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ParticleSystem;
}
