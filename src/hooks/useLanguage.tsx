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
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.training': 'Training',
        'nav.transformations': 'Transformations',
        'nav.xpSystem': 'XP System',
        'nav.contact': 'Contact',

        // Home Page
        'home.levelUp': 'Level Up',
        'home.yourLife': 'Your Life',
        'home.withCoach': 'With Coach Moumen',
        'home.heroSubtitle': 'Transform your fitness journey into an epic adventure',
        'home.startJourney': 'Start Your Journey',
        'home.viewPrograms': 'View Programs',
        'home.statsTitle': 'Your Stats',
        'home.totalXpGained': 'Total XP Gained',
        'home.activeWarriors': 'Active Warriors',
        'home.successRate': 'Success Rate',
        'home.bossBattlesWon': 'Boss Battles Won',
        'home.readyToLevel': 'Ready to level up?',
        'home.joinUs': 'Join thousands of warriors',

        // About Page
        'about.title': 'About Coach Moumen',
        'about.subtitle': 'Your Guide to the Next Level',
        'about.story': 'My Story',
        'about.philosophy': 'Training Philosophy',
        'about.experience': 'Experience',
        'about.certifications': 'Certifications',

        // Services Page
        'services.title': 'Choose Your Path',
        'services.subtitle': 'Select your training tier and unlock your full potential',
        'services.instantStart': 'Instant Start',
        'services.provenResults': 'Proven Results',
        'services.support247': '24/7 Support',
        'services.mostPopular': 'MOST POPULAR',
        'services.bestValue': 'BEST VALUE',
        'services.whatsIncluded': "What's Included",
        'services.startQuest': 'Start Your Quest',
        'services.xpBonus': 'XP Bonus',
        'services.customQuest': 'Need Something Custom?',
        'services.customDescription': "Let's craft a unique training protocol tailored specifically to your goals, schedule, and preferences.",
        'services.createCustom': 'Create Custom Quest',
        'services.warriorsTrained': 'Warriors Trained',
        'services.yearsExperience': 'Years Experience',

        // Plans
        'plans.1month': '1 Month Quest',
        'plans.1monthSub': 'Begin Your Legend',
        'plans.3months': '3 Months Protocol',
        'plans.3monthsSub': 'Forge Your Power',
        'plans.6months': '6 Months System',
        'plans.6monthsSub': 'Master Your Destiny',
        'plans.12months': '12 Months Legendary',
        'plans.12monthsSub': 'Become Immortal',
        'plans.novice': 'Novice',
        'plans.warrior': 'Warrior',
        'plans.elite': 'Elite',
        'plans.legendary': 'Legendary',

        // Training Page
        'training.title': 'Training Programs',
        'training.subtitle': 'Elite coaching for every level',
        'training.startTraining': 'Start Training',

        // XP System Page
        'xp.title': 'XP System',
        'xp.subtitle': 'Track your progress and unlock rewards',
        'xp.levelsAndTitles': 'Levels & Titles',
        'xp.howToEarnXp': 'How to Earn XP',
        'xp.earnXp': 'Earn XP',
        'xp.levelUp': 'Level Up',
        'xp.unlockRewards': 'Unlock Rewards',
        'xp.viewArsenal': 'View Full Arsenal',
        'xp.scroll': 'Scroll',
        'xp.currentLevel': 'Current Level',
        'xp.reward': 'Reward',
        'xp.rule1': 'Start at Level 1 when you subscribe to any package',
        'xp.rule2': 'Each package grants you XP to help you progress',
        'xp.rule3': 'Every 10 levels, unlock a new title and special rewards',
        'xp.rule4': 'Track your progress and compete with others on our Leaderboard',
        // Level Tier Titles
        'xp.tier.fitnessNovice': 'Fitness Novice',
        'xp.tier.maWarrior': 'MA Warrior',
        'xp.tier.eliteTrainee': 'Elite Trainee',
        'xp.tier.maLegend': 'MA Legend',
        'xp.tier.fitnessLeader': 'Fitness Leader',
        'xp.tier.maKnight': 'MA Knight',
        'xp.tier.victoryMaster': 'Victory Master',
        'xp.tier.maChampion': 'MA Champion',
        'xp.tier.fitnessBeast': 'Fitness Beast',
        'xp.tier.maLegendElite': 'MA Legend Elite',
        'xp.tier.supremeWarrior': 'Supreme Warrior',
        'xp.tier.captainMA': 'Captain MA',
        // Level Tier Rewards
        'xp.reward.gaining': 'Gaining exercise experience',
        'xp.reward.warriorTshirt': 'Special MA Warrior T-shirt',
        'xp.reward.hoodie': 'MA Hoodie for distinguished players',
        'xp.reward.specialTshirt': 'Special Edition MA T-shirt',
        'xp.reward.limitedHoodie': 'Limited Edition MA Hoodie',
        'xp.reward.newDesign': 'New Design MA T-shirt',
        'xp.reward.levelHoodie': 'Level-specific MA Hoodie',
        'xp.reward.exclusiveTshirt': 'Exclusive Design MA T-shirt',
        'xp.reward.champHoodie': 'Champions MA Hoodie',
        'xp.reward.topTshirt': 'Top-tier MA T-shirt',
        'xp.reward.vipHoodie': 'VIP Edition MA Hoodie',
        'xp.reward.captain': 'Exclusive to Captain Moumen (MA)',

        // Contact Page
        'contact.joinAdventure': 'Join The Adventure',
        'contact.heroSubtitle': 'Connect with Coach Moumen and start your fitness journey today',
        'contact.title': 'Contact Us',
        'contact.partnerOrJoin': 'Partner with us or join our team',
        'contact.startApplication': 'Start Application',
        'contact.yourName': 'Your Name',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.message': 'Your Message',
        'contact.requestType': 'Request Type',
        'contact.partnership': 'Partnership',
        'contact.jobApplication': 'Job Application',
        'contact.position': 'Position Applied For',
        'contact.experience': 'Years of Experience',
        'contact.submit': 'Submit Application',
        'contact.sending': 'Sending...',
        'contact.followUs': 'Follow Us',

        // Footer
        'footer.poweredBy': 'Powered by',
        'footer.allRights': 'All Rights Reserved',
        'footer.quickLinks': 'Quick Links',
        'footer.followUs': 'Follow Us',

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

        // Common
        'common.learnMore': 'Learn More',
        'common.viewAll': 'View All',
        'common.getStarted': 'Get Started',
        'common.contactUs': 'Contact Us',
    },
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.about': 'عن المدرب',
        'nav.services': 'الخدمات',
        'nav.training': 'التدريب',
        'nav.transformations': 'التحولات',
        'nav.xpSystem': 'نظام XP',
        'nav.contact': 'تواصل معنا',

        // Home Page
        'home.levelUp': 'ارتقِ',
        'home.yourLife': 'بحياتك',
        'home.withCoach': 'مع الكابتن مؤمن',
        'home.heroSubtitle': 'حوّل رحلة لياقتك إلى مغامرة ملحمية',
        'home.startJourney': 'ابدأ رحلتك',
        'home.viewPrograms': 'عرض البرامج',
        'home.statsTitle': 'إحصائياتك',
        'home.totalXpGained': 'إجمالي نقاط الخبرة',
        'home.activeWarriors': 'المحاربون النشطون',
        'home.successRate': 'معدل النجاح',
        'home.bossBattlesWon': 'معارك الزعماء المنتصرة',
        'home.readyToLevel': 'مستعد للارتقاء؟',
        'home.joinUs': 'انضم لآلاف المحاربين',

        // About Page
        'about.title': 'عن الكابتن مؤمن',
        'about.subtitle': 'مرشدك للمستوى التالي',
        'about.story': 'قصتي',
        'about.philosophy': 'فلسفة التدريب',
        'about.experience': 'الخبرة',
        'about.certifications': 'الشهادات',

        // Services Page
        'services.title': 'اختر طريقك',
        'services.subtitle': 'اختر مستوى تدريبك وأطلق كامل إمكانياتك',
        'services.instantStart': 'بداية فورية',
        'services.provenResults': 'نتائج مثبتة',
        'services.support247': 'دعم على مدار الساعة',
        'services.mostPopular': 'الأكثر شعبية',
        'services.bestValue': 'أفضل قيمة',
        'services.whatsIncluded': 'ما يشمله البرنامج',
        'services.startQuest': 'ابدأ مهمتك',
        'services.xpBonus': 'مكافأة XP',
        'services.customQuest': 'تحتاج شيء مخصص؟',
        'services.customDescription': 'دعنا نصمم برنامج تدريب فريد مصمم خصيصاً لأهدافك وجدولك وتفضيلاتك.',
        'services.createCustom': 'إنشاء مهمة مخصصة',
        'services.warriorsTrained': 'محاربون تم تدريبهم',
        'services.yearsExperience': 'سنوات الخبرة',

        // Plans
        'plans.1month': 'مهمة شهر واحد',
        'plans.1monthSub': 'ابدأ أسطورتك',
        'plans.3months': 'بروتوكول 3 أشهر',
        'plans.3monthsSub': 'اصقل قوتك',
        'plans.6months': 'نظام 6 أشهر',
        'plans.6monthsSub': 'أتقن مصيرك',
        'plans.12months': 'الأسطوري 12 شهر',
        'plans.12monthsSub': 'كن خالداً',
        'plans.novice': 'مبتدئ',
        'plans.warrior': 'محارب',
        'plans.elite': 'نخبة',
        'plans.legendary': 'أسطوري',

        // Training Page
        'training.title': 'برامج التدريب',
        'training.subtitle': 'تدريب نخبوي لكل المستويات',
        'training.startTraining': 'ابدأ التدريب',

        // XP System Page
        'xp.title': 'نظام نقاط الخبرة',
        'xp.subtitle': 'تتبع تقدمك وافتح المكافآت',
        'xp.levelsAndTitles': 'المستويات والألقاب',
        'xp.howToEarnXp': 'كيف تكسب XP',
        'xp.earnXp': 'اكسب XP',
        'xp.levelUp': 'ارتقِ بمستواك',
        'xp.unlockRewards': 'افتح المكافآت',
        'xp.viewArsenal': 'عرض الترسانة الكاملة',
        'xp.scroll': 'مرر',
        'xp.currentLevel': 'المستوى الحالي',
        'xp.reward': 'المكافأة',
        'xp.rule1': 'ابدأ من المستوى 1 عند الاشتراك في أي باقة',
        'xp.rule2': 'كل باقة تمنحك نقاط XP لمساعدتك على التقدم',
        'xp.rule3': 'كل 10 مستويات، افتح لقب جديد ومكافآت خاصة',
        'xp.rule4': 'تتبع تقدمك وتنافس مع الآخرين في لوحة المتصدرين',
        // Level Tier Titles
        'xp.tier.fitnessNovice': 'مبتدئ اللياقة',
        'xp.tier.maWarrior': 'محارب MA',
        'xp.tier.eliteTrainee': 'متدرب النخبة',
        'xp.tier.maLegend': 'أسطورة MA',
        'xp.tier.fitnessLeader': 'قائد اللياقة',
        'xp.tier.maKnight': 'فارس MA',
        'xp.tier.victoryMaster': 'سيد النصر',
        'xp.tier.maChampion': 'بطل MA',
        'xp.tier.fitnessBeast': 'وحش اللياقة',
        'xp.tier.maLegendElite': 'أسطورة MA النخبة',
        'xp.tier.supremeWarrior': 'المحارب الأعلى',
        'xp.tier.captainMA': 'كابتن MA',
        // Level Tier Rewards
        'xp.reward.gaining': 'اكتساب خبرة التمارين',
        'xp.reward.warriorTshirt': 'تيشيرت MA Warrior خاص',
        'xp.reward.hoodie': 'هودي MA للاعبين المتميزين',
        'xp.reward.specialTshirt': 'تيشيرت MA إصدار خاص',
        'xp.reward.limitedHoodie': 'هودي MA إصدار محدود',
        'xp.reward.newDesign': 'تيشيرت MA تصميم جديد',
        'xp.reward.levelHoodie': 'هودي MA خاص بالمستوى',
        'xp.reward.exclusiveTshirt': 'تيشيرت MA تصميم حصري',
        'xp.reward.champHoodie': 'هودي الأبطال MA',
        'xp.reward.topTshirt': 'تيشيرت MA من الدرجة الأولى',
        'xp.reward.vipHoodie': 'هودي VIP MA',
        'xp.reward.captain': 'حصري للكابتن مؤمن (MA)',

        // Contact Page
        'contact.joinAdventure': 'انضم للمغامرة',
        'contact.heroSubtitle': 'تواصل مع الكابتن مؤمن وابدأ رحلة لياقتك اليوم',
        'contact.title': 'تواصل معنا',
        'contact.partnerOrJoin': 'شاركنا أو انضم لفريقنا',
        'contact.startApplication': 'ابدأ التقديم',
        'contact.yourName': 'اسمك',
        'contact.email': 'البريد الإلكتروني',
        'contact.phone': 'الهاتف',
        'contact.message': 'رسالتك',
        'contact.requestType': 'نوع الطلب',
        'contact.partnership': 'شراكة',
        'contact.jobApplication': 'طلب توظيف',
        'contact.position': 'الوظيفة المطلوبة',
        'contact.experience': 'سنوات الخبرة',
        'contact.submit': 'تقديم الطلب',
        'contact.sending': 'جاري الإرسال...',
        'contact.followUs': 'تابعنا',

        // Footer
        'footer.poweredBy': 'بدعم من',
        'footer.allRights': 'جميع الحقوق محفوظة',
        'footer.quickLinks': 'روابط سريعة',
        'footer.followUs': 'تابعنا',

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

        // Common
        'common.learnMore': 'اعرف المزيد',
        'common.viewAll': 'عرض الكل',
        'common.getStarted': 'ابدأ الآن',
        'common.contactUs': 'تواصل معنا',
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
