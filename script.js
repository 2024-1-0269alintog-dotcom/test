const categories = [
    {
        id: "slide1",
        title: "Landscapes",
        desc: "Explore breathtaking wide-angle vistas, majestic mountain ranges, and nature untouched by time. Captured globally.",
        themeClass: "from-emerald-950 via-neutral-950 to-neutral-950",
        btnClass: "bg-emerald-600 hover:bg-emerald-700",
        images: [
            { src: "./Images/lake.jpg", alt: "Landscape Main", class: "w-48 h-64 md:w-56 md:h-76 border-4 border-white rounded-2xl shadow-2xl" },
            { src: "./Images/long hair girl.jpg", alt: "Landscape Sub", class: "w-40 h-56 md:w-48 md:h-68 rounded-2xl opacity-60 self-end mb-4" }
        ]
    },
    {
        id: "slide2",
        title: "Portraits",
        desc: "Capturing the essence of human emotion. Lorem ipsum dolor sit amet consectetur.",
        themeClass: "from-red-950 via-neutral-950 to-neutral-950",
        btnClass: "bg-red-600 hover:bg-red-700",
        images: [
            { src: "./Images/ponytail.jpg", alt: "Portrait Main", class: "w-48 h-64 md:w-56 md:h-76 border-4 border-white rounded-2xl shadow-2xl" },
            { src: "./Images/stadium.jpg", alt: "Portrait Sub", class: "w-40 h-56 md:w-48 md:h-68 rounded-2xl opacity-60 self-end mb-4" }
        ]
    },
    {
        id: "slide3",
        title: "Abstracts",
        desc: "Visualizing the unseen through color. Lorem ipsum dolor sit amet consectetur.",
        themeClass: "from-blue-950 via-neutral-950 to-neutral-950",
        btnClass: "bg-blue-600 hover:bg-blue-700",
        images: [
            { src: "./Images/smoke.jpg", alt: "Abstract Main", class: "w-48 h-64 md:w-56 md:h-76 border-4 border-white rounded-2xl shadow-2xl" },
            { src: "./Images/fields.jpg", alt: "Abstract Sub", class: "w-40 h-56 md:w-48 md:h-68 rounded-2xl opacity-60 self-end mb-4" }
        ]
    },
    {
        id: "slide4",
        title: "Sports",
        desc: "Power, speed, and the spirit of competition. Lorem ipsum dolor sit amet consectetur.",
        themeClass: "from-cyan-950 via-neutral-950 to-neutral-950",
        btnClass: "bg-cyan-600 hover:bg-cyan-700",
        images: [
            { src: "./Images/Sports.webp", alt: "Sports Main", class: "w-48 h-64 md:w-56 md:h-76 border-4 border-white rounded-2xl shadow-2xl" },
            { src: "./Images/forest.jpg", alt: "Sports Sub", class: "w-40 h-56 md:w-48 md:h-68 rounded-2xl opacity-60 self-end mb-4" }
        ]
    },
    {
        id: "slide5",
        title: "Landscapes",
        desc: "A return to the wilderness and horizons. Lorem ipsum dolor sit amet consectetur.",
        themeClass: "from-green-950 via-neutral-950 to-neutral-950",
        btnClass: "bg-green-600 hover:bg-green-700",
        images: [
            { src: "./Images/mountain.jpg", alt: "Landscape 2 Main", class: "w-48 h-64 md:w-56 md:h-76 border-4 border-white rounded-2xl shadow-2xl" },
            { src: "./Images/long hair girl (2).jpg", alt: "Landscape 2 Sub", class: "w-40 h-56 md:w-48 md:h-68 rounded-2xl opacity-60 self-end mb-4" }
        ]
    }
];

let currentSlideIndex = 0;

function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const target = document.getElementById(`view-${viewId}`);
    if(target) {
        target.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.textContent.toLowerCase() === viewId) {
            link.classList.add('text-white');
            link.classList.remove('text-neutral-400');
        } else {
            link.classList.remove('text-white');
            link.classList.add('text-neutral-400');
        }
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSlider() {
    const currentData = categories[currentSlideIndex];
    
    document.getElementById('hero-title').innerText = currentData.title;
    document.getElementById('hero-desc').innerText = currentData.desc;
    
    const bgContainer = document.getElementById('hero-bg');
    bgContainer.className = `relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 transition-all duration-700 bg-gradient-to-r ${currentData.themeClass}`;
    
    document.getElementById('hero-btn').className = `${currentData.btnClass} text-white px-6 py-3 rounded-md font-semibold text-sm transition shadow-lg`;

    const gallery = document.getElementById('gallery-container');
    gallery.innerHTML = ''; 
    
    currentData.images.forEach(imgObj => {
        const imgHtml = `
            <div class="flex-shrink-0 ${imgObj.class} overflow-hidden">
                <img src="${imgObj.src}" class="w-full h-full object-cover" alt="${imgObj.alt}" onerror="this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'"/>
            </div>
        `;
        gallery.insertAdjacentHTML('beforeend', imgHtml);
    });

    const dotsContainer = document.getElementById('slide-dots');
    dotsContainer.innerHTML = '';
    categories.forEach((_, idx) => {
        const activeIndicator = idx === currentSlideIndex ? 'bg-white w-6' : 'bg-white/30 w-2';
        const dotHtml = `<button onclick="goToSlide(${idx})" class="h-2 rounded-full transition-all duration-300 ${activeIndicator}"></button>`;
        dotsContainer.insertAdjacentHTML('beforeend', dotHtml);
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % categories.length;
    renderSlider();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + categories.length) % categories.length;
    renderSlider();
}

function goToSlide(index) {
    currentSlideIndex = index;
    renderSlider();
}

document.addEventListener('DOMContentLoaded', () => {
    renderSlider();
});