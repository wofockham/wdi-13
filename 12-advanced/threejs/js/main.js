var app = app || {};
app.step = 0;

app.numParticles = 4000;
app.particleDistribution = 600;

app.controller = {
  rotationSpeed: 0.02,
  bouncingSpeed: 0.02
};

app.animate = function(){

  app.stats.update();

  app.step += app.controller.bouncingSpeed;
  app.sphere.position.x = 20 + (10 * Math.cos( app.step ));
  app.sphere.position.y = 4 + (10 *  Math.sin( app.step ));

  app.sphere.rotation.y += app.controller.rotationSpeed;

  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;

  app.animateParticles();

  app.renderer.render( app.scene, app.camera );

  requestAnimationFrame( app.animate );

};


app.animateParticles = function() {
  var verts = app.particleSystem.geometry.vertices;
  for(var i = 0; i < verts.length; i++) {

    var vert = verts[i];

    if( vert.y < -app.particleDistribution/2) {
      vert.y = Math.random() * app.particleDistribution/2; // - app.particleDistribution/2;
    }

    vert.y -= 0.95;

  }
  app.particleSystem.rotation.y -= 0.008;

  app.particleSystem.geometry.verticesNeedUpdate = true;
};

app.init = function() {

  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera(60, app.width/app.height, 0.1, 1000);

  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;

  app.camera.lookAt( app.scene.position );

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize(app.width, app.height);
  app.renderer.setClearColor( 0x000000 );
  // app.renderer.shadowMap.enabled = true;
  //
  // app.axes = new THREE.AxisHelper( 40 );
  // app.scene.add( app.axes );
  //
  // var planeGeometry = new THREE.PlaneGeometry(120, 20);
  // var planeMaterial = new THREE.MeshLambertMaterial({
  //   color: 0xCFD8DC
  // });
  //
  // app.plane = new THREE.Mesh( planeGeometry, planeMaterial );
  //
  // app.plane.rotation.x = -0.5 * Math.PI; // don't ask
  // app.plane.position.set(15, 0, 0);
  // app.plane.receiveShadow = true;
  // app.scene.add ( app.plane );


  //
  // var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  // var cubeMaterial = new THREE.MeshLambertMaterial({
  //   color: 0xFF8F00
  // });

  app.cube = new THREE.Mesh( new THREE.BoxGeometry(4, 4, 4), new THREE.MeshLambertMaterial({  color: 0xFF8F00  }) );
  app.cube.position.set(0, 0, 0);
  // app.cube.castShadow = true;
  app.scene.add( app.cube );

  var sphereGeometry = new THREE.SphereGeometry(20, 30, 30);
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF,
    map: THREE.ImageUtils.loadTexture("earth.jpg")
  });

  app.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  app.sphere.position.set(20, 4, 2);
  // app.sphere.castShadow = true;
  app.scene.add( app.sphere );

  app.spotLight = new THREE.SpotLight( 0xFFFFFF );
  app.spotLight.position.set(-20, 10, 10);
  // app.spotLight.castShadow = true;
  app.scene.add( app.spotLight );

  app.particleSystem = app.createParticleSystem();
  app.scene.add( app.particleSystem );

  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );

  app.gui = new dat.GUI();
  app.gui.add(app.controller, 'rotationSpeed', 0, 0.1);
  app.gui.add(app.controller, 'bouncingSpeed', 0, 2.0);

  app.stats = app.addStats();

  document.getElementById("output").appendChild( app.renderer.domElement );

  app.animate();


}

window.onload = app.init;

app.addStats = function(){

  var stats = new Stats();
  stats.setMode(0);

  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '0px';
  stats.domElement.style.left = '0px';

  document.getElementById("stats").appendChild( stats.domElement );

  return stats;
};

app.createParticleSystem = function() {

  var particles = new THREE.Geometry();

  for(var p  = 0; p < app.numParticles; p++) {

    var x = (Math.random() * app.particleDistribution) - app.particleDistribution/2;
    var y = (Math.random() * app.particleDistribution) - app.particleDistribution/2;
    var z = (Math.random() * app.particleDistribution) - app.particleDistribution/2;

    var particle = new THREE.Vector3( x, y, z );

    particles.vertices.push( particle );
  }

  var particleMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 40,
    map: THREE.ImageUtils.loadTexture("snowflake.png"),
    blending: THREE.AdditiveBlending,
    transparent: true,
    alphaTest: 0.5
  });

  var particleSystem = new THREE.Points(particles, particleMaterial);

  return particleSystem;
};



app.onResize = function(){

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera.aspect = app.width / app.height;
  app.camera.updateProjectionMatrix();

  app.renderer.setSize(app.width, app.height);

};

window.addEventListener("resize", app.onResize);
