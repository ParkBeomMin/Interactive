
export const NavBar = () => {
    const navList = [{
        text: '홈',
        path: '/'
    }, {
        text: '충돌',
        path: '/collision'
    }]

    const render = () => {
        return `
            <nav class="sidebar">
                <ul>${navList.map((nav) => {
                    return `<li><nav-link href="${nav.path}">${nav.text}</nav-link></li>`
                }).join('')}</ul>
            </nav>
        `
    }

    return { render }
}