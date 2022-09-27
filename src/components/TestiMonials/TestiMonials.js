import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../image/user-one.png';
import './TestiMonials.css'

const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'Elon Musk',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA (Tesla, SpaceX)',
            img: 'https://www.usnews.com/object/image/00000163-652c-d812-a367-eded8f0e0000/180515-10thingselonmusk-editorial.jpg'
        },
        {
            name: 'Jeff Bezos',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA (Amazon)',
            img: 'https://www.success.com/wp-content/uploads/2018/07/JeffBezos_SecretstoSuccess-1.jpg'
        },
        {
            name: 'Bill Gates',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA (Microsoft)',
            img: 'https://storage.googleapis.com/cgiarorg/2021/02/c343f97f-1200x-1-b.jpg'
        },
        {
            name: 'Gautam Adani',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'INDIA (Adani Group)',
            img: 'https://www.adani.com/-/media/Project/Adani/About-Us/BOD2/BOD2/14/Gautam-Adani-23-1-12-187969.jpg'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout:2000,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <h2 className="miniTitle text-center">Testimonial</h2>
                <div className="text-center ">
                    <h4 className="sectionTitle">What Our Clients say about us.</h4>
                </div>
                <p className="text-center para ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={userPic} alt="error 404" />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;