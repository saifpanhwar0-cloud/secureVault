document.addEventListener('DOMContentLoaded', () => {
    // Select the theme toggle button
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check if user has a preference saved in localStorage, or check system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    }
    
    // Listen for clicks on the theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the dark-theme class on the body
        document.body.classList.toggle('dark-theme');
        
        // Determine if we are now in dark mode
        const isDarkMode = document.body.classList.contains('dark-theme');
        
        // Save preference and update icon
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateThemeIcon(isDarkMode);
    });
    
    // Function to update the icon based on theme
    function updateThemeIcon(isDark) {
        if (isDark) {
            // Sun icon for dark mode (to switch back to light)
            themeToggleBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            `;
        } else {
            // Moon icon for light mode (to switch to dark)
            themeToggleBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            `;
        }
    }
});
