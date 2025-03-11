document.addEventListener("DOMContentLoaded", function () {
    function animateCount(id, target) {
        let count = 0;
        let speed = Math.ceil(target / 100); // Adjust speed based on target value
        let interval = setInterval(() => {
            count += speed;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            document.getElementById(id).innerText = count + "+";
        }, 20); // Adjust timing for smooth animation
    }

    animateCount("clients", 2000);
    animateCount("projects", 1500);
    animateCount("awards", 500);
});
