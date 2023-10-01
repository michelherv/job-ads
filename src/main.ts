import { bootstrapApplication } from '@angular/platform-browser';
import { CoreComponent } from '@jobcloud/admin/core/core.component';
import { CORE_CONFIG } from '@jobcloud/admin/core/core.config';

bootstrapApplication(CoreComponent, CORE_CONFIG).catch(console.error);
