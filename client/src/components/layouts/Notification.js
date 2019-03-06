import { NotificationManager } from 'react-notifications';
/**
 * Positions of NotificationManager events
 * 1) message
 * 2) title
 * 3) delay
 * 4) callback
 */
export default (code, msg, title = '', delay = 3000, callback = null) => {
    let options = [];
    options.push(msg, title, delay, callback);
    switch (code) {
        case 200:
            NotificationManager.success(...options);
            break;
        case 400:
        case 401:
        case 403:
        case 406:
            NotificationManager.warning(...options);
            break;
        case 409:
        case 404:
            NotificationManager.info(...options);
            break;
        case 500:
            NotificationManager.error(...options);
            break;
        default:
            break;
    }
}
