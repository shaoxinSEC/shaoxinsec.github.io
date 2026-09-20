(function () {
  var SONG = {
    source: 'netease',
    id: '328076',
    name: '偏爱',
    artist: '张芸京',
    cover: '/img/bgm-cover.jpg'
  }

  var API = 'https://music-api.gdstudio.xyz/api.php'
  var player = null

  function autoPlay() {
    if (!player || !player.audio) return
    if (!player.audio.paused) return
    var result = player.play()
    if (result && result.catch) result.catch(function () {})
  }

  function bindAutoPlay(ap) {
    if (!ap || ap.options._bgmReady) return
    ap.options._bgmReady = true

    ;['canplay', 'loadeddata', 'loadedmetadata'].forEach(function (eventName) {
      ap.on(eventName, autoPlay)
    })

    autoPlay()
  }

  function apiUrl(type, id) {
    return API + '?types=' + type + '&source=' + SONG.source + '&id=' + id
  }

  function fetchJson(url) {
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error('request failed')
      return res.json()
    })
  }

  function initPlayer(track) {
    if (player || typeof APlayer === 'undefined') return

    var container = document.getElementById('blog-bgm')
    if (!container || container.dataset.ready === '1') return
    container.dataset.ready = '1'

    player = new APlayer({
      container: container,
      autoplay: true,
      loop: 'all',
      mutex: true,
      preload: 'auto',
      volume: 0.7,
      listFolded: true,
      lrcType: 1,
      audio: [track]
    })

    bindAutoPlay(player)
  }

  function loadSong() {
    Promise.all([
      fetchJson(apiUrl('url', SONG.id)),
      fetchJson(apiUrl('lyric', SONG.id))
    ]).then(function (results) {
      var urlData = results[0]
      var lyricData = results[1]
      if (!urlData.url) return

      initPlayer({
        name: SONG.name,
        artist: SONG.artist,
        url: urlData.url,
        cover: SONG.cover,
        lrc: lyricData.lyric || ''
      })
    }).catch(function () {})
  }

  function boot() {
    if (player || document.querySelector('#blog-bgm .aplayer')) return
    loadSong()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot)
  } else {
    boot()
  }

  window.addEventListener('load', autoPlay)
})()
