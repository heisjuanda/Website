export const myself = document.getElementById('myself');

const home = () => {
    const heisJuanda = document.getElementById('He-is-JD');

    window.addEventListener('load', () => {
        setTimeout(() => {
            heisJuanda.style.opacity = '1';
            myself.style.clipPath = 'inset(0% 0% 0% 0%)';
        }, 100);

        setTimeout(() => {
            myself.style.transition = '0s';
        }, 600);
    });
};

export default home;