var buttons = document.getElementsByClassName("buttons1");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.getElementById('toggleMode');
    const toggleLanguageButton = document.getElementById('toggleLanguage');
    
    toggleModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
    
    toggleLanguageButton.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        document.documentElement.lang = newLang;
        updateTextContent(newLang);

        if (newLang === 'ar') {
            document.body.classList.add('rtl');
            document.querySelector('.side').classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
            document.querySelector('.side').classList.remove('rtl');
        }
    });

    function updateTextContent(newLang) {
        const langMap = {
            'en': {
                title: 'Floosy',
                logo: 'Floosy',
                home: 'Home',
                about: 'About',
                features: 'Features',
                getStarted: 'Get Started',
                readMore: 'Read More',
                login: 'Login',
                register: 'Register',
                highlighted: 'Easiest ',
                easiestWay: ' way to manage your finance.',
                goodbye: 'Say goodbye for spreadsheets and other boring products!'
            },
            'ar': {
                title: 'فلوسي',
                logo: 'فلوسي',
                home: 'الرئيسية',
                about: 'حول',
                features: 'الميزات',
                login: 'تسجيل الدخول',
                register: 'انشاء حساب',
                highlighted: 'أسهل ',
                easiestWay: ' وسيلة لإدارة أموالك.',
                goodbye: '!قل وداعا للجداول والتطبيقات المملة',
                getStarted: 'ابدأ الآن',
                readMore: 'تعرف على المزيد'
            }
        };
        let texts = document.querySelectorAll('[data-lang]');
        for (let i = 0; i < texts.length; i++)
        {
            let key = texts[i].getAttribute('data-lang');
            texts[i].innerHTML = langMap[newLang][key];
        }
        
    }
});