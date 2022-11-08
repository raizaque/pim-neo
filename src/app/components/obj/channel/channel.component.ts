import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { ChannelModel, StateChannelEnum } from '../../../models/model';
import { ChannelService } from '../../../services/channel.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
})
export class ChannelComponent implements OnInit {
  @Input() form: FormControl;

  constructor(private channelService: ChannelService) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        tap((x: ChannelModel) => {
          x.state =
            x.dateTo && x.dateFrom
              ? StateChannelEnum.PUBLISHED
              : StateChannelEnum.NOT_PUBLISHED;
          this.form.setValue(x, { emitEvent: false });
          this.channelService.add(x, this.form.parent);
        })
      )
      .subscribe();
  }
}
