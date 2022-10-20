import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  LoadingController,
  AlertController,
  NavController,
} from "@ionic/angular";
//import { AuthenticationService } from "src/app/service/auth/authentication.service";
//import { DatabaseService } from "src/app/service/database/database.service";
//import { ApiService } from "../../../service/api/api.service";
@Component({
  selector: "app-otp",
  templateUrl: "./otp.page.html",
  styleUrls: ["./otp.page.scss"],
})
export class OtpPage implements OnInit {
  dataform: any;
  regemail: any;
  regisdata = {};
  timeInSeconds: any;
  time: any;
  runTimer: boolean;
  hasFinished: boolean;
  hasStarted: boolean;
  remainingTime: any;
  displayTime: string;
  otp: string;
  showOtpComponent = true;
  emptycode = false;

  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "",
    inputStyles: {
      width: "35px",
      height: "35px",
      background: "#dedede",
      "border-radius": "50px",
      border: "0",
    },
  };
  constructor(
    private route: ActivatedRoute,
   // private database: DatabaseService,
    private loadingCtrl: LoadingController,
   // private ApiService: ApiService,
    public alertController: AlertController,
    public navCtrl: NavController,
    //private auth: AuthenticationService
  ) {}

  ngOnInit() {
    let dataregis = this.route.snapshot.paramMap.get("dataregis");
    this.dataform = JSON.parse(dataregis);
    let email = this.dataform;
    this.regemail = email.email;
    this.initTimer();
    this.startTimer();
  }

  initTimer() {
    if (!this.timeInSeconds) {
      this.timeInSeconds = 420;
    }
    this.time = this.timeInSeconds;
    this.runTimer = false;
    this.hasStarted = false;
    this.hasFinished = false;
    this.remainingTime = this.timeInSeconds;
    this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
  }

  startTimer() {
    this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
  }

  pauseTimer() {
    this.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.runTimer) {
        return;
      }
      this.remainingTime--;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
      if (this.remainingTime > 0) {
        this.timerTick();
      } else {
        this.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;
    var hoursString = "";
    var minutesString = "";
    var secondsString = "";
    hoursString = hours < 10 ? "0" + hours : hours.toString();
    minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
    secondsString = seconds < 10 ? "0" + seconds : seconds.toString();
    return minutesString + ":" + secondsString;
  }

  onOtpChange(otp) {
    this.otp = otp;
    if (this.otp.length === 6) this.emptycode = true;
  }

  
 
  }
