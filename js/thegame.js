let ai_buttom = document.querySelector('.start1 button:first-child');
let human_buttom = document.querySelector('.start1 button:last-child');
let cross = document.querySelector('.start2 button:first-child');
let zero = document.querySelector('.start2 button:last-child');
let cells = document.getElementsByClassName('cell');
let win_ind=0;
let player=0;

// var step - переменная блокирует возможность сделать ход;


let thirst_choice;
let second_choice;



function arrowCreator(arr) {
  var newarr = [];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    newarr.push(i);
  }
  return newarr;
}

let SecondaryArrow = arrowCreator(cells);
let used = [];


ai_buttom.addEventListener('click', function() {
  thirst_choice = 0;
});

human_buttom.addEventListener('click', function() {
  thirst_choice = 1;
});

cross.addEventListener('click', function() {
  second_choice = 0;
});

zero.addEventListener('click', function() {
  second_choice = 1;
  ai_firstMove();
});

function createCross(el) {

  var cro1 = document.createElement('div');
  var cro2 = document.createElement('div');
  cro1.classList.add('cross1');
  cro2.classList.add('cross2');
  el.appendChild(cro1);
  el.appendChild(cro2);

}

function createZero() {

  var zero = document.createElement('div');
  zero.classList.add('zero');
  return zero;
}


function getrandom(arrow0) {
  var arr0 = arrow0;
  var rand = Math.floor(Math.random() * arr0.length);
  return rand;
}

function check_element(arrow1, a) {
  var arr1 = arrow1;
  var del = a;

  for (var el in arr1)
    if (arr1[el] == del) {
      used.push(arr1[el]);
      arr1.splice(el, 1);
    }
}

function ai_firstMove(){
if (thirst_choice==0&&second_choice==1)
{

  createCross(cells[4]);
 check_element(SecondaryArrow, 4);
}}

