import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { ObjectsComponent } from './pages/objects/objects.component';
import { FakeapiComponent } from './pages/fakeapi/fakeapi.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'object', component: ObjectsComponent },
    { path: 'fakeapi', component: FakeapiComponent },
];
