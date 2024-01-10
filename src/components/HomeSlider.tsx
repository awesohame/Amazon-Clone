import Slider from "./Slider";

const images: {
    url: string;
    title: string;
}[] = [
        { url: 'http://localhost:5173/sliderphone.jpg', title: 'Phone' },
        { url: 'http://localhost:5173/skincare.jpg', title: 'Skincare' },
        { url: 'http://localhost:5173/daily.jpg', title: 'Daily' },
    ]

export default function HomeSlider() {
    return (
        <div className="w-full h-[77vh] px-3 absolute top-[13vh]">
            <Slider slides={images} />
        </div>
    )
}