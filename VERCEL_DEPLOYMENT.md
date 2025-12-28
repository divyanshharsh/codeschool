# Deploying CodeSchool to Vercel

This guide will help you deploy your CodeSchool frontend to Vercel and set up the backend.

## 🚀 Quick Deployment Steps

### Prerequisites
1. GitHub repository is set up and pushed
2. Vercel account (sign up at [vercel.com](https://vercel.com) - free tier available)
3. Node.js installed locally (for testing)

---

## Part 1: Deploy Frontend to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `divyanshharsh/codeschool`
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend` (IMPORTANT!)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment Variables** (if needed later)
   - Add any frontend environment variables here
   - Example: `VITE_API_URL=https://your-backend-url.com`

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at: `https://codeschool-xxxxx.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```powershell
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```powershell
   vercel login
   ```

3. **Navigate to Frontend Directory**
   ```powershell
   cd frontend
   ```

4. **Deploy**
   ```powershell
   vercel
   ```
   - Follow the prompts
   - Select your project
   - Deploy to production

---

## Part 2: Configure Vercel for Monorepo

Since your project has a `frontend` folder, you need to configure Vercel properly.

### Create `vercel.json` in Root Directory

```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "frontend/dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "frontend/dist/$1"
    }
  ]
}
```

### Or Configure in Vercel Dashboard

In your Vercel project settings:
- **Root Directory:** `frontend`
- **Build Command:** `cd frontend && npm install && npm run build`
- **Output Directory:** `frontend/dist`

---

## Part 3: Backend Deployment Options

Vercel is great for frontend, but for your Express backend, you have several options:

### Option 1: Deploy Backend to Vercel (Serverless Functions)

Convert your Express app to Vercel serverless functions.

1. **Create `api` folder in root:**
   ```
   api/
     index.ts
   ```

2. **Convert Express routes to serverless functions**

3. **Update `vercel.json`:**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "frontend/package.json",
         "use": "@vercel/static-build",
         "config": {
           "distDir": "frontend/dist"
         }
       },
       {
         "src": "api/index.ts",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "api/index.ts"
       },
       {
         "src": "/(.*)",
         "dest": "frontend/dist/$1"
       }
     ]
   }
   ```

### Option 2: Deploy Backend Separately (Recommended)

Deploy backend to a service that supports Node.js:

#### A. Railway (Easiest)
1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Select your repo
5. Set root directory to `backend`
6. Add environment variables
7. Deploy!

#### B. Render
1. Go to [render.com](https://render.com)
2. Sign in with GitHub
3. "New" → "Web Service"
4. Connect your repo
5. Settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
6. Add environment variables
7. Deploy!

#### C. Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create codeschool-api`
4. Set buildpack: `heroku buildpacks:set heroku/nodejs`
5. Deploy: `git push heroku main`

---

## Part 4: Update Frontend API URLs

After deploying backend, update frontend to use the backend URL.

### Create `frontend/.env.production`:

```env
VITE_API_URL=https://your-backend-url.railway.app
# or
VITE_API_URL=https://your-backend-url.onrender.com
```

### Update `frontend/vite.config.ts`:

The proxy is already configured for development. For production, update API calls to use `import.meta.env.VITE_API_URL`.

---

## Part 5: Environment Variables Setup

### Frontend (Vercel Dashboard)

1. Go to your Vercel project
2. Settings → Environment Variables
3. Add:
   - `VITE_API_URL` = Your backend URL
   - Any other frontend env vars

### Backend (Railway/Render)

Add these in your backend hosting platform:
- `PORT` = 5000 (or auto-assigned)
- `NODE_ENV` = production
- `DATABASE_URL` = Your database connection string
- `JWT_SECRET` = Your secret key
- `CORS_ORIGIN` = Your Vercel frontend URL

---

## Part 6: Custom Domain (Optional)

1. In Vercel project → Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. SSL is automatic!

---

## Quick Deployment Checklist

- [ ] GitHub repository is public/accessible
- [ ] Vercel account created
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway/Render
- [ ] Environment variables configured
- [ ] API URLs updated in frontend
- [ ] Test the deployed application
- [ ] Custom domain configured (optional)

---

## Troubleshooting

### Issue: Build fails on Vercel
**Solution:** 
- Check build logs in Vercel dashboard
- Ensure `frontend/package.json` has correct build script
- Verify all dependencies are in `package.json`

### Issue: API calls fail
**Solution:**
- Check CORS settings in backend
- Verify `VITE_API_URL` is set correctly
- Check backend is running and accessible

### Issue: 404 errors on routes
**Solution:**
- Add `vercel.json` with proper routing
- Or configure rewrites in Vercel dashboard

### Issue: Environment variables not working
**Solution:**
- Restart deployment after adding env vars
- Use `VITE_` prefix for Vite env vars
- Check variable names match exactly

---

## Recommended Setup

**Frontend:** Vercel (Free tier)
- Automatic deployments from GitHub
- Global CDN
- SSL certificates
- Preview deployments

**Backend:** Railway (Free tier with $5 credit)
- Easy deployment
- PostgreSQL included
- Automatic deployments
- Or Render (Free tier with limitations)

**Database:** 
- Railway PostgreSQL (included)
- Supabase (free tier)
- Render PostgreSQL (free tier)

---

## Next Steps After Deployment

1. Test all pages and functionality
2. Set up monitoring (Vercel Analytics)
3. Configure custom domain
4. Set up CI/CD (automatic with Vercel)
5. Add error tracking (Sentry)

---

## Support

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs

