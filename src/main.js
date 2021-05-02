let demo = document.querySelector('#demo')
let style = document.querySelector('#style')
let string = `
/**太高兴了！您居然看到我的这个灵动太极，哈哈哈！
我这个代码可是很有趣的哦，您可以在手机或电脑前观看。
不过在此之前我还是想做一下自我介绍。
我叫余佳宇，现在就读于广东科技学院，是一名大三的学生。
那么接下来我就给大家画一个太极图展现一下自己的前端功底吧！
首先我们先把代码放到左边去，看得清楚一些。**/
#demo {
  text-align: left;
}
/**哇，看起来很神奇！不过背景颜色有点单调，那就来点料吧！**/
body {
  color: #34495e;
  background-color: #ecf0f1;
}
/**嗯，不错！接下来我们就开始先用一个div来制作太极，并将我们的太极固定好
各位看官别急，请看我慢慢表演！
太极左升右降，左白右黑**/
#TaiJi {
  position: fixed;
  right: 0;
  width: 200px;
  height: 200px;
  border: 4px solid black;
  border-radius: 50%;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 46%, rgba(0,0,0,1) 55%);
}
/**是故易有太极，是生两仪!将阴阳各置于其中**/
#TaiJi::before {
  position: absolute;
  content: '';
  display: block;
  width: 100px;
  height: 96px;
  top: 0;
  background-color: black;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 17%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#TaiJi::after {
  position: absolute;
  content: '';
  display: block;
  width: 100px;
  height: 96px;
  background-color: white;
  border-radius: 50%;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
  rgba(0,0,0,1) 17%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
/**易有太极，是生两仪，两仪生四象，四象生八卦，八卦定吉凶，吉凶生大业!**/
`
let string2 = ''
let i = 0

// string = string.replace(/\n/g, '<br>')
// demo.innerHTML = string[i]; 
//以上两段代码不够优化 




var content = document.querySelector(".touch");

let n = 50
let step = () => {
  content.addEventListener("touchstart", function(e){
    e.preventDefault()
    n = 1
  })
  document.getElementById('speedUp').onclick = function(){
    n = 1
  }
  document.getElementById('speedLow').onclick = function(){
    n = 50
  }
  start = function(event){
    　　var touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
    　　startPos = {x:touch.pageX,y:touch.pageY,time:+new Date}; //取第一个touch的坐标值
    　　isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
    　　this.slider.addEventListener('touchmove',this,false);
    　　this.slider.addEventListener('touchend',this,false);
    },
  document.getElementById('speedLow').onclick = function(){
    n = 50
  }
  setTimeout(() => {
    if(string[i] === '\n'){    // \n为HTML代码换行 更换成浏览器输出<br> 
      string2 += '<br>'
    }else if(string[i] === ' '){
      string2 += '&nbsp' +'&nbsp'   //浏览器输出空格形式
    }else {
      string2 += string[i]
    }
    //渲染页面
     demo.innerHTML = string2;  
    style.innerHTML = string.substring(0, i);
    window.scrollTo(0, 99999); //PC端自动滚动
    demo.scrollTo(0, 99999);  //移动端自动滚动
     if(i < string.length - 1){
       //如果i不是最后一个，继续执行
    i++
    step()
  }
  }, n)
}


step();

