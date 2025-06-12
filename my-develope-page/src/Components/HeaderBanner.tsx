'use client'
import Link from 'next/link'

export default function HeaderBanner() {
    return (
        <header className="w-full bg-[#fffaf6] px-6 py-4 shadow">
            <nav className="flex items-center gap-12">
                {/* 왼쪽 로고 */}
                <div className="text-xl font-bold text-gray-800">유승우의 포트폴리오</div>

                {/* 오른쪽 메뉴 */}
                <div className="flex gap-6 text-sm text-gray-600 font-medium">
                    <a href="#profile" className="hover:text-black">프로필</a>
                    <a href="#devlog" className="hover:text-black">개발 일지</a>
                    <a href="#contact" className="hover:text-black">연락처</a>
                </div>
            </nav>
        </header>
    )
}