import type { Notification } from "./Notification";

export class SmsNotification implements Notification {
    send(message: string) {
        console.log(`SMS: ${message}`);
    }
}
