
import { Ball } from "../component/Ball";
export const Collision = ($app) => {
    const $canvas = document.createElement('canvas');
    const ctx = $canvas.getContext('2d');
    const init = () => {
        window.addEventListener('resize', resize, false);
        resize();
        window.requestAnimationFrame(animate);
    }

    // document.body.appendChild(this.canvas);

    let stageWidth = 0;
    let stageHeight = 0;

    const ball = new Ball(stageWidth, stageHeight, 60, 5)

    // const bounceBall = new BounceBall(stageWidth, stageHeight, 30, 5)

    
    const resize = () => {
        stageWidth = $app.clientWidth;
        stageHeight = $app.clientHeight;
        console.log('stageWidth, stageHeight', stageWidth, stageHeight);
        $canvas.width = stageWidth * 2;
        $canvas.height = stageHeight * 2;
        ctx.scale(2, 2);
    }
        
    const animate = (t) => {
        window.requestAnimationFrame(animate);

        ctx.clearRect(0, 0, stageWidth, stageHeight);
        ball.draw(ctx, stageWidth, stageHeight);
        // bounceBall.draw(ctx, stageWidth, stageHeight);
    }

    const render = () => {
        init();
        $app.appendChild($canvas);
        return  //`<div>collision</div>`
    }

    return {render}
}