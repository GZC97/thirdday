// 把注释的加到html中的script
// let lis=document.querySelectorAll("li");
//
// let son=document.querySelectorAll(".son");
// xuanxiang(lis,son);


function xuanxiang(lis, son) {
    for (let i = 0; i < lis.length; i++) {
        // 当鼠标移入每个li时的操作
        lis[i].onmouseover = function () {
            // 其余子元素消失
            for (let j = 0; j < son.length; j++) {
                son[j].style.display = "none";
            }
            son[i].style.display = "block";
        }
        lis[i].onmouseleave = function () {
            son[i].style.display = "none";
        }
    }
}







let button=document.querySelectorAll("button");
let milist=document.querySelectorAll(".milist");
let w=parseInt(getComputedStyle(milist,null).width)/3;
let times=0;
button[0].onclick=function () {
    times++;
    if (times>2){
        times==2;
    }
    milist.style.transform=`translate(${(-w*times)}px)`;
}
button[1].onclick=function () {
    times--;
    if (times<0){
        times==0;
    }
    milist.style.transform=`translate(${(-w*times)}px)`;
}