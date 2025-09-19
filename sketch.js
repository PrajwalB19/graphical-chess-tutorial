let descriptionText = "";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  // Squares for the Chess Board
  for (let squareY = 0; squareY <= 300; squareY += 100) {
    for (let squareX = 50; squareX <= 400; squareX += 100) {
      fill(190, 190, 120);
      rect(squareX, squareY, 50, 50);
    }
  }

  for (let squareY = 50; squareY <= 400; squareY += 100) {
    for (let squareX = 0; squareX <= 300; squareX += 100) {
      fill(190, 190, 120);
      rect(squareX, squareY, 50, 50);
    }
  }

  // Border lines
  line(0, 400, 400, 400);
  line(400, 0, 400, 400);
  line(400, 0, 0, 0);
  line(0, 400, 0, 0);

  // --- Piece Functions ---
  function pawn(x, y, color) {
    let pawntrianglebottom = 37;
    let pawntrianglex1 = 0;
    let pawntrianglex3 = 30;
    let pawntriangley2 = 8;
    let pawntrianglex2 = (pawntrianglex1 + pawntrianglex3) / 2;
    fill(color);
    triangle(pawntrianglex1 + x, pawntrianglebottom + y,
             pawntrianglex2 + x, pawntriangley2 + y,
             pawntrianglex3 + x, pawntrianglebottom + y);
    ellipse(pawntrianglex2 + x, pawntriangley2 + y, 15, 15);
    rect(pawntrianglex1 + x, pawntrianglebottom + y, pawntrianglex3, 5);
  }

  function rook(x, y, color) {
    fill(color);
    rect(x, y, 10, 30);
    rect(x - 5, y - 3, 20, 5);
    rect(x - 5, y - 8, 5, 5);
    rect(x + 10, y - 8, 5, 5);
    rect(x + 2.5, y - 8, 5, 5);
    rect(x - 7, y + 30, 25, 5);
  }

  function knight(x, y, color) {
    fill(color);
    rect(x, y, 30, 5);
    triangle(x + 12, y - 32, x + 5, y, x + 25, y);
    triangle(x + 9, y - 18, x + 12, y - 32, x + 41, y - 33);
  }

  function bishop(x, y, color) {
    fill(color);
    ellipse(x, y + 15, 15, 15);
    ellipse(x, y, 20, 20);
    triangle(x, y + 20, x - 14, y + 30, x + 15, y + 30);
  }

  function king(x, y, color) {
    fill(color);
    rect(x, y, 30, 5);
    ellipse(x + 7, y - 8, 15, 15);
    ellipse(x + 23, y - 8, 15, 15);
    rect(x + 9.5, y - 21, 10, 21);
    rect(x + 12, y - 31, 5, 10);
  }

  function queen(x, y, color) {
    fill(color);
    rect(x, y, 30, 10);
    triangle(x, y, x - 6, y - 8, x, y + 10);
    triangle(x + 19, y, x + 15, y - 25, x + 12, y);
    triangle(x + 30, y, x + 37, y - 10, x + 30, y + 10);
    triangle(x, y, x + 4, y - 20, x + 12, y);
    triangle(x + 30, y, x + 28, y - 20, x + 18, y);
    ellipse(x - 4, y - 8, 7, 7);
    ellipse(x + 3, y - 20, 10, 10);
    ellipse(x + 15, y - 25, 10, 10);
    ellipse(x + 27, y - 20, 10, 10);
    ellipse(x + 35, y - 9, 7, 7);
  }

  // --- Draw Pieces ---
  for (let pawnsX = 10; pawnsX <= 360; pawnsX += 50) {
    pawn(pawnsX, 304, 255); // white pawns
    pawn(pawnsX, 54, 0);    // black pawns
  }

  rook(20, 361, 255);
  rook(371, 361, 255);
  rook(371, 12, 0);
  rook(20, 12, 0);

  knight(55, 389, 255);
  knight(305, 389, 255);
  knight(305, 39, 0);
  knight(55, 39, 0);

  bishop(125, 365, 255);
  bishop(275, 365, 255);
  bishop(275, 15, 0);
  bishop(125, 15, 0);

  king(210, 388, 255);
  king(210, 37, 0);

  queen(160, 384, 255);
  queen(160, 35, 0);

  // Description Box
  fill(255);
  rect(0, 400, 499, 99);
  fill(0);
  textSize(20);
  text("See the description of the piece you clicked on below!", 12, 423);

  // Show description if set
  if (descriptionText) {
    textSize(12);
    text(descriptionText, 15, 440, 380, 80);
  }

  // Directions Box
  fill(0);
  rect(400, 0, 100, 400);
  fill(255);
  textSize(20);
  text("Directions", 406, 36);
  textSize(12);
  text("Hello! This is a chess pieces tutorial animation I made. Click on the different pieces to see their descriptions. Remember! You have to click on a chess piece, and then you have to hold your click. Then, release after you are done reading to not see the description. Have fun learning about all the chess pieces!", 406, 49, 90, 386);
}

