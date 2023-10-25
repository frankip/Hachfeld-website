import React from 'react';
import Footer from './Footer';
import { useState } from 'react';

function Resources() {
   
    const cardContent = [
        {
            title: "Desalination Technologies: Reverse Osmosis (RO) Explained",
            description: "Some of the applications of RO include: seawater or brackish water desalination , Wastewater Recovery, Food and Beverage Processing, Biomedical Separation, Home Beverage Purification Water and Industrial process water. RO is also commonly used in the production of ultrapure water, used in the semiconductor industry, power industry (boiler water supply) and medical/lab applications. How Reverse …",
            imageSrc: "https://i0.wp.com/hachfeld.co.ke/wp-content/uploads/2022/05/Reverse-Osmosis-RO-membranes-by-hachfeld-scaled.jpg?w=1200&ssl=1",
        },
        {
            title: "Hach Automatic Titrators by Hachfeld Limited.",
            description: "The Hach Automatic Titrators are one-touch, automatic laboratory analyzers covering both Potentiometric Titration (AT1000 Series) and Karl Fischer Volumetric Titration (KF1000 Series). They help you determine the unknown concentrations of your samples by simply adding your sample, pressing the button, and reading your titration results.",
            imageSrc: "https://i0.wp.com/hachfeld.co.ke/wp-content/uploads/2022/03/Hach_s-TitraLab-AT1000-By-Hachfeld-Limited-IMG2.jpg?w=600&ssl=1",
        },
        {
            title: "Hach DR300 Pocket Colorimeter for Chlorine Testing by Hachfeld Limited.",
            description: "HACH DR300 is a pocket colorimeter that makes chlorine testing and monitoring fast and easy. The equipment measures both free and total chorine in the range of 0.02mg/l to 8.0 mg/l.",
            imageSrc: "https://i0.wp.com/hachfeld.co.ke/wp-content/uploads/2022/03/Hach-DR300-Pocket-Colorimeter-Hachfeld-1.jpg?w=600&ssl=1",
        },
        {
            title: "Limescale. Magnetic® Scale Transformer Limescale Treatment Solution for boilers by Hachfeld Limited",
            description: "What is Limescale? Limescale is a combination of magnesium and calcium deposits formed when hard water evaporates. Left unchecked, limescale deposits can lead to heat transfer losses in addition to attracting expensive repairs coupled with equipment downtime. How does it work? When water flows through the Magnetic® Scale Transformer, it passes through a strong magnetic …",
            imageSrc: "https://i0.wp.com/hachfeld.co.ke/wp-content/uploads/2022/03/limescale-magnetic-scale-transformer-by-hachfeld-kenya.jpg?w=1161&ssl=1",
        },
        {
            title: "Introducing Hach`s HQ Series Multiparameter meters by Hachfeld Limited.",
            description: "Confused by the diversity of pH meter models? Looking for a meter that anyone can run successful calibrations? Curious about discovering the benefits of using innovative SMART sensors? There are dozens of water quality portable and laboratory meters on the market. Based on decades of expertise in water analysis serving our customers, we know you ",
            imageSrc: "https://i0.wp.com/hachfeld.co.ke/wp-content/uploads/2022/03/hachfeld-ph-meter-models-by-hach.jpg?w=600&ssl=1",
        },
        {
            title: "Groundbreaking 360° x 90° Detection™ Technology with TU5200 Laboratory Laser Turbidimeter.",
            description: "The TU5200 laboratory turbidimeter is part of Hach’s TU5 series online and laboratory turbidimeters, designed specifically for the drinking water and other ultra-pure water applications with an identical optic bloc in both the online and laboratory instruments. The optical block of the turbidimeters was designed to let you see more of your sample than any …",
            imageSrc: "https://i0.wp.com/hachfeld.co.ke/wp-content/uploads/2022/03/TU5200-laboratory-turbidimeter-by-hachfeld.jpg?w=600&ssl=1",
        },
        {
            title: "Hach DR6000 uv-vis Spectrophotometer by Hachfeld Limited Kenya",
            description: "HACH DR6000 UV-VIS spectrophotometer cost-effectively combines quality and efficiency to deliver top performance in demanding laboratory and photometry applications. It is the most suitable water quality testing instrument for Beverage, Drinking water, Industrial Water, Pharmaceutical, Power, and Wastewater companies.",
            imageSrc: "https://i0.wp.com/hachfeld.co.ke/wp-content/uploads/2022/03/hach-dr6000-uv-vis-spectrophotometer-by-hachfeld-limited-kenya.jpg?w=600&ssl=1",
        },
  
  
  
  
  
    ];

    const cardsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardContent.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(cardContent.length / cardsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <><div className="flex justify-center items-center"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {currentCards.map((card, index) => (
                <div key={index} className="p-6 bg-white border border-gray-200  shadow max-w-md">
                    <a href="#">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">{card.title}</h5>
                    </a> 
                    <img src={card.imageSrc} alt={card.title} className="mb-3 w-full " />
                    <p className="mb-3 font-normal text-gray-700 text-lg">{card.description}</p>
                   
                    <a href="#" className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-red-700  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                {Array.from({ length: Math.ceil(cardContent.length / cardsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={nextPage} disabled={currentPage === Math.ceil(cardContent.length / cardsPerPage)}>
                    Next
                </button>
            </div>
        </div>
        < Footer />
        </>
        
       
    );
}

export default Resources;
