import { Link } from "react-router-dom";

type CardInfo = {
    title: string;
    img: string[];
    imgtext: string[];
    link: string;
    linktext: string;
}[];

export default function Cards(props: { cardInfo: CardInfo }) {
    return (
        <div className="flex flex-wrap justify-evenly">
            {props.cardInfo.map((card, index) => (
                <div className="w-[23%] h-[50vh] bg-white p-2 my-3" key={index}>
                    <p className="font-bold text-xl mx-2">{card.title}</p>
                    {/* <img src={card.img[0]} alt="" />
                    <p>{card.imgtext[0]}</p> */}
                    <div className="flex flex-wrap justify-evenly">
                        {card.img.map((image, index) => (
                            <div className="w-[45%] my-4" key={index}>
                                <img src={image} className="" />
                                <p className="text-xs">{card.imgtext[index]}</p>
                            </div>
                        ))}
                    </div>
                    {/* <a href={card.link}>{card.linktext}</a> */}
                    <Link to={card.link}>{card.linktext}</Link>
                </div>
            ))}
        </div>
    )
}