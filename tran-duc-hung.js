// Menu riêng của trang Trần Đức Hùng. Dữ liệu HTML không bị thay đổi khi bấm menu.
(() => {
    const menu = document.getElementById('menuToggle');
    const links = [...document.querySelectorAll('.side-link')];
    const narrow = window.matchMedia('(max-width: 680px)');

    function syncMenu() {
        document.body.classList.remove('mobile-sidebar-open', 'sidebar-collapsed');
        menu.setAttribute('aria-expanded', String(!narrow.matches));
    }

    menu.addEventListener('click', () => {
        if (narrow.matches) {
            const open = document.body.classList.toggle('mobile-sidebar-open');
            menu.setAttribute('aria-expanded', String(open));
        } else {
            const closed = document.body.classList.toggle('sidebar-collapsed');
            menu.setAttribute('aria-expanded', String(!closed));
        }
    });

    links.forEach(link => link.addEventListener('click', () => {
        links.forEach(other => {
            const selected = other === link;
            other.classList.toggle('active', selected);
            if (selected) other.setAttribute('aria-current', 'location');
            else other.removeAttribute('aria-current');
        });
        if (narrow.matches) {
            document.body.classList.remove('mobile-sidebar-open');
            menu.setAttribute('aria-expanded', 'false');
        }
    }));

    narrow.addEventListener('change', syncMenu);
    syncMenu();
})();
