import { Home, Collision } from "./view/index"
import { NavBar } from "./component/NavBar";
import { NavLink } from "./element/NavLink";

export const Route = ($app) => {
    const routes = [{
        path: '/',
        component: Home()
    }, {
        path: '/collision',
        component: Collision($app)
    }];

    const changeUrl = (requestUrl) => {
        const url = requestUrl || '/';
        history.pushState(null, null, url);
        const route = routes.find(route => route.path === url);

        // Clear the app container
        $app.innerHTML = '';

        // Add NavBar to the app container
        $app.innerHTML = NavBar().render();

        // Append the route component to the app container
        if (route && route.component) {
            const componentContent = route.component.render();
            if (typeof componentContent === 'string') {
                $app.innerHTML += componentContent;
            }
        } else {
            $app.innerHTML += '<div>404 Not Found</div>';
        }
    };

     // 커스텀 이벤트 'navigate' 리스너
     document.addEventListener('navigate', (event) => {
        changeUrl(event.detail.url);
    });


    return { routes, changeUrl }
}

