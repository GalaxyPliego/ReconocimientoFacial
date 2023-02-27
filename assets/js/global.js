const btnCloseMenu = document.getElementById('btnCloseMenu');
const btnOpenMenu = document.getElementById('btnOpenMenu');

document.getElementById('menu').style.display = 'none';

btnCloseMenu.addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
}
);

btnOpenMenu.addEventListener('click', () => {
    document.getElementById('menu').style.display = 'flex';
});