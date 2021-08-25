// Question (1) 
// add(x,y)
// add(x,y,z)
function add(x: number, y: number);
function add(x: number, y: number, z: number);
function add(x: number, y: number, z?: number) {
    let res ;
    if (typeof(z) !== 'undefined')
    {
       res = x+y+z;
    }else{
        res = x+y;
    }
  return res;
}

console.log(add(3,5)); // expected output 8
console.log(add(2, 3, 4)); // expected output 9