// =============================================================================
// Utilities
// =============================================================================
// Add your utility functions in this file.

// Remove CSS outlines in an accessible manner
// Make sure you have an empty style tag that
// lives after your main style sheet
export function tabFocus(selector = '.accessTab') {
    const tabFocusElmt = document.querySelector(selector);
    window.addEventListener('mousedown', () => {
        tabFocusElmt.innerHTML = '';
    });

    window.addEventListener('keydown', e => {
        const isTabKey = e.keyCode === 9;
        if (isTabKey) {
            tabFocusElmt.innerHTML = `
                a:focus, input:focus, select:focus, textarea:focus, button:focus { outline: solid 3px #ffe830; }`;
        }
    });
}