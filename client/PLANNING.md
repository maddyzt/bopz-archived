# Bopz

# Project Description
An song-recognition app that allows users to posts songs to a social feed where they can interact with friends and see what their friends are listening to.

# User Stories
- As a user I want to be able to log in with Spotify
- As a user I want to be able to play a song and have the app recognize the song/artist
- As a user I want to be able to post the song to a feed
- As a user I want to be able to see songs my friends have posted on my feed
- As a user I want to be able to like songs
- As a user I want to be able to see my friends profiles
- As a user I want to be able to have my own profile and update my profile information

## Stretch stories
- As a user I want to be able to comment (add/edit/delete) on songs
- As a user I want to be able to share songs
- As a user I want to be able to add the song to my Spotify library
- Track who liked which songs
- Real-time data using websockets etc.

# Wireframes

# ERD
- Users
  - id (pk)
  - username
  - photo
- Songs
  - id (pk)
  - name
  - artist
  - likes (count)
- Posts
  - user id (fk)
  - song id (fk)

# Packages
- cookie-session
- create-react-app

## Frontend
- React
- HTML / CSS / JavaScript

## Backend
- Node
- Express
- Axios

# Data structure
- See ERD

# Component Structure
- Nav
- Shazam
- PostList
  - PostListItem

- Profile (Name, Photo, Follow)
- UserPostList
  - UserPostListItem

# Steps
- PLANNING
- Build mockups / data structures
- Fight between mockup vs ERD (data structure)
- Static version of Frontend (Spearhead one feature)
- Static version of Backend
- Dynamic version of Frontend (up to network)
- Dynamic version of Backend (up to res.json)
- Connect time!
- Make it fancy time

# APIs
- Spotify Web API
- Shazam API

