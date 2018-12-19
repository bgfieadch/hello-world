function updateCurrentTime(callbacksettime) {
    var w = progress.clientWidth || progress.offsetWidth;
    var objTop = getOffsetTop(progress); //对象x位置
    var objLeft = getOffsetLeft(progress); //对象y位置
    var mouseX = event.clientX + document.body.scrollLeft; //鼠标x位置
    var mouseY = event.clientY + document.body.scrollTop; //鼠标y位置
    //计算点击的相对位置
    var objX = mouseX - objLeft;
    var objY = mouseY - objTop;
    clickObjPosition = objX + "," + objY;
    setCurrentTime(objX / w * audio.duration);
    progress_inner.style.width = objX + "px";
}

function setProgress(x) {
    var w = progress.clientWidth || progress.offsetWidth;
    progress_inner.style.width = x * w + "px";
    msg(x * w);
}

function getOffsetTop(obj) {
    var tmp = obj.offsetTop;
    var val = obj.offsetParent;
    while (val != null) {
        tmp += val.offsetTop;
        val = val.offsetParent;
    }
    return tmp;
}

function getOffsetLeft(obj) {
    var tmp = obj.offsetLeft;
    var val = obj.offsetParent;
    while (val != null) {
        tmp += val.offsetLeft;
        val = val.offsetParent;
    }
    return tmp;
}

function msg(m) {
    document.getElementById("msgbox").innerHTML = m;
}

function updateProgress() {
    var w = progress.clientWidth || progress.offsetWidth;
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var x = currentTime / duration
    setProgress(x);
}

function setCurrentTime(ctime) {
    audio.currentTime = ctime;
}

// <!--播放-->
function music_play () {
    if (audio.paused) {
        audio.play();
    }
}

// <!--暂停-->
function music_pause() {
    if (audio.played) {
        audio.pause();
    }
}

// <!--播放/暂停-->
function music_play_pause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// <!--单曲循环-->
function music_loop() {
    if (audio.loop) {
        audio.loop = false;
        this.innerHTML = "单曲不循环"
    } else {
        audio.loop = true;
        this.innerHTML = "单曲循环"
    }
}


// var music = new Array();
// music = ["李玉刚 - 刚好遇见你", "张杰 - 三生三世", "朴树 - 平凡之路"]; //歌单
// var num = 0;
// var name = document.getElementById("name");


// <!--上一首-->
function music_pre() {
    num = (num + 2) % 3;
    audio.src = "C:\Users\Admin\Desktop\F000001fvQfe3cKbO0.flac";
    name.innerHTML = music[num];
    audio.play();
}

// <!--下一首-->
function music_next() {
    num = (num + 1) % 3;
    audio.src =
        "https://m8.music.126.net/20181216180908/50039a65419b6dae9a3f7ab9785edbcf/ymusic/8384/e05a/0623/13b5449c1a50e2f591e91b5cb17f3736.mp3";
    name.innerHTML = music[num];
    audio.play();
}