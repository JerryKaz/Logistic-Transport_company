// Tracking functionality for GlobalLogix Logistics Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tracking functionality
    initTracking();
});

function initTracking() {
    // Tracking button event listener
    document.addEventListener('click', function(e) {
        if (e.target.closest('#track-btn')) {
            trackShipment();
        }
    });
    
    // Enter key in tracking input
    const trackingInput = document.getElementById('tracking-number');
    if (trackingInput) {
        trackingInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                trackShipment();
            }
        });
    }
    
    // Predefined tracking numbers with status
    window.trackingDatabase = {
        'GLX-789456123': {
            id: 'GLX-789456123',
            status: 'In Transit',
            origin: 'Shanghai, China',
            destination: 'Los Angeles, USA',
            lastUpdate: '2023-05-12 14:30 UTC',
            currentLocation: 'Pacific Ocean - Near Hawaii',
            estimatedDelivery: '2023-05-15',
            carrier: 'Ocean Freight - MV Pacific Carrier',
            weight: '12,500 kg',
            dimensions: '40ft Container',
            history: [
                { date: '2023-05-10 08:00', location: 'Shanghai Port', status: 'Departed' },
                { date: '2023-05-11 12:30', location: 'East China Sea', status: 'In Transit' },
                { date: '2023-05-12 14:30', location: 'Pacific Ocean', status: 'In Transit' }
            ]
        },
        'GLX-321654987': {
            id: 'GLX-321654987',
            status: 'Delivered',
            origin: 'Dubai, UAE',
            destination: 'London, UK',
            lastUpdate: '2023-05-10 09:15 UTC',
            currentLocation: 'London Heathrow Airport',
            estimatedDelivery: '2023-05-10',
            deliveredAt: '2023-05-10 09:00 UTC',
            carrier: 'Air Freight - Flight EK202',
            weight: '850 kg',
            dimensions: '5 Pallets',
            history: [
                { date: '2023-05-09 18:00', location: 'Dubai International Airport', status: 'Departed' },
                { date: '2023-05-10 06:30', location: 'London Heathrow Airport', status: 'Arrived' },
                { date: '2023-05-10 08:45', location: 'London Customs', status: 'Cleared' },
                { date: '2023-05-10 09:00', location: 'London Distribution Center', status: 'Delivered' }
            ]
        },
        'GLX-456123789': {
            id: 'GLX-456123789',
            status: 'In Transit',
            origin: 'New York, USA',
            destination: 'Singapore',
            lastUpdate: '2023-05-13 11:20 UTC',
            currentLocation: 'Frankfurt Airport, Germany',
            estimatedDelivery: '2023-05-18',
            carrier: 'Air Freight - Flight LH456',
            weight: '1,200 kg',
            dimensions: '8 Pallets',
            history: [
                { date: '2023-05-12 22:00', location: 'JFK Airport, New York', status: 'Departed' },
                { date: '2023-05-13 11:20', location: 'Frankfurt Airport', status: 'Transfer' }
            ]
        },
        'GLX-987321654': {
            id: 'GLX-987321654',
            status: 'Pending',
            origin: 'Rotterdam, Netherlands',
            destination: 'Sydney, Australia',
            lastUpdate: '2023-05-11 16:45 UTC',
            currentLocation: 'Rotterdam Port',
            estimatedDelivery: '2023-05-22',
            carrier: 'Ocean Freight - MV Southern Cross',
            weight: '22,000 kg',
            dimensions: '2x 40ft Containers',
            history: [
                { date: '2023-05-10 10:00', location: 'Rotterdam Port', status: 'Processing' },
                { date: '2023-05-11 16:45', location: 'Rotterdam Port', status: 'Awaiting Departure' }
            ]
        }
    };
}

function trackShipment() {
    const trackingInput = document.getElementById('tracking-number');
    const trackingNumber = trackingInput.value.trim().toUpperCase();
    
    if (!trackingNumber) {
        showTrackingError('Please enter a tracking number');
        return;
    }
    
    // Show loading state
    showTrackingLoading();
    
    // Simulate API call delay
    setTimeout(() => {
        if (window.trackingDatabase && window.trackingDatabase[trackingNumber]) {
            showTrackingResult(window.trackingDatabase[trackingNumber]);
        } else {
            showTrackingError(`No shipment found with tracking number: ${trackingNumber}. Try GLX-789456123 or GLX-321654987`);
        }
    }, 1500);
}

