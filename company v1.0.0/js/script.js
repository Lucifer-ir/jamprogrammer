/*                                                                                              
                                                                                                                    
                                                            dddddddd                                                
        CCCCCCCCCCCCC                                       d::::::d       iiii       lllllll                       
     CCC::::::::::::C                                       d::::::d      i::::i      l:::::l                       
   CC:::::::::::::::C                                       d::::::d       iiii       l:::::l                       
  C:::::CCCCCCCC::::C                                       d:::::d                   l:::::l                       
 C:::::C       CCCCCC        ooooooooooo            ddddddddd:::::d      iiiiiii       l::::l         ooooooooooo   
C:::::C                    oo:::::::::::oo        dd::::::::::::::d      i:::::i       l::::l       oo:::::::::::oo 
C:::::C                   o:::::::::::::::o      d::::::::::::::::d       i::::i       l::::l      o:::::::::::::::o
C:::::C                   o:::::ooooo:::::o     d:::::::ddddd:::::d       i::::i       l::::l      o:::::ooooo:::::o
C:::::C                   o::::o     o::::o     d::::::d    d:::::d       i::::i       l::::l      o::::o     o::::o
C:::::C                   o::::o     o::::o     d:::::d     d:::::d       i::::i       l::::l      o::::o     o::::o
C:::::C                   o::::o     o::::o     d:::::d     d:::::d       i::::i       l::::l      o::::o     o::::o
 C:::::C       CCCCCC     o::::o     o::::o     d:::::d     d:::::d       i::::i       l::::l      o::::o     o::::o
  C:::::CCCCCCCC::::C     o:::::ooooo:::::o     d::::::ddddd::::::dd     i::::::i     l::::::l     o:::::ooooo:::::o
   CC:::::::::::::::C     o:::::::::::::::o      d:::::::::::::::::d     i::::::i     l::::::l     o:::::::::::::::o
     CCC::::::::::::C      oo:::::::::::oo        d:::::::::ddd::::d     i::::::i     l::::::l      oo:::::::::::oo 
        CCCCCCCCCCCCC        ooooooooooo           ddddddddd   ddddd     iiiiiiii     llllllll        ooooooooooo
*/

document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener('mousemove', event => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();

});

/*
   ____   U  ___ u  ____              _       U  ___ u
U /"___|   \/"_ \/ |  _"\    ___     |"|       \/"_ \/
\| | u     | | | |/| | | |  |_"_|  U | | u     | | | |
 | |/__.-,_| |_| |U| |_| |\  | |    \| |/__.-,_| |_| |
  \____|\_)-\___/  |____/ uU/| |\u   |_____|\_)-\___/
 _// \\      \\     |||_.-,_|___|_,-.//  \\      \\
(__)(__)    (__)   (__)_)\_)-' '-(_/(_")("_)    (__)

*/