function Strategy(use,in_stock) {

  var usedArrow = use;
  var in_stockArrow= in_stock;

  for (var i = 0; i < usedArrow.length; i++) {
var val;


     if(usedArrow[i]==4){

      for (var c in in_stockArrow) {
        // console.log(in_stockArrow);
        // if(in_stockArrow[c]==8){val=8;return val;}
        if(in_stockArrow[c]==3){for (var b in usedArrow) {

          // console.log(usedArrow[b]+' etobi');
          if(usedArrow[b]==5){
            for(var stk5 in in_stockArrow)
            {if(in_stockArrow[stk5]==3&&cells[5].childNodes.length==cells[4].childNodes.length){return val=3;}}}
          if(usedArrow[b]==6)
          {for(var stk1 in in_stockArrow)
          {if(in_stockArrow[stk1]==2&&cells[6].childNodes.length==cells[4].childNodes.length){return val=2;}}}
          if(usedArrow[b]==2)
          {for(var stk2 in in_stockArrow)
          {if(in_stockArrow[stk2]==6&&cells[4].childNodes.length==cells[2].childNodes.length){return val=6;}}}

      }
      if(usedArrow[b]==3){
    val=5; console.log("hereweare");return val; }
      if(usedArrow[b]==6)
      {for(var stk3 in in_stockArrow)
      {if(in_stockArrow[stk3]==2&&cells[4].childNodes.length==cells[6].childNodes.length){console.log('thisisit');return val=2;}}}
      if(usedArrow[b]==2)
      {for(var stk4 in in_stockArrow)
      {if(in_stockArrow[stk4]==6){return val=6;}}}

    }


// if(in_stockArrow[c]==5){val=5;return val;}
if(in_stockArrow[c]==0&&cells[5].childNodes.length==0&&cells[8].childNodes.length==0&&cells[7].childNodes.length==0){val=0;return val;}
// if(in_stockArrow[c]==6){val=6;return val;}

// if(in_stockArrow[c]==2){for (var d in usedArrow) {
//   if(usedArrow[d]==8){
// for(var cr in usedArrow){if(cells[8].childNodes[0].childNodes.length==cells[5].childNodes[0].childNodes.length){val=2;console.log('2-3');return val;}}}
// }
// }

// if(in_stockArrow[c]==1){for (var e in usedArrow) {
//   if(usedArrow[e]==6)
//   for (var f in usedArrow) {
//     if(usedArrow[f]==2)
//     {
//   val=1;console.log('odin');return val;}
//   }
// }
// }

if(in_stockArrow[c]==7){for (var j in usedArrow) {
  if(usedArrow[j]==1)
  for (var h in usedArrow) {
    if(usedArrow[h]==6&&cells[5].childNodes.length!=cells[2].childNodes.length
    )
    {
  val=7;return val;}
  }
}
}




if(in_stockArrow[c]==2){for (var i in usedArrow) {
  if(usedArrow[i]==6&&cells[6].childNodes.length==cells[4].childNodes.length)

    {
  val=2;console.log('2-4');return val;}
  }

}

if(in_stockArrow[c]==2){for (var i1 in usedArrow) {
  if(usedArrow[i1]==0&&cells[0].childNodes.length==cells[1].childNodes.length)

    {
  val=2;console.log('2-5');return val;}
  }

}


if(in_stockArrow[c]==6){for (var a3 in usedArrow) {
  if(usedArrow[a3]==0&&cells[0].childNodes.length==cells[3].childNodes.length)
    {
  val=6;return val;}
  }
}

if(in_stockArrow[c]==6){for (var a10 in usedArrow) {
  if(usedArrow[a10]==7&&cells[7].childNodes.length==cells[8].childNodes.length)
    {
  val=6;return val;}
  }
}

if(in_stockArrow[c]==2){for (var a4 in usedArrow) {
  if(usedArrow[a4]==8&&cells[8].childNodes.length==cells[5].childNodes.length)
    {
  val=2;return val;}
  }
}

if(in_stockArrow[c]==8){for (var a5 in usedArrow) {
  if(usedArrow[a5]==2&&cells[2].childNodes.length==cells[5].childNodes.length)
    {
  val=8;return val;}
  }
}


if(in_stockArrow[c]==8){for (var a9 in usedArrow) {
  if(usedArrow[a9]==6&&cells[6].childNodes.length==cells[7].childNodes.length)
    {
  val=8;return val;}
  }
}

if(in_stockArrow[c]==0){for (var a6 in usedArrow) {
  if(usedArrow[a6]==2&&cells[8].childNodes.length==cells[4].childNodes.length)
    {
  val=0;return val;}
  }
}

if(in_stockArrow[c]==8){for (var a12 in usedArrow) {
  if(usedArrow[a12]==0&&cells[0].childNodes.length==cells[4].childNodes.length)
    {
  val=8;return val;}
  }
}

if(in_stockArrow[c]==5){for (var a7 in usedArrow) {
  if(usedArrow[a7]==2&&cells[2].childNodes.length==cells[8].childNodes.length)
    {
  val=5;return val;}
  }
}

if(in_stockArrow[c]==5){for (var a8 in usedArrow) {
  if(usedArrow[a8]==3&&cells[3].childNodes.length==cells[4].childNodes.length)
    {
  val=5;return val;}
  }
}

if(in_stockArrow[c]==8){for (var a15 in usedArrow) {
  if(usedArrow[a15]==5&&cells[5].childNodes.length==cells[7].childNodes.length&&cells[5].childNodes.length!=cells[0].childNodes.length&&cells[5].childNodes.length!=0)
    {
  val=8;return val;}
  }
}
// общий вариант проверка что элементы одинаковые
// if(in_stockArrow[c]==1){for (var i in usedArrow) {
//   if(usedArrow[i]==0)
//   for (var j in usedArrow) {
//     if(usedArrow[j]==2)
//     {
//   val=1;console.log("dva");return val;}
//   }
// }
// }




// if(in_stockArrow[c]==8){for (var k in usedArrow) {
//   if(usedArrow[k]==0)
//   for (var l in usedArrow) {
//     if(usedArrow[l]==5)
//     {
//   val=8;return val;}
//   }
// }
// }

// if(in_stockArrow[c]==6){for (var m in usedArrow) {
//   if(usedArrow[m]==0)
//   for (var n in usedArrow) {
//     if(usedArrow[n]==2)
//     {
//   val=2;return val;}
//   }
// }
// }

if(in_stockArrow[c]==3){for (var m in usedArrow) {
  if(usedArrow[m]==0)
  for (var o in usedArrow) {
    if(usedArrow[o]==6)
    {
  if(cells[0].childNodes.length==cells[6].childNodes.length){return val=3}}
  }
}
}

if(in_stockArrow[c]==1){for (var p in usedArrow) {
  if(usedArrow[p]==0)
  for (var r in usedArrow) {
    if(usedArrow[r]==2)
    {
  if(cells[0].childNodes.length==cells[2].childNodes.length){return val=1}}
  }
}
}

if(in_stockArrow[c]==1){for (var p1 in usedArrow) {
  if(usedArrow[p1]==7)

    {
  if(cells[7].childNodes.length==cells[4].childNodes.length){return val=1}}
  }
}


if(in_stockArrow[c]==7){for (var a1 in usedArrow) {
  if(usedArrow[a1]==1)

    {
  if(cells[1].childNodes.length==cells[4].childNodes.length){return val=7}}
  }
}



if(in_stockArrow[c]==7){for (var a2 in usedArrow) {
  if(usedArrow[a2]==6)

    {
  if(cells[6].childNodes.length==cells[8].childNodes.length){return val=7}}
  }
}






if(in_stockArrow[c]==6){for (var w in usedArrow) {
  if(usedArrow[w]==2&&cells[2].childNodes.length==cells[4].childNodes.length)

    {
  return val=6}
  }
}

if(in_stockArrow[c]==1){for (var x in usedArrow) {
  if(usedArrow[x]==3)
  for (var y in usedArrow) {

  if(cells[8].childNodes.length==cells[3].childNodes.length){return val=1}}
}
}

      }




     }

     else {
       for(var stk in in_stockArrow)
       {if(in_stockArrow[stk]==4){val=4;return val;}
    }
     }
  }
return val;
}




