
export const openSideNav = () => {
    document.getElementById('side-nav').className = 'side-nav side-nav-onclick side-nav-change'
    const newDiv = document.createElement("div");
    newDiv.className = 'background'
}

export const closeSideNav = () => {
    document.getElementById('side-nav').className = 'side-nav side-nav-change'
}