

document.body.style.backgroundImage="url('a.jpg')";
b=document.getElementById("a");
c=b.getContext("2d");
b.style.background="white";
l=[];

function iter(){
    if (l.length<10){
        l.push(one);
    }else{
        l.shift();
        l.push(one);
    }}

function white(id){
    document.getElementById(id).style.background="white";
}

/*clear canvas*/
function clrscr(){
    var r=confirm("Clear the canvas?");
    if(r==true){
        b.width=b.width;}
}

/*stroke color*/
function color(colour){
    c.beginPath();
    c.strokeStyle=colour;
    c.fillStyle=colour;
    c.closePath();
}

/*mouse events*/
function events(){
    b.onmousedown=md;
    b.onmouseup=mu;
    b.onmousemove=mv;
}

function md(e){
    one=c.getImageData(0,0,b.width,b.height);
    iter();
    img=c.getImageData(0,0,b.width,b.height);
    sX=e.x;
    sY=e.y;
    pulse="on";
}

function mu(e1){
    eX=e1.x;
    eY=e1.y;
    pulse="off";
}

function mv(e2){
    mX=e2.x;
    mY=e2.y;
    if (pulse=="on" && (item=='e' || item=='f'))
        {draw();
        }else
        if (pulse=='on'){
            c.putImageData(img,0,0);draw();
        }}

/*draw shapes*/
function rectangle(){
    events();
    item="a";
}

function circle(){
    events();
    item='b';
}

function line(){
    events();
    item='c';
}

/*brushes*/
function pencil(){
    events();item='d';
}

function spray(){
    item='f';events();
}

 /*go back*/
function undo(){
    if(l.length>=1){
        b.width=b.width;
        c.putImageData(l[l.length-1],0,0);
        l.pop();
    }}

function draw(){
    /*rectangle draw*/
    if(item=='a'){
        c.strokeRect(sX,sY,mX-sX,mY-sY);
        c.stroke();

        if(f==1){
            c.fillRect(sX,sY,mX-sX,mY-sY);
    }}

    /*circle draw*/
    if(item=="b"){
        c.beginPath();
        c.arc(Math.abs(mX+sX)/2,Math.abs(mY+sY)/2,Math.sqrt(Math.pow(mX-sX,2)+Math.pow(mY-sY,2))/2, 0, Math.PI*2);c.stroke();
        if(f==1){
            c.fill();}c.closePath();
    }

    if(item=="c"){
        c.beginPath();
        c.moveTo(sX,sY);
        c.lineTo(mX,mY);
        c.stroke();
        c.closePath();
    }

    if(item=='d'){
        c.moveTo(sX,sY);
        c.lineTo(mX,mY);
        c.stroke();
        sX=mX;
        sY=mY;}

    if(item=='e'){
        c.clearRect(mX-25,mY-25,10,10);
    }

    if(item=='f'){
        for (var i=0;i<20;i=i+6){
        c.fillRect(mX+i,mY+i,1,1);
        c.fillRect(mX-i,mY-i,1,1);
        c.fillRect(mX+i,mY-i,1,1);
        c.fillRect(mX-i,mY+i,1,1);
        c.fillRect(mX-i,mY,1,1);
        c.fillRect(mX,mY-i,1,1);
        c.fillRect(mX,mY+i,1,1);
        c.fillRect(mX+i,mY,1,1);
}
}}

/*fill paint can option*/
function fill(){
    f=1;
}

/*not filled or border only option*/
function strok(){
    f=0;
}

/*width from input form*/
function linewidth(){
    c.beginPath();
    var s=document.forms["f"]["pix"].value;
    c.lineWidth=s;
    c.closePath();
}



