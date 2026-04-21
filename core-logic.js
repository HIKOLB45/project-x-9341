/**
 * CANOPY_OS CORE LOGIC v5.0.8
 * Developed for High-Load Engineering Visualization
 */

console.log("%c SYSTEM CORE INITIALIZED ", "background: #00f2ff; color: #000; font-weight: bold;");

// Симуляція завантаження даних
const systemBoot = () => {
    const logs = [
        "Loading Geometry Kernel...",
        "Connecting to Materials Database...",
        "Calculating Static Loads...",
        "Initializing 3D Render Engine...",
        "Checking System Integrity...",
        "ACCESS GRANTED."
    ];

    logs.forEach((msg, index) => {
        setTimeout(() => {
            console.log(`%c[SYS] ${msg}`, "color: #00f2ff;");
        }, index * 400);
    });
};

// Функція розрахунку ваги металу (буде використана в calc.html)
function calculateSteelWeight(profile, length, quantity) {
    const weights = {
        "50x50x3": 4.42, // кг на метр
        "80x40x3": 5.33,
        "60x40x2": 2.93,
        "40x20x2": 1.76
    };
    return (weights[profile] * length * quantity).toFixed(2);
}

// Управління станом меню
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.textShadow = "0 0 10px #00f2ff";
    });
    item.addEventListener('mouseleave', () => {
        item.style.textShadow = "none";
    });
});

systemBoot();

// ТУТ БУДЕ ЩЕ БАГАТО СКРИПТІВ ДЛЯ ІНТЕРФЕЙСУ...
