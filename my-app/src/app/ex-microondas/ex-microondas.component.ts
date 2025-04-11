import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex-microondas',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex-microondas.component.html',
  styleUrl: './ex-microondas.component.scss'
})
export class ExMicroondasComponent {
  currentTime: number = 0;
  timerInterval: any;
  displayTime: string = '00:00';
  isCounting: boolean = false;
  isPaused: boolean = false;
  isPresetMode: boolean = false;
  imagemAtual: string = '';

  iniciar(): void {
    if (!this.isCounting) {
      if (!this.isPresetMode) {
        this.currentTime += 30;
      }
      this.updateDisplayTime();
      this.timer();
      this.isCounting = true;
      this.isPaused = false;
      this.isPresetMode = false;
    } else if (this.isPaused) {
      this.timer();
      this.isPaused = false;
    } else if (!this.isPresetMode) {
      this.currentTime += 30;
      this.updateDisplayTime();
    }
  }

  timer(): void {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.currentTime > 0) {
        this.imagemAtual = 'assets/images/gatinhogirando.gif';
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
      this.isPresetMode = false;
    }
  }

  pipoca(): void {
    if (!this.isCounting) {
      this.currentTime = 300;
      this.updateDisplayTime();
      this.isPresetMode = true;
    }
  }

  descongelar(): void {
    if (!this.isCounting) {
      this.currentTime = 600;
      this.updateDisplayTime();
      this.isPresetMode = true;
    }
  }

  adicionar10Segundos(): void {
    this.currentTime += 10;
    this.isPresetMode = true;
    this.updateDisplayTime();
  }

  adicionar1Minuto(): void {
    this.currentTime += 60;
    this.isPresetMode = true;
    this.updateDisplayTime();
  }

  adicionar5Minutos(): void {
    this.currentTime += 300;
    this.isPresetMode = true;
    this.updateDisplayTime();
  }

  updateDisplayTime(): void {
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;
    this.displayTime = `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
