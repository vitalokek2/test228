// Функция для обновления времени (оставляем на случай, если понадобится в будущем)
function updateTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Обновляем время каждую секунду
setInterval(updateTime, 1000);

// Загрузка расписания (для первой страницы)
document.addEventListener('DOMContentLoaded', () => {
    const scheduleList = document.getElementById('schedule-list');
    if (scheduleList) {
        fetch('https://vitalokek2.github.io/test228/расписание_work.txt')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                lines.forEach(line => {
                    const li = document.createElement('li');
                    li.textContent = line;
                    scheduleList.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Ошибка загрузки расписания:', error);
                scheduleList.innerHTML = '<li>Не удалось загрузить расписание.</li>';
            });
    }

    // Инициализация времени при загрузке страницы
    updateTime();
});