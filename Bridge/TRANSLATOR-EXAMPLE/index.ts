import { ContentManager } from "./interface/content-manager";
import { TranslatorBridge } from "./interface/translator";
import { AppContent } from "./services/app-content";
import { EmailContent } from "./services/email-content";
import { WebContent } from "./services/web-content";
import { EnglishTranslator } from "./translators/english-translator";
import { KoreanTranslator } from "./translators/korean-translator";
import { SpanishTranslator } from "./translators/spanish-traslator";

enum ContentType{
  WEB = 'web',
  APP = 'app',
  EMAIL = 'email'
}

enum Languages{
  ENGLISH = 'english',
  KOREAN = 'korean',
  SPANISH = 'spanish'
}

// function manageContentTranslator(text: string, language: Languages, contentType: ContentType):string {
//   let l: TranslatorBridge;
//   let content: ContentManager;

//   switch (language) {
//     case Languages.ENGLISH: {
//       l = new EnglishTranslator()
//       break;
//     }
//     case Languages.KOREAN: {
//       l = new KoreanTranslator()
//       break;
//     }
//     default: {
//       l = new SpanishTranslator()
//     }  
//   }

//   switch (contentType) {
//         case ContentType.APP: {
//           content = new AppContent(text, l);
//           break;
//         }
//         case ContentType.EMAIL: {
//           content = new EmailContent(text, l);
//           break;
//         }
//         default: {
//           content = new WebContent(text, l);
//         }
//       }
//     return content.translateText();
  
// }

function manageContentTranslator(text: string, language: Languages, contentType: ContentType): string {
  
const translators = {
  [Languages.ENGLISH]: () => new EnglishTranslator(),
  [Languages.KOREAN]: () => new KoreanTranslator(),
  [Languages.SPANISH]: () => new SpanishTranslator(),
};

const contentManagers = {
  [ContentType.APP]: (text: string, translator: TranslatorBridge) => new AppContent(text, translator),
  [ContentType.EMAIL]: (text: string, translator: TranslatorBridge) => new EmailContent(text, translator),
  [ContentType.WEB]: (text: string, translator: TranslatorBridge) => new WebContent(text, translator),
};

const translator = translators[language](); // Se instancia solo el necesario
const content = contentManagers[contentType](text, translator);
return content.translateText();

}

const text = 'Hola, esto es un texto';


console.log(manageContentTranslator(text, Languages.KOREAN, ContentType.APP));
console.log(manageContentTranslator(text, Languages.ENGLISH, ContentType.EMAIL));
console.log(manageContentTranslator(text, Languages.SPANISH, ContentType.APP));
console.log(manageContentTranslator(text, Languages.KOREAN, ContentType.WEB));
