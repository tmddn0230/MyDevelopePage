export default function SideProfileCard() {
    return (
        <aside className="flex flex-col items-center text-center gap-4">
            <img
                src="/images/profile.jpg"
                alt="프로필 사진"
                className="w-32 h-32 rounded-full border shadow"
            />
            <h2 className="text-lg font-bold text-purple-600">유승우</h2>
            <p className="text-sm text-gray-500">Unity & Unreal 개발자</p>

            <div className="mt-2 text-xs text-gray-400 leading-relaxed">
                <p>📍 INTERACT </p>
            </div>

            <div className="mt-4 space-y-1 text-sm">
                <a href="mailto:you@email.com" className="block text-blue-500 underline">📧 이메일</a>
                <a href="https://github.com/your-id" className="block text-blue-500 underline">🐙 GitHub</a>
                <a href="https://steamcommunity.com/" className="block text-blue-500 underline">🎮 Youtube</a>
            </div>
        </aside>
    )
}