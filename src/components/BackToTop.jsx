import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 cursor-pointer right-6 z-50 bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-white p-3 rounded-full shadow-lg transition hover:scale-110"
                aria-label="Back to top"
            >
                <ArrowUp size={20} />
            </button>
        )
    );
};

export default BackToTop;
