var a = document.getElementById("k1");
var b = document.getElementById("k2");
var c = document.getElementById("k3");
var d = document.getElementById("k4");
var e = document.getElementById("k5");
var f = document.getElementById("k6");
var g = document.getElementById("k7");
var h = document.getElementById("k8");
var i = document.getElementById("gaudio");
var j = document.getElementById("haudio");
var k = document.getElementById("music");
var l = document.getElementById("king");
var m = document.getElementById("");
var n = document.getElementById("");
var o = document.getElementById("");
var p = document.getElementById("");
var q = document.getElementById("");
var r = document.getElementById("");
var s = document.getElementById("");
var t = document.getElementById("");
var t = document.getElementById("");
var u = document.getElementById("");
var v = document.getElementById("");
var w = document.getElementById("");

function playSound() {
  i.play();
}
function playSound1() {
  j.play();
}

var image1array = ["images/quin1.png", "images/show1.png", "images/first.png"];

var imgnumber = 0;
var imgmax = 3;
function changeThis() {
  if (imgnumber == imgmax) {
    imgnumber = 0;
  }
  a.src = image1array[imgnumber];
  imgnumber++;
  UserWin();
}

var image2array = ["images/show2.png", "images/second.png", "images/quin2.png"];

var imgnumber1 = 0;
var imgmax1 = 3;
function changeThis1() {
  if (imgnumber1 == imgmax1) {
    imgnumber1 = 0;
  }
  b.src = image2array[imgnumber1];
  imgnumber1++;
  UserWin();
}

var image3array = ["images/quin3.png", "images/third.png", "images/show3.png"];

var imgnumber2 = 0;
var imgmax2 = 3;
function changeThis2() {
  if (imgnumber2 == imgmax2) {
    imgnumber2 = 0;
  }
  c.src = image3array[imgnumber2];
  imgnumber2++;
  UserWin();
}

var image4array = ["images/quin4.png", "images/show4.png", "images/fourth.png"];

var imgnumber3 = 0;
var imgmax3 = 3;
function changeThis3() {
  if (imgnumber3 == imgmax3) {
    imgnumber3 = 0;
  }
  d.src = image4array[imgnumber3];
  imgnumber3++;
  UserWin();
}

var image5array = ["images/quin5.png", "images/five.png", "images/show5.png"];

var imgnumber4 = 0;
var imgmax4 = 3;
function changeThis4() {
  if (imgnumber4 == imgmax4) {
    imgnumber4 = 0;
  }
  e.src = image5array[imgnumber4];
  imgnumber4++;
  UserWin();
}

var image6array = ["images/quin6.png", "images/show6.png", "images/six.png"];

var imgnumber5 = 0;
var imgmax5 = 3;
function changeThis5() {
  if (imgnumber5 == imgmax5) {
    imgnumber5 = 0;
  }
  f.src = image6array[imgnumber5];
  imgnumber5++;
  UserWin();
}

var image7array = ["images/quin7.png", "images/show7.png", "images/seven.png"];

var imgnumber6 = 0;
var imgmax6 = 3;
function changeThis6() {
  if (imgnumber6 == imgmax6) {
    imgnumber6 = 0;
  }
  g.src = image7array[imgnumber6];
  imgnumber6++;
  UserWin();
}

var image8array = ["images/quin8.png", "images/show8.png", "images/ate.png"];

var imgnumber7 = 0;
var imgmax7 = 3;
function changeThis7() {
  if (imgnumber7 == imgmax7) {
    imgnumber7 = 0;
  }
  h.src = image8array[imgnumber7];
  imgnumber7++;
  UserWin();
}

function UserWin() {
  if (
    a.getAttribute("src") == "images/first.png" &&
    b.getAttribute("src") == "images/second.png" &&
    c.getAttribute("src") == "images/third.png" &&
    d.getAttribute("src") == "images/fourth.png" &&
    e.getAttribute("src") == "images/five.png" &&
    f.getAttribute("src") == "images/six.png" &&
    g.getAttribute("src") == "images/seven.png" &&
    h.getAttribute("src") == "images/ate.png"
  )
    l.classList.remove("none");
}

const confetti = document.getElementById('confetti');
const confettiCtx = confetti.getContext('2d');
let container, confettiElements = [], clickPosition;

// helper
rand = (min, max) => Math.random() * (max - min) + min;

