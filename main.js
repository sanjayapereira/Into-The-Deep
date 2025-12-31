// Register GSAP ScrollTrigger plugin for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

// Conversion scale: 1 meter of ocean depth = 16 pixels of scroll
const scale = 16;

// Ocean data (creatures, zones, facts) is loaded from oceanData.js

const container = document.querySelector('.ocean-container');

oceanData.forEach(item => {
    // Create a new div element for each ocean data item
    const element = document.createElement('div');
    
    // Create zone marker
    if (item.type === 'zone') {
        element.className = 'zone-marker'; // Apply zone marker styles
        element.innerHTML = item.content; // Insert zone name text
        element.style.top = `${item.depth * scale}px`;
    } 
    
    //Create creature element with image and name label
    else if (item.type === 'creature') {
        element.className = 'creature'; // Apply creature styles
        
        // Position vertically based on depth in ocean
        element.style.top = `${item.depth * scale}px`;
        // Position horizontally using percentage (e.g., "25%" places it quarter way across)
        element.style.left = item.left;

        const scaleFactor = typeof item.scale === 'number' ? item.scale : 1;
        const descriptionText = item.content.description || '';

        if (item.content.image) {
            element.innerHTML = `
            <div class="creature-visual">
                <img
                    src="${item.content.image}" 
                    alt="${item.content.name}"
                    style="--creature-scale: ${scaleFactor};"
                >
                <div class="creature-name">${item.content.name}</div>
                ${descriptionText ? `<div class="creature-description">${descriptionText}</div>` : ''}
            </div>
        `;
        } 
        else {
            element.innerHTML = `
                <h3>${item.content.name}</h3>
                <p>${item.content.description}</p>
                <div class="creature-size">${item.content.size}</div>
            `;
        }
    }
    
    //Create ocean fact boxes
    else if (item.type === 'fact') {
        element.className = 'ocean-fact'; // Apply fact box styles
        element.innerHTML = item.content; // Insert fact text
        // Position at specific depth where fact is relevant
        element.style.top = `${item.depth * scale}px`;
    }

    // Add the newly created element to the ocean container
    // This makes it visible on the page at the calculated position
    container.appendChild(element);
});

/* ========================================
   DEPTH COMPARISON MARKERS
   ======================================== */
const comparisons = [
    { depth: 828, text: "Burj Khalifa height" },      // World's tallest building
    { depth: 1642, text: "CN Tower height" },          // Toronto's iconic tower
    { depth: 3800, text: "Average ocean depth" },      // Mean depth of all oceans
    { depth: 8848, text: "Mount Everest height" }      // Tallest mountain on Earth
];

// Loop through comparisons and create marker elements
comparisons.forEach(comp => {
    const compEl = document.createElement('div'); // Create new div
    compEl.className = 'depth-comparison'; // Apply comparison styles
    
    // Position at the depth matching the landmark's height
    compEl.style.top = `${comp.depth * scale}px`;
    
    // Display landmark name and depth in meters
    compEl.innerHTML = `${comp.text}<br>${comp.depth}m`;
    
    // Add to ocean container
    container.appendChild(compEl);
});

/* ========================================
   FLOATING PARTICLES EFFECT
   ======================================== */
function createParticles() {
    const particleContainer = document.getElementById('particles');

    for (let i = 0; i < 80; i++) {
        // Create individual particle div
        const particle = document.createElement('div');
        particle.className = 'particle'; // Apply particle styles and animation
        
        // Randomize horizontal starting position (0% to 100% across screen)
        particle.style.left = Math.random() * 100 + '%';
        
        // Generate random size between 1px and 6px
        // Smaller particles appear farther away, larger ones closer
        const size = Math.random() * 5 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        particleContainer.appendChild(particle);
    }
}

createParticles();

/* ========================================
   AUDIO INITIALIZATION
   ======================================== */
function initializeAudio() {
    // Check current position to determine which sound to play
    const surfaceHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const scrollTop = scrollY - surfaceHeight;
    const viewingSurface = scrollTop < 50;
    
    if (viewingSurface && surfaceSound) {
        surfaceSound.volume = 0.4;
        surfaceSound.play().then(() => {
            currentPlayingSound = 'surface';
            isDiving = false;
            audioInitialized = true;
        }).catch(err => {
            console.log('Audio autoplay prevented. Sound will start on user interaction.');
        });
    } else if (!viewingSurface && deepOceanSound) {
        deepOceanSound.volume = 0.3;
        deepOceanSound.play().then(() => {
            currentPlayingSound = 'deep';
            isDiving = true;
            audioInitialized = true;
        }).catch(err => {
            console.log('Audio autoplay prevented. Sound will start on user interaction.');
        });
    }
}

