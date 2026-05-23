const manifest = {
  
};


function manifestUnits(manifest) {
  const newManifest = {...manifest};
  
  if (newManifest.unit == "lb"){
  newManifest.weight = newManifest.weight * 0.45;
  newManifest.unit = "kg";
  return newManifest;
  }
}

manifestUnits();

function validateManifest(manifest) {
  const errors = {};
  const newManifest = {...manifest}
  if (newManifest.unit === undefined) {
    newManifest.unit = "missing";
  }
}