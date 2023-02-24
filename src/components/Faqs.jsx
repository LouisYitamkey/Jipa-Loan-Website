import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
   
    rows: [

        {

            title: "What is the maximum amount I can borrow through the loan app? ",
            content: `The maximum amount that you can borrow through the loan app will depend on your credit score, income, and other factors. The loan app will assess your eligibility for a loan based on these factors and let you know the maximum amount you can borrow.`,
        },
        {
            title: "How long does it take to get approved for a loan through the loan app?.",
            content:
                "The time it takes to get approved for a loan through the loan app varies depending on the lender and the type of loan you're applying for. In some cases, you may be approved instantly, while in others, it may take a few days or even weeks. However, most loan apps provide an estimate of the time it takes to get approved and disbursed, so you can plan accordingly.",
        },
        {
            title: "What are the interest rates and fees associated with loans through the loan app?",
            content: `The maximum amount that you can borrow through the loan app will depend on your credit score, income, and other factors. The loan app will assess your eligibility for a loan based on these factors and let you know the maximum amount you can borrow. `,
        },
        {
            title: "What are the interest rates and fees associated with loans through the loan app?",
            content: <p className="">     "The time it takes to get approved for a loan through the loan app varies depending on the lender and the type of loan you're applying for. In some cases, you may be approved instantly, while in others, it may take a few days or even weeks. However, most loan apps provide an estimate of the time it takes to get approved and disbursed, so you can plan accordingly.",
            </p>,
        },
        {
            title: "How long does it take to get approved for a loan through the loan app?.",
            content:
                "The time it takes to get approved for a loan through the loan app varies depending on the lender and the type of loan you're applying for. In some cases, you may be approved instantly, while in others, it may take a few days or even weeks. However, most loan apps provide an estimate of the time it takes to get approved and disbursed, so you can plan accordingly.",
        },
        {
            title: "How long does it take to get approved for a loan through the loan app?.",
            content:
                "The time it takes to get approved for a loan through the loan app varies depending on the lender and the type of loan you're applying for. In some cases, you may be approved instantly, while in others, it may take a few days or even weeks. However, most loan apps provide an estimate of the time it takes to get approved and disbursed, so you can plan accordingly.",
        },
    ],
};

const styles = {
     bgColor: '#e7e7e7',
    
    // rowContentColor: 'grey',
    // arrowColor: "red",
    // bgColor: 'white',
 
    // titleTextSize: '48px',
    // rowTitleColor: '#080357',
    // rowTitlePaddingLeft: "20px",
    
    // rowTitleTextSize: 'medium',
    // rowContentColor: 'black',
    // rowContentTextSize: '16px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '20px',
    rowContentPaddingLeft: '10px',
    rowContentPaddingRight: '40px',
    // arrowColor: "red",
    //transitionDuration: "1s",
    // timingFunc: "ease"
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};

export default function Faqs() {

    return (
        
        <div className=" md:mx-44 py-2 px-5  md:my-16">
            <h1 className="bg-white font-semibold pb-10 pt-10 rounded-md md:text-3xl text-center">  Questions? Look Here.</h1>
            <Faq
            className=''
          
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}