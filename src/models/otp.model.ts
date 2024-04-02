import speakeasy from "speakeasy";
import nodemailer from "nodemailer";
import { mail } from "../mail/mailForm";

export class OTP {
  private secret: string;
  constructor() {
    this.secret = this.getSecret();
  }

  private getSecret(): string {
    const secret = process.env.SECRET_OTP_TOKEN || "";

    if (!secret) {
      throw new Error("SECRET_OTP_TOKEN environment variable is not defined.");
    }

    return secret;
  }

  public generateOTPcode(): string {
    return speakeasy.totp({
      secret: this.secret,
      encoding: "base32",
      digits: 6,
      step: 60,
    });
  }

  public verifyOTPcode(token: string): boolean {
    return speakeasy.totp.verify({
      secret: this.secret,
      encoding: "base32",
      token: token,
      step: 60,
      digits: 6,
    });
  }
  public sendMail(email: string) {
    const token = this.generateOTPcode();
    const subject = "OTP VERIFY";
    const mailForm = mail(token, subject);
    const mailOptions = {
      from: "Nhóm 4",
      to: email,
      subject,
      html: mailForm,
    };
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
    });
  }
  public sendPass(email: string, token: string) {
    const subject = "Reset Password";
    const mailForm = mail(token, subject);
    const mailOptions = {
      from: "Nhóm 4",
      to: email,
      subject,
      html: mailForm,
    };
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
    });
  }
}
