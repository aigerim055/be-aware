import React from 'react';
import Post from "../../components/post";

const HomePage = () => {
    return (
        <section className={'post-section'}>
            <div className={'container'}>
                <div className={'home-page'}>
                    {
                        posts.map((post, idx) => (
                            <Post post={post} idx={idx}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HomePage;

const posts = [
    {
        'id': 1,
        'title': 'Подача питьевой воды в жилой массив «Арча-Бешик» будет подаваться по графику',
        'subtitle': 'Как сообщают в производственно-эксплуатационном управлении «Бишкекводоканал», питьевая вода в жилой массив «Арча-Бешик» будет подаваться по определённому графику.',
        'user': 'Мэрия города Бишкек',
        'date': '14.06.2023',
        'views': 1000,
        'likes': 56,
        'comments': 2,
        'is_favorite': false,
        'img': 'https://www.gorod.dp.ua/pic/news/newsimages/0119/155236_large.jpg'
    },
    {
        'id': 2,
        'title': 'Подача питьевой воды в жилой массив «Арча-Бешик» будет подаваться по графику',
        'subtitle': 'Как сообщают в производственно-эксплуатационном управлении «Бишкекводоканал», питьевая вода в жилой массив «Арча-Бешик» будет подаваться по определённому графику.',
        'user': 'Мэрия города Бишкек',
        'date': '14.06.2023',
        'views': 1000,
        'likes': 56,
        'comments': 2,
        'is_favorite': false,
        'img': 'https://www.gorod.dp.ua/pic/news/newsimages/0119/155236_large.jpg'
    },
    {
        'id': 3,
        'title': 'Подача питьевой воды в жилой массив «Арча-Бешик» будет подаваться по графику',
        'subtitle': 'Как сообщают в производственно-эксплуатационном управлении «Бишкекводоканал», питьевая вода в жилой массив «Арча-Бешик» будет подаваться по определённому графику.',
        'user': 'Мэрия города Бишкек',
        'date': '14.06.2023',
        'views': 1000,
        'likes': 56,
        'comments': 2,
        'is_favorite': false,
        'img': 'https://www.gorod.dp.ua/pic/news/newsimages/0119/155236_large.jpg'
    }
]