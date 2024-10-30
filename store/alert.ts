import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', () => {
  const enum AlertType {
    Info = 'Info',
    Success = 'Success',
    Warn = 'Warn',
    Error = 'Error',
  }

  interface IAlert {
    id: string;
    type: AlertType;
    message: string;
    timestamp: Date;
  }

  function getRandomID() {
    const typedArray = new Uint8Array(3);
    const randomValues = window.crypto.getRandomValues(typedArray);
    return randomValues.join('');
  }

  class Alert implements IAlert {
    id: string;
    type: AlertType = AlertType.Info;
    message: string;
    timestamp: Date;

    constructor(type: AlertType, message: string) {
      this.id = getRandomID();
      this.type = type;
      this.message = message;
      this.timestamp = new Date();
    }
  }

  const alerts = ref<Alert[]>([]);

  const notify = (type: AlertType, message: string, showTime: number = 5000) => {
    const alert = new Alert(type, message);
    alerts.value.push(alert);
    setTimeout(() => {
      remove(alert.id);
    }, showTime);
  };

  const warn = (message: string, showTime: number = 5000) => {
    notify(AlertType.Warn, message, showTime);
  };

  const error = (message: string, showTime: number = 5000) => {
    notify(AlertType.Error, message, showTime);
  };

  const info = (message: string, showTime: number = 5000) => {
    notify(AlertType.Info, message, showTime);
  };

  const success = (message: string, showTime: number = 5000) => {
    notify(AlertType.Success, message, showTime);
  };

  const remove = (id: string) => {
    alerts.value = alerts.value.filter((t) => t.id !== id);
  };

  return {
    alerts,
    warn,
    error,
    info,
    success,
  };
});
