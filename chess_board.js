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
                chessBoard.appendChild(chessdiv);
               
            }
            else{
                indexPosition = columnStartingColour+1;
                chessdiv.className = classes.get(indexPosition);
                chessBoard.appendChild(chessdiv)
                
            }
        }
        
    }
    
}

function loadChessPieces() {
    const chessPiecesMap = new Map();

    const chessBoard = document.getElementById("main_board").childNodes;

    let chesspiece =  document.createElement("img");



    // White pieces
    chessPiecesMap.set("white_king", "chess pieces/king_white.png");
    chessPiecesMap.set("white_queen", "chess pieces/queen_white.png");
    chessPiecesMap.set("white_rook", "chess pieces/rook_white.png");
    chessPiecesMap.set("white_bishop", "chess pieces/bishop_white.png");
    chessPiecesMap.set("white_knight", "chess pieces/knight_white.png");
    chessPiecesMap.set("white_pawn", "chess pieces/pawn_white.png");

    // Black pieces 
    chessPiecesMap.set("black_king", "chess pieces/king_black.png");
    chessPiecesMap.set("black_queen", "chess pieces/queen_black.png");
    chessPiecesMap.set("black_rook", "chess pieces/rook_black.png");
    chessPiecesMap.set("black_bishop", "chess pieces/bishop_black.png");
    chessPiecesMap.set("black_knight", "chess pieces/knight_black.png");
    chessPiecesMap.set("black_pawn", "chess pieces/pawn_black.png");

   
    for (let i = 0; i < chessBoard.length; i++) {
        let chesspiece =  document.createElement("img");

        if( i > 15 && i < 48  ){
            continue;
        }

        if (i > 7  && i < 56 ) {
            if (i > 47) {
               chesspiece.src = chessPiecesMap.get("black_pawn");
            }
            else{
                chesspiece.src = chessPiecesMap.get("white_pawn");
            }
        }
        else if ( i < 8) {
            switch (i) {
                case 0:
                case 7:
                    chesspiece.src = chessPiecesMap.get("white_rook")
                    break;

                case 1:
                case 6:
                    chesspiece.src = chessPiecesMap.get("white_knight")
                    break;
                case 2:
                case 5:
                    chesspiece.src = chessPiecesMap.get("white_bishop")
                    break;

                case 3:
                    chesspiece.src = chessPiecesMap.get("white_king")
                    break;

                case 4:
                    chesspiece.src = chessPiecesMap.get("white_queen")

            
                
            }
        }

        else if (i > 55) {
            
        

            switch (i) {
                case 56:
                case 63:
                    chesspiece.src = chessPiecesMap.get("black_rook")
                    break;

                case 57:
                case 62:
                    chesspiece.src = chessPiecesMap.get("black_knight")
                    break;
                case 58:
                case 61:
                    chesspiece.src = chessPiecesMap.get("black_bishop")
                    break;

                case 59:
                    chesspiece.src = chessPiecesMap.get("black_king")
                    break;

                case 60:
                    chesspiece.src = chessPiecesMap.get("black_queen")

            
                
            }

        }
        

        chessBoard[i].appendChild(chesspiece);
        
    }
    

   
}