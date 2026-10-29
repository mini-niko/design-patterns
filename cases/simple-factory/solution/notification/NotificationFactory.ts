import { DiscordNotification } from "./DiscordNotification";
import { EmailNotification } from "./EmailNotification";
import { Notification } from "./Notification";
import { SmsNotification } from "./SmsNotification";

export class NotificationFactory {
    static create(notificationType: string): Notification {
        if (notificationType === "email") {
            return new EmailNotification();
        } else if (notificationType === "sms") {
            return new SmsNotification();
        } else if (notificationType === "discord") {
            return new DiscordNotification();
        } else {
            throw new Error("Tipo de notificação não definida.");
        }
    }
}
