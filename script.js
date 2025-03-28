let tg = window.Telegram.WebApp;
tg.expand();

const services = [
    { id: 1, title: "Нумерология", desc: "Расчет числа судьбы", img: "icon1.png" },
    { id: 2, title: "Астрология", desc: "Прогноз на месяц", img: "icon2.png" },
    { id: 3, title: "Таро", desc: "Расклад на отношения", img: "icon3.png" },
    { id: 4, title: "Гадание на кофейной гуще", desc: "Ответ на один вопрос", img: "icon4.png" },
    { id: 5, title: "Human Design", desc: "Разбор профиля", img: "icon5.png" }
];

function renderServices() {
    let grid = document.getElementById("mainGrid");
    grid.innerHTML = "";
    services.forEach(service => {
        let item = document.createElement("div");
        item.className = "item";
        item.innerHTML = <img src="${service.img}" alt="${service.title}"><p>${service.title}</p>;
        item.onclick = () => openPage(service.id);
        grid.appendChild(item);
    });
}
renderServices();

function openPage(id) {
    let service = services.find(s => s.id === id);
    document.getElementById("contentTitle").innerText = service.title;
    document.getElementById("contentText").innerText = service.desc;
    document.getElementById("content").classList.add("show");
    document.getElementById("mainGrid").style.display = "none";
}

function goBack() {
    document.getElementById("content").classList.remove("show");
    setTimeout(() => {
        document.getElementById("mainGrid").style.display = "grid";
    }, 300);
}

// Обработчик кнопки "Назад"
document.getElementById("backButton").addEventListener("click", goBack);

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let orderData = {
        user_id: tg.initDataUnsafe?.user?.id || "unknown",
        name: document.getElementById("name").value,
        birthdate: document.getElementById("birthdate").value,
        extraInfo: document.getElementById("extraInfo").value,
        service: document.getElementById("contentTitle").innerText
    };

    fetch("https://your-backend.com/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Заявка отправлена!");
        tg.close();
    });
});
