import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-685 mx-auto wow fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle="Why using our app"
                            Title="Our app is great for individuals, startups and enterprises"
                        ></SectionTitle>
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="Creative & Strategic Thinker"
                                        content="I bring ideas to life with a perfect blend of creativity and strategy, ensuring visually compelling designs that engage your audience."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_2.svg"
                                        title="Expert in Video Editing & Motion Graphicsr"
                                        content="With experience in Adobe Premiere, After Effects, Photoshop, and Illustrator, I create high-quality visuals that tell powerful stories."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Fast Delivery & Attention to Detail"
                                        content="I prioritize speed without compromising quality, ensuring polished, professional content delivered on time."
                                    ></FeatureCard>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                                    <div className="main-thumb wow bounceInUp" data-wow-delay=".6s">
                                        <Image src="/assets/images/wcu/wcuThumb1_1.png" alt="img" width={376} height={342} />
                                    </div>
                                    <div className="shape"><Image src="/assets/images/shape/wcuThumbShape1_1.png" alt="img" width={376} height={377} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title="Brand-Focused Approach"
                                        content="I don’t just edit videos—I help brands establish a strong visual identity that leaves a lasting impression."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_5.svg"
                                        title="Problem-Solver Mindset"
                                        content="I tackle creative challenges head-on, delivering innovative solutions that align with brand goals."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_6.svg"
                                        title="Collaborative & Easy to Work With"
                                        content="I believe in open communication and teamwork, making the creative process smooth and enjoyable for clients."
                                    ></FeatureCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;