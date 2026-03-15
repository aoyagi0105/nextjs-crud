[한국어](./README.kr.md) | [日本語](./README.jp.md)

# motivation-Maker-web
[Live Demo](https://spark-motivate.vercel.app/)

motivation-Maker-web extends the core value of the original mobile service to the web environment. It is designed to allow users to revisit, manage, and internalize motivational quotes that truly resonate with them, anytime and anywhere.

Key Value
 - Cross-Platform Experience: Shared NestJS backend ensures seamless data synchronization between mobile and web, providing a consistent user experience.
 - Personalized Archive: Beyond simple browsing, users can build their own motivational archives through a personalized "Favorites" system.
 - Global Accessibility: Designed with multi-language support to ensure global users receive optimized motivational messages in their preferred language.

## Features
 - Authentication System: Comprehensive Login and Sign-up UI/UX.
 - Quote Curation: Real-time browsing of motivational quotes with integrated multi-language translation.
 - Archiving: Add or remove quotes from a user-specific "Favorites" list.
 - Session Persistence: Utilizes browser storage to ensure users stay logged in even after page reloads.

## Tech Stack
Frontend
- Framework: Next.js (App Router)
- Library: React
- Network: Axios
- Language: TypeScript
- Styling: Tailwind CSS

Deployment & Storage
- Frontend Deployment: Vercel
- Persistence: localStorage (Save User Data and Settings)

## Troubleshooting
1. Handling State Loss on Page Reloads
Problem: Initially, using Redux caused the in-memory state to reset upon page refresh, resulting in unexpected logouts.

Root Cause: Redux stores data in volatile memory. Furthermore, for a project of this scale, the boilerplate code for Redux was hindering productivity.

Solution: Removed the Redux dependency and implemented a streamlined structure using React's built-in Hooks synchronized with localStorage.

Results: Reduced bundle size by removing external libraries, improved maintainability through simpler logic, and achieved stable session persistence.

2. Resolving CORS Issues in Production (Next.js - NestJS)
Problem: API calls that worked locally were blocked by Access-Control-Allow-Origin errors after deploying to Vercel.

Root Cause: The NestJS backend's CORS whitelist did not include the dynamically generated Vercel production domain.

Solution: Updated the backend environment variables to explicitly include the correct Vercel domain.

## Technical Decisions
1. [Security Enhancement] Protecting Against XSS Attacks
Challenge: Storing a Refresh Token in localStorage makes it accessible via JavaScript, creating a vulnerability where a user's session could be hijacked through a Cross-Site Scripting (XSS) attack.

Solution: Designed the system to store the Refresh Token in an httpOnly and Secure cookie. By managing this on the server-side, we prevent client-side scripts from accessing sensitive credentials.

Strategy: Adopted a Dual-Token Strategy: The Access Token (relatively lower risk) is stored in localStorage for smooth client-side logic, while the high-stakes Refresh Token is protected by server-side security layers.


## Screenshot
**Login & Sign-up**

<img width="400" height="400" alt="스크린샷 2026-02-26 150114" src="https://github.com/user-attachments/assets/0d3d9008-99ab-489e-b297-1fdde0975a6b" />
<img width="400" height="400" alt="스크린샷 2026-02-26 150123" src="https://github.com/user-attachments/assets/50a4c9e8-4796-4604-a3ce-fc4f567c67ed" />

You can set id, password, language, etc. on the membership registration screen


**Motivation Screen**

<img width="400" height="400" alt="스크린샷 2026-02-26 145723" src="https://github.com/user-attachments/assets/04130abc-4337-4ec3-970d-a4caea3e2052" />


**Language Change**

<img width="400" height="400" alt="스크린샷 2026-02-26 145735" src="https://github.com/user-attachments/assets/41da0dba-5957-458b-9ada-a6f5e967df12" />

It supports real-time translation when changing languages


**Favorite Screen**

<img width="400" height="400" alt="스크린샷 2026-02-26 145815" src="https://github.com/user-attachments/assets/d2db9e95-0cb6-4f51-9d7b-b0f29d0be73d" />

If you register as a favorite, you can see the phrases on the "Favorite Screen"

## Related Repositories
- Frontend Application: https://github.com/aoyagi0105/motivation-Maker.git
- Backend API: https://github.com/aoyagi0105/motivation-Maker-backend.git


## Environment Variables
The following settings are required in the file '.env.local' for project execution.

```env
NEXT_PUBLIC_API_URL=your_backend_api_url
```

## Getting Started
```bash
npm run dev
```
