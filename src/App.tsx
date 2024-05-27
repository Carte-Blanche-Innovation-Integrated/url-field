import UrlField from "./UrlField";
import {socialIconsMap} from './UrlField/social-icons';

console.log(socialIconsMap['google.com']);

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-xl w-full my-4 mx-4">
        {/*<AskUbuntu />*/}
        <UrlField placeholder="Enter any url here..."/>
      </div>
    </div>
  )
}
