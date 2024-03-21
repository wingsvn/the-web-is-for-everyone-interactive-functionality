console.log('Hier komt je server')


// opzetten van de webserver 
import express from 'express'
import fetchJson from './helpers/fetch-json.js'

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

let like = []

// routes aanmaken

// maak een GET route voor de index (home)
app.get('/', function(request, response) {
    Promise.all([ // Fetch data from all endpoints concurrently using Promise.all()
    fetchJson('https://fdnd-agency.directus.app/items/tm_story'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_language'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_audio'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_playlist')
  ]).then(([storyData, languageData, audioData, playlistData]) => {

    response.render('home', {
        stories: storyData.data, 
        languages: languageData.data,
        playlists: playlistData.data,
        audio: audioData.data}) 
    })
  })

// maak een GET route voor lessons 
app.get('/lessons', function(request, response) {
    Promise.all([ // Fetch data from all endpoints concurrently using Promise.all()
    fetchJson('https://fdnd-agency.directus.app/items/tm_story'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_language'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_audio'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_playlist')
  ]).then(([storyData, languageData, audioData, playlistData]) => {

    response.render('lessons', {
        stories: storyData.data, 
        languages: languageData.data, 
        playlists: playlistData.data, 
        audio: audioData.data,
      }) 
    })
  })

// maak een POST route voor lessons (like)
app.post('/:playlistId/like-or-unlike', function(request, response) {
  const playlistId = request.params.playlistId;
  const action = request.body.actie; // Retrieve the value of the 'actie' parameter from the form

  // Implement the logic to handle liking or unliking the playlist
  if (action === 'like') {
    // Handle 'like' action
  } else if (action === 'unlike') {
    // Handle 'unlike' action
  } 
  response.redirect(303, '/lessons')
  })

// maak een GET route voor stories
app.get('/lessons/stories', function(request, response) {
    Promise.all([ // Fetch data from all endpoints concurrently using Promise.all()
    fetchJson('https://fdnd-agency.directus.app/items/tm_story'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_language'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_audio'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_playlist')
  ]).then(([storyData, languageData, audioData, playlistData]) => {

    response.render('stories', {
        stories: storyData.data, 
        languages: languageData.data, 
        playlists: playlistData.data, 
        audio: audioData.data}) 
    })
  })

// maak een GET route voor playlist
app.get('lessons/playlist', function(request, response) {
    Promise.all([ // Fetch data from all endpoints concurrently using Promise.all()
    fetchJson('https://fdnd-agency.directus.app/items/tm_story'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_language'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_audio'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_playlist')
  ]).then(([storyData, languageData, audioData, playlistData]) => {

    response.render('playlist', {
        stories: storyData.data, 
        languages: languageData.data, 
        playlists: playlistData.data, 
        audio: audioData.data}) 
    })
  })

// maak een GET route voor testing 
app.get('/testing', function(request, response) {
    Promise.all([ // Fetch data from all endpoints concurrently using Promise.all()
    fetchJson('https://fdnd-agency.directus.app/items/tm_story'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_language'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_audio'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_playlist')
  ]).then(([storyData, languageData, audioData, playlistData]) => {

    response.render('testing', {
        stories: storyData.data, 
        languages: languageData.data, 
        playlists: playlistData.data, 
        audio: audioData.data}) 
    })
  })

// maak een GET route voor statistics
app.get('/statistics', function(request, response) {
    Promise.all([ // Fetch data from all endpoints concurrently using Promise.all()
    fetchJson('https://fdnd-agency.directus.app/items/tm_story'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_language'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_audio'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_playlist')
  ]).then(([storyData, languageData, audioData, playlistData]) => {

    response.render('statistics', {
        stories: storyData.data, 
        languages: languageData.data, 
        playlists: playlistData.data, 
        audio: audioData.data}) 
    })
  })

// maak een GET route voor profile
app.get('/profile', function(request, response) {
    Promise.all([ // Fetch data from all endpoints concurrently using Promise.all()
    fetchJson('https://fdnd-agency.directus.app/items/tm_story'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_language'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_audio'),
    fetchJson('https://fdnd-agency.directus.app/items/tm_playlist')
  ]).then(([storyData, languageData, audioData, playlistData]) => {

    response.render('profile', {
        stories: storyData.data, 
        languages: languageData.data, 
        playlists: playlistData.data, 
        audio: audioData.data}) 
    })
  })


// start de webserver
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})