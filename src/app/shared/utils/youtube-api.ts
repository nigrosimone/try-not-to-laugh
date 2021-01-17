
/**
 * Carica lo script per le API del player di YouTube
 */
export function loadYouTubeApiScript(): void {
    const ID = 'YOUTUBE_API_SCRIPT';
    let el = document.getElementById(ID) as HTMLScriptElement;
    if (!el) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      el = document.createElement('script');
      el.src = 'https://www.youtube.com/iframe_api';
      el.id = ID;
      document.body.appendChild(el);
    }
}
