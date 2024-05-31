import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from '../../../../shared/components/common/modal/video-modal/video-modal.component';

@Component({
  selector: 'app-classic-video',
  templateUrl: './classic-video.component.html',
  styleUrls: ['./classic-video.component.scss'],
})
export class ClassicVideoComponent {

  public videoUrl = 'https://www.youtube.com/embed/Sz_1tkcU0Co';

  constructor(private modal: NgbModal) {}
  
  openModal() {
    const modalRef = this.modal.open(VideoModalComponent, { centered: true });
    modalRef.componentInstance.data = this.videoUrl;
  }
}
