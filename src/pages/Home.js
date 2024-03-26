import './home.css';
import image1 from './home_image_1.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
// import img4 from './img4.png';
// import img5 from './img5.png';
export default function Home() {
    return (
        <div className="home-container">
            <div className="home-content-1">
                <img src={image1} alt='img1-content-1' className='content-1-img-src' />
                <div class="volunteering-ad-container">
                    <div class="dark-blue">{'>>'} Volunteering</div>
                    <div class="black">for young volunteers working for human development.</div>
                    <br></br>
                    <div class="green">Address:</div>
                    <div class="black">289 Candlewood path, Dix hills, New York 11746</div>
                    <br></br>
                    <div class="green">Phone:</div>
                    <div class="black">(516)-708-3928</div>
                    <br></br>
                    <div class="green">Email:</div>
                    <div class="black underline"><a href="mailto:www.yacs2008@gmail.com">www.yacs2008@gmail.com</a></div>
                </div>

            </div>

            <div class="green-strip">
                <div class="gr-strip-container">
                    <img src={img1} className='gr-strip-img' alt="img-1" />
                    <div>Description for Image 1</div>
                </div>
                <div class="gr-strip-container">
                    <img src={img2} className='gr-strip-img' alt="img-2" />
                    <div>Description for Image 2</div>
                </div>
                <div class="gr-strip-container">
                    <img src={img3} className='gr-strip-img' alt="img-3" />
                    <div>Description for Image 3</div>
                </div>
            </div>

            <div class="bottom-content">
                <div class="bottom-content-container-1">
                    Welcome
                </div> 
                <div class="bottom-content-container-2">
                    Events
                </div> 
                <div class="bottom-content-container-3">
                    Have Questions?
                </div>              
            </div>

        </div>

    );
}