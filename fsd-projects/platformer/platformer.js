$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "#f04438"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
    // Keep the level simple and easy to follow.

    // TODO 2 - Create Platforms
    createPlatform(60, 620, 260, 24, "#18b6a4");
    createPlatform(350, 540, 240, 24, "#18b6a4");
    createPlatform(620, 460, 240, 24, "#18b6a4");
    createPlatform(890, 540, 240, 24, "#18b6a4");
    createPlatform(1160, 460, 180, 24, "#18b6a4");
    createPlatform
    // TODO 3 - Create Collectables
    createCollectable("diamond", 150, 570, 0, 0);
    createCollectable("max", 710, 410, 0, 0);
    createCollectable("steve", 1230, 410, 0, 0);
    // TODO 4 - Create Cannons
    createCannon("top", 500, 900, 26, 26, 400, 700, 0.5);
    createCannon("right", 300, 900, 26, 26, 200, 500, 0.5);
    createCannon("left", 500, 900, 26, 26, 300, 600, 0.5);

    // TODO 5 - Create Bad Platforms
    createBadPlatform(315, 680, 120, 20, "#ef476f");
    createBadPlatform(680, 680, 120, 20, "#ef476f");
    createBadPlatform(965, 680, 120, 20, "#ef476f");
    createBadPlatform(
      -50,
      canvas.height - 11,
      canvas.width + 100,
      200,
      "#f04438",
    );

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
