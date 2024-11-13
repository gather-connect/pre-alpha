# gather

[//]: # (TODO: document all of this code prior to completion)

## about

reimplementation of Gather's mobile app in Expo

## available on
<p id="badges" align="start">
  <a href="https://www.android.com/"><img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" /></a>
  <a href="https://www.apple.com/ios/ios-17/"><img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white" /></a>
</>

## built using
<p id="badges" align="start">
  <a href="https://bun.sh/"><img src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" /></a>
  <a href="https://expo.dev/"><img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" /></a>
  <a href="https://www.sqlite.org/"><img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" /></a>
  <a href="https://cloud.google.com/"><img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"></a>
  <a href="https://stripe.com/"><img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="Stripe" /></a>
</>

## tested with
<p id="badges" align="start">
  <a href="https://jestjs.io/"><img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" /></a>
</>

## hosted on
<p id="badges" align="start">
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" /></a>
</>

## usage

```bash
git clone https://github.com/gather-connect/mobile_platform.git
cd mobile_platform
bun i
docker compose up -d
bun run start
```

## file tree

**for app dir only**

```bash
.
├── (auth)
│   ├── forms.tsx
│   ├── index.tsx
│   ├── intro.jsx
│   └── reset_password.tsx
├── (protected)
│   ├── (modals)
│   │   ├── appearance.tsx
│   │   ├── archive.tsx
│   │   ├── dash.tsx
│   │   ├── integrations.tsx
│   │   ├── new_event.tsx
│   │   ├── profile.tsx
│   │   ├── settings.tsx
│   │   └── verify.tsx
│   ├── events
│   │   ├── [postid].tsx
│   │   ├── nightlife.tsx
│   │   ├── parties.tsx
│   │   ├── socials.tsx
│   │   └── this_week.tsx
│   └── timeline.tsx
├── +not-found.tsx
├── _layout.tsx
├── ctx.tsx
├── index.tsx
├── login.tsx
├── login_options.tsx
├── signup.tsx
└── signup_options.tsx

5 directories, 26 files
```
