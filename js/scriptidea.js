// Existing smooth scrolling and fade-in...

// Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 50; // Adjust speed

counters.forEach(counter => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + '+';
                }
            };
            updateCount();
            observer.unobserve(counter);
        }
    });
    observer.observe(counter);
});

// Scale-in for activity lists (trigger on scroll if needed)
const activityItems = document.querySelectorAll('.animate-scale-in');
const scaleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

activityItems.forEach(item => scaleObserver.observe(item));