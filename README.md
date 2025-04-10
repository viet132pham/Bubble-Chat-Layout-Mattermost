# 💬 BubbleChatLayout for Mattermost

> Transform your Mattermost into a modern chat interface with beautiful message bubbles

A Chrome extension that enhances Mattermost's chat interface by:
- Displaying your messages on the right side with modern bubble design
- Displaying other users' messages on the left side
- Adding elegant shadows and smooth animations
- Providing intuitive hover effects and transitions

## About

BubbleChatLayout for Mattermost brings a fresh, modern look to your Mattermost conversations. It transforms the traditional chat layout into a more engaging and visually appealing interface, similar to popular messaging apps.

## Installation

1. Download or clone this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" button
5. Select the folder containing this extension

## Theme Variables

The extension uses Mattermost theme variables for consistent styling. Here are the key variables used:

### For Your Messages (Right side)
- `--buttonBg`: Background color of your message bubbles
- `--buttonColor`: Text color of your messages

### For Other Users' Messages (Left side)
- `--mentionBg`: Background color of other users' message bubbles
- `--mentionColor`: Text color of other users' messages

### General Styling
- `--centerChannelColor`: Default text color for message content

## Customization

You can customize the appearance by modifying the theme variables in Mattermost:

1. Go to Mattermost Settings
2. Navigate to Display → Theme
3. Choose "Custom Theme"
4. Modify the following variables:
   ```json
   {
     "buttonBg": "#ec407a",        // Your message background
     "buttonColor": "#ffffff",      // Your message text
     "mentionBg": "#ffffff",       // Others' message background
     "mentionColor": "#ad1457",    // Others' message text
     "centerChannelColor": "#512da8" // General text color
   }
   ```

## Features

- 💬 Modern chat bubble design
- 🎨 Theme-aware styling
- 🌓 Compatible with both light and dark themes
- ✨ Smooth hover effects and transitions

## File Structure

```
├── manifest.json     # Extension configuration
├── content.js       # Main JavaScript logic
├── styles.css       # Custom styling
└── README.md        # Documentation
```

## Development

To modify the extension:

1. Edit `styles.css` to change the appearance
2. Edit `content.js` to modify behavior
3. Reload the extension in Chrome extensions page
4. Refresh your Mattermost tab

## Troubleshooting

If the styling doesn't appear:
1. Make sure the extension is enabled in Chrome
2. Refresh your Mattermost tab
3. Verify that Developer mode is enabled
4. Check Chrome's console for any errors

## Notes

- The extension requires permission to access Mattermost's domain
- It only modifies the visual appearance, not the functionality
- All changes are applied locally and don't affect other users

## Contributing

Feel free to submit issues and enhancement requests! 