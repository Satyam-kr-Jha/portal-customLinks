# 🔗Portal - Custom URL Shortener
A full-stack URL shortening platform I built to manage portfolio project links with custom branding and analytics tracking.

# 🎯Project Overview
Portal solves a simple problem: deployment URLs like `my-ecommerce-abc123.vercel.app` look unprofessional. With Portal, I can create clean branded links like `myname.link/ecommerce` to share on my resume, LinkedIn, and GitHub.

# ->What It Does
- Creates custom short URLs for portfolio projects
- Tracks clicks with geographic analytics (country, state, timestamps)
- Generates QR codes for each link
- Provides a secure dashboard to manage all links
- Redirects visitors instantly to the original URLs

-----------------------------------------------------------------------------

# ✨ Key Features

##  ->URL Management
- **Custom Slugs**: Choose personalized short URLs (`/ecommerce`, `/chat-app`, etc.)
- **Quick Creation**: Simple form to create new links in seconds
- **Easy Editing**: Update titles, descriptions, and target URLs anytime
- **Bulk View**: See all links in one organized table

 ##  ->Analytics
- **Click Tracking**: Real-time visitor count for each link
- **Geographic Data**: Countries and states where visitors are from
- **Visit History**: Timestamps of every click
- **Analytics Dashboard**: Detailed view per link

 ##  ->Authentication & Security
- **Email/Password Login**: Traditional authentication
- **Protected Routes**: Only adimin can create/manage links (via server-side protection)
- **Admin approval**: Admin can approve who can access links
- **Session Management**: Persistent login sessions

 ##  ->UI/UX
- **Retro Design**: Pixel-art aesthetic with Press Start 2P font
- **Fully Responsive**: Works on desktop, tablet, and mobile
- **Copy to Clipboard**: One-click URL copying (mobile-compatible)

------------------------------------------------------------------------------

# 🛠️ Tech Stack

**Frontend**
- Next.js 15 (App Router)
- React
- Tailwind CSS
- Press Start 2P font for retro styling

**Backend**
- Next.js API Routes
- MongoDB with Mongoose
- Better Auth for authentication

**External APIs**
- IP Geolocation API (ipapi.co) for visitor tracking

**Tools & Libraries**
- QRCode library for QR generation
- copy-to-clipboard for clipboard functionality

---------------------------------------------------------------------

# 🚀 How It Works

## ->1. Creating a Short URL
    1. User fills form: title, description, original URL, custom slug
    2. Frontend sends POST to `/api/yoururl`
    3. Backend validates and saves to MongoDB
    4. Dashboard refreshes to show new link

## ->2. Redirecting Visitors
    1. Visitor accesses `mysite.com/ecommerce`
    2. Next.js catches route via `[slugurl]/route.js`
    3. Backend finds URL in database by slug
    4. Increments click count
    5. Fetches visitor's geo data from IP
    6. Stores analytics (country, state, timestamp)
    7. Redirects to original URL

## ->3. Viewing Analytics
    1. User clicks analytics icon in dashboard
    2. Opens `/analytics/[id]` page
    3. Fetches link data from database
    4. Displays clicks, countries, states, visit dates

---

# 🔐 Authentication Flow

## ->Sign Up
1. User enters email, password, name
2. Better Auth hashes password
3. Creates user in MongoDB
4. Auto-signs in user

## ->Sign In
1. User enters email/password
2. Better Auth validates credentials
3. Creates session token
4. Stores in cookies
5. Redirects to dashboard

----------------------------------------------------

# 🎨 Design Decisions

Why Next.js 15?
- Server Components for fast initial loads
- API routes eliminate need for separate backend
- Built-in routing and middleware

Why Better Auth over NextAuth?
- Better App Router support
- Simpler setup
- More modern approach
- Fewer configuration files

Why MongoDB?
- Flexible schema for analytics arrays
- Easy to scale
- Mongoose makes querying simple

Why Server Components?
- Faster page loads (data fetched on server)
- Better SEO
- Reduced JavaScript bundle
- Direct database access without API calls

UI Design Choice
- Retro pixel-art theme makes it memorable
- Stands out from typical portfolio projects
- Shows design creativity
- Professional yet unique

-------------------------------------------------

# 📈 Future Improvements

- [ ] Custom domains support
- [ ] MultiUser-MultiLinks Creation and Handling
- [ ] Password-protected links
- [ ] Charts for analytics visualization
- [ ] Link categories/tags
- [ ] Dark/light theme toggle
- [ ] Email notifications for milestones

----------------------------------------------

# 🎓 What I Learned

##Technical Skills
- Next.js 15 App Router architecture
- Server vs Client Components
- Better Auth implementation
- MongoDB schema design with Mongoose
- RESTful API design
- Server-side route protection
- IP geolocation integration
- QR code generation

## Best Practices
- When to use Server vs Client Components
- Proper error handling in API routes
- Database connection caching
- Environment variable management
- Responsive design patterns
- Form validation

## Problem Solving
- Debugging authentication issues
- Handling edge cases (favicon requests, mobile clipboard)
- Performance optimization (direct DB queries vs API calls)
- State management in React

----------------------------------------------------------------------------

## 🔗 Links

- **Live Demo**: (https://portal.vercel.app)
- **Portfolio**: [myportfolio.com](https://myportfolio.com)

--------------------------------------------------------------------------------

**Built with ❤️ to showcase full-stack development skills**
