const timeH= document.querySelector('h1');
let timeSecond=5;

displaytime(timeSecond)

const countDown=setInterval(()=>{
	timeSecond--;
	displaytime(timeSecond);
	if(timeSecond <= 0||timeSecond < 1)
	{
		endtime();
		clearInterval(countDown);
	}
},1000)

function displaytime(second){
	const min=Math.floor(second/60);
	const sec=Math.floor(second%60);
	timeH.innerHTML=`${min<10?'0':''}${min}:${sec<10?'0':''}${sec}`
}
function endtime(){
	timeH.innerHTML='Well done!'
}
