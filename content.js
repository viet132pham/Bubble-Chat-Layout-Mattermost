// Function to identify current user's messages
function markCurrentUserMessages() {
    console.log('Script is running!'); // Debug log
    
    // Get all message elements
    const messages = document.querySelectorAll('.post');
    console.log('Found messages:', messages.length); // Debug log
    
    messages.forEach(message => {
        // Check if message has current--user class
        if (message.classList.contains('current--user')) {
            console.log('Found current user message'); // Debug log
            // No need to add class, just apply styles
            message.style.marginLeft = 'auto';
            message.style.marginRight = '0';
            message.style.maxWidth = '80%';
            message.style.backgroundColor = '#0078d4';
            message.style.color = 'white';
        }
    });
}

// Run immediately when script loads
console.log('Script loaded');
markCurrentUserMessages();

// Also run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    markCurrentUserMessages();
});

// Observe for new messages
const observer = new MutationObserver((mutations) => {
    let shouldCheck = false;
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            shouldCheck = true;
        }
    });
    if (shouldCheck) {
        console.log('New content detected');
        markCurrentUserMessages();
    }
});

// Start observing
const targetNode = document.body;
if (targetNode) {
    observer.observe(targetNode, {
        childList: true,
        subtree: true
    });
    console.log('Started observing DOM changes');
}

// Also observe for URL changes (when switching channels)
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        markCurrentUserMessages();
    }
}).observe(document, {subtree: true, childList: true}); 