function showTrackingLoading() {
    // Create or show modal
    let modal = document.getElementById('tracking-modal');
    
    modal.innerHTML = `
        <div class="modal-container bg-white rounded-xl p-8 mx-4">
            <div class="text-center">
                <div class="spinner mx-auto mb-6"></div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Tracking Shipment</h3>
                <p class="text-gray-600">Searching our global database...</p>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function showTrackingResult(shipment) {
    const modal = document.getElementById('tracking-modal');
    
    // Status badge color
    let statusColor = 'bg-blue-100 text-blue-800';
    let statusIcon = 'fa-shipping-fast';
    
    if (shipment.status === 'Delivered') {
        statusColor = 'bg-green-100 text-green-800';
        statusIcon = 'fa-check-circle';
    } else if (shipment.status === 'Pending') {
        statusColor = 'bg-yellow-100 text-yellow-800';
        statusIcon = 'fa-clock';
    }
    
    modal.innerHTML = `
        <div class="modal-container bg-white rounded-xl p-8 mx-4 max-w-2xl">
            <!-- Modal Header -->
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-bold text-gray-900">Shipment Tracking</h3>
                <button id="close-modal" class="text-gray-500 hover:text-gray-700 text-2xl">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <!-- Tracking Info -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <div class="text-sm text-gray-600 mb-1">Tracking Number</div>
                        <div class="text-2xl font-bold text-gray-900">${shipment.id}</div>
                    </div>
                    <div class="mt-4 md:mt-0">
                        <span class="inline-flex items-center px-4 py-2 rounded-full font-bold ${statusColor}">
                            <i class="fas ${statusIcon} mr-2"></i> ${shipment.status}
                        </span>
                    </div>
                </div>
                
                <!-- Route -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <div class="text-sm text-gray-600 mb-1">Origin</div>
                        <div class="font-medium">${shipment.origin}</div>
                    </div>
                    <div>
                        <div class="text-sm text-gray-600 mb-1">Destination</div>
                        <div class="font-medium">${shipment.destination}</div>
                    </div>
                </div>
                
                <!-- Current Status -->
                <div class="border-t border-gray-200 pt-6">
                    <div class="text-sm text-gray-600 mb-1">Current Location</div>
                    <div class="font-medium text-lg flex items-center">
                        <i class="fas fa-map-marker-alt text-gold mr-2"></i> ${shipment.currentLocation}
                    </div>
                    <div class="text-sm text-gray-600 mt-2">
                        Last updated: ${shipment.lastUpdate}
                    </div>
                </div>
            </div>
            
            <!-- Shipment Details -->
            <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="text-sm text-gray-600 mb-1">Carrier</div>
                    <div class="font-medium">${shipment.carrier}</div>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="text-sm text-gray-600 mb-1">Estimated Delivery</div>
                    <div class="font-medium">${shipment.estimatedDelivery}</div>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="text-sm text-gray-600 mb-1">Weight</div>
                    <div class="font-medium">${shipment.weight}</div>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="text-sm text-gray-600 mb-1">Dimensions</div>
                    <div class="font-medium">${shipment.dimensions}</div>
                </div>
            </div>
            
            <!-- Tracking History -->
            <h4 class="text-xl font-bold text-gray-900 mb-4">Tracking History</h4>
            <div class="space-y-4">
                ${shipment.history.map((event, index) => `
                    <div class="flex">
                        <div class="flex flex-col items-center mr-4">
                            <div class="w-8 h-8 rounded-full ${index === 0 ? 'bg-gold' : 'bg-gray-300'} flex items-center justify-center">
                                <i class="fas fa-${index === 0 ? 'circle' : 'check'} text-white text-xs"></i>
                            </div>
                            ${index < shipment.history.length - 1 ? '<div class="h-full w-0.5 bg-gray-300 mt-2"></div>' : ''}
                        </div>
                        <div class="flex-grow pb-6 ${index < shipment.history.length - 1 ? 'border-b border-gray-200' : ''}">
                            <div class="flex justify-between">
                                <div class="font-medium">${event.location}</div>
                                <div class="text-sm text-gray-600">${event.date}</div>
                            </div>
                            <div class="text-gray-600 mt-1">${event.status}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                <button class="flex-grow bg-gold text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                    <i class="fas fa-print mr-2"></i> Print Details
                </button>
                <button class="flex-grow border border-gold text-gold py-3 rounded-lg font-semibold hover:bg-gold hover:text-white transition-colors">
                    <i class="fas fa-share-alt mr-2"></i> Share Tracking
                </button>
                <button id="close-modal-btn" class="flex-grow border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Close
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners to close buttons
    modal.querySelectorAll('#close-modal, #close-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });
}

function showTrackingError(message) {
    // Create or show modal
    let modal = document.getElementById('tracking-modal');
    
    modal.innerHTML = `
        <div class="modal-container bg-white rounded-xl p-8 mx-4 max-w-md">
            <div class="text-center">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-exclamation-triangle text-red-500 text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Tracking Error</h3>
                <p class="text-gray-600 mb-6">${message}</p>
                
                <div class="text-left bg-gray-50 p-4 rounded-lg mb-6">
                    <p class="font-medium text-gray-900 mb-2">Try these sample tracking numbers:</p>
                    <ul class="text-gray-600 space-y-1">
                        <li><i class="fas fa-ship text-gold mr-2"></i> GLX-789456123 (Ocean Freight)</li>
                        <li><i class="fas fa-plane text-gold mr-2"></i> GLX-321654987 (Air Freight - Delivered)</li>
                        <li><i class="fas fa-plane text-gold mr-2"></i> GLX-456123789 (Air Freight - In Transit)</li>
                    </ul>
                </div>
                
                <button id="close-modal-btn" class="w-full bg-gold text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                    Try Again
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Add event listener to close button
    modal.querySelector('#close-modal-btn').addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });
}