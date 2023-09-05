import {useEffect} from "react";

export default function useLoading() {

    useEffect(() => {
        const element = getElement();
        element.addEventListener('transitionend', () => {
            element.classList.add('d-none');
        });
    }, [])

    function show() {
        const element = getElement();
        element.classList.remove('d-none');
        element.classList.remove('hide');
    }

    function hide() {
        setTimeout(() => {
            const element = getElement();
            element.classList.add('hide');
        }, 1000)
    }

    const getElement = (): HTMLDivElement => document.getElementById('loading') as HTMLDivElement;

    return {
        show,
        hide
    }
}