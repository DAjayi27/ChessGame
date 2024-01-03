document.addEventListener("DOMContentLoaded", loadChessBoard );
document.addEventListener("DOMContentLoaded", loadChessPieces );
var chessBoardSize = 64;

function loadChessBoard() {

    const classes = new Map();
    classes.set(0,"chess_position_w");
    classes.set(1,"chess_position_b");


    var chessBoard =  document.getElementById("main_board");
    var columnStartingColour = 0;

    for (let i = 0; i < 8 ; i++) {
       
        var indexPosition = 0;   

        if (i %2 === 0 ) {
            
            classes.set(0,"chess_position_w");
           classes.set(1,"chess_position_b");
  
        }
        else{

            classes.set(0,"chess_position_b");
            classes.set(1,"chess_position_w");

        } 
        
        for (let j = 0; j < 8; j++) {
            var chessdiv = document.createElement("div");
            if (j%2 == 0) {
                indexPosition = columnStartingColour;
                chessdiv.className = classes.get(columnStartingColour);
                loadChessPieces(i,j,chessdiv); 
                chessBoard.appendChild(chessdiv);
               
            }
            else{
                indexPosition = columnStartingColour+1;
                chessdiv.className = classes.get(indexPosition);
                loadChessPieces(i,j,chessdiv);
                chessBoard.appendChild(chessdiv)
                
            }
        }
        
    }
    
}

function loadChessPieces(i , j, chessdiv) {
    const chessPiecesMap = new Map();

    const chessBoard = document.getElementById("main_board").childNodes;

    let chesspiece =  document.createElement("span");



    // White pieces
    chessPiecesMap.set("white_king", "♔");
    chessPiecesMap.set("white_queen", "♕");
    chessPiecesMap.set("white_rook", "♖");
    chessPiecesMap.set("white_bishop", "♗");
    chessPiecesMap.set("white_knight", "♘");
    chessPiecesMap.set("white_pawn", "&#9817;");

    // Black pieces 
    chessPiecesMap.set("black_king", "♚");
    chessPiecesMap.set("black_queen", "♛");
    chessPiecesMap.set("black_rook", "♜");
    chessPiecesMap.set("black_bishop", "♝");
    chessPiecesMap.set("black_knight", "♞");
    chessPiecesMap.set("black_pawn", "♟");

   

    if (i === 1 || i === 6) {
        if (i === 1) {
            chesspiece.innerHTML = chessPiecesMap.get("black_pawn");
            chesspiece.className = "span"
            chessdiv.appendChild(chesspiece);
        }
        else{
            chesspiece.innerHTML = chessPiecesMap.get("white_pawn");
            chesspiece.className = "span"
            chessdiv.appendChild(chesspiece);
        }
    }

   
}