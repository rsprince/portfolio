import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { TabletComponent } from './tablet/tablet.component';
import { DocumentsComponent } from './documents/documents.component';
import { DemosComponent } from './demos/demos.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'web', component: WebComponent },
	{ path: 'mobile', component: MobileComponent },
	{ path: 'tablet', component: TabletComponent },
	{ path: 'documents', component: DocumentsComponent },
	{ path: 'demos', component: DemosComponent },
	{ path: 'contact', component: ContactComponent }
];
