import { DiscordNotification } from "./notification/DiscordNotification";
import { EmailNotification } from "./notification/EmailNotification";
import { Notification } from "./notification/Notification";
import { SmsNotification } from "./notification/SmsNotification";

const notificationType = process.argv[2];
exec(notificationType);

function exec(notificationType: string): void {
    let notification: Notification;

    if (notificationType === "email") {
        notification = new EmailNotification();
    } else if (notificationType === "sms") {
        notification = new SmsNotification();
    } else if (notificationType === "discord") {
        notification = new DiscordNotification();
    } else {
        throw new Error("Tipo de notificação não definida.");
    }

    notification.send("Olá Usuário!");
}
