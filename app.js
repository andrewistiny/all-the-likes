window.onload = function(){
    var likeCount = localStorage.getItem('like');
    var loveCount = localStorage.getItem('love');
    var laughCount = localStorage.getItem('laugh');
    var likeImg = document.getElementById("like-img");
    var loveImg = document.getElementById("love-img");
    var laughImg = document.getElementById("laugh-img");
    var likeText = document.getElementById("like-count");
    var loveText = document.getElementById("love-count");
    var laughText = document.getElementById("laugh-count");
    var resetBtn = document.getElementById("clear");
    
    likeImg.addEventListener("click", function(){
        likeCount++;
        localStorage.setItem('like', likeCount);
        likeText.innerHTML = likeCount;
    })
    loveImg.addEventListener("click", function(){
        loveCount++;
        localStorage.setItem('love', likeCount);
        loveText.innerHTML = loveCount;
    })
    laughImg.addEventListener("click", function(){
        laughCount++;
        localStorage.setItem('laugh', likeCount);
        laughText.innerHTML = laughCount;
    })
    resetBtn.addEventListener("click", function(){
        laughCount=0;
        loveCount=0;
        likeCount=0;
        localStorage.clear();
        loveText.innerHTML = loveCount;
        laughText.innerHTML = laughCount;
        likeText.innerHTML = likeCount;
    })
 
}

