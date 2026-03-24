import * as THREE from 'three';
import { ThreeState } from './types';
import { buildFractal } from './FractalBuilder';

export class ThreeEngine {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private state: ThreeState;
  private sacredGeometry: THREE.Group;
  private fractalGroup: THREE.Group;
  private fractalSteps: THREE.Group[] = [];
  private wireMaterial: THREE.LineDashedMaterial;
  private pointMaterial: THREE.PointsMaterial;
  private particleSystem: THREE.Points;
  private clockTime = 0;
  private isDragging = false;
  private previousMousePosition = { x: 0, y: 0 };

  constructor(container: HTMLElement, initialState: ThreeState) {
    this.state = initialState;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 6;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    this.sacredGeometry = new THREE.Group();
    this.scene.add(this.sacredGeometry);

    this.fractalGroup = new THREE.Group();
    this.sacredGeometry.add(this.fractalGroup);

    this.wireMaterial = new THREE.LineDashedMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0,
      dashSize: 10,
      gapSize: 10
    });

    const canvasPoint = document.createElement('canvas');
    canvasPoint.width = 16; canvasPoint.height = 16;
    const ctx = canvasPoint.getContext('2d')!;
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(0, 243, 255, 1)');
    gradient.addColorStop(1, 'rgba(0, 243, 255, 0)');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 16, 16);
    const texturePoint = new THREE.CanvasTexture(canvasPoint);

    this.pointMaterial = new THREE.PointsMaterial({
      size: 0.15, map: texturePoint, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true, color: 0xffffff
    });

    this.initFractals();
    this.initParticles();
    this.initEvents(container);
  }

  private initFractals() {
    for (let i = 0; i <= 6; i++) {
      const stepMesh = buildFractal(i, 2.5, this.wireMaterial, this.pointMaterial, this.state.targetFractalLevel);
      stepMesh.traverse(child => {
        if ((child instanceof THREE.LineSegments || child instanceof THREE.Points) && child.geometry.attributes.position) {
          child.userData.was4D = false;
        }
      });
      stepMesh.visible = false;
      this.fractalSteps.push(stepMesh);
      this.fractalGroup.add(stepMesh);
    }
    this.fractalSteps[0].visible = true;
  }

  private initParticles() {
    const particleCount = 1500;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlePos[i] = (Math.random() - 0.5) * 25;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.03, transparent: true, opacity: 0.3 });
    this.particleSystem = new THREE.Points(particleGeo, particleMat);
    this.scene.add(this.particleSystem);
  }

  private initEvents(container: HTMLElement) {
    container.addEventListener('mousedown', () => this.isDragging = true);
    window.addEventListener('mouseup', () => this.isDragging = false);
    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const deltaX = (e.offsetX - this.previousMousePosition.x) * 0.005;
        const deltaY = (e.offsetY - this.previousMousePosition.y) * 0.005;
        
        // Trackball rotation logic using Quaternions
        const qMove = new THREE.Quaternion().setFromEuler(new THREE.Euler(deltaY, deltaX, 0, 'XYZ'));
        this.sacredGeometry.quaternion.multiplyQuaternions(qMove, this.sacredGeometry.quaternion);
      }
      this.previousMousePosition = { x: e.offsetX, y: e.offsetY };
    });

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  public animate() {
    requestAnimationFrame(() => this.animate());
    this.clockTime += 0.015;

    this.state.scale += (this.state.targetScale - this.state.scale) * this.state.scaleLerpSpeed;
    this.state.rotationSpeed += (this.state.targetRotationSpeed - this.state.rotationSpeed) * 0.05;
    this.state.tesseractIntensity += (this.state.targetTesseractIntensity - this.state.tesseractIntensity) * 0.05;
    this.state.opacity += (this.state.targetOpacity - this.state.opacity) * 0.05;
    this.state.pointOpacity += (this.state.targetPointOpacity - this.state.pointOpacity) * 0.05;
    this.state.flatten += (this.state.targetFlatten - this.state.flatten) * 0.05;
    this.state.triforceMode += (this.state.targetTriforceMode - this.state.triforceMode) * 0.05;
    this.state.quantumSolve += (this.state.targetQuantumSolve - this.state.quantumSolve) * 0.05;
    this.wireMaterial.color.lerp(this.state.targetColor, 0.05);

    this.state.drawProgress += (this.state.targetDrawProgress - this.state.drawProgress) * this.state.drawSpeed;
    this.wireMaterial.dashOffset = 5.0 * (1.0 - this.state.drawProgress);

    if (this.state.flatten > 0.5 && this.state.quantumSolve < 0.5) {
      const qTarget = new THREE.Quaternion().identity();
      this.sacredGeometry.quaternion.slerp(qTarget, 0.1);
    }

    if (this.state.quantumSolve > 0.5) {
      const targetRotX = Math.atan(1 / Math.sqrt(2));
      const targetRotY = Math.PI / 4;
      const qTarget = new THREE.Quaternion().setFromEuler(new THREE.Euler(targetRotX, targetRotY, 0, 'XYZ'));
      this.sacredGeometry.quaternion.slerp(qTarget, 0.1);
    }

    this.wireMaterial.opacity = this.state.opacity;
    this.pointMaterial.opacity = this.state.pointOpacity;

    const flattenRatio = 1.0 - this.state.flatten;
    this.fractalGroup.scale.set(this.state.scale, this.state.scale, this.state.scale * flattenRatio);

    // PERFECT BASE ALIGNMENT
    // The base 2D object points towards the camera in Z. We tilt it forward by exact geometry angles (~19.4 deg)
    // so V3 joins V1 and V2 to form a completely horizontal plane, shifting Z so it spins on its true center.
    const uprightAngle = Math.atan(1 / (2 * Math.sqrt(2)));
    this.fractalGroup.rotation.x = uprightAngle * flattenRatio;
    this.fractalGroup.position.z = -(1 / 3) * this.state.scale * flattenRatio;

    // Removed old scale-based LOD gating so it respects the explicit target levels
    const currentVisLevel = Math.floor(this.state.targetFractalLevel);

    const isTesseract = this.state.tesseractIntensity > 0.001;

    this.fractalSteps.forEach((step, index) => {
      step.visible = isTesseract ? (index <= currentVisLevel) : (index === currentVisLevel);

      if (step.visible) {
        step.traverse(child => {
          if (child.userData.childIndex === 3) {
            child.visible = (this.state.triforceMode < 0.5);
          }

          if ((child instanceof THREE.LineSegments || child instanceof THREE.Points) && child.geometry.attributes.origPos) {
            const orig = child.geometry.attributes.origPos.array;
            const flat = child.geometry.attributes.flatPos.array;
            const pos = child.geometry.attributes.position.array as number[];
            const intensity = this.state.tesseractIntensity;
            const f = this.state.flatten;

            for (let i = 0; i < pos.length; i += 3) {
              pos[i] = flat[i] + (orig[i] - flat[i]) * (1.0 - f);
              pos[i + 1] = flat[i + 1] + (orig[i + 1] - flat[i + 1]) * (1.0 - f);
              pos[i + 2] = flat[i + 2] + (orig[i + 2] - flat[i + 2]) * (1.0 - f);
            }

            if (intensity > 0.001) {
              const t = this.clockTime * 0.8;
              const cosT = Math.cos(t);
              const sinT = Math.sin(t);

              for (let i = 0; i < pos.length; i += 3) {
                const x = pos[i];
                const y = pos[i + 1];
                const z = pos[i + 2];

                const xRot = x * cosT;
                const wRotX = x * sinT;
                const yRot = y * cosT;
                const wRotY = y * sinT;
                let wRot = (wRotX + wRotY) * 0.85;

                const radius = Math.sqrt(x * x + y * y + z * z);
                const curve = Math.sin(radius * 1.5 - this.clockTime * 1.5) * 0.4;
                wRot += curve;

                const wCam = 3.2;
                const proj = wCam / (wCam - wRot);

                pos[i] = x + (xRot * proj - x) * intensity;
                pos[i + 1] = y + (yRot * proj - y) * intensity;
                pos[i + 2] = z + (z * proj - z) * intensity;
              }
              child.userData.was4D = true;
            } else if (child.userData.was4D) {
              child.userData.was4D = false;
            }
            child.geometry.attributes.position.needsUpdate = true;
          }
        });
      }
    });

    if (!this.isDragging) {
      if (this.state.tesseractIntensity > 0.001) {
        this.sacredGeometry.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), 0.0015);
        this.sacredGeometry.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), 0.001);
      } else {
        if (this.state.spinX) this.sacredGeometry.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), this.state.rotationSpeed);
        if (this.state.spinY) this.sacredGeometry.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), this.state.rotationSpeed);
        if (this.state.spinZ) this.sacredGeometry.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -this.state.rotationSpeed);
      }
    }

    this.particleSystem.rotation.y -= 0.0005;
    this.renderer.render(this.scene, this.camera);
  }
}
