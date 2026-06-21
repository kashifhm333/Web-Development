# Day 6 - HTML5 Video Embedding

## Overview
Learn to embed and control video content directly in HTML5 web pages. The `<video>` tag replaces the need for Flash.

## File: `index.html`

This file demonstrates the HTML5 `<video>` element with multiple video sources.

## Video Files
The project includes multiple video files:
- `1.mp4`, `2.mp4`, `3.mp4`, `4.mp4`, `5.mp4`

These are used as examples for embedding video content.

## Basic Video Tag Syntax
```html
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

## Video Tag Attributes

| Attribute | Purpose | Values |
|-----------|---------|--------|
| `width` | Video width in pixels | `320`, `640`, etc. |
| `height` | Video height in pixels | `240`, `480`, etc. |
| `controls` | Show player controls | Boolean |
| `autoplay` | Auto-play on page load | Boolean |
| `muted` | Mute audio by default | Boolean |
| `loop` | Repeat after ending | Boolean |
| `poster` | Image before playback | URL to image |

## Common Video Attributes
```html
<video width="640" height="480" 
       controls 
       autoplay 
       loop 
       muted
       poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support HTML5 video.
</video>
```

## Multiple Sources (Browser Compatibility)
```html
<video controls>
    <!-- Try MP4 first (most compatible) -->
    <source src="video.mp4" type="video/mp4">
    <!-- Fallback to WebM -->
    <source src="video.webm" type="video/webm">
    <!-- Fallback message -->
    Your browser doesn't support HTML5 video.
</video>
```

## Video Format Compatibility

| Format | MIME Type | Browser Support |
|--------|-----------|-----------------|
| MP4 | video/mp4 | Chrome, Firefox, Safari, Edge |
| WebM | video/webm | Chrome, Firefox, Opera |
| Ogg | video/ogg | Chrome, Firefox, Opera |

## JavaScript Video Control
```javascript
const video = document.querySelector('video');

// Play/Pause
video.play();
video.pause();

// Get/Set time
console.log(video.currentTime);
video.currentTime = 30; // Jump to 30 seconds

// Volume
video.volume = 0.5; // 50% volume

// Check if video is playing
if (!video.paused) {
    console.log("Video is playing");
}
```

## Learning Outcomes
✅ Embed video using HTML5 `<video>` tag
✅ Understand video formats and compatibility
✅ Add video controls and attributes
✅ Provide fallback messages
✅ Control video with JavaScript
✅ Optimize video for web delivery

## Video Optimization Tips
- Use MP4 as primary format (best support)
- Compress videos to reduce file size
- Use `<source>` with multiple formats for compatibility
- Add `poster` image for better UX
- Use `muted` + `autoplay` for background videos

## Best Practices
✅ Always provide multiple formats for cross-browser support
✅ Include fallback message for unsupported browsers
✅ Use `poster` attribute to show preview
✅ Optimize video file size
✅ Consider accessibility (captions, subtitles)

## Next Steps
→ Move to **Day 7** to learn about HTML entities and semantic markup

---

*HTML5 video eliminates the need for plugins - it's the modern way to embed media!* 🎬
