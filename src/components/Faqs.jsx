import React, { useEffect, useState } from 'react'
import Faq from 'react-faq-component'

const data = {
  rows: [
    {
      title: 'What is the maximum amount I can borrow through the loan app? ',
      content: `The maximum amount that you can borrow through the loan app will depend on your credit score, income, and other factors. The loan app will assess your eligibility for a loan based on these factors and let you know the maximum amount you can borrow.`,
    },
    {
      title:
        'How long does it take to get approved for a loan through the loan app?.',
      content:
        "The time it takes to get approved for a loan through the loan app varies depending on the lender and the type of loan you're applying for. In some cases, you may be approved instantly, while in others, it may take a few days or even weeks. However, most loan apps provide an estimate of the time it takes to get approved and disbursed, so you can plan accordingly.",
    },
    {
      title:
        'What are the interest rates and fees associated with loans through the loan app?',
      content: `The maximum amount that you can borrow through the loan app will depend on your credit score, income, and other factors. The loan app will assess your eligibility for a loan based on these factors and let you know the maximum amount you can borrow. `,
    },
    {
      title:
        'What are the interest rates and fees associated with loans through the loan app?',
      content: (
        <p className="">
          {' '}
          "The time it takes to get approved for a loan through the loan app
          varies depending on the lender and the type of loan you're applying
          for. In some cases, you may be approved instantly, while in others, it
          may take a few days or even weeks. However, most loan apps provide an
          estimate of the time it takes to get approved and disbursed, so you
          can plan accordingly.",
        </p>
      ),
    },
    {
      title:
        'How long does it take to get approved for a loan through the loan app?.',
      content:
        "The time it takes to get approved for a loan through the loan app varies depending on the lender and the type of loan you're applying for. In some cases, you may be approved instantly, while in others, it may take a few days or even weeks. However, most loan apps provide an estimate of the time it takes to get approved and disbursed, so you can plan accordingly.",
    },
    {
      title:
        'How long does it take to get approved for a loan through the loan app?.',
      content:
        "The time it takes to get approved for a loan through the loan app varies depending on the lender and the type of loan you're applying for. In some cases, you may be approved instantly, while in others, it may take a few days or even weeks. However, most loan apps provide an estimate of the time it takes to get approved and disbursed, so you can plan accordingly.",
    },
  ],
}

const styles = {
  bgColor: 'white',

  // rowContentColor: 'grey',
  // arrowColor: "red",

  // titleTextSize: '48px',
  rowTitleColor: 'black',
  rowTitlePaddingLeft: '20px',

  rowTitleTextSize: '18px',
  rowContentColor: 'black',
  rowContentTextSize: '18px',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '10px',
  rowContentPaddingRight: '40px',
  arrowColor: '#080357',
  //transitionDuration: "1s",
  // timingFunc: "ease"
}

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
  animate: true,
  arrowIcon: 'V',

  expandIcon: '+',
  collapseIcon: '-',
}

export default function Faqs() {
  return (
    <div className=" md:mx-44 pb-10 md:pb-0  md:py-2 px-5  my-10 md:my-20">
      <div className="flex flex-row justify-center items-center">
        <div>
          <h1 className="text-2xl  md:pb-10 md:text-4xl  pl-6 text-[#080357] font-semibold ">
            {' '}
            Do you have questions
          </h1>
        </div>
        <div>
          <img
            className="mt-6 mb-10 md:mt-0"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEi0lEQVR4nO2ab2gcRRTA383b25m7pK1tLCpYi0UqLSqpaSuN0SRNvYu5axLFmdm7tP6trf8oVFMkBo3GXBs/GBVEEZFSMPabSKgi7ZeSKq1S/1CQGGtAsYIftAqNDXomI9PLtUl6d9nUVDZz+4MHd3u7w7037715b2YBfHx8fHx8fHwuIRUVHeENtR2NkbrOVEO068ONDanBptjuX+7a2P3n3Y0vqeb47uH4nalfY9Gu45G6zvevLHtoG4PkUpjLVFbunBepff7RhmjXgeZ49xmtqBtpjnerUppUDOUYJaI/hJIDdBCYK1RVtS2O1nW+0hTv/iOXgg/e/7p6rn2f2rblzZwGqLipVSs/SSiRX4WDvAI8TiBa92JX1q2zsjn5mnq1Z7868um36tRvwyrLyMhfassDb0xSvqbqWVViJy4wwLikKeEPg0cJNERTfVNns++Dz1U6Pary0bpj71mXv6P2BbVy+XYVDjr5lJ/gDeIx8BqR2o7WqconRE9OpYeHR9TRI9+ptqffzcb6TCXNLFkJXiJenxrMFc+H+wfU6OiY+uLYkGpv61XlNzzpapanFSK/9lJiDCxf9kS6IdJ1TvF4fUqtuvEpdVnJpv+ubL5QQKcevAJFcUr/Ka1w2fx7VcjKP8sU5UlG5McU5T6G4i1GZJ+eUYZidGZGEHvAKzAUe6ZJXEcpcR4PQcvVeceA5FJGxP4ZGGAAvEIYWq5iKIZyrN+HmCVudz9StUWJ/MSlEU6Dt+ALGJE7KYpeinJXyOJrL2YUXfm5NMCYzj9gGuGguLlA4pvw3fGaB8wOOru7XAq/AROhKDrdGCCEohfM4z5GUf7oxgA28nvANCjKXe6KIHFSrxhgEhTFhrN1vhsDELkVTMIGuYKi/N1l8jsIJjEf+CKG8oTLtX8IgC8Cc+DIiPjIZdz/TGHTdWASFMXL7txeDFLg14JJhIO8nKH8Z7yqK9RIfVYKicvBNBiRB10kvAMA8TCYBrPErdNXevI9gIogmAhF0VPI9SkRh3SCBFNhKL7PKCvyLHXJhWAu9VT38vlm30bZBCbDgF9TION/CaYTDjqr8rl/mMh2MJ0ScK7I5wGWJdZAMUCJ6M9hgBNQLFBILmNEHptQ8AwUzexPZB5sLisFvnjSRR+fYmBrMGQ5t9joNFIU0UJHZobBkRH5TPYwdUoR1B8M8nIwmEDmRLhQFyiGjV0NGBEtLnd8jxt55kdzFz/FUxEylKfdGoAS/ggYRuD8/t/0YhO+A0yDovjp/Bb3NC9KEeGAaTCU77j0gL91xwimYQO/nqEccbEZ+jaYCiNOopARKJGHjdwGn4gNLStDKPdSFD8wdM7oqlC/RWYTvt3YbXCf4qTaWgDJhXoX2LblipAl1jBL3kZR1lCUdboLtJHHtOjPmWuyRt+j79XP6Gf1GHPpbZCAbm2ZlVhnoxOzUcZnR3hMjzneNnu3TwhZfO3sKZ1bLvYFzP+FULEbAM6FAF+Xie/ZDAHu/RCASWSToFySSYLOap3gmJWopuisvzAJOuv1b5kk6KzOJEG55FInwX8BXJPmwvnwM2wAAAAASUVORK5CYII="
          ></img>
        </div>
      </div>

      <Faq data={data} styles={styles} config={config} />
    </div>
  )
}
