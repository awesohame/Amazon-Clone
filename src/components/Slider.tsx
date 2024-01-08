import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef, useCallback } from 'react';

type Images = {
    url: string;
    title: string;
}[]

export default function Slider(props: { slides: Images }) {

    const [currIndex, setCurrIndex] = useState(1);

    const slideStyle = {
        height: "100%",
        width: "100%",
        backgroundImage: `url(${props.slides[currIndex].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    let prevIndex = () => {
        let newIndex = currIndex == 0 ? props.slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);
    }

    let nextIndex = useCallback(() => {
        let newIndex = currIndex == props.slides.length - 1 ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
    }, [currIndex, props.slides]);

    const timeRef: any = useRef(null);

    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }
        timeRef.current = setTimeout(() => {
            nextIndex();
        }, 5000)

        return () => clearTimeout(timeRef.current);
    }, [nextIndex])



    console.log(props.slides[currIndex].url);

    return (
        // <div className={`bg-[url('${props.slides[currIndex].url}')] h-full w-full bg-cover`}></div>
        <div className='relative h-full'>
            <div style={slideStyle}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className='text-white text-[45px] absolute top-[20%] mx-4 cursor-pointer'
                    onClick={prevIndex}
                />
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className='text-white text-[45px] absolute top-[20%] right-0 mx-4 cursor-pointer'
                    onClick={nextIndex}
                />
                <div className='bg-gradient-to-b from-transparent from-45% to-white h-full w-full'></div>
            </div>
        </div>

    )
}