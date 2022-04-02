import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-zoomable-image',
    templateUrl: './zoomable-image.component.html',
    styleUrls: ['./zoomable-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomableImageComponent implements OnInit {
    @Input() src:string|null;
    @Input() type: string = "";

    constructor(public dialog: MatDialog) { }
    ngOnInit(): void {
    }
    zoomIn() {
        this.dialog.open(ZoomedInImage, { data: this.src });
    }
}

@Component({
    selector: 'app-zoomed-in-image',
    templateUrl: 'zoomed-in-image.dialog.html',
    styleUrls: ['./zoomed-in-image.dialog.scss'],
})
export class ZoomedInImage {
    constructor(@Inject(MAT_DIALOG_DATA) public src: string) { }
}
