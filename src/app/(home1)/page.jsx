import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Brand1 from '../Components/Brand/Brand1';
import About1 from '../Components/About/About1';
import HowWork from '../Components/HowWork/HowWork';
import Choose1 from '../Components/Choose/Choose1';
import Feature1 from '../Components/Feature/Feature1';
import Counter1 from '../Components/Counter/Counter1';
import Faq1 from '../Components/Faq/Faq1';
import Testimonial from '../Components/Testimonial/Testimonial';
import Feature2 from '../Components/Feature/Feature2';
import Pricing1 from '../Components/Pricing/Pricing1';
import Cta1 from '../Components/Cta/Cta1';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
    return (
        <div>
            <HeroBanner1
                subtitle="<span>News!</span>Let’s Tell Your Story Visually"
                title="Hi, I'm Utkarsh. I Bring Stories to Life with Motion & Design"
                content="Making your brand look so good, even your competitors will cry about it."
                btnname="Get Started Now"
                btnurl="/contact"
                btntwo="Let's Collaborate"
                btn2url="/about"
                cusimg="/assets/images/hero/03.png"
                cusnumber="2,291"
                cuscontent="Happy Customers"
                rating="4.8/5"
                ratingcon="Rating"
                img="/assets/images/hero/03.png"
            ></HeroBanner1>
            <Brand1></Brand1>
            <About1
                img1="/assets/images/about/aboutThumb1_1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About Our Services"
                title=" Design, I Animate, I Make Pixels Behave! 🎨✨"
                content="Websites. Videos. Animations. Graphic Designs. I do it all—so your brand looks nothing less than epic!"
                FeatureList={[
                    "Websites", 
                    "Videos",
                    "Animations",
                    "Graphic Designs",
                    "YouTube thumbnail",
                    ]}
                btnname="Let’s Work Together"
                btnurl="/about"
            ></About1>
            <HowWork></HowWork>
            <Choose1
                subtitle="App Advantage"
                title="Get Benefit By Using Trending Apps"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
                FeatureList={[
                    "Friendly Design",
                    "SEO Optimized",
                ]}
                FeatureList2={[
                    "Cloud Storage",
                    "Strong Security",
                ]}
                btnname="Download App"
                btnurl="/about"
            ></Choose1>
            <Feature1></Feature1>
            <Counter1></Counter1>
            <Faq1></Faq1>
            <Testimonial></Testimonial>
            <Feature2></Feature2>
            <Pricing1></Pricing1>
            <Cta1
                subtitle="Our App"
                title="Download our app and start your free trail to get started today!"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised"
                btnurl1="https://play.google.com/store"
                btnurl2="https://www.apple.com/store"
                img="/assets/images/cta/ctaThumb1_1.png"
            ></Cta1>
            <Blog1></Blog1>
        </div>
    );
};

export default page;