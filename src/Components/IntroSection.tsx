'use client'


export default function IntroSection() {
    return (
        <section className="flex flex-col sm:flex-row items-center gap-8 px-4 py-8">
            {/* 왼쪽: 일러스트 이미지 */}
            <div className="w-[200px] min-w-[160px]">
                <img
                    src="/MyDevelopePage/images/Pingu.jpg"
                    alt="프로그래머 일러스트"
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-full shadow"
                />
            </div>

            {/* 오른쪽: 텍스트 */}
            <div className="flex flex-col gap-3 text-center sm:text-left">
                <p className="text-base text-gray-800 font-semibold">
                    매일 매일 성장을 꿈꾸는 개발자,
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    <span className="text-purple-600">유승우</span>
                    <span className="text-gray-900">의 포트폴리오입니다.</span>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    어떤 상황에서도 배울 점을 찾아가고 긍정적으로 생각하며<br />
                    항상 성장하는 사람이 되기 위해 노력하고 있습니다!
                </p>
            </div>
        </section>
    )
}