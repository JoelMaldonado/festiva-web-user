import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'socialNetworkPipe',
})
export class SocialNetworkPipe implements PipeTransform {
  transform(socialNetworkId: number): unknown {
    switch (socialNetworkId) {
      case 1:
        return 'Facebook';
      case 2:
        return 'Instagram';
      case 3:
        return 'Snapchat';
      case 4:
        return 'TikTok';
      case 5:
        return 'Twitter';
      case 6:
        return 'SoundCloud';
      default:
        return 'unknown';
    }
  }
}
