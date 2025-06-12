export default function RecentPostsSection() {
    const posts = [
        {
            title: '[프로그래머스 42584] 주식 가격',
            description: '스택/큐 활용해서 효율적으로 해결한 문제',
            url: 'https://blog.naver.com/monak07_/223896682156',
            date: '2024-06-12',
        },
        {
            title: '[프로그래머스 49994] 방문 길이',
            description: '배열 관련 연습문제',
            url: 'https://blog.naver.com/monak07_/223894378523',
            date: '2024-06-10',
        },
        {
            title: '[프로그래머스 42884 ] 단속 카메라',
            description: '그리디 관련 문제',
            url: 'https://blog.naver.com/monak07_/223888231176',
            date: '2024-06-04',
        },
        {
            title: '[프로그래머스 42895 ] N으로 표현',
            description: '동적 계획법 문제',
            url: 'https://blog.naver.com/monak07_/223880549773',
            date: '2024-06-04',
        },
        // 추가 포스트 ...
    ]

    return (
        <section className="mt-16 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🧠 알고리즘 문제 풀이</h2>

            <ul className="grid sm:grid-cols-2 gap-6">
                {posts.map((post, idx) => (
                    <li
                        key={idx}
                        className="border rounded-lg p-4 shadow hover:shadow-md transition"
                    >
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                            <h3 className="font-semibold text-lg text-purple-600">{post.title}</h3>
                            <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                            <p className="text-sm text-gray-600 mt-1">{post.description}</p>
                            <span className="text-sm text-blue-500 mt-2 inline-block underline">
                                블로그에서 보기 →
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}