// params to play with
const confettiParams = {
    // number of confetti per "explosion"
    number: 70,
    // min and max size for each rectangle
    size: { x: [5, 20], y: [10, 18] },
    // power of explosion
    initSpeed: 25,
    // defines how fast particles go down after blast-off
    gravity: 0.65,
    // how wide is explosion
    drag: 0.08,
    // how slow particles are falling
    terminalVelocity: 6,
    // how fast particles are rotating around themselves
    flipSpeed: 0.017,
};
const colors = [
    { front : '#3B870A', back: '#235106' },
    { front : '#B96300', back: '#6f3b00' },
    { front : '#E23D34', back: '#88251f' },
    { front : '#CD3168', back: '#7b1d3e' },
    { front : '#664E8B', back: '#3d2f53' },
    { front : '#394F78', back: '#222f48' },
    { front : '#008A8A', back: '#005353' },
];

setupCanvas();
updateConfetti();

confetti.addEventListener('click', addConfetti);
window.addEventListener('resize', () => {
    setupCanvas();
    hideConfetti();
});

// Confetti constructor
function Conf() {
    this.randomModifier = rand(-1, 1);
    this.colorPair = colors[Math.floor(rand(0, colors.length))];
    this.dimensions = {
        x: rand(confettiParams.size.x[0], confettiParams.size.x[1]),
        y: rand(confettiParams.size.y[0], confettiParams.size.y[1]),
    };
    this.position = {
        x: clickPosition[0],
        y: clickPosition[1]
    };
    this.rotation = rand(0, 2 * Math.PI);
    this.scale = { x: 1, y: 1 };
    this.velocity = {
        x: rand(-confettiParams.initSpeed, confettiParams.initSpeed) * 0.4,
        y: rand(-confettiParams.initSpeed, confettiParams.initSpeed)
    };
    this.flipSpeed = rand(0.2, 1.5) * confettiParams.flipSpeed;

    if (this.position.y <= container.h) {
        this.velocity.y = -Math.abs(this.velocity.y);
    }

    this.terminalVelocity = rand(1, 1.5) * confettiParams.terminalVelocity;

    this.update = function () {
        this.velocity.x *= 0.98;
        this.position.x += this.velocity.x;

        this.velocity.y += (this.randomModifier * confettiParams.drag);
        this.velocity.y += confettiParams.gravity;
        this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
        this.position.y += this.velocity.y;

        this.scale.y = Math.cos((this.position.y + this.randomModifier) * this.flipSpeed);
        this.color = this.scale.y > 0 ? this.colorPair.front : this.colorPair.back;
    }
}

function updateConfetti () {
    confettiCtx.clearRect(0, 0, container.w, container.h);

    confettiElements.forEach((c) => {
        c.update();
        confettiCtx.translate(c.position.x, c.position.y);
        confettiCtx.rotate(c.rotation);
        const width = (c.dimensions.x * c.scale.x);
        const height = (c.dimensions.y * c.scale.y);
        confettiCtx.fillStyle = c.color;
        confettiCtx.fillRect(-0.5 * width, -0.5 * height, width, height);
        confettiCtx.setTransform(1, 0, 0, 1, 0, 0)
    });

    confettiElements.forEach((c, idx) => {
        if (c.position.y > container.h ||
            c.position.x < -0.5 * container.x ||
            c.position.x > 1.5 * container.x) {
            confettiElements.splice(idx, 1)
        }
    });
    window.requestAnimationFrame(updateConfetti);
}

function setupCanvas() {
    container = {
        w: confetti.clientWidth,
        h: confetti.clientHeight
    };
    confetti.width = container.w;
    confetti.height = container.h;
}

function addConfetti(e) {
    const canvasBox = confetti.getBoundingClientRect();
    if (e) {
        clickPosition = [
            e.clientX - canvasBox.left,
            e.clientY - canvasBox.top
        ];
    } else {
        clickPosition = [
            canvasBox.width * Math.random(),
            canvasBox.height * Math.random()
        ];
    }
    for (let i = 0; i < confettiParams.number; i++) {
        confettiElements.push(new Conf())
    }
}

function hideConfetti() {
    confettiElements = [];
    window.cancelAnimationFrame(updateConfetti)
}

confettiLoop();
function confettiLoop() {
    addConfetti();
    setTimeout(confettiLoop, 700 + Math.random() * 1700);
}