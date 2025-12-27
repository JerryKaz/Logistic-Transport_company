document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Logic ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg', 'py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('shadow-lg', 'py-2');
            header.classList.add('py-4');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // --- Mock Tracking System (The "Wow" Factor) ---
    const trackBtn = document.getElementById('track-btn');
    const trackInput = document.getElementById('tracking-input');
    const resultContainer = document.getElementById('tracking-result');

    trackBtn.addEventListener('click', () => {
        const trackingId = trackInput.value.trim();

        if (!trackingId) {
            alert("Please enter a valid tracking number.");
            return;
        }

        // 1. Change Button State to Loading
        const originalBtnContent = trackBtn.innerHTML;
        trackBtn.innerHTML = `<span class="loader mr-2"></span> SEARCHING...`;
        trackBtn.disabled = true;
        resultContainer.classList.add('hidden');

        // 2. Simulate API Delay (2 seconds)
        setTimeout(() => {
            // 3. Reset Button
            trackBtn.innerHTML = originalBtnContent;
            trackBtn.disabled = false;

            // 4. Generate Random "Mock" Data
            const locations = ["Dubai Hub", "Singapore Port", "London Heathrow", "New York JFK"];
            const randomLoc = locations[Math.floor(Math.random() * locations.length)];
            const date = new Date().toLocaleDateString();

            // 5. Inject HTML Result
            resultContainer.innerHTML = `
                <div class="result-card flex flex-col md:flex-row gap-4 text-white">
                    <div class="flex-1">
                        <p class="text-xs text-brand-gold uppercase font-bold tracking-widest mb-1">Status</p>
                        <div class="text-xl font-bold flex items-center gap-2">
                            <i class="fas fa-truck-moving text-green-400"></i> IN TRANSIT
                        </div>
                    </div>
                    <div class="flex-1">
                        <p class="text-xs text-brand-gold uppercase font-bold tracking-widest mb-1">Current Location</p>
                        <div class="text-lg font-semibold">${randomLoc}</div>
                    </div>
                    <div class="flex-1">
                        <p class="text-xs text-brand-gold uppercase font-bold tracking-widest mb-1">Est. Delivery</p>
                        <div class="text-lg font-semibold">${date}</div>
                    </div>
                </div>
                <div class="mt-4 pt-4 border-t border-white/20">
                    <div class="flex items-center justify-between text-sm text-gray-300">
                        <span>ID: ${trackingId.toUpperCase()}</span>
                        <a href="#" class="text-brand-gold hover:underline">View Full History</a>
                    </div>
                </div>
            `;

            // 6. Show Result
            resultContainer.classList.remove('hidden');
        }, 2000); // 2 second delay
    });
});
