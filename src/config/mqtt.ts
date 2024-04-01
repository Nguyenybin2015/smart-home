import mqtt from "mqtt";

export class MQTT {
  client: mqtt.MqttClient;
  topic: string;
  constructor(mqttURL: string, topic: string) {
    this.client = mqtt.connect(mqttURL);
    this.topic = topic;
  }
  sub() {
    this.client.on("connect", () => {
      this.client.subscribe(this.topic);
    });
  }
  pub(message: string) {
    this.client.on("connect", () => {
      this.client.publish(this.topic, message);
    });
  }
  message() {
    let result: string;
    this.client.on("message", (topic, message) => {
      result = message.toString()
      console.log(message.toString());
    });
    return "on";
  }
}
