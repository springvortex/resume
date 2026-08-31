document.addEventListener('DOMContentLoaded', function(){
    const tocbox = document.querySelector('.toc-box');
    const headers = document.querySelectorAll('.subject-name');

    headers.forEach((h) => {
        let tocItem = document.createElement("li");
        tocItem.id = "toc-id-" + h.textContent;

        let itemLink = document.createElement("a");
        itemLink.classList.add("content-link");
        itemLink.textContent = h.textContent;

        tocItem.append(itemLink);

        tocItem.addEventListener('click', function(){
            h.scrollIntoView({
                behavior: 'smooth'
            });
        });

        tocbox.append(tocItem);
    });

    const contents = document.querySelectorAll('.subject, .item');

    // Reveal content as it scrolls into view using IntersectionObserver
    if ('IntersectionObserver' in window) {
        const appearObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    appearObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px' });

        contents.forEach(function(c) {
            appearObserver.observe(c);
        });
    } else {
        // Fallback: reveal all immediately
        contents.forEach(function(c) {
            c.classList.add('appear');
        });
    }

    // Highlight active TOC item using IntersectionObserver on headers
    if ('IntersectionObserver' in window && tocbox.children.length > 0) {
        const tocItems = Array.from(tocbox.querySelectorAll('li'));
        const headerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                let tocLink = document.getElementById("toc-id-" + entry.target.textContent);
                if (!tocLink) return;
                if (entry.isIntersecting) {
                    tocItems.forEach(function(t) { t.classList.remove('active'); });
                    tocLink.classList.add('active');
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        headers.forEach(function(h) {
            headerObserver.observe(h);
        });
    }
});
