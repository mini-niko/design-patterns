import type { Notification } from "./Notification";

export class EmailNotification implements Notification {
    send(message: string) {
        console.log(`Email: ${message}`);
    }
}
