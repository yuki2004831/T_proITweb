document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const hokkaidoLink = document.querySelector('.hokkaido_title');
    const taiLink = document.querySelector('.tai_title');

    const clearBackground = () => {
        body.classList.remove('destination-bg', 'bg-hokkaido', 'bg-tai');
    };

    const showBackground = (className) => {
        clearBackground();
        body.classList.add('destination-bg', className);
    };

    if (hokkaidoLink) {
        hokkaidoLink.addEventListener('mouseenter', () => showBackground('bg-hokkaido'));
        hokkaidoLink.addEventListener('focus', () => showBackground('bg-hokkaido'));
        hokkaidoLink.addEventListener('mouseleave', clearBackground);
        hokkaidoLink.addEventListener('blur', clearBackground);
    }

    if (taiLink) {
        taiLink.addEventListener('mouseenter', () => showBackground('bg-tai'));
        taiLink.addEventListener('focus', () => showBackground('bg-tai'));
        taiLink.addEventListener('mouseleave', clearBackground);
        taiLink.addEventListener('blur', clearBackground);
    }
});
