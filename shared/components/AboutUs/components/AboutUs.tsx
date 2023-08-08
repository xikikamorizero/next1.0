import styled from "../styles/AboutUs.module.css";

type Props = {
    title?: string;
    text?: string;
};

export const AboutUs = () => {
    return <div className={styled.container}>
        <div className={styled.aboutUs}>
        <Block title={'О сайте'} text={'Это проект, является сугубо некоммерческим проектом созданный с целью демонстрации моих навыков веб-разработки ипредставления моего портфолио.'} />
        <Block title={'На основе чего ?'} text={'Сайт был написан на основе открытого rest api: NewsAPI'} />
        </div>   
    </div>;
};

const Block = ({ title, text }: Props) => {
    return (
        <div className={styled.containerInfo}>
            <div className={styled.title}>{title}</div>
            <div className={styled.text}>{text}</div>
        </div>
    );
};