// --- Handle clicks (replaces giant if/else in KA) ---
function mousePressed() {
  if (mouseY > 50 && mouseY < 100 && mouseX > 0 && mouseX < 400) {
    descriptionText = "You clicked on the black pawns! Pawns can go 2 spaces up on their first turn. After that, pawns go up by only one. Pawns can capture diagonally and can promote.";
  } else if (mouseY > 300 && mouseY < 350 && mouseX > 0 && mouseX < 400) {
    descriptionText = "You clicked on the white pawns! Pawns can go 2 spaces up on their first turn. After that, pawns go up by only one. Pawns can capture diagonally and can promote.";
  } else if (mouseX < 50 && mouseY < 50 || mouseX > 350 && mouseY < 50) {
    descriptionText = "You clicked on a black rook! Rooks move up, down, left, right in straight lines. They cannot move diagonally or jump.";
  } else if (mouseX < 50 && mouseY > 350 || mouseX > 350 && mouseY > 350) {
    descriptionText = "You clicked on a white rook! Rooks move up, down, left, right in straight lines. They cannot move diagonally or jump.";
  } else if (mouseX < 100 && mouseX > 50 && mouseY < 50 || mouseX > 300 && mouseX < 350 && mouseY < 50) {
    descriptionText = "You clicked on a black knight! Knights move in an L-shape and can jump over pieces.";
  } else if (mouseX < 100 && mouseX > 50 && mouseY > 350 || mouseX > 300 && mouseX < 350 && mouseY > 350) {
    descriptionText = "You clicked on a white knight! Knights move in an L-shape and can jump over pieces.";
  } else if (mouseX > 100 && mouseX < 150 && mouseY < 50 || mouseX > 250 && mouseX < 300 && mouseY < 50) {
    descriptionText = "You clicked on a black bishop! Bishops move diagonally any number of squares, but cannot jump.";
  } else if (mouseX > 100 && mouseX < 150 && mouseY > 350 || mouseX > 250 && mouseX < 300 && mouseY > 350) {
    descriptionText = "You clicked on a white bishop! Bishops move diagonally any number of squares, but cannot jump.";
  } else if (mouseX > 150 && mouseX < 200 && mouseY < 50) {
    descriptionText = "You clicked on the black queen! The queen combines rook and bishop moves, making her the most powerful piece.";
  } else if (mouseX > 150 && mouseX < 200 && mouseY > 350) {
    descriptionText = "You clicked on the white queen! The queen combines rook and bishop moves, making her the most powerful piece.";
  } else if (mouseX > 200 && mouseX < 250 && mouseY < 50) {
    descriptionText = "You clicked on the black king! The king moves one square in any direction. The goal is to checkmate it.";
  } else if (mouseX > 200 && mouseX < 250 && mouseY > 350) {
    descriptionText = "You clicked on the white king! The king moves one square in any direction. The goal is to checkmate it.";
  }
}

function mouseReleased() {
  descriptionText = ""; // Clear description when mouse is released
}
