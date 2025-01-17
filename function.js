<script>
    // تغییر رنگ دکمه هنگام کلیک
    document.querySelectorAll('.cta-buttons a').forEach(button => {
        button.addEventListener('click', () => {
            button.style.backgroundColor = '#004aad'; // تغییر رنگ دکمه به آبی تیره
            setTimeout(() => {
                button.style.backgroundColor = '#2563eb'; // بازگشت به رنگ اصلی
            }, 300);
        });
    });

    // انیمیشن حرکت اشکال متحرک
    const movingShape = document.querySelector('.moving-shapes');
    let direction = 1;
    setInterval(() => {
        const currentTop = parseInt(getComputedStyle(movingShape).top);
        const currentLeft = parseInt(getComputedStyle(movingShape).left);
        movingShape.style.top = (currentTop + 5 * direction) + 'px';
        movingShape.style.left = (currentLeft + 5 * direction) + 'px';

        if (currentTop > window.innerHeight / 2 || currentTop < 50) {
            direction *= -1; // تغییر جهت حرکت
        }
    }, 100);
</script>
