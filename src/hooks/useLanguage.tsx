import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // App Coming Soon Section
        'app.title1': 'NEW QUEST',
        'app.title2': 'UNLOCKING',
        'app.subtitle': 'Your pocket-sized training companion is loading...',
        'app.levelUp': 'LEVEL UP',
        'app.fitnessApp': 'FITNESS APP',
        'app.loading': 'LOADING...',
        'app.progressXp': 'Progress XP',
        'app.progressXpDesc': 'Track your level ups',
        'app.achievements': 'Achievements',
        'app.achievementsDesc': 'Unlock epic rewards',
        'app.downloadOn': 'Download on',
        'app.appStore': 'App Store',
        'app.getItOn': 'Get it on',
        'app.googlePlay': 'Google Play',
        'app.soon': 'SOON',
        'app.getLaunchNotification': 'Get Launch Notification',
        'app.enterEmail': 'Enter your email',
        'app.notifyMe': 'NOTIFY ME',
        'app.achievementUnlocked': 'ACHIEVEMENT UNLOCKED!',
        'app.firstToKnow': "You'll be first to know when we launch",
        // Footer
        'footer.poweredBy': 'Powered by',
        'footer.allRights': 'All Rights Reserved',
    },
    ar: {
        // App Coming Soon Section
        'app.title1': 'مهمة جديدة',
        'app.title2': 'قيد التحميل',
        'app.subtitle': 'رفيق التدريب المحمول في طريقه إليك...',
        'app.levelUp': 'ارتقِ بمستواك',
        'app.fitnessApp': 'تطبيق اللياقة',
        'app.loading': 'جاري التحميل...',
        'app.progressXp': 'نقاط الخبرة',
        'app.progressXpDesc': 'تتبع تقدمك',
        'app.achievements': 'الإنجازات',
        'app.achievementsDesc': 'افتح المكافآت',
        'app.downloadOn': 'حمّل من',
        'app.appStore': 'آب ستور',
        'app.getItOn': 'احصل عليه من',
        'app.googlePlay': 'جوجل بلاي',
        'app.soon': 'قريباً',
        'app.getLaunchNotification': 'احصل على إشعار الإطلاق',
        'app.enterEmail': 'أدخل بريدك الإلكتروني',
        'app.notifyMe': 'أعلمني',
        'app.achievementUnlocked': 'تم فتح إنجاز!',
        'app.firstToKnow': 'ستكون أول من يعلم عند الإطلاق',
        // Footer
        'footer.poweredBy': 'بدعم من',
        'footer.allRights': 'جميع الحقوق محفوظة',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        // Check browser language or localStorage
        const saved = localStorage.getItem('language') as Language;
        if (saved && (saved === 'en' || saved === 'ar')) {
            setLanguage(saved);
        } else {
            const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
            setLanguage(browserLang);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL: language === 'ar' }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
