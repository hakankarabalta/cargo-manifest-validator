const manifest = {
  containerId: 68,
  destination: "Salinas",
  weight: 101,
  unit: "lb",
  hazmat: true
};


function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  
  if (newManifest.unit == "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
    
  }
  return newManifest;
}

normalizeUnits(manifest);

function validateManifest(manifest) {
  const errors = {};
  
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }
  
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== 'string' || manifest.destination.trim() === '') {
    errors.destination = "Invalid";
  }
  
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (Number.isNaN(manifest.weight) || manifest.weight <= 0) {
    errors.weight = "Invalid";
  }
  
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (!['kg', 'lb'].includes(manifest.unit)) {
    errors.unit = "Invalid";
  }
  
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== 'boolean') {
    errors.hazmat = "Invalid";
  }
  return errors;
}
validateManifest(manifest);

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  
  if (Object.keys(errors).length === 0) {
    // Geçerli
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // Geçersiz
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}