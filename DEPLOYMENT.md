# 🚀 Deployment Guide - Jaspinder Singh Portfolio

## Quick Deployment Options

### Option 1: Netlify (Recommended)

#### Method A: Drag & Drop
1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site is live! 🎉

#### Method B: Git Integration
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Vercel

#### Method A: CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

#### Method B: Git Integration
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

3. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Hosting (cPanel, etc.)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your web server's public directory (usually `public_html` or `www`)

3. Configure your server to serve `index.html` for all routes

## Environment Variables (if needed in future)

Create a `.env` file in the root directory:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=jaspinderkandiara@gmail.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Vercel
1. Go to Project settings → Domains
2. Add your domain
3. Configure DNS records as shown

## Performance Optimization

The build is already optimized, but you can:

1. **Enable Gzip/Brotli compression** on your server
2. **Set up CDN** (Netlify/Vercel do this automatically)
3. **Configure caching headers** for static assets

## SSL Certificate

- Netlify and Vercel provide free SSL automatically
- For traditional hosting, use Let's Encrypt or your hosting provider's SSL

## Monitoring & Analytics

Add Google Analytics or similar:

1. Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Build fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

### Routes not working (404 on refresh)
- Add `_redirects` file in `public` folder:
  ```
  /*    /index.html   200
  ```

### Slow load times
- Check image sizes and optimize
- Enable lazy loading for images
- Use CDN for assets

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify all external links open correctly
- [ ] Check SEO meta tags
- [ ] Test page load speed
- [ ] Verify WhatsApp and email links work

---

**Need help?** Contact: jaspinderkandiara@gmail.com
