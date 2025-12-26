// Main JavaScript for GlobalLogix Logistics Website

// DOM Elements
let headerElement, heroElement, statsElement, servicesElement, 
    globalMapElement, adminDashboardElement, footerElement, trackingModal;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    headerElement = document.getElementById('main-header');
    heroElement = document.getElementById('hero');
    statsElement = document.getElementById('stats');
    servicesElement = document.getElementById('services');
    globalMapElement = document.getElementById('global-map');
    adminDashboardElement = document.getElementById('admin-dashboard');
    footerElement = document.getElementById('main-footer');
    trackingModal = document.getElementById('tracking-modal');
    
    // Load all components
    loadHeader();
    loadHero();
    loadStats();
    loadServices();
    loadGlobalMap();
    loadAdminDashboard();
    loadFooter();
    
    // Initialize event listeners
    initEventListeners();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize stats counter
    initStatsCounter();
});

// Load Header Component
function loadHeader() {
    headerElement.innerHTML = `
        <nav class="bg-navy text-white py-4 px-6 transition-all duration-300">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center space-x-2">
                    <div class="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                        <i class="fas fa-shipping-fast text-white text-xl"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold">GlobalLogix</h1>
                        <p class="text-xs text-gray-300">Since 2012</p>
                    </div>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#" class="text-white hover:text-gold transition-colors font-medium">Home</a>
                    <a href="#tracking-section" class="text-white hover:text-gold transition-colors font-medium">Track</a>
                    <a href="#services" class="text-white hover:text-gold transition-colors font-medium">Services</a>
                    
                    <!-- Services Dropdown -->
                    <div class="relative group">
                        <button class="text-white hover:text-gold transition-colors font-medium flex items-center">
                            Services <i class="fas fa-chevron-down ml-1 text-sm"></i>
                        </button>
                        <div class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                            <a href="#services" class="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-gold">Air Freight</a>
                            <a href="#services" class="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-gold">Ocean Freight</a>
                            <a href="#services" class="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-gold">Road Freight</a>
                        </div>
                    </div>
                    
                    <a href="#admin-dashboard" class="text-white hover:text-gold transition-colors font-medium">Dashboard</a>
                    <a href="#contact" class="text-white hover:text-gold transition-colors font-medium">Contact</a>
                    
                    <!-- CTA Button -->
                    <button id="get-quote-btn" class="bg-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors ml-4">
                        Get a Quote
                    </button>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="md:hidden text-white text-2xl">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="md:hidden bg-navy mt-4 p-4 rounded-lg hidden">
                <div class="flex flex-col space-y-4">
                    <a href="#" class="text-white hover:text-gold transition-colors font-medium">Home</a>
                    <a href="#tracking-section" class="text-white hover:text-gold transition-colors font-medium">Track</a>
                    <a href="#services" class="text-white hover:text-gold transition-colors font-medium">Services</a>
                    <a href="#admin-dashboard" class="text-white hover:text-gold transition-colors font-medium">Dashboard</a>
                    <a href="#contact" class="text-white hover:text-gold transition-colors font-medium">Contact</a>
                    <button class="bg-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors mt-2">
                        Get a Quote
                    </button>
                </div>
            </div>
        </nav>
    `;
}

