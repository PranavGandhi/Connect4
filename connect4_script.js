var turn=1
var color="white"




$('#top > td').on('click',function()
{
  console.log('Row ' + $(this).closest("tr").index());
  console.log('Column ' + $(this).closest("td").index());
  var clickCol=$(this).closest("td").index()


if (turn==1)
  { color="red"
  fill(clickCol,color)
  turn++
  console.log("1");
    }
else
{     color="blue"
      fill(clickCol,color)
      turn--
      console.log("2");}
})


// $('td').mouseenter(function(){
//
// $(this).text($(this).closest("tr").index()+" , "+$(this).closest("td").index())
// })
//
// $('td').mouseleave(function(){
//
// $(this).text('')
// })



function fill(col,color){

var x=findLast(col)

$('table tr').eq(x-1).find('td').eq(col).css( "background-color",color)
console.log(x-1,col);
setTimeout(() => {  win() }, 2000);


}

function findLast(col)
{
  var found=0;
  for (var i = 0; i < 6; i++) {

  if($('table tr').eq(i).find('td').eq(col).css( "background-color")=="rgb(255, 0, 0)" || $('table tr').eq(i).find('td').eq(col).css( "background-color")=="rgb(0, 0, 255)")
    {return i;
    found=1;
    }
}
  if(found==0)
    {
      return 6;
    }
}

function give_color(color){

  if (color=="rgb(0, 0, 255)")
  {return "Blue"}
  else
  {return "Red"}
}


function win(){

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 7; j++) {
        if($('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i+1).find('td').eq(j).css( "background-color") && $('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i+2).find('td').eq(j).css( "background-color") && $('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i+3).find('td').eq(j).css( "background-color")&&($('table tr').eq(i).find('td').eq(j).css( "background-color")=="rgb(255, 0, 0)" || $('table tr').eq(i).find('td').eq(j).css( "background-color")=="rgb(0, 0, 255)"))
        {alert(give_color($('table tr').eq(i).find('td').eq(j).css( "background-color"))+" wins")
        window.location.reload();}

      }
    }

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 4; j++) {
        if($('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i).find('td').eq(j+1).css( "background-color") && $('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i).find('td').eq(j+2).css( "background-color") && $('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i).find('td').eq(j+3).css( "background-color")&&($('table tr').eq(i).find('td').eq(j).css( "background-color")=="rgb(255, 0, 0)" || $('table tr').eq(i).find('td').eq(j).css( "background-color")=="rgb(0, 0, 255)"))
        {alert(give_color($('table tr').eq(i).find('td').eq(j).css( "background-color"))+" wins")
        window.location.reload();}

      }
    }

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 7; j++) {
        if($('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i+1).find('td').eq(j+1).css( "background-color") && $('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i+2).find('td').eq(j+2).css( "background-color") && $('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i+3).find('td').eq(j+3).css( "background-color")&&($('table tr').eq(i).find('td').eq(j).css( "background-color")=="rgb(255, 0, 0)" || $('table tr').eq(i).find('td').eq(j).css( "background-color")=="rgb(0, 0, 255)"))
        {alert(give_color($('table tr').eq(i).find('td').eq(j).css( "background-color"))+" wins")
        window.location.reload();}

        else if($('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i-1).find('td').eq(j+1).css( "background-color") && $('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i-2).find('td').eq(j+2).css( "background-color") && $('table tr').eq(i).find('td').eq(j).css( "background-color")==$('table tr').eq(i-3).find('td').eq(j+3).css( "background-color")&&($('table tr').eq(i).find('td').eq(j).css( "background-color")=="rgb(255, 0, 0)" || $('table tr').eq(i).find('td').eq(j).css( "background-color")=="rgb(0, 0, 255)"))
        {alert(give_color($('table tr').eq(i).find('td').eq(j).css( "background-color"))+" wins")
        window.location.reload();}

      }
    }


}
