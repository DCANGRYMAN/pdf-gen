import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerService } from '../../services/manager.service';
import { EmailTemplateComponent } from '../email-template/email-template.component';

@Component({
  selector: 'app-email-template-container',
  standalone: true,
  imports: [CommonModule, EmailTemplateComponent],
  template: `
    <app-email-template [input]="generatedLink" ($output)="output($event)">
    </app-email-template>
  `,
})
export class EmailTemplateContainerComponent implements OnInit, OnDestroy {
  generatedLink: string | null = null;
  errorMessage: string | null = null;

  constructor(private manager: ManagerService) {}

  async ngOnInit() {
    try {
      this.generatedLink = await this.manager.getEmailTemplate();
      console.log('Generated Link:', this.generatedLink);
    } catch (error) {
      this.errorMessage =
        'Erro ao carregar o template: ' + (error.message || error);
      console.error(this.errorMessage);
    }
  }

  output($event: any): void {
    console.log('Output received:', $event);
  }

  ngOnDestroy(): void {
    if (this.generatedLink) {
      URL.revokeObjectURL(this.generatedLink);
      this.generatedLink = null;
      console.log('Revogado link:', this.generatedLink);
    }
  }
}