// Load Hero Section
function loadHero() {
    heroElement.innerHTML = `
        <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
            <!-- Background Video/Image -->
            <div class="absolute inset-0 z-0">
                <div class="hero-video"></div>
                <div class="absolute inset-0 hero-overlay"></div>
            </div>
            
            <!-- Hero Content -->
            <div class="container mx-auto px-6 z-10 relative">
                <div class="max-w-4xl mx-auto text-center text-white">
                    <div class="mb-8">
                        <span class="bg-gold text-white px-4 py-2 rounded-full text-sm font-semibold">EST. 2012</span>
                    </div>
                    
                    <h1 class="hero-title text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Global Logistics Solutions <span class="text-gold">Since 2012</span>
                    </h1>
                    
                    <p class="hero-subtitle text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
                        Secure, reliable, and efficient transportation solutions across 200+ countries. 
                        Trusted by Fortune 500 companies worldwide.
                    </p>
                    
                    <!-- Tracking Section -->
                    <div id="tracking-section" class="tracking-input-container p-8 mb-12">
                        <h2 class="text-2xl font-bold text-navy mb-6">Track Your Shipment</h2>
                        <div class="flex flex-col md:flex-row gap-4">
                            <div class="flex-grow">
                                <input 
                                    type="text" 
                                    id="tracking-number" 
                                    placeholder="Enter your tracking number (e.g., GLX-789456123)" 
                                    class="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-30"
                                >
                            </div>
                            <button id="track-btn" class="bg-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                                <i class="fas fa-search mr-2"></i> Track Shipment
                            </button>
                        </div>
                        <p class="text-gray-600 mt-4 text-sm">
                            <i class="fas fa-info-circle text-gold mr-1"></i>
                            Try: GLX-789456123, GLX-321654987, or GLX-456123789
                        </p>
                    </div>
                    
                    <!-- Trust Badges -->
                    <div class="flex flex-wrap justify-center gap-8 mt-12">
                        <div class="flex items-center">
                            <i class="fas fa-shield-alt text-gold text-2xl mr-3"></i>
                            <span class="font-medium">ISO 9001 Certified</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-award text-gold text-2xl mr-3"></i>
                            <span class="font-medium">Award Winning Service</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-globe-americas text-gold text-2xl mr-3"></i>
                            <span class="font-medium">Global Coverage</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div class="animate-bounce">
                    <i class="fas fa-chevron-down text-white text-2xl"></i>
                </div>
            </div>
        </div>
    `;
    
    // Add video background
    const videoContainer = heroElement.querySelector('.hero-video');
    videoContainer.innerHTML = `
        <video autoplay muted loop class="hero-video">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-cargo-container-ship-in-the-sea-42931-large.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
}

// Load Stats Section
function loadStats() {
    statsElement.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Stat 1 -->
                <div class="stat-card p-8 rounded-lg text-white reveal-on-scroll">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                            <i class="fas fa-calendar-alt text-gold text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold"><span class="count-up" data-target="12">0</span>+</h3>
                    </div>
                    <p class="text-xl font-semibold">Years of Excellence</p>
                    <p class="text-gray-300 mt-2">Providing world-class logistics since 2012</p>
                </div>
                
                <!-- Stat 2 -->
                <div class="stat-card p-8 rounded-lg text-white reveal-on-scroll">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                            <i class="fas fa-globe-americas text-gold text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold"><span class="count-up" data-target="200">0</span>+</h3>
                    </div>
                    <p class="text-xl font-semibold">Countries Covered</p>
                    <p class="text-gray-300 mt-2">Global network with local expertise</p>
                </div>
                
                <!-- Stat 3 -->
                <div class="stat-card p-8 rounded-lg text-white reveal-on-scroll">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                            <i class="fas fa-weight-hanging text-gold text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold"><span class="count-up" data-target="1.2">0</span>M+</h3>
                    </div>
                    <p class="text-xl font-semibold">Tons Shipped</p>
                    <p class="text-gray-300 mt-2">Reliable transport of goods worldwide</p>
                </div>
                
                <!-- Stat 4 -->
                <div class="stat-card p-8 rounded-lg text-white reveal-on-scroll">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                            <i class="fas fa-headset text-gold text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold">24/7</h3>
                    </div>
                    <p class="text-xl font-semibold">Global Support</p>
                    <p class="text-gray-300 mt-2">Always available for our clients</p>
                </div>
            </div>
        </div>
    `;
}

