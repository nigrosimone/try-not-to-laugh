
export class FacebookService {
      private fb;
      constructor(){
          this.fb = (window as any).FB;
      }

      inviteAFriend(): void  {
        this.fb.ui({
          method: 'send',
          link: 'https://try-not-to-laugh.herokuapp.com/',
        });
      }

}
