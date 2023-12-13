
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
resources: {
en: {
    translation: {
    navHome:"Home",
    navCompiler:"Compiler",
    navHackathon:"Hackathon",
    navTechNews:"Tech News",
    navLanguage:"Language",
    navLanguageDropdown1:"English (Default)",
    navLanguageDropdown2:"Hindi",
    navLanguageDropdown3:"Kannada",
    brandName:"codeVista",
    footerBrandCaption:"Decoding Complexity Crafting Simplicity",
    footerFeedback:"Feedback",
    footerContactUs:"Contact Us",
    footerFollowUs:"Follow Us",
    homeAvailableFor:"Available for",
    homeAboutUs:"About Us",
    homeOurMission:"Our Mission",
    homeOurMissionText:"At codeVISTA, our mission is to create a dynamic online space where coders of all levels and backgrounds can come together to learn, create, and collaborate. We aim to provide a seamless and powerful code compilation experience that transcends barriers, making coding accessible to everyone. Through our vibrant community, we aspire to foster knowledge sharing, mentorship, and a sense of belonging among coders worldwide. Our commitment is to empower individuals to turn their code into impactful solutions, driving innovation and excellence in the ever-evolving world of technology.",
    homeOurVision:"Our Vision",
    homeOurTeam:"Our Team",
    compilerTextAreaPlaceholder1:"Enter your code here",
    compilerTextAreaPlaceholder2:"Code-output",
    compilerTextAreaPlaceholder3:"AI-output",
    compilerLanguageDropDownMenu:"Select Language",
    compilerButton1:"Run",
    compilerButton2:"Clear",
    compilerButton3:"Ask AI",
    hackathonTop:"Top-hackathons",
    technewsTop:"Top-Tech News",

    },
},
hindi: {
    translation: {
    navHome:"घर",
    navCompiler:"कंपाइलर",
    navHackathon:"हैकाथॉन",
    navTechNews:"तकनीकी समाचार",
    navLanguage:"भाषा",
    navLanguageDropdown1:"अंग्रेजी (डिफ़ॉल्ट)",
    navLanguageDropdown2:"हिंदी",
    navLanguageDropdown3:"कन्नडा",
    brandName:"कोडविस्टा",
    footerBrandCaption:"डिकोडिंग जटिलता क्राफ्टिंग सादगी",
    footerFeedback:"प्रतिपुष्टि",
    footerContactUs:"संपर्क करें",
    footerFollowUs:"हमें फ़ॉलो करें",
    homeAvailableFor:"उपलब्ध है सिर्फ",
    homeAboutUs:"हमारे बारे में",
    homeOurMission:"हमारा मिशन",
    homeOurMissionText:"कोडविस्टा में, हमारा मिशन एक गतिशील ऑनलाइन स्थान बनाना है जहां सभी स्तरों और पृष्ठभूमि के कोडर सीखने, बनाने और सहयोग करने के लिए एक साथ आ सकें। हमारा लक्ष्य एक सहज और शक्तिशाली कोड संकलन अनुभव प्रदान करना है जो बाधाओं को पार करता है, कोडिंग को सभी के लिए सुलभ बनाता है। अपने जीवंत समुदाय के माध्यम से, हम दुनिया भर में कोडर्स के बीच ज्ञान साझा करने, सलाह देने और अपनेपन की भावना को बढ़ावा देने की आकांक्षा रखते हैं। हमारी प्रतिबद्धता व्यक्तियों को अपने कोड को प्रभावशाली समाधानों में बदलने, प्रौद्योगिकी की लगातार विकसित हो रही दुनिया में नवाचार और उत्कृष्टता लाने के लिए सशक्त बनाना है।",
    homeOurVision:"हमारी दृष्टि",
    homeOurTeam:"हमारी टीम",
    compilerTextAreaPlaceholder1:"यहां अपना कोड दर्ज करें",
    compilerTextAreaPlaceholder2:"कोड-आउटपुट",
    compilerTextAreaPlaceholder3:"एआई-आउटपुट",
    compilerLanguageDropDownMenu:"भाषा चुने",
    compilerButton1:"चलाना",
    compilerButton2:"सभी हटाएं",
    compilerButton3:"एआई से पूछें",
    hackathonTop:"टॉप-हैकथॉन",
    technewsTop:"शीर्ष तकनीकी समाचार",



    },
},
kannada: {
    translation: {
    navHome:"ಮುಖಪುಟ",
    navCompiler:"ಕಂಪೈಲರ್",
    navHackathon:"ಹ್ಯಾಕಥಾನ್",
    navTechNews:"ತಾಂತ್ರಿಕ ಸುದ್ದಿ",
    navLanguage:"ಭಾಷೆ",
    navLanguageDropdown1:"ಇಂಗ್ಲೀಷ್ (ಡೀಫಾಲ್ಟ್)",
    navLanguageDropdown2:"ಹಿಂದಿ",
    navLanguageDropdown3:"ಕನ್ನಡ",
    brandName:"ಕೋಡ್ವಿಸ್ಟಾ",
    footerBrandCaption:"ಡಿಕೋಡಿಂಗ್ ಸಂಕೀರ್ಣತೆ ಕರಕುಶಲತೆ ಸರಳತೆ",
    footerFeedback:"ಪ್ರತಿಕ್ರಿಯೆ",
    footerContactUs:"ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    footerFollowUs:"ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
    homeAvailableFor:"ಇದಕ್ಕಾಗಿ ಲಭ್ಯವಿದೆ",
    homeAboutUs:"ನಮ್ಮ ಬಗ್ಗೆ",
    homeOurMission:"ನಮ್ಮ ಮಿಷನ್",
    homeOurMissionText:"ಕೋಡ್ವಿಸ್ಟಾದಲ್ಲಿ, ಎಲ್ಲಾ ಹಂತಗಳು ಮತ್ತು ಹಿನ್ನೆಲೆಗಳ ಕೋಡರ್ಗಳು ಕಲಿಯಲು, ರಚಿಸಲು ಮತ್ತು ಸಹಕರಿಸಲು ಒಟ್ಟಿಗೆ ಬರಬಹುದಾದ ಕ್ರಿಯಾತ್ಮಕ ಆನ್ಲೈನ್ ಸ್ಥಳವನ್ನು ರಚಿಸುವುದು ನಮ್ಮ ಧ್ಯೇಯವಾಗಿದೆ. ಅಡೆತಡೆಗಳನ್ನು ಮೀರಿ, ಕೋಡಿಂಗ್ ಅನ್ನು ಎಲ್ಲರಿಗೂ ಪ್ರವೇಶಿಸುವಂತೆ ಮಾಡುವ ತಡೆರಹಿತ ಮತ್ತು ಶಕ್ತಿಯುತ ಕೋಡ್ ಸಂಕಲನ ಅನುಭವವನ್ನು ಒದಗಿಸುವ ಗುರಿಯನ್ನು ನಾವು ಹೊಂದಿದ್ದೇವೆ. ನಮ್ಮ ರೋಮಾಂಚಕ ಸಮುದಾಯದ ಮೂಲಕ, ವಿಶ್ವಾದ್ಯಂತ ಕೋಡರ್ ಗಳ ನಡುವೆ ಜ್ಞಾನ ಹಂಚಿಕೆ, ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸ್ವಂತಿಕೆಯ ಭಾವನೆಯನ್ನು ಬೆಳೆಸಲು ನಾವು ಬಯಸುತ್ತೇವೆ. ನಿರಂತರವಾಗಿ ವಿಕಸನಗೊಳ್ಳುತ್ತಿರುವ ತಂತ್ರಜ್ಞಾನದ ಜಗತ್ತಿನಲ್ಲಿ ನಾವೀನ್ಯತೆ ಮತ್ತು ಉತ್ಕೃಷ್ಟತೆಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಮೂಲಕ ತಮ್ಮ ಕೋಡ್ ಅನ್ನು ಪರಿಣಾಮಕಾರಿ ಪರಿಹಾರಗಳಾಗಿ ಪರಿವರ್ತಿಸಲು ವ್ಯಕ್ತಿಗಳನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು ನಮ್ಮ ಬದ್ಧತೆಯಾಗಿದೆ.",
    homeOurVision:"ನಮ್ಮ ದೃಷ್ಟಿಕೋನ",
    homeOurTeam:"ನಮ್ಮ ತಂಡ",
    compilerTextAreaPlaceholder1:"ನಿಮ್ಮ ಕೋಡ್ ಅನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ",
    compilerTextAreaPlaceholder2:"ಕೋಡ್ ಔಟ್ಪುಟ್",
    compilerTextAreaPlaceholder3:"ಕೋಡ್-ಔಟ್ಪುಟ್",
    compilerLanguageDropDownMenu:"ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    compilerButton1:"ಓಡು",
    compilerButton2:"ಸ್ಪಷ್ಟ",
    compilerButton3:"AI ಅನ್ನು ಕೇಳಿ",
    hackathonTop:"ಟಾಪ್-ಹ್ಯಾಕಥಾನ್‌ಗಳು",
    technewsTop:"ಶೀರ್ಷ ತಕನೀಕಿ ಸಮಾಚಾರ",



    },
},


},
fallbackLng: "en", 
interpolation: {
escapeValue: false, 
},
});

export default i18n;
