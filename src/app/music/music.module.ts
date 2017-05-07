import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicSearchComponent } from './music-search/music-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusicDetailsComponent, MusicFooterComponent, MusicPlayerComponent, MusicProgressComponent, MusicSearchComponent]
})
export class MusicModule { }
