# Muzika Changelog

## 2.0.0 (2020-xx-xx)

#### Breaking Changes

- switched from iTunes API to Spotify API

#### Improvement

- added debounce to search input

#### New Feature

- added Library view
- added For You view
- added Browse view
- added Search view with search history
- added Playlist & Genere views
- added Login view
- added play buttons for song items in lists
- added theme switch
- added manifest.json and PWA support

#### Change

- rebuilt artist page (added artist picture, related artists & more sections)
- moved menu to top on desktop
- updated theme colors
- updated UI for mobile and desktop to look more like native iOS & macOS Music App interface

#### Internal

- rewritten with Next.js & TypeScript

## 1.2.0 (2019-01-05)

#### New Feature

- added dynamic page title

#### Change

- implemented React Hooks

#### Bug Fix

- fixed bug with big data usage during refetch on search query change

#### Improvement

- improved SCSS

## 1.1.1 (2018-10-25)

#### Bug Fix

- fixed redirect on search input value change
- fixed error with Various Artists link in album
- fixed problem with children value PropTypes
- fixed overlapping elements during artwork loading
- fixed border order in horizontal scroll view
- fixed incorrect displaying longer artist names in songs list in album view
- fixed incorrect displaying longer artist names in song/album view on mobile devices
- hidden link to artist in album/video lists on artist page

#### Improvement

- cleaned up SCSS files
- removed duplicated code
- renamed some components

## 1.1.0 (2018-10-07)

#### Repository Changes

- disabled map files for build

#### Change

- elements have been divided into smaller components
- rewritten CSS to SCSS
- dropped support for IE

#### Improvement

- improved live search
- better sizing on bigger screens
- improved PropTypes check

#### Bug Fix

- hidden play button for unreleased songs
- hidden spinner and shown message when lyrics aren't available

#### Other

- updated react-scripts to v2 stable
- updated night.js

## 1.0.7 (2018-09-19)

#### Change

- better typography size

#### Improvement

- CSS cleaned up
- removed unnecessary components
- better scaling scrollable elements

## 1.0.6 (2018-09-17)

#### Bug Fix

- fixed album cover place during image loading
- fixed positioning of elements in horizontal scroll list when scrollbar is visible

## 1.0.5 (2018-09-16)

#### Bug Fix

- fixed positioning of elements in horizontal scroll list

## 1.0.4 (2018-09-15)

#### Change

- changed item order to column in horizontal scroll list
- increased item number in horizontal scroll list

#### Improvement

- better horizontal scroll list UI
- columns in vertical list for songs

#### Bug Fix

- fixed scaling on iPhone models with notch in landscape position

## 1.0.3 (2018-09-14)

#### Improvement

- removed unused code
- added PropTypes

#### Other

- updated dependencies

## 1.0.2 (2018-08-31)

#### Improvement

- code cleaned up
- performance improvements

#### Other

- updated dependencies

## 1.0.1 (2018-08-27)

#### Improvement

- updated player ref to React 16.3 Refs API

#### Other

- updated README.md images

#### Bug Fix

- added background color to video element

## 1.0.0 (2018-08-25)

#### New Feature

- music search (songs, albums & videos)
- song page (with lyrics)
- album page (with songs list)
- artist page (with songs, albums & videos)
- music video page (with 30s video preview)
- dark mode based on sun over horizon position
- 30s songs preview
- "show more" button on search & artist page to list more songs, albums & videos
- back to home button

#### Improvement

- better album covers quality
- responsive design
- dark mode improvements
- show video poster on music video page
- code clean up

#### Bug Fix

- fixed search
- handle fetch errors
- fixed error on artist page
- reduce data usage
- auto change play button icon after preview
