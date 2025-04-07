import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex-microondas',
  imports: [FormsModule],
  templateUrl: './ex-microondas.component.html',
  styleUrl: './ex-microondas.component.scss'
})
export class ExMicroondasComponent {
  currentTime: number = 0;
  timerInterval: any;
  displayTime: string = '00:00';
  isCounting: boolean = false;
  isPaused: boolean = false;

  iniciar(): void {
    if (!this.isCounting) {
      this.currentTime = 30;
      this.updateDisplayTime();
      this.timer();
      this.isCounting = true;
    } else if (this.isPaused) {
      this.timer();
      this.isPaused = false;
    } else {
      this.currentTime += 30;
      this.updateDisplayTime();
    }
  }

  timer(): void {
    this.timerInterval = setInterval(() => {
      if (this.currentTime > 0) {
        this.currentTime--;
        this.updateDisplayTime();
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  cancelar(): void {
    if (this.isCounting && !this.isPaused) {
      clearInterval(this.timerInterval);
      this.isPaused = true;
    } else {
      this.currentTime = 0;
      this.updateDisplayTime();
      this.isCounting = false;
      this.isPaused = false;
    }
  }

  updateDisplayTime(): void {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;
    this.displayTime = `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  descongelar() {
    this.currentTime += 600;
    this.updateDisplayTime();
  }

  pipoca() {
    this.currentTime += 300;
    this.updateDisplayTime();
  }

  adicionar10Segundos() {
    this.currentTime += 10;
    this.updateDisplayTime();
  }

  adicionar1Minuto() {
    this.currentTime += 60;
    this.updateDisplayTime();
  }

  adicionar5Minutos() {
    this.currentTime += 300;
    this.updateDisplayTime();
  }

}
