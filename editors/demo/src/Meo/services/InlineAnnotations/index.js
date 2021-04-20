// import CodeService from "./CodeService/CodeService";
import MeoEmphasisService from "./MeoEmphasisService/MeoEmphasisService";
import MeoStrongService from "./MeoStrongService/MeoStrongService";
import MeoStrongerService from "./MeoStrongerService/MeoStrongerService";
import AcronymService from "./AcronymService/AcronymService";
import BoldService from "./GenericBoldService/BoldService";
import ItalicService from "./GenericItalicService/ItalicService";
import RomanNumeralService from "./RomanNumeralService/RomanNumeralService";
// import SubscriptService from "./SubscriptService/SubscriptService";
// import SuperscriptService from "./SuperscriptService/SuperscriptService";
// import StrikeThroughService from "./StrikeThroughService/StrikeThroughService";
// import UnderlineService from "./UnderlineService/UnderlineService";
// import SmallCapsService from "./SmallCapsService/SmallCapsService";

export default [
  // new CodeService(),
  // the next 3 services must come before BoldService and ItalicService
  new MeoEmphasisService(),
  new MeoStrongService(),
  new MeoStrongerService(),
  new AcronymService(),
  new BoldService(),
  new ItalicService(),
  new RomanNumeralService(),
  // new SubscriptService(),
  // new SuperscriptService(),
  // new StrikeThroughService(),
  // new UnderlineService(),
  // new SmallCapsService()
];