// Initialize audio when page is fully loaded
window.addEventListener('load', initializeAudio);

let audioInitialized = false;
function tryInitializeAudioOnInteraction() {
    if (!audioInitialized) {
        const surfaceHeight = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
        const scrollTop = scrollY - surfaceHeight;
        const viewingSurface = scrollTop < 50;
        
        if (viewingSurface) {
            if (surfaceSound) {
                surfaceSound.volume = 0.4;
                surfaceSound.play().then(() => {
                    currentPlayingSound = 'surface';
                    isDiving = false;
                    audioInitialized = true;
                }).catch(err => {
                    console.log('Surface sound initialization error:', err);
                });
            }
        } else {
            if (deepOceanSound) {
                deepOceanSound.volume = 0.3;
                deepOceanSound.play().then(() => {
                    currentPlayingSound = 'deep';
                    isDiving = true;
                    audioInitialized = true;
                }).catch(err => {
                    console.log('Deep ocean sound initialization error:', err);
                });
            }
        }
    }
}

// Try to initialize audio on various user interactions
window.addEventListener('click', tryInitializeAudioOnInteraction);
window.addEventListener('scroll', tryInitializeAudioOnInteraction);
window.addEventListener('touchstart', tryInitializeAudioOnInteraction);


let currentDepth = 0;
let currentPressure = 1;

/* ========================================
   AUDIO MANAGEMENT
   ======================================== */

const surfaceSound = document.getElementById('surface-sound');
const deepOceanSound = document.getElementById('deep-ocean-sound');

if (surfaceSound) {
    surfaceSound.volume = 0.4;
    surfaceSound.load();
}

if (deepOceanSound) {
    deepOceanSound.volume = 0.3;
    deepOceanSound.load();
}

let currentPlayingSound = null;
let isDiving = false; //


function updateIndicators() {
    // Get viewport height to offset the hero section
    const surfaceHeight = window.innerHeight;
    // Get current scroll position
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    // Calculate how far user has scrolled past the hero section
    const scrollTop = scrollY - surfaceHeight;
    const targetDepth = Math.max(0, Math.round(scrollTop / scale));
    const targetPressure = Math.round((targetDepth / 10 + 1) * 10) / 10;
    // Get DOM elements (check if they exist)
    const depthIndicator = document.querySelector('.depth-indicator');
    const pressureIndicator = document.querySelector('.pressure-indicator');
    if (!depthIndicator || !pressureIndicator) {
        return;
    }
    
    // ========================================
    // AUDIO MANAGEMENT BASED ON VIEWPORT
    // ========================================
    const viewingSurface = scrollTop < 50;
    
    if (surfaceSound && deepOceanSound) {
        if (viewingSurface) {
            if (currentPlayingSound !== 'surface') {
                if (!audioInitialized) {
                    audioInitialized = true;
                }
                if (currentPlayingSound === 'deep' && !deepOceanSound.paused) {
                    gsap.killTweensOf(deepOceanSound);
                    gsap.to(deepOceanSound, {
                        volume: 0,
                        duration: 1,
                        ease: "power2.out",
                        onComplete: () => {
                            deepOceanSound.pause();
                            deepOceanSound.currentTime = 0;
                            deepOceanSound.volume = 0.3; // Reset for next time
                        }
                    });
                }
                gsap.killTweensOf(surfaceSound);
                surfaceSound.volume = 0;
                surfaceSound.play().catch(err => {
                    console.log('Surface sound playback error:', err);
                    audioInitialized = false;
                    currentPlayingSound = null;
                });
                gsap.to(surfaceSound, {
                    volume: 0.4,
                    duration: 1,
                    ease: "power2.in"
                });
                
                currentPlayingSound = 'surface';
                isDiving = false;
            }
        } else {
            if (currentPlayingSound !== 'deep') {
                if (!audioInitialized) {
                    audioInitialized = true;
                }
                if (currentPlayingSound === 'surface' && !surfaceSound.paused) {
                    gsap.killTweensOf(surfaceSound);
                    gsap.to(surfaceSound, {
                        volume: 0,
                        duration: 1,
                        ease: "power2.out",
                        onComplete: () => {
                            surfaceSound.pause();
                            surfaceSound.currentTime = 0;
                            surfaceSound.volume = 0.4; // Reset for next time
                        }
                    });
                }
                gsap.killTweensOf(deepOceanSound);
                deepOceanSound.volume = 0;
                deepOceanSound.play().catch(err => {
                    console.log('Deep ocean sound playback error:', err);
                    audioInitialized = false;
                    currentPlayingSound = null;
                });
                gsap.to(deepOceanSound, {
                    volume: 0.3,
                    duration: 1,
                    ease: "power2.in"
                });
                currentPlayingSound = 'deep';
                isDiving = true;
            }
        }
    }
    //animate the depth number from current to target
    gsap.to({value: currentDepth}, {
        value: targetDepth,           // Target value to reach
        duration: 0.5,                // Animation duration in seconds
        ease: "power2.out",           // Easing function (starts fast, ends slow)
        onUpdate: function() {
            currentDepth = Math.round(this.targets()[0].value);
            if (depthIndicator) {
                depthIndicator.textContent = `${currentDepth.toLocaleString()} m`;
            }
        }
    });
    //animate the pressure number from current to target
    gsap.to({value: currentPressure}, {
        value: targetPressure,
        duration: 0.5,
        ease: "power2.out",
        onUpdate: function() {
            // Update stored current pressure
            currentPressure = Math.round(this.targets()[0].value * 10) / 10;
            
            // Update the DOM element text
            if (pressureIndicator) {
                pressureIndicator.textContent = `${currentPressure} atm`;
            }
        }
    });
}