// Load Services Section
function loadServices() {
    servicesElement.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4 reveal-on-scroll">Our Logistics Services</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto reveal-on-scroll">
                    Comprehensive transportation solutions tailored to your business needs
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Air Freight -->
                <div class="service-card air-card p-8 reveal-on-scroll">
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                            <i class="fas fa-plane text-blue-600 text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900">Air Freight</h3>
                    </div>
                    <p class="text-gray-600 mb-6">
                        Fast and secure air transportation for time-sensitive shipments. 
                        Global express delivery with real-time tracking.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>International flights</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Express delivery</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Temperature controlled</span>
                        </li>
                    </ul>
                    <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                        Learn More
                    </button>
                </div>
                
                <!-- Ocean Freight -->
                <div class="service-card sea-card p-8 reveal-on-scroll">
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                            <i class="fas fa-ship text-indigo-600 text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900">Ocean Freight</h3>
                    </div>
                    <p class="text-gray-600 mb-6">
                        Cost-effective sea freight solutions with full container loads 
                        and global port logistics management.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Full container loads</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Global port logistics</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Bulk shipping</span>
                        </li>
                    </ul>
                    <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors w-full">
                        Learn More
                    </button>
                </div>
                
                <!-- Road Freight -->
                <div class="service-card road-card p-8 reveal-on-scroll">
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                            <i class="fas fa-truck text-gray-800 text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900">Road Freight</h3>
                    </div>
                    <p class="text-gray-600 mb-6">
                        Reliable domestic and cross-border trucking services with 
                        last-mile delivery solutions for complete supply chain coverage.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Domestic trucking</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Last-mile delivery</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Cross-border transport</span>
                        </li>
                    </ul>
                    <button class="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors w-full">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Load Global Map Section
function loadGlobalMap() {
    globalMapElement.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4 reveal-on-scroll">Global Network Coverage</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto reveal-on-scroll">
                    Our extensive logistics network spans across six continents with major hubs in key strategic locations
                </p>
            </div>
            
            <div class="map-container p-8 md:p-12 relative overflow-hidden reveal-on-scroll">
                <!-- Map Visualization -->
                <div class="relative h-96">
                    <!-- Simplified world map with routes -->
                    <svg class="w-full h-full" viewBox="0 0 800 400">
                        <!-- World map background -->
                        <rect width="800" height="400" fill="#1e3c72" />
                        
                        <!-- Continents (simplified) -->
                        <path d="M100,150 Q200,100 300,150 T500,100 L550,200 L450,250 L400,200 L300,250 L200,200 Z" fill="#2a5298" stroke="#4a90e2" stroke-width="2"/>
                        <path d="M600,100 L700,120 L750,200 L700,300 L600,280 L550,200 Z" fill="#2a5298" stroke="#4a90e2" stroke-width="2"/>
                        <path d="M200,300 L300,350 L400,320 L500,350 L550,280 L450,250 L350,280 L250,250 Z" fill="#2a5298" stroke="#4a90e2" stroke-width="2"/>
                        
                        <!-- Major Hubs -->
                        <g class="hub-locations">
                            <!-- New York -->
                            <circle cx="180" cy="130" r="8" fill="#FF8C00" class="pulse-gold">
                                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <text x="190" y="130" fill="white" font-size="12" font-weight="bold">NYC</text>
                            
                            <!-- London -->
                            <circle cx="350" cy="120" r="8" fill="#FF8C00" class="pulse-gold">
                                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                            </circle>
                            <text x="360" y="120" fill="white" font-size="12" font-weight="bold">LON</text>
                            
                            <!-- Dubai -->
                            <circle cx="450" cy="170" r="8" fill="#FF8C00" class="pulse-gold">
                                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1s" />
                            </circle>
                            <text x="460" y="170" fill="white" font-size="12" font-weight="bold">DXB</text>
                            
                            <!-- Singapore -->
                            <circle cx="550" cy="200" r="8" fill="#FF8C00" class="pulse-gold">
                                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1.5s" />
                            </circle>
                            <text x="560" y="200" fill="white" font-size="12" font-weight="bold">SIN</text>
                            
                            <!-- Sydney -->
                            <circle cx="650" cy="250" r="8" fill="#FF8C00" class="pulse-gold">
                                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="2s" />
                            </circle>
                            <text x="660" y="250" fill="white" font-size="12" font-weight="bold">SYD</text>
                        </g>
                        
                        <!-- Route Lines -->
                        <path class="route-line" d="M180,130 L350,120 L450,170 L550,200 L650,250" 
                              fill="none" stroke="#FF8C00" stroke-width="3" stroke-dasharray="10" />
                        
                        <!-- Animated Package -->
                        <circle id="moving-package" cx="180" cy="130" r="6" fill="#FFFFFF" stroke="#FF8C00" stroke-width="2">
                            <animateMotion dur="15s" repeatCount="indefinite">
                                <mpath xlink:href="#route-path" />
                            </animateMotion>
                        </circle>
                        <path id="route-path" d="M180,130 L350,120 L450,170 L550,200 L650,250" fill="none" stroke="none" />
                        
                        <!-- Legend -->
                        <rect x="20" y="20" width="200" height="120" fill="rgba(0,0,0,0.5)" rx="8" />
                        <text x="40" y="50" fill="white" font-size="14" font-weight="bold">Global Logistics Network</text>
                        <circle cx="40" cy="80" r="6" fill="#FF8C00" />
                        <text x="55" y="85" fill="white" font-size="12">Major Hubs</text>
                        <line x1="40" y1="100" x2="70" y2="100" stroke="#FF8C00" stroke-width="3" stroke-dasharray="5" />
                        <text x="80" y="105" fill="white" font-size="12">Primary Routes</text>
                        <circle cx="40" cy="120" r="4" fill="#FFFFFF" stroke="#FF8C00" stroke-width="2" />
                        <text x="55" y="125" fill="white" font-size="12">Live Shipments</text>
                    </svg>
                </div>
                
                <!-- Network Stats -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <div class="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-white">48</div>
                        <div class="text-gray-300">Major Hubs</div>
                    </div>
                    <div class="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-white">120+</div>
                        <div class="text-gray-300">Partner Ports</div>
                    </div>
                    <div class="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-white">3,500+</div>
                        <div class="text-gray-300">Fleet Vehicles</div>
                    </div>
                    <div class="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-white">15</div>
                        <div class="text-gray-300">Cargo Aircraft</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Load Admin Dashboard Section
function loadAdminDashboard() {
    adminDashboardElement.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4 reveal-on-scroll">Merchant Dashboard</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto reveal-on-scroll">
                    Real-time shipment monitoring and logistics management for our enterprise clients
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Left Column: Shipment Overview -->
                <div class="lg:col-span-2">
                    <div class="dashboard-card p-6 mb-8">
                        <div class="flex justify-between items-center mb-6">
                            <h3 class="text-2xl font-bold text-gray-900">Shipment Overview</h3>
                            <select class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gold">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>Last Quarter</option>
                            </select>
                        </div>
                        
                        <!-- Chart Placeholder -->
                        <div class="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mb-6">
                            <div class="text-center">
                                <div class="text-4xl font-bold text-gray-700 mb-2">1,247</div>
                                <div class="text-gray-600">Active Shipments</div>
                                <div class="mt-4 text-sm text-gray-500">
                                    <span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span> 
                                    <span class="mr-4">On Time: 92%</span>
                                    <span class="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-1"></span> 
                                    <span>Delayed: 5%</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Stats Bar -->
                        <div class="grid grid-cols-3 gap-4">
                            <div class="text-center p-4 bg-blue-50 rounded-lg">
                                <div class="text-2xl font-bold text-blue-700">342</div>
                                <div class="text-gray-600">Air Freight</div>
                            </div>
                            <div class="text-center p-4 bg-indigo-50 rounded-lg">
                                <div class="text-2xl font-bold text-indigo-700">658</div>
                                <div class="text-gray-600">Ocean Freight</div>
                            </div>
                            <div class="text-center p-4 bg-gray-100 rounded-lg">
                                <div class="text-2xl font-bold text-gray-700">247</div>
                                <div class="text-gray-600">Road Freight</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Recent Activity -->
                    <div class="dashboard-card p-6">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Recent Shipment Activity</h3>
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b border-gray-200">
                                        <th class="text-left py-3 text-gray-700 font-semibold">Tracking ID</th>
                                        <th class="text-left py-3 text-gray-700 font-semibold">Route</th>
                                        <th class="text-left py-3 text-gray-700 font-semibold">Status</th>
                                        <th class="text-left py-3 text-gray-700 font-semibold">Estimated Arrival</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-100 hover:bg-gray-50">
                                        <td class="py-3 font-medium">GLX-789456123</td>
                                        <td class="py-3">Shanghai → Los Angeles</td>
                                        <td class="py-3"><span class="shipment-status status-in-transit">In Transit</span></td>
                                        <td class="py-3">May 15, 2023</td>
                                    </tr>
                                    <tr class="border-b border-gray-100 hover:bg-gray-50">
                                        <td class="py-3 font-medium">GLX-321654987</td>
                                        <td class="py-3">Dubai → London</td>
                                        <td class="py-3"><span class="shipment-status status-delivered">Delivered</span></td>
                                        <td class="py-3">May 10, 2023</td>
                                    </tr>
                                    <tr class="border-b border-gray-100 hover:bg-gray-50">
                                        <td class="py-3 font-medium">GLX-456123789</td>
                                        <td class="py-3">New York → Singapore</td>
                                        <td class="py-3"><span class="shipment-status status-in-transit">In Transit</span></td>
                                        <td class="py-3">May 18, 2023</td>
                                    </tr>
                                    <tr class="border-b border-gray-100 hover:bg-gray-50">
                                        <td class="py-3 font-medium">GLX-987321654</td>
                                        <td class="py-3">Rotterdam → Sydney</td>
                                        <td class="py-3"><span class="shipment-status status-pending">Pending</span></td>
                                        <td class="py-3">May 22, 2023</td>
                                    </tr>
                                    <tr class="hover:bg-gray-50">
                                        <td class="py-3 font-medium">GLX-654987321</td>
                                        <td class="py-3">Tokyo → Frankfurt</td>
                                        <td class="py-3"><span class="shipment-status status-in-transit">In Transit</span></td>
                                        <td class="py-3">May 14, 2023</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <!-- Right Column: Quick Actions & Notifications -->
                <div>
                    <!-- Quick Actions -->
                    <div class="dashboard-card p-6 mb-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                        <div class="space-y-4">
                            <button class="w-full bg-gold text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center">
                                <i class="fas fa-plus-circle mr-2"></i> New Shipment
                            </button>
                            <button class="w-full border border-gold text-gold py-3 rounded-lg font-semibold hover:bg-gold hover:text-white transition-colors flex items-center justify-center">
                                <i class="fas fa-file-invoice mr-2"></i> Generate Report
                            </button>
                            <button class="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                                <i class="fas fa-calendar-alt mr-2"></i> Schedule Pickup
                            </button>
                        </div>
                    </div>
                    
                    <!-- Notifications -->
                    <div class="dashboard-card p-6">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">System Notifications</h3>
                        <div class="space-y-4">
                            <div class="flex items-start p-3 bg-blue-50 rounded-lg">
                                <i class="fas fa-info-circle text-blue-500 mt-1 mr-3"></i>
                                <div>
                                    <p class="font-medium">System Update Completed</p>
                                    <p class="text-sm text-gray-600">Tracking system upgraded to v3.2</p>
                                </div>
                            </div>
                            <div class="flex items-start p-3 bg-green-50 rounded-lg">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <div>
                                    <p class="font-medium">Port Clearance</p>
                                    <p class="text-sm text-gray-600">Shipment GLX-123 cleared customs in Rotterdam</p>
                                </div>
                            </div>
                            <div class="flex items-start p-3 bg-yellow-50 rounded-lg">
                                <i class="fas fa-exclamation-triangle text-yellow-500 mt-1 mr-3"></i>
                                <div>
                                    <p class="font-medium">Weather Alert</p>
                                    <p class="text-sm text-gray-600">Potential delays in North Atlantic routes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Performance Metrics -->
                    <div class="dashboard-card p-6 mt-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
                        <div class="space-y-6">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">On-Time Delivery</span>
                                    <span class="font-bold text-green-600">94.2%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 94.2%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Customer Satisfaction</span>
                                    <span class="font-bold text-blue-600">96.5%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: 96.5%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Cargo Safety</span>
                                    <span class="font-bold text-green-600">99.8%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-green-600 h-2 rounded-full" style="width: 99.8%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Load Footer
function loadFooter() {
    footerElement.innerHTML = `
        <div class="container mx-auto px-6 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Column 1: Company Bio -->
                <div class="footer-column">
                    <div class="flex items-center mb-6">
                        <div class="w-10 h-10 bg-gold rounded-lg flex items-center justify-center mr-3">
                            <i class="fas fa-shipping-fast text-white text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold">GlobalLogix</h3>
                            <div class="text-gray-400 text-sm">Since 2012</div>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6">
                        Providing world-class logistics solutions for over a decade. 
                        Trusted by Fortune 500 companies for secure, reliable, and 
                        efficient global transportation.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Column 2: Quick Links -->
                <div class="footer-column">
                    <h3 class="text-xl font-bold mb-6">Quick Links</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="footer-link text-gray-400">Home</a></li>
                        <li><a href="#services" class="footer-link text-gray-400">Services</a></li>
                        <li><a href="#admin-dashboard" class="footer-link text-gray-400">Dashboard</a></li>
                        <li><a href="#" class="footer-link text-gray-400">Blog</a></li>
                        <li><a href="#tracking-section" class="footer-link text-gray-400">Track Shipment</a></li>
                    </ul>
                </div>
                
                <!-- Column 3: Useful Links -->
                <div class="footer-column">
                    <h3 class="text-xl font-bold mb-6">Useful Links</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="footer-link text-gray-400">About Us</a></li>
                        <li><a href="#" class="footer-link text-gray-400">Contact</a></li>
                        <li><a href="#" class="footer-link text-gray-400">Privacy Policy</a></li>
                        <li><a href="#" class="footer-link text-gray-400">Terms & Conditions</a></li>
                        <li><a href="#" class="footer-link text-gray-400">FAQ</a></li>
                        <li><a href="#" class="footer-link text-gray-400">Careers</a></li>
                    </ul>
                </div>
                
                <!-- Column 4: Contact Info -->
                <div class="footer-column" id="contact">
                    <h3 class="text-xl font-bold mb-6">Contact Info</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt text-gold mt-1 mr-3"></i>
                            <span class="text-gray-400">
                                Global Logistics Center<br>
                                123 Commerce Street, Suite 500<br>
                                New York, NY 10001, USA
                            </span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone text-gold mr-3"></i>
                            <span class="text-gray-400">+1 (800) 555-1234</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-envelope text-gold mr-3"></i>
                            <span class="text-gray-400">info@globallogix.com</span>
                        </li>
                        <li class="flex items-start mt-6">
                            <i class="fas fa-clock text-gold mt-1 mr-3"></i>
                            <div>
                                <span class="text-gray-400 font-medium">Working Hours:</span>
                                <div class="text-gray-400 text-sm mt-1">
                                    <div>Mon-Fri: 08:00 - 22:00</div>
                                    <div>Sat: 09:00 - 18:00</div>
                                    <div>Sun: 10:00 - 16:00</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-gray-400 text-sm mb-4 md:mb-0">
                        &copy; 2012-2023 GlobalLogix Logistics. All rights reserved.
                    </div>
                    
                    <!-- Trust Badges -->
                    <div class="flex flex-wrap gap-6">
                        <div class="flex items-center">
                            <i class="fas fa-shield-alt text-gold mr-2"></i>
                            <span class="text-gray-400 text-sm">ISO 9001 Certified</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-lock text-gold mr-2"></i>
                            <span class="text-gray-400 text-sm">GDPR Compliant</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-heartbeat text-gold mr-2"></i>
                            <span class="text-gray-400 text-sm">Safety First</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize Event Listeners
function initEventListeners() {
    // Mobile menu toggle
    document.addEventListener('click', function(e) {
        if (e.target.closest('#mobile-menu-btn')) {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        }
    });
    
    // Get Quote button
    document.addEventListener('click', function(e) {
        if (e.target.closest('#get-quote-btn')) {
            alert('Thank you for your interest! Our sales team will contact you within 24 hours.');
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            headerElement.classList.add('header-scrolled');
        } else {
            headerElement.classList.remove('header-scrolled');
        }
    });
    
    // Service card buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.service-card button')) {
            const serviceName = e.target.closest('.service-card').querySelector('h3').textContent;
            alert(`More information about our ${serviceName} services will be displayed here.`);
        }
    });
}

// Initialize Scroll Animations
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealOnScroll = function() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();
}

// Initialize Stats Counter
function initStatsCounter() {
    const counters = document.querySelectorAll('.count-up');
    const speed = 200;
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), 10);
        } else {
            counter.innerText = target.toFixed(target % 1 === 0 ? 0 : 1);
        }
    };
    
    // Trigger counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}