<div align="center" className="flex flex-col items-center gap-4">
  <img src="https://www.cibulka.codes/onion-dark.png" height="128" width="128" />
  <h1 align="center" className="text-5xl font-bold">
    <a href="https://www.cibulka.codes">www.cibulka.codes</a> for Thinkeasy
  </h1>
</div>

<br />

<div align="center" className="flex justify-center items-center gap-4">
  <a aria-label="Next.js" href="https://www.nextjs.org">
    <img src="https://img.shields.io/badge/Next.js-black?logo=next.js&labelColor=black" />
  </a>
  <a aria-label="TypeScript" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-black?logo=TypeScript&labelColor=black" />
  </a>
  <a aria-label="Tailwind" href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-black?logo=tailwindcss&labelColor=black" />
  </a>
  <a aria-label="My resumé" href="https://www.cibulka.codes/en/cv.pdf">
    <img src="https://img.shields.io/badge/Download_my_resumé!-blue" />
  </a>
</div>

<br />

## ❓ What is this?

Testing assingment for Thinkeasy that I've finished in 2 days. I wanted to work with the suggested tool, so I took some extra time to learn those that I did not know from before.

Checkout the demo on [thinkeasy.cibulka.codes](https://thinkeasy.cibulka.codes).

## The assingment (copy-pasted from the brief)

Please finish it in 7 days: Your task is to write a full-fledged mini application which will include 2 parts.

- [x] Authorization
- [x] Posts

### The following functionality is mandatory

- [x] Authorization and token update
- [x] Ability to view all posts
- [x] Ability to view posts of a specific user
- [x] Create a post

### Not required, but encouraged

- [x] Notification of creation/editing
- [x] FE side error handling since it is a very small application
- [x] Search for posts (search should be done by title or part of the content)
- [x] Handling loading status from Skeleton or Spinner

### Backend urls:

- https://frontend-test-be.stage.thinkeasy.cz/api - Swagger
- https://frontend-test-be.stage.thinkeasy.cz/api-json - OpenApi 3.0 schema

### Libraries

#### Required

- [x] React 18 /NextJs 13+, Typescript

#### Desirable

You can use anything you like, but here is a list of what we prefer

- [x] Form - React-Hook-Form
- [x] State Managment - Recoil
- [ ] Notification - Toastify
- [x] API - Orval
- [x] Style - Tailwind
- [ ] UI - Chakra

**Note**: I have not use [Toastify](https://www.npmjs.com/package/toastify) as it does not support TypeScript (and probably is not maintained). I used [react-toastify](https://www.npmjs.com/package/react-toastify) instead.

**Note**: I did not feel the need to use any specific UI library, hence no usage of Chakra.

## 📦  Features

- Fully responsive and optimized for touch screens
- Loading skeletons (to improve percieved performance and prevent "cumulative layout shift")
- Searchable content
- "Toast-style" notifications of post creation
- Ability to add new post (with expanding textarea)
- Persisted login information (in session storage, which is not a subject of "cookie law")
- Custom 404 page

## 🖥️ Screens

- Searchable list of posts: [thinkeasy.cibulka.codes](https://thinkeasy.cibulka.codes)
- List of authors (with possibility to open a page of posts of each of them): [/posts/user](https://thinkeasy.cibulka.codes)
- Login page: [/login](https://thinkeasy.cibulka.codes/login)
- Signup page: [/signup](https://thinkeasy.cibulka.codes/signup)
- 🔒 Create new post: [/create](https://thinkeasy.cibulka.codes/create)
- 🔒 User profile page: [/user](https://thinkeasy.cibulka.codes/user)

## 🔧  Install & Use

You can visit the demo of the project on [thinkeasy.cibulka.codes](https://thinkeasy.cibulka.codes) or run it locally:

```
npm install
npm run dev # For development
npm run build && npm start # For production preview
```

## ➕  Room for improvements

## Post editing

Brief asks for notification on "post editing". I can not see any post editing endpoint on Swagger however.

## User info can not be retrieved outside of login

Because of this I can not show user info on [profile page](https://thinkeasy.cibulka.codes/user) when user refreshes the page (and is logged in with `refreshToken` stored in their session storage).

## User info is missing in Signup response (however is present in Login response)

I can recreate the user info from submitted data during signup, however I do not have their ID. For this reason I can show their posts only after 2nd login.
