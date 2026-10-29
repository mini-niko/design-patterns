import type { Notification } from "./Notification";

export class DiscordNotification implements Notification {
    send(message: string) {
        console.log(`Discord: ${message}`);
    }
}
