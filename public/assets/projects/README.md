# Project Images

Add your project screenshots/images to this folder and update the image paths in the Projects.tsx file.

## Recommended Image Specifications:
- **Format**: JPG, PNG, or WebP
- **Size**: 800x600 pixels (4:3 aspect ratio)
- **Quality**: High resolution but optimized for web
- **File Size**: Keep under 500KB for better performance

## Current Project Image Files Needed:
1. `elderhelp-ai.jpg` - ElderHelp.ai project screenshot
2. `salon-booking.jpg` - Salon Booking Website screenshot  
3. `aria-chatbot.jpg` - Aria AI Chatbot interface screenshot
4. `invisible-cloak.jpg` - Harry Potter Invisible Cloak demo screenshot

## How to Update Image Paths:
1. Add your images to this folder
2. Open `src/components/Projects.tsx`
3. Update the `image` property for each project:
   ```typescript
   image: '/assets/projects/your-image-name.jpg'
   ```

## Example:
```typescript
{
  title: 'ElderHelp.ai',
  // ... other properties
  image: '/assets/projects/elderhelp-ai.jpg',
  imageAlt: 'ElderHelp.ai Dashboard Screenshot'
}
```

The images will appear as subtle background overlays behind your project cards, adding visual depth while maintaining text readability.