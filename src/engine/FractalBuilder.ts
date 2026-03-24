import * as THREE from 'three';

export const BRANCH_COLORS = [
  new THREE.Color(0xffd700), // Gold
  new THREE.Color(0xff0000), // Red
  new THREE.Color(0x00f3ff), // Cyan
  new THREE.Color(0x00ff00)  // Green
];

const TETRA_V0 = new THREE.Vector3(0, 1, 0);
const TETRA_V1 = new THREE.Vector3(-Math.sqrt(3) / 2, -0.5, 0);
const TETRA_V2 = new THREE.Vector3(Math.sqrt(3) / 2, -0.5, 0);
const TETRA_V3 = new THREE.Vector3(0, 0, Math.sqrt(2));
export const TETRA_UNIT = [TETRA_V0, TETRA_V1, TETRA_V2, TETRA_V3];

export function buildFractal(
  level: number,
  radius: number,
  wireMaterial: THREE.LineDashedMaterial,
  pointMaterial: THREE.PointsMaterial,
  targetFractalLevel: number,
  ox = 0,
  oy = 0,
  oz = 0,
  currentBranch = 0
): THREE.Group {
  if (level === 0) {
    const solidVertices = TETRA_UNIT.map(v => [v.x * radius, v.y * radius, v.z * radius]);

    // Simple local collapse (V3 goes to origin relative to center)
    const flatVertices = [
      [0, radius, 0],
      [-radius * 0.866, -radius * 0.5, 0],
      [radius * 0.866, -radius * 0.5, 0],
      [0, 0, 0]
    ];

    const bCol = BRANCH_COLORS[currentBranch];
    const grp = new THREE.Group();

    const buildLine = (vIdx1: number, vIdx2: number, isPeak = false) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(6);
      const flat = new Float32Array(6);
      const colors = new Float32Array(6);

      [vIdx1, vIdx2].forEach((vIdx, i) => {
        const sv = solidVertices[vIdx];
        const fv = flatVertices[vIdx];
        pos[i * 3] = sv[0] + ox; pos[i * 3 + 1] = sv[1] + oy; pos[i * 3 + 2] = sv[2] + oz;
        flat[i * 3] = fv[0] + ox; flat[i * 3 + 1] = fv[1] + oy; flat[i * 3 + 2] = fv[2] + oz;
        colors[i * 3] = bCol.r; colors[i * 3 + 1] = bCol.g; colors[i * 3 + 2] = bCol.b;
      });

      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('origPos', new THREE.BufferAttribute(new Float32Array(pos), 3));
      geo.setAttribute('flatPos', new THREE.BufferAttribute(flat, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mesh = new THREE.LineSegments(geo, wireMaterial);
      mesh.computeLineDistances(); // Required for dash animation
      if (isPeak) mesh.userData.childIndex = 3;
      return mesh;
    };

    grp.add(buildLine(0, 1)); grp.add(buildLine(1, 2)); grp.add(buildLine(2, 0));
    grp.add(buildLine(0, 3, true)); grp.add(buildLine(1, 3, true)); grp.add(buildLine(2, 3, true));

    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(12);
    const pFlat = new Float32Array(12);
    const pCol = new Float32Array(12);
    for (let i = 0; i < 4; i++) {
      const sv = solidVertices[i]; const fv = flatVertices[i];
      pPos[i * 3] = sv[0] + ox; pPos[i * 3 + 1] = sv[1] + oy; pPos[i * 3 + 2] = sv[2] + oz;
      pFlat[i * 3] = fv[0] + ox; pFlat[i * 3 + 1] = fv[1] + oy; pFlat[i * 3 + 2] = fv[2] + oz;
      pCol[i * 3] = bCol.r; pCol[i * 3 + 1] = bCol.g; pCol[i * 3 + 2] = bCol.b;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('origPos', new THREE.BufferAttribute(new Float32Array(pPos), 3));
    pGeo.setAttribute('flatPos', new THREE.BufferAttribute(pFlat, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
    
    // Glowing orbs disabled temporarily to save on canvas draw calls + memory
    // grp.add(new THREE.Points(pGeo, pointMaterial));

    return grp;
  }

  const group = new THREE.Group();
  const newRadius = radius / 2;

  TETRA_UNIT.forEach((v, index) => {
    const childOffset = v.clone().multiplyScalar(newRadius);
    const nextBranch = (level === targetFractalLevel) ? index : currentBranch;
    const child = buildFractal(
      level - 1, newRadius,
      wireMaterial, pointMaterial,
      targetFractalLevel,
      ox + childOffset.x, oy + childOffset.y, oz + childOffset.z,
      nextBranch
    );
    child.userData.childIndex = index;
    group.add(child);
  });

  return group;
}
