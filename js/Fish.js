AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `fish${i}`;
  
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 3 + 3;
        const posZ = Math.random() * 60 + -40;
        const position = { x: posX, y: posY, z: posZ };
        this.genrateFish(id, position);
      }
    },
    genrateFish: function (id, position) {
      const fishModelEntity = document.querySelector("#fishModels");
      var fish = document.createElement("a-entity");
  
      fish.setAttribute("id", id);
      fish.setAttribute("position", position);
      fish.setAttribute("rotation", { x: 0, y: 180, z: 0 });
  
      fish.setAttribute("scale", { x: 0.1, y: 0.1, z: 0.1 });
  
      fish.setAttribute("gltf-model", "./assets/fish/scene.gltf");
  
      
      fish.setAttribute("animation", {
        property: "position",
        to: "100 10 -20",
        loop: "true",
        dur: 20000
      });
  
      fish.setAttribute("animation-mixer", {});
  
      fishModelEntity.appendChild(fish);
    }
  })
  