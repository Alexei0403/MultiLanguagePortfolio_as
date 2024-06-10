import { useEffect } from "react";

const LoadingPage = () => {

    useEffect(() => {

        // HIDDEN THE LOADER PAGE
        const loaderPage = document.querySelector('.loader-page');

        if (loaderPage != null) {

            loaderPage.classList.add('loaded');

            setTimeout(() => { loaderPage.remove() }, 1000);

        }

    }, []);


    return (

        <div className="loader-page">
            <div className="whirly-loader"></div>
        </div>

    );

}

export default LoadingPage;