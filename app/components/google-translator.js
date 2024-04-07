"use client";
import { useEffect, useState, useCallback } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from 'cookies-next';

const GoogleTranslate = () => {
    const languages = [
        { label: 'English', value: '/auto/en' },
        { label: `Русский`, value: '/auto/ru' },
        { label: 'Polski', value: '/auto/pl' },
        { label: 'Español', value: '/auto/es' },
        { label: 'Français', value: '/auto/fr' },
        { label: 'Deutsch', value: '/auto/de' },
        { label: 'Italiano', value: '/auto/it' },
        { label: 'Português', value: '/auto/pt' },
        { label: 'Nederlands', value: '/auto/nl' },
        { label: 'Dansk', value: '/auto/da' },
        { label: 'Svenska', value: '/auto/sv' },
        { label: 'Norsk', value: '/auto/no' },
        { label: 'Suomi', value: '/auto/fi' },
        { label: 'Čeština', value: '/auto/cs' },
        { label: 'Slovenčina', value: '/auto/sk' },
        { label: 'Pусский', value: '/auto/ru' },
        { label: 'Українська', value: '/auto/uk' },
        { label: 'Magyar', value: '/auto/hu' },
        { label: 'Română', value: '/auto/ro' },
        { label: 'Български', value: '/auto/bg' },
        { label: 'Ελληνικά', value: '/auto/el' },
        { label: 'Türkçe', value: '/auto/tr' },
        { label: 'العربية', value: '/auto/ar' },
        { label: 'हिन्दी', value: '/auto/hi' },
        { label: 'ไทย', value: '/auto/th' },
        { label: '中文', value: '/auto/zh-CN' },
        { label: '日本語', value: '/auto/ja' },
        { label: '한국어', value: '/auto/ko' },
        { label: 'Tiếng Việt', value: '/auto/vi' },
        { label: 'Bahasa Indonesia', value: '/auto/id' },
        { label: 'Filipino', value: '/auto/tl' },
        { label: 'Malay', value: '/auto/ms' },
        { label: 'اردو', value: '/auto/ur' },
        { label: 'ਪੰਜਾਬੀ', value: '/auto/pa' },
        { label: 'ગુજરાતી', value: '/auto/gu' },
        { label: 'ଓଡ଼ିଆ', value: '/auto/or' },
        { label: 'বাংলা', value: '/auto/bn' },
        { label: 'தமிழ்', value: '/auto/ta' },
        { label: 'తెలుగు', value: '/auto/te' },
        { label: 'ಕನ್ನಡ', value: '/auto/kn' },
        { label: 'മലയാളം', value: '/auto/ml' },
        { label: 'සිංහල', value: '/auto/si' },
        { label: 'Afrikaans', value: '/auto/af' },
        { label: 'Gaeilge', value: '/auto/ga' },
        { label: 'Kiswahili', value: '/auto/sw' },
        { label: 'தமிழ்', value: '/auto/ta' },
        { label: 'Zulu', value: '/auto/zu' },
        { label: 'Cymraeg', value: '/auto/cy' },
        { label: 'Esperanto', value: '/auto/eo' },
        { label: 'Euskara', value: '/auto/eu' },
        { label: 'Galego', value: '/auto/gl' },
        { label: 'Kreyòl Ayisyen', value: '/auto/ht' },
        { label: 'Hausa', value: '/auto/ha' },
        { label: 'Hmong', value: '/auto/hmn' },
        { label: 'Igbo', value: '/auto/ig' },
        { label: 'Javanese', value: '/auto/jw' },
    ];

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

        // Set the initial value of 'selected' based on the cookie
        if (hasCookie('googtrans')) {
            setSelected(getCookie('googtrans'));
        } else {
            setSelected('/auto/en');
        }
    }, []);

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'auto',
            autoDisplay: false,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    };

    const langChange = useCallback((e, m, evt) => {
        evt.preventDefault();
        setCookie('googtrans', e);
        setSelected(e);
        window.location.reload();
    }, []);

    return (
        <div
            className="-z-50"
        >
            <div id="google_translate_element"></div>
            <SelectPicker
                data={languages}
                style={{ width: 100 }}
                placement="bottomEnd"
                cleanable={false}
                value={selected}
                searchable={false}
                className={'notranslate'}
                menuClassName={'notranslate'}
                onSelect={langChange}
                placeholder="Lang"
            />
        </div>
    );
};

export default GoogleTranslate;