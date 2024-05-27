import UrlField from './UrlField';
import {socialIconsMap} from './UrlField/social-icons';

console.log(socialIconsMap['google.com']);

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-4 my-4 w-full max-w-xl">
        {/*<AskUbuntu />*/}
        <UrlField placeholder="Enter any url here..." />
      </div>
    </div>
  );
}
