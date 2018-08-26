export default class ChromeService {

  getTopSites(cb) {
    return chrome.topSites.get(cb);
  }
}