import { Ball } from "./src/component/Ball";
import { BounceBall } from "./src/BounceBall";
import { Route } from "./src/route";

const App = () => {
    const $app = document.querySelector('#app');
    const { changeUrl } = Route($app);

    const init = () => {
        changeUrl();
        window.addEventListener("popstate", () => {
            changeUrl(window.location.pathname);
        });
    }

    return { init }
}

// class App {
//     constructor() {
//         this.$app
//         const {route, chan} = Route()

//         this.canvas = document.createElement('canvas');
//         this.ctx = this.canvas.getContext('2d');

//         document.body.appendChild(this.canvas);

//         window.addEventListener('resize', this.resize.bind(this), false);
//         this.resize();

//         this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 5)

//         this.bounceBall = new BounceBall(this.stageWidth, this.stageHeight, 30, 5)

//         window.requestAnimationFrame(this.animate.bind(this));
//     }

//     resize() {
//         this.stageWidth = document.body.clientWidth;
//         this.stageHeight = document.body.clientHeight;

//         this.canvas.width = this.stageWidth * 2;
//         this.canvas.height = this.stageHeight * 2;
//         this.ctx.scale(2, 2);
//     }

//     animate(t) {
//         window.requestAnimationFrame(this.animate.bind(this));

//         this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
//         this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
//         this.bounceBall.draw(this.ctx, this.stageWidth, this.stageHeight);
//     }
// }

window.onload = () => {
    App().init();
}