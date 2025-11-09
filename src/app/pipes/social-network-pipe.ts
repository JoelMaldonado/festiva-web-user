import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'socialNetworkPipe',
})
export class SocialNetworkPipe implements PipeTransform {
  transform(socialNetworkId: number): unknown {
    switch (socialNetworkId) {
      case 1:
        return 'facebook';
      case 2:
        return 'twitter';
      case 3:
        return 'instagram';
      case 4:
        return 'linkedin';
      case 5:
        return 'youtube';
      case 6:
        return 'tiktok';
      default:
        return 'unknown';
    }
  }
}