/**
 * Throttle scroll event
 * Without throttling, updateIndicators would run hundreds of times per second
 * This limits it to ~60 times per second (60fps) which is smooth but efficient
 */
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            updateIndicators();
            scrollTimeout = null;
        }, 16); // 16ms = ~60 frames per second
    }
});

//call updateIndicators on initial page load to set initial values
window.addEventListener('load', () => {
    updateIndicators();
    // Also try to initialize audio after a short delay to ensure DOM is ready
    setTimeout(() => {
        if (!audioInitialized) {
            tryInitializeAudioOnInteraction();
        }
    }, 100);
});

// Call immediately if DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
        updateIndicators();
        if (!audioInitialized) {
            tryInitializeAudioOnInteraction();
        }
    }, 100);
}

/* ========================================
   GSAP ANIMATIONS - SPECIAL EFFECTS
   ======================================== */

ScrollTrigger.create({
    trigger: ".ocean-container",
    start: "top top",
    end: "bottom bottom",
    
    // Called continuously as user scrolls
    onUpdate: self => {
        const progress = self.progress;
        const particleContainer = document.querySelector('.floating-particles');
        const newOpacity = Math.max(0.1, 1 - progress * 0.8);
        gsap.to(particleContainer, {
            opacity: newOpacity,
            duration: 0.3,              // Short duration for responsive feel
            ease: "power1.out"
        });
    }
});


gsap.utils.toArray('.depth-comparison').forEach((comp, index) => {
    gsap.fromTo(comp, 
        {
            opacity: 0,
            x: 100,
            scale: 0.8
        }, 
        {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
    
            scrollTrigger: {
                trigger: comp,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        }
    );
});


//PARALLAX EFFECT - Intro text moves faster than normal scroll

gsap.to('.intro-text', {
    scrollTrigger: {
        trigger: ".ocean-container",
        start: "top top",             
        end: "top -200",                
        scrub: 1                      
    },
    y: 200,                            
    opacity: 0,                         
    ease: "power1.in"                 
});

//Fade out scroll hint as user starts scrolling

gsap.to('.scroll-hint', {
    scrollTrigger: {
        trigger: ".ocean-container",
        start: "top top",               
        end: "top -100",                
        scrub: 1                        
    },
    opacity: 0,                         
    y: -50,                           
    ease: "power1.in"
});

/* ========================================
   FOOTER INTERACTION
   ======================================== */

ScrollTrigger.create({
    trigger: ".ocean-footer",
    start: "top bottom",
    onEnter: () => {
        gsap.to('.scroll-hint', { 
            opacity: 0,              
            display: 'none',          
            duration: 0.3      
        });
        gsap.to('.depth-indicator', { 
            opacity: 0,               
            duration: 0.3 
        });
        gsap.to('.pressure-indicator', { 
            opacity: 0,              
            duration: 0.3 
        });
        gsap.to('.floating-particles', { 
            opacity: 0,               
            duration: 0.3 
        });
    },
    
    onLeaveBack: () => {
        gsap.to('.scroll-hint', { 
            opacity: 0.8,              
            display: 'block',           
            duration: 0.3 
        });
        gsap.to('.depth-indicator', { 
            opacity: 1,                
            duration: 0.3 
        });
        gsap.to('.pressure-indicator', { 
            opacity: 1,              
            duration: 0.3 
        });
        gsap.to('.floating-particles', { 
            opacity: 1,               
            duration: 0.3 
        });
    }
});