function aigame(arrow2) {
  var arr2 = arrow2;
  var randomPosition = arr2[getrandom(arr2)];
  var newPosition = Strategy(used,SecondaryArrow);

  if (second_choice == 0) {


          cells[newPosition].appendChild(createZero());
          check_element(SecondaryArrow, newPosition);


  }

  if (second_choice == 1) {


          createCross(cells[newPosition]);
          check_element(SecondaryArrow, newPosition);


  }
}


function iscl(sel) {

  var field = sel;
  var index;


  for (var key in cells) {
    if (cells[key] == sel) {
      index = key;
    }
  }
  return index;
}

function win() {

  if (cells[0].childNodes.length==cells[1].childNodes.length&&cells[0].childNodes.length==cells[2].childNodes.length&&cells[0].childNodes.length!=0)
  {cells[0].classList.add('win');cells[1].classList.add('win');cells[2].classList.add('win');win_ind=1;}
  if(cells[0].childNodes.length==cells[4].childNodes.length&&cells[0].childNodes.length==cells[8].childNodes.length&&cells[0].childNodes.length!=0) {
    cells[0].classList.add('win');cells[4].classList.add('win');cells[8].classList.add('win');win_ind=1;
  }
  if(cells[2].childNodes.length==cells[4].childNodes.length&&cells[2].childNodes.length==cells[6].childNodes.length&&cells[2].childNodes.length!=0) {
    cells[2].classList.add('win');cells[4].classList.add('win');cells[6].classList.add('win');win_ind=1;
  }
  if(cells[2].childNodes.length==cells[4].childNodes.length&&cells[2].childNodes.length==cells[6].childNodes.length&&cells[2].childNodes.length!=0) {
    cells[2].classList.add('win');cells[4].classList.add('win');cells[6].classList.add('win');win_ind=1;
  }
  if(cells[2].childNodes.length==cells[5].childNodes.length&&cells[2].childNodes.length==cells[8].childNodes.length&&cells[2].childNodes.length!=0) {
    cells[2].classList.add('win');cells[5].classList.add('win');cells[8].classList.add('win');win_ind=1;
  }

  if(cells[0].childNodes.length==cells[3].childNodes.length&&cells[0].childNodes.length==cells[6].childNodes.length&&cells[0].childNodes.length!=0) {
    cells[0].classList.add('win');cells[3].classList.add('win');cells[6].classList.add('win');win_ind=1;
  }

  if(cells[1].childNodes.length==cells[4].childNodes.length&&cells[1].childNodes.length==cells[7].childNodes.length&&cells[1].childNodes.length!=0) {
    cells[1].classList.add('win');cells[4].classList.add('win');cells[7].classList.add('win');win_ind=1;
  }
  if(cells[3].childNodes.length==cells[4].childNodes.length&&cells[3].childNodes.length==cells[5].childNodes.length&&cells[3].childNodes.length!=0) {
    cells[3].classList.add('win');cells[4].classList.add('win');cells[5].classList.add('win');win_ind=1;
  }
  if(cells[6].childNodes.length==cells[7].childNodes.length&&cells[6].childNodes.length==cells[8].childNodes.length&&cells[6].childNodes.length!=0) {
    cells[6].classList.add('win');cells[7].classList.add('win');cells[8].classList.add('win');win_ind=1;
  }
}

function changePlayer() {

  if (player==0) {
    player=1;
    return null;
  }
  if (player==1) {
    player=0;
    return null;
  }

}

Array.prototype.forEach.call(cells, function(cell) {

  var lock = 1;

  cell.addEventListener('click', function() {

    for (var remain in SecondaryArrow) {
      if (SecondaryArrow[remain] == iscl(cell)) {
        lock = 0;
      }
    }
    if (thirst_choice == 0 && second_choice == 0 && lock == 0 && win_ind==0) {
      createCross(cell);
      check_element(SecondaryArrow, iscl(cell));
      win();
      setTimeout(1500,aigame(SecondaryArrow));

      lock = 1;
      win();


    }

    if (thirst_choice == 0 && second_choice == 1 && lock == 0 && win_ind==0) {
      cell.appendChild(createZero());
      check_element(SecondaryArrow, iscl(cell));
      win();
      setTimeout(1500,aigame(SecondaryArrow));
      lock = 1;
      win();


    }

    if (thirst_choice == 1 && lock == 0 && win_ind==0) {
      if (player==0) {
        createCross(cell);
        check_element(SecondaryArrow, iscl(cell));
        win();

        lock = 1;

      }


      if (player==1) {
        cell.appendChild(createZero());
        check_element(SecondaryArrow, iscl(cell));
        win();

      }
       changePlayer();

    }
  })
})
