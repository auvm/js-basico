
console.log("opciones: \n1.-Piedra\n2.-Papel\n3.-Tijeras");
var game_me;
var game_pc;
var stay = true;
while(stay){
    game_me = prompt("elige una (1-3): ");
    game_pc = Math.floor(Math.random() * 3);
    var winner = logic(game_me, game_pc);
    console.log(winner);
    
    function logic(game_me, game_pc){

        switch(game_me){
            case '1':
                if(game_pc === 1){
                    return "nadie gana - pc = piedra";
                }else if(game_pc === 2){
                    return "tu pierdes - pc = papel";
                }else{
                    return "tu ganas!  - pc = tijeras";
                }
                break;

            case '2':
                if(game_pc === 1){
                    return "tu ganas! - pc = piedra";
                }else if(game_pc === 2){
                    return "nadie gana - pc = papel";
                }else{
                    return "tu pierdes  - pc = tijeras";
                }
                break;

            case '3':
                if(game_pc === 1){
                    return "tu pierdes - pc = piedra";
                }else if(game_pc === 2){
                    return "tu ganas! - pc = papel";
                }else{
                    return "nadie gana  - pc = tijeras";
                }
                break;
        }
    }
    answer = prompt("seguir jugando? 1 = si ; 2 = no: ");
    stay = answer === '1' ? true : false;
}

