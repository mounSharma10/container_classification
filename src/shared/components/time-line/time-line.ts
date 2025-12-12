import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-time-line',
  imports: [CommonModule],
  templateUrl: './time-line.html',
  styleUrl: './time-line.scss',
})
export class TimeLine {
  origin = { name: 'India', flag: '🇮🇳', departureTime: '10 Dec 2025 - 08:00 AM' };
  destination = { name: 'Netherlands', flag: '🇳🇱', arrivalTime: '18 Dec 2025 - 06:30 PM'};

  steps = [
    { label: 'Container Received', time: '10 Dec 2025 08:00 AM' },
    { label: 'Customs Cleared', time: '10 Dec 2025 11:20 AM' },
    { label: 'Loaded on Vessel', time: '11 Dec 2025 05:30 PM' },
    { label: 'In Transit', time: '12 Dec 2025' },
    { label: 'Arrived Port', time: '18 Dec 2025 06:30 PM' },
  ];
}
