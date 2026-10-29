import { Notification } from "./notification/Notification";
import { NotificationFactory } from "./notification/NotificationFactory";

const notificationType = process.argv[2];
exec(notificationType);

function exec(notificationType: string): void {
    const notification: Notification =
        NotificationFactory.create(notificationType);

    notification.send("Olá Usuário!");
}
