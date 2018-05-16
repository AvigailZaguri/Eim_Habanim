import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule , NO_ERRORS_SCHEMA  } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { StaffComponent } from './pages/staff/staff.component';
import { DatePickerPopupComponent } from './ui-lib/date-picker-popup/date-picker-popup.component';

/*
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
*/
import { environment } from './../environments/environment';
import { Try1Component } from './animation/try1/try1.component';
import { TopNav2Component } from './ui/top-nav2/top-nav2.component';
import { StaffAddComponent } from './pages/staff/add/add.component';
import { FamilyComponent } from './pages/family/family.component';

import { AddFamilyComponent } from './pages/family/add-family/add-family.component';
import { ViewFamilyComponent } from './pages/family/view-family/view-family.component';

import { InterviewComponent } from './pages/interview/interview.component';
import { AddComponent } from './pages/interview/add/add.component';
import { StuffComponent } from './pages/stuff/stuff.component';
import { MentorsComponent } from './pages/Stuff/mentors/mentors.component';
import { TherapistsComponent } from './pages/Stuff/therapists/therapists.component';
import { AdministrativeComponent } from './pages/Stuff/administrative/administrative.component';
import { AddMentorComponent } from './pages/Stuff/Mentors/add-mentor/add-mentor.component';
import { EditMentorComponent } from './pages/Stuff/Mentors/edit-mentor/edit-mentor.component';
import { AddEmployeeComponent } from './pages/Stuff/Administrative/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/Stuff/Administrative/edit-employee/edit-employee.component';
import { AddTherapistComponent } from './pages/Stuff/Therapists/add-therapist/add-therapist.component';
import { EditTherapistComponent } from './pages/Stuff/Therapists/edit-therapist/edit-therapist.component';
import { EmployeesComponent } from './pages/Stuff/employees/employees.component';
import { EventsComponent } from './pages/events/events.component';
import { TreatmentsComponent } from './pages/treatments/treatments.component';
import { UpdateTreatmentDeatailsComponent } from './pages/Treatments/update-treatment-deatails/update-treatment-deatails.component';
import { AddTreatmentComponent } from './pages/Treatments/add-treatment/add-treatment.component';
import { RemoveTreatmentComponent } from './pages/Treatments/remove-treatment/remove-treatment.component';
import { FindTreatmentComponent } from './pages/Treatments/find-treatment/find-treatment.component';
import { MentoringComponent } from './pages/mentoring/mentoring.component';
import { MentoringRequestsComponent } from './pages/Mentoring/mentoring-requests/mentoring-requests.component';
import { OpenMentoringRequestComponent } from './pages/Mentoring/mentoring-requests/open-mentoring-request/open-mentoring-request.component';
import { UpdateMentoringRequestDetailsComponent } from './pages/Mentoring/mentoring-requests/update-mentoring-request-details/update-mentoring-request-details.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


//import { BrowserModule } from '@angular/platform-browser';

//import {NoopAnimationPlayer} from '@angular/animations';

//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserAnimationsModule ,NoopAnimationsModule} from '@angular/platform-browser/animations';
//import { BROWSER_NOOP_ANIMATIONS_PROVIDERS } from '@angular/platform-browser/animations/src/providers';


import { InputsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    DatePickerPopupComponent,
    Try1Component,
    TopNav2Component,
    StaffAddComponent,
    FamilyComponent,
    AddFamilyComponent,
    InterviewComponent,
    AddComponent,
    ViewFamilyComponent,
    StuffComponent,
    MentorsComponent,
    TherapistsComponent,
    AdministrativeComponent,
    AddMentorComponent,
    EditMentorComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AddTherapistComponent,
    EditTherapistComponent,
    EmployeesComponent,
    EventsComponent,
    TreatmentsComponent,
    UpdateTreatmentDeatailsComponent,
    AddTreatmentComponent,
    RemoveTreatmentComponent,
    FindTreatmentComponent,
    MentoringComponent,
    MentoringRequestsComponent,
    OpenMentoringRequestComponent,
    UpdateMentoringRequestDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    
   // MDBBootstrapModule.forRoot()
    //NoopAnimationsModule
   /*AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule*/
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
