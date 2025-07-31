# Banner Images for Hero Section

## How to Add Your Own Images

1. **Image Requirements:**
   - **Recommended size:** 1920x800 pixels (16:9 aspect ratio)
   - **Format:** JPG, PNG, or WebP
   - **File size:** Keep under 500KB for optimal loading

2. **File Naming:**
   - Name your images as: `banner1.jpg`, `banner2.jpg`, `banner3.jpg`, etc.
   - You can use up to 5 banner images (banner1.jpg through banner5.jpg)

3. **Supported Formats:**
   - `.jpg` / `.jpeg`
   - `.png`
   - `.webp`

4. **Image Suggestions:**
   - Medical professionals
   - Hospital facilities
   - Medical equipment
   - Healthcare teams
   - Hospital buildings
   - Medical procedures (appropriate for public viewing)

5. **Current Expected Files:**
   - `banner1.jpg` - Medical professionals in hospital
   - `banner2.jpg` - Modern medical equipment
   - `banner3.jpg` - Healthcare team working together
   - `banner4.jpg` - Hospital building exterior
   - `banner5.jpg` - Medical laboratory

## Notes:
- If an image file is missing, a placeholder will be shown
- Images will automatically resize to fit the hero section
- The carousel will work with any number of images (1-5)
- Images are served from the `/public/images/` folder 

## ** Hero Section Image Specifications**

### **Recommended Image Dimensions:**

#### **Desktop (Large Screens):**
- **Width**: 1920px - 2560px
- **Height**: 1080px - 1440px
- **Aspect Ratio**: 16:9 or 21:9 (widescreen)

#### **Mobile (Small Screens):**
- **Width**: 750px - 1080px
- **Height**: 1334px - 1920px
- **Aspect Ratio**: 9:16 or 3:4 (portrait)

### **Optimal Specifications for Your Current Setup:**

Based on your hero section that uses `h-[60vh]` on mobile, here are the **best dimensions**:

```
<code_block_to_apply_changes_from>
```

### **Image Format & Quality:**

#### **File Format:**
- **JPEG** for photographs (banner1.jpeg, banner2.jpeg)
- **WebP** for better compression (if supported)
- **PNG** for images with transparency

#### **File Size:**
- **Mobile**: 100KB - 300KB
- **Desktop**: 200KB - 500KB
- **Maximum**: 1MB per image

#### **Quality Settings:**
- **JPEG Quality**: 80-85%
- **Compression**: Optimized for web

### **Content Guidelines:**

#### **What to Include in Hero Images:**
- **Medical professionals** in action
- **Modern hospital equipment**
- **Clean, bright hospital environments**
- **Professional healthcare settings**

#### **What to Avoid:**
- **Text-heavy images** (text gets lost on mobile)
- **Complex backgrounds** (distracts from content)
- **Low contrast** images
- **Blurry or pixelated** images

### **Mobile-Specific Considerations:**

#### **Focal Point:**
- **Center the main subject** (doctor, equipment, etc.)
- **Avoid important elements** in the top/bottom 20% of the image
- **Ensure readability** when cropped to 60vh height

#### **Color & Contrast:**
- **High contrast** for better visibility
- **Bright, clean colors** that represent healthcare
- **Avoid dark images** that might look gloomy

### **Technical Implementation:**

Your current setup uses `object-cover` which is perfect:

```jsx
<img
  src={banner.image}
  alt={banner.alt}
  className="w-full h-full object-cover"
/>
```

This means:
- ✅ **Images scale properly** on all devices
- ✅ **Aspect ratio maintained** without distortion
- ✅ **Centers content** automatically
- ✅ **Crops intelligently** for different screen sizes

### **Recommended Image Sources:**

1. **Professional stock photos** (Shutterstock, iStock)
2. **Medical/hospital photography**
3. **High-quality healthcare images**
4. **Modern medical facility photos**

### **Testing Checklist:**

- [ ] **Mobile view** (60vh height) looks good
- [ ] **Tablet view** (70vh height) displays properly
- [ ] **Desktop view** (100vh height) fills screen
- [ ] **Loading speed** is acceptable
- [ ] **Image quality** is crisp on all devices

### **Quick Tips:**

1. **Use responsive images** if possible (different sizes for different devices)
2. **Optimize for mobile first** since that's where most users will see it
3. **Test on actual devices** to ensure proper display
4. **Keep file sizes small** for faster loading
5. **Use descriptive alt text** for accessibility

Your current setup with `object-cover` handles most of the responsive behavior automatically, so focus on getting high-quality images with the right dimensions and content! 