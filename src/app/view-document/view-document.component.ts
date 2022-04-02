import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { VerificationDocumentUploadedByAgent } from '../shared/models/customer-verification.model';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})
export class ViewDocumentComponent implements OnInit {
  public gridCols: number;
  verificationDocuments: any[] = []
  constructor(private cd: ChangeDetectorRef,) {
    this.gridCols = Math.round(window.innerWidth / 400);
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(): void {
    this.gridCols = Math.round(window.innerWidth / 400);
  }
  ngOnInit(): void {
  }
  public onFileInput($event: Event): void {
    const target: any = $event.target;
    const files: File[] = [...target.files];
    const models = files.map(
      (f) => <VerificationDocumentUploadedByAgent>{
        file: f,
        name: f.name,
      }
    );
    models.forEach(item=>{
      this.verificationDocuments.push(item);

    })
    this.cd.detectChanges();
  }
}
