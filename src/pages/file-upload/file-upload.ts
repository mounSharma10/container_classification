import { CommonModule } from '@angular/common';
import { Component,ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-file-upload',
  standalone: true, 
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss',
})
export class FileUpload {
  @ViewChild('uploadArea') uploadArea!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('fileList') fileList!: ElementRef;
   selectedFiles: any[] = [];


  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.uploadArea.nativeElement.classList.add('dragover');
  }

  onDragLeave() {
    this.uploadArea.nativeElement.classList.remove('dragover');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.uploadArea.nativeElement.classList.remove('dragover');

    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  onFileChange(event: any) {
    this.handleFiles(event.target.files);
  }

  handleFiles(files: FileList) {

    this.selectedFiles = Array.from(files);
    console.log(this.selectedFiles)
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  clearFiles() {
    this.selectedFiles = [];
    this.fileInput.nativeElement.value = '';
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }
}

