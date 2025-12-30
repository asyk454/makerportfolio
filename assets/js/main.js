// ============================================
// Main JavaScript - Navigation and Interactions
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Check if this link matches the current page
        if (currentPath.endsWith(linkPath) || 
            (currentPath.endsWith('/') && linkPath === 'index.html') ||
            (currentPath.endsWith('index.html') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
        // Special case for home page
        if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
            if (linkPath === 'index.html' || linkPath === '/') {
                link.classList.add('active');
            }
        }
        // Special case for resume page
        if (currentPath.includes('resume.html') && linkPath.includes('resume.html')) {
            link.classList.add('active');
        }
    });

    // Reveal only the initially visible elements marked for load animation
    const loadRevealItems = document.querySelectorAll('[data-load-reveal]');
    if (loadRevealItems.length) {
        window.requestAnimationFrame(() => {
            loadRevealItems.forEach(item => {
                item.classList.add('is-revealed');
            });
        });
    }

    // Theme follows system preference via CSS only
    
    // Mobile Dropdown Toggle
    const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
    const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');
    
    if (mobileDropdownToggle && mobileDropdownMenu) {
        mobileDropdownToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isExpanded = mobileDropdownToggle.getAttribute('aria-expanded') === 'true';
            mobileDropdownToggle.setAttribute('aria-expanded', !isExpanded);
            mobileDropdownMenu.classList.toggle('active');
        });
        
        // Close dropdown when clicking a link
        const dropdownLinks = mobileDropdownMenu.querySelectorAll('.nav-link');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileDropdownMenu.classList.remove('active');
                mobileDropdownToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileDropdownMenu.contains(event.target) && !mobileDropdownToggle.contains(event.target)) {
                mobileDropdownMenu.classList.remove('active');
                mobileDropdownToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Dynamic header offset based on screen size
                const isMobile = window.innerWidth < 768;
                const headerOffset = isMobile ? 60 : 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.site-header');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    function updateMobileMenuPosition() {
        if (mobileMenu && header) {
            const headerHeight = header.offsetHeight;
            mobileMenu.style.top = headerHeight + 'px';
            mobileMenu.style.maxHeight = `calc(100vh - ${headerHeight}px)`;
        }
    }
    
    if (header) {
        // Update mobile menu position on load and resize
        updateMobileMenuPosition();
        window.addEventListener('resize', updateMobileMenuPosition);
        
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // Lazy Loading Images (if not using native lazy loading)
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers without native lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Fix viewport height for mobile browsers
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
    
    // Prevent zoom on double tap (iOS Safari)
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Optimize images based on screen size
    function optimizeImagesForScreen() {
        const images = document.querySelectorAll('img[data-src]');
        const screenWidth = window.innerWidth;
        const pixelRatio = window.devicePixelRatio || 1;
        
        images.forEach(img => {
            const originalSrc = img.dataset.src;
            if (originalSrc && originalSrc.includes('via.placeholder.com')) {
                // Adjust placeholder size based on screen
                if (screenWidth < 480) {
                    // Small phone - smaller images
                    img.src = originalSrc.replace(/\d+x\d+/, '400x225');
                } else if (screenWidth < 768) {
                    // Large phone - medium images
                    img.src = originalSrc.replace(/\d+x\d+/, '600x338');
                } else if (screenWidth < 1024) {
                    // Tablet - larger images
                    img.src = originalSrc.replace(/\d+x\d+/, '800x450');
                }
                // Desktop and TV use original sizes
            }
        });
    }
    
    // Run on load and resize
    optimizeImagesForScreen();
    window.addEventListener('resize', debounce(optimizeImagesForScreen, 250));
    
    // Auto-scroll Projects Grid - Infinite Scroll
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        let scrollSpeed = 1.0; // pixels per frame (slower by 1/3 from original 1.5)
        let isPaused = false;
        let animationId = null;
        let recycleWidth = 0;
        
        // Set scroll behavior to auto for smooth animation
        projectsGrid.style.scrollBehavior = 'auto';
        
        const updateScrollLimits = () => {
            const firstCard = projectsGrid.querySelector('.project-card');
            const gridStyles = window.getComputedStyle(projectsGrid);
            const gap = parseFloat(gridStyles.columnGap || gridStyles.gap || 0);
            recycleWidth = firstCard ? firstCard.offsetWidth + gap : 0;
        };
        setTimeout(updateScrollLimits, 200);
        window.addEventListener('resize', debounce(updateScrollLimits, 150));
        
        function autoScroll() {
            if (isPaused) {
                animationId = requestAnimationFrame(autoScroll);
                return;
            }
            
            // Move forward
            projectsGrid.scrollLeft += scrollSpeed;
            
            // Seamless loop by recycling the first card to the end
            if (recycleWidth > 0 && projectsGrid.scrollLeft >= recycleWidth) {
                const firstCard = projectsGrid.querySelector('.project-card');
                if (firstCard) {
                    projectsGrid.appendChild(firstCard);
                    projectsGrid.scrollLeft -= recycleWidth;
                }
            }
            
            animationId = requestAnimationFrame(autoScroll);
        }
        
        // Pause on hover - stop scrolling when mouse enters
        projectsGrid.addEventListener('mouseenter', () => {
            isPaused = true;
        });
        
        // Resume scrolling when mouse leaves
        projectsGrid.addEventListener('mouseleave', () => {
            isPaused = false;
        });
        
        // Also pause on mouseover for additional reliability
        projectsGrid.addEventListener('mouseover', () => {
            isPaused = true;
        });
        
        // Start auto-scrolling immediately
        // Use a small delay to ensure layout is calculated
        setTimeout(() => {
            autoScroll();
        }, 200);
    }
});

// Debounce helper function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
