import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextComponent } from './components/obj/text/text.component';
import { TextareaComponent } from './components/obj/textarea/textarea.component';
import { HelloComponent } from './hello.component';
import { GroupComponent } from './components/tab/rubrique/group/group.component';
import { RubriqueComponent } from './components/tab/rubrique/rubrique.component';
import { TabComponent } from './components/tab/tab.component';
import { MvaComponent } from './components/obj/mva/mva.component';
import { FormService } from './services/form.service';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PimFormBuilder } from './pim-form-builder';
import { PimFormFactory } from './pim-form-factory';
import { CheckboxModule } from 'primeng/checkbox';
import { GtinDefaultComponent } from './components/obj/gtin-default/gtin-default.component';
import { ChannelComponent } from './components/obj/channel/channel.component';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { ChannelService } from './services/channel.service';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    ButtonModule,
    PanelModule,
    FieldsetModule,
    DividerModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    CalendarModule,
    MessageModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TextComponent,
    TextareaComponent,
    GroupComponent,
    RubriqueComponent,
    TabComponent,
    MvaComponent,
    GtinDefaultComponent,
    ChannelComponent,
  ],
  bootstrap: [AppComponent],
  providers: [FormService, PimFormFactory, ChannelService],
})
export class AppModule {}
