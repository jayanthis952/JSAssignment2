function checktriangel(x,y,z){
    if(x == y && y == z){
        console.log("Its a Equilateral Triangle");
    }
    else if(x == y || y == z || z == x)
        console.log("Its a Isosceles Triangel");
    else 
        console.log("Its a Scalene Triangle");   
}
checktriangel(8,7,9)