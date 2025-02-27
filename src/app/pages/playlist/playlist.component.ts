import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlaylistService} from "../../services/playlist.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})

export class PlaylistComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'id', 'artist', 'title', 'album'];
  public trackList: any[] = [];
  public preview: string = '';

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getPlaylists();
  }

  getPlaylists() {
    this.playlistService.getPlaylist().subscribe(data => {
      this.trackList = data?.tracks?.data;
    });
  }

  onSelectMusic(track: any) {
    if (track && track.preview) {
      this.preview = track.preview;

      setTimeout(() => {
        if (this.audioPlayer) {
          const audioElement = this.audioPlayer.nativeElement;
          audioElement.pause()
          audioElement.src = this.preview;
          audioElement.load();
          audioElement.play();
        }
      }, 50);
    }
  }

}
