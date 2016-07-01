for(var x = 99; x >= 0; x--){

if (x >= 2){
     console.log(x, "bottles of beer on the wall", x, "bottles of beer. Take one down and pass it around", x -1, "bootles of beer on the wall");
}
else if (x === 1) {
     console.log(x, "bottle of beer on the wall", x, "bottle of beer. Take one down and pass it around no more bottles of beer on the wall");
}
else {
     console.log('No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.')
